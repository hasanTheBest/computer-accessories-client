import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const MyOrderRow = ({ _id: orderId, quantity, purchasedItem, refetch }) => {
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

  const handleClickRemoveOrder = () => mutate({});

  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-16 h-16">
              <img src={image} alt={name} title={name} />
            </div>
          </div>
          <div>
            <div class="font-bold" title={name}>
              {name.slice(0, 25) + "..."}{" "}
            </div>
            <div class="text-sm opacity-50">
              Min Order: {min_order}, Unit price: {price}
            </div>
          </div>
        </div>
      </td>
      <td>
        {price + "$ * " + quantity + "pcs = " + price * quantity + "$"}
        <br />
        <span class="badge badge-ghost badge-sm">
          Unit Price, Purchased quantity
        </span>
      </td>
      <td>
        <button class="btn btn-info btn-outline btn-xs">unpaid</button>
      </td>
      <th>
        <button
          class={`btn btn-secondary btn-outline btn-xs ${
            isLoading ? "loading" : ""
          }`}
          onClick={() => handleClickRemoveOrder(orderId)}
        >
          Remove
        </button>
      </th>
    </tr>
  );
};

export default MyOrderRow;
