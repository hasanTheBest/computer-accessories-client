import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";
import { useOutletContext } from "react-router-dom";
import MyOrderRow from "./MyOrders/MyOrderRow";
import { Portal } from "react-portal";

const MyOrders = () => {
  // User
  const user = useOutletContext();
  const confirmRef = useRef("");

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
    <>
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
                <MyOrderRow
                  key={item._id}
                  {...item}
                  refetch={refetch}
                  ref={confirmRef}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Portal>
        <input
          type="checkbox"
          id="remove-order-confirm-modal"
          class="modal-toggle"
        />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Are you sure!</h3>
            <p class="py-4">
              you want to remove the item from your purchase list. We can add to
              the list purchasing again. We appreciate your decision. Thank you
            </p>
            <div class="modal-action">
              <label for="remove-order-confirm-modal" class="btn">
                Cancel
              </label>
              <label
                for="remove-order-confirm-modal"
                class="btn btn-error"
                ref={confirmRef}
              >
                Confirm
              </label>
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};

export default MyOrders;
