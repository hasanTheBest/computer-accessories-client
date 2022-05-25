import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const ManageUserRow = ({ user, refetch }) => {
  const {
    isError,
    isSuccess,
    isLoading,
    mutate,
    error: queryErr,
    data: queryData,
  } = useMutation((payload) => {
    return axios.put("/user/makeAdmin", payload);
  });

  // React query state
  if (isError) {
    toast.error(queryErr.message);
  }

  if (isSuccess) {
    if (queryData.data.modifiedCount > 0) {
      toast.success(`Successfully make the ${user.name || user.email} Admin`);
      refetch();
    }
  }

  const handleClickMakeAdmin = (id) => {
    mutate({ id });
  };

  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-16 h-16">
              {user?.image ? (
                <img
                  class="mask mask-hexagon"
                  src={user?.image}
                  alt={user.name}
                />
              ) : (
                <div className="mask mask-hexagon w-16 h-16 bg-accent-focus flex items-center justify-center text-2xl font-semibold">
                  {user.name.slice(0, 1)}
                </div>
              )}
            </div>
          </div>
          <div>
            <div class="font-bold" title={user.name}>
              {user.name}
            </div>
            <div class="text-sm opacity-50">{user.email}</div>
          </div>
        </div>
      </td>
      <td>
        {user?.phone}
        <br />
        <span class="badge badge-ghost badge-sm">{user?.designation}</span>
      </td>
      <th>
        {user?.role !== "admin" ? (
          <button
            class={`btn btn-accent btn-outline btn-xs ${
              isLoading ? "loading" : ""
            }`}
            onClick={() => handleClickMakeAdmin(user._id)}
          >
            Make Admin
          </button>
        ) : (
          <button class="btn btn-xs btn-disabled">Already Admin</button>
        )}
      </th>
    </tr>
  );
};

export default ManageUserRow;
