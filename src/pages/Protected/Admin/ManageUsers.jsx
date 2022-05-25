import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Components/Loading";
import Error from "../../../Components/Error";
import ManageUserRow from "./ManageUsers/ManageUserRow";

const ManageUsers = () => {
  const {
    isError,
    isLoading,
    refetch,
    error: queryErr,
    data: queryData,
  } = useQuery("userAll", () => axios.get("user/all"));

  // React query state
  if (isError) {
    return <Error msg={queryErr.message} />;
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
                <th>Name</th>
                <th>Contact</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {queryData.data.map((user) => (
                <ManageUserRow key={user._id} user={user} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageUsers;
