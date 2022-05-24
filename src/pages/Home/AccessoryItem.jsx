import React from "react";
import { useNavigate } from "react-router-dom";

const AccessoryItem = ({
  _id,
  name,
  image,
  description,
  min_order,
  quantity,
  price,
}) => {
  const navigate = useNavigate();
  const handleClickOrderNow = (id) => navigate(`/dashboard/purchase/${id}`);

  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title flex-col items-start" title={name}>
          <div className="flex justify-between w-full">
            <div class="badge badge-secondary -mb-2">{`${quantity}pcs`}</div>
            <div class="badge badge-outline">{`Min Order ${min_order}`}</div>
          </div>
          {name.length > 45 ? name.slice(0, 45) + "..." : name}
        </h2>
        <p>
          {description.length > 120
            ? description.slice(0, 120) + "...."
            : description}
        </p>
        <div class="card-actions justify-between items-center mt-4">
          <div class="badge badge-outline">{`Unit Price ${price}`}</div>
          <button
            className="btn btn-outline btn-secondary self-start"
            onClick={() => handleClickOrderNow(_id)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessoryItem;
