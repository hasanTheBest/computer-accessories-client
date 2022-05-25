import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const ManageOrderRow = ({
  _id: orderId,
  name: buyerName,
  email: buyerEmail,
  quantity,
  purchasedItem,
  refetch,
}) => {
  const { name, image, price } = purchasedItem;

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

  const handleClickShipOrder = () => {
    console.log("handleClickShipOrder");
    // ref.current.addEventListener("click", (e) => {
    //   e.stopImmediatePropagation();
    //   // mutate({});
    // });
  };

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
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </div>
            <div class="text-sm opacity-50">
              Ordered: {quantity}pcs, Unit price: {price}
            </div>
          </div>
        </div>
      </td>
      <td>
        {buyerName}
        <br />
        <span class="badge badge-ghost badge-sm">{buyerEmail}</span>
      </td>
      <td>
        <button class="btn btn-info btn-outline btn-xs">unpaid</button>
      </td>
      <th>
        <button
          class={`btn btn-secondary btn-xs ${isLoading ? "loading" : ""}`}
          onClick={handleClickShipOrder}
        >
          Pay
        </button>
      </th>
    </tr>
  );
};

export default ManageOrderRow;
