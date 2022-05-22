import React from "react";

const Loading = ({ msg }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-xl font-bold text-error">{msg}</h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
