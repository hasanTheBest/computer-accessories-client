import React from "react";

const ReviewItem = ({
  displayName: name,
  photoURL: image,
  review,
  ratings,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl pb-4">
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold text-accent uppercase">{`${ratings} out of 5`}</h2>
        <p>{review}</p>
      </div>
      <div className="px-4 lg:px-8 flex items-center justify-center gap-4">
        {image ? (
          <img className="mask mask-hexagon" src={image} alt={name} />
        ) : (
          <div className="mask mask-hexagon w-24 h-24 bg-accent-focus flex items-center justify-center text-5xl font-bold">
            {name.slice(0, 1)}
          </div>
        )}
        <h4 className="text-xl font-semibold">{name}</h4>
      </div>
    </div>
  );
};

export default ReviewItem;
