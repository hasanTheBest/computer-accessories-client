import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";
import { useOutletContext } from "react-router-dom";
import MyOrderRow from "./MyOrders/MyOrderRow";

const MyOrders = () => {
  // User
  const user = useOutletContext();

  const {
    isLoading,
    isError,
    refetch,
    error: queryErr,
    data: queryData,
  } = useQuery(["ordersByUser", user?.email], () =>
    axios.get("user/purchases/" + user?.email)
  );

  // Query state
  if (isError) {
    return <Error msg={queryErr?.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {queryData.data.map((item) => (
              <MyOrderRow key={item._id} {...item} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
