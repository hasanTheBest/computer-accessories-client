import axios from "axios";
import React, { forwardRef } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const ProductRow = forwardRef(
  (
    {
      _id: ProductId,
      description,
      quantity,
      name,
      image,
      price,
      min_order,
      refetch,
    },
    ref
  ) => {
    const {
      isError,
      isSuccess,
      isLoading,
      mutate,
      error: queryErr,
      data: queryData,
    } = useMutation((payload) => {
      return axios.delete("/accessories/" + ProductId, payload);
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
                {name.length > 20 ? name.slice(0, 20) + "..." : name}
              </div>
              <div className="text-sm opacity-50">
                Stock: {quantity}, Unit price: {price}$
              </div>
            </div>
          </div>
        </td>
        <td style={{ whiteSpace: "normal" }}>
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </td>
        <td>
          <button className="btn btn-info btn-outline btn-xs">Update</button>
        </td>
        <th>
          <label
            className={`btn btn-secondary btn-outline btn-xs ${
              isLoading ? "loading" : ""
            }`}
            onClick={handleClickRemoveOrder}
            htmlFor="remove-product-confirm-modal"
          >
            Delete
          </label>
        </th>
      </tr>
    );
  }
);

export default ProductRow;
