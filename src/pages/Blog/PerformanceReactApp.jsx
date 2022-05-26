import React from "react";

const PerformanceReactApp = () => {
  return (
    <article className="card w-full bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title capitalize">
          Improve performance of React APP
        </h2>
        <p className="mb-4">
          React is clever and mature for manipulating DOM. We can make the React
          app more fast and produce maximum performance by considering some
          techniques. If our application renders long list of data it is
          recommend to use a technique known as "windowing/virtualizing". It
          reduces re-render of long list at time. It render the subset of the
          data and keep component tree light.
        </p>
        <p>
          The most common way of performance optimization of react app keeping
          component local where necessary. We can use memoizing technique to
          prevent unnecessary re-renders. Besides We can improve performance by
          applying code-spiltting and using lazy loading images in React.
        </p>
      </div>
    </article>
  );
};

export default PerformanceReactApp;
