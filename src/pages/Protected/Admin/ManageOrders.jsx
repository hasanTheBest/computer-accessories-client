import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ManageOrderRow from "./ManageOrders/ManageOrderRow";
import Loading from "../../../Components/Loading";
import Error from "../../../Components/Error";

const ManageOrders = () => {
  const {
    isLoading,
    isError,
    refetch,
    error: queryErr,
    data: queryData,
  } = useQuery("ordersByUsers", () => axios.get("user/purchases"));

  // Query state
  if (isError) {
    return <Error msg={queryErr?.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Client</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {queryData.data.map((item) => (
                <ManageOrderRow key={item._id} {...item} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageOrders;
