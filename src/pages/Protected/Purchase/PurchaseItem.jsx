import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Components/Loading";
import Error from "../../../Components/Error";

export const PurchaseItem = ({ id }) => {
  const {
    isLoading,
    isError,
    error: queryErr,
    data: queryData,
  } = useQuery(["purchaseById", id], () => axios.get("accessories/" + id));

  // React query state
  if (isError) {
    return <Error msg={queryErr.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const {
    data: { _id, image, name, description, quantity, min_order, price },
  } = queryData;

  return (
    <div class="card bg-base-100 shadow-xl w-full lg:w-1/2">
      <figure className="w-full">
        <img src={image} alt={name} />
      </figure>

      <div class="card-body w-full">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <div class="overflow-x-auto">
          <table class="table w-full table-compact">
            <tbody>
              <tr>
                <th>SKU</th>
                <td>{_id.slice(0, 8)}</td>
              </tr>
              <tr>
                <th>Min Order</th>
                <td>{min_order}</td>
              </tr>
              <tr>
                <th>Available Quantity</th>
                <td>{quantity}</td>
              </tr>
              <tr>
                <th>Unit Price</th>
                <td>{price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
