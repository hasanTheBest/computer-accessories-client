import React from "react";

const AccessoryItem = ({
  name,
  image,
  description,
  min_order,
  quantity,
  price,
}) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title flex-col items-start">
          <div className="flex justify-between w-full">
            <div class="badge badge-secondary -mb-2">{`${quantity}pcs`}</div>
            <div class="badge badge-outline">{`Min Order ${min_order}`}</div>
          </div>
          {name.slice(0, 45) + "..."}
        </h2>
        <p>{description.slice(0, 120) + "...."}</p>
        <div class="card-actions justify-between items-center">
          <div class="badge badge-outline">{`Unit Price ${price}`}</div>
          <button className="btn btn-outline btn-secondary self-start">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessoryItem;
