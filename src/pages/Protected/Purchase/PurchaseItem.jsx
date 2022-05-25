import React from "react";

export const PurchaseItem = ({ itemInfo }) => {
  const { _id, image, name, description, quantity, min_order, price } =
    itemInfo;

  return (
    <div className="card bg-base-100 shadow-xl w-full lg:w-1/2">
      <figure className="w-full">
        <img src={image} alt={name} />
      </figure>

      <div className="card-body w-full">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="overflow-x-auto">
          <table className="table w-full table-compact">
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
