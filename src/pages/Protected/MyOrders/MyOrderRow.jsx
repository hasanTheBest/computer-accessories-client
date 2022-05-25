import axios from "axios";
import React, { forwardRef } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const MyOrderRow = forwardRef(
  ({ _id: orderId, quantity, purchasedItem, refetch }, ref) => {
    const { name, image, min_order, price } = purchasedItem;

    const {
      isError,
      isSuccess,
      isLoading,
      mutate,
      error: queryErr,
      data: queryData,
    } = useMutation((payload) => {
      return axios.delete("/user/purchases/" + orderId, payload);
    });

    // React query state
    if (isError) {
      toast.error(queryErr.message);
    }

    if (isSuccess) {
      const { data } = queryData;
      if (data.deletedCount > 0) {
        toast.success("Successfully removed a order");
        refetch();
      }
    }

    const handleClickRemoveOrder = () => {
      ref.current.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        mutate({});
      });
    };

    return (
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img src={image} alt={name} title={name} />
              </div>
            </div>
            <div>
              <div className="font-bold" title={name}>
                {name.slice(0, 25) + "..."}{" "}
              </div>
              <div className="text-sm opacity-50">
                Min Order: {min_order}, Unit price: {price}
              </div>
            </div>
          </div>
        </td>
        <td>
          {price + "$ * " + quantity + "pcs = " + price * quantity + "$"}
          <br />
          <span className="badge badge-ghost badge-sm">
            Unit Price, Purchased quantity
          </span>
        </td>
        <td>
          <button className="btn btn-info btn-outline btn-xs">unpaid</button>
        </td>
        <th>
          <label
            className={`btn btn-secondary btn-outline btn-xs ${
              isLoading ? "loading" : ""
            }`}
            onClick={handleClickRemoveOrder}
            htmlFor="remove-order-confirm-modal"
          >
            Remove
          </label>
        </th>
      </tr>
    );
  }
);

export default MyOrderRow;
