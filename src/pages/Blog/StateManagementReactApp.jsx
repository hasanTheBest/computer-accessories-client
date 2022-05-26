import React from "react";

const StateManagementReactApp = () => {
  return (
    <article className="card w-full bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title capitalize">State management of React App</h2>
        <p className="mb-4">
          In React environment state and props are the main terms to hold and
          carry data component to component. State is just a fancy term for a JS
          non-primitive data type, specially object. React components have a
          built-in state object. The state wrapped data where we store assets
          that are persistent between component renderings.
        </p>

        <p>
          State are usually changed by user interaction to the application.
          React detect the change to the previous form and manipulate the DOMs
          consuming the state data. In light app internal state management of
          React performs well but in enterprise level application there are
          multiple components needs to update at a time. In this case we need to
          consider third party state manage library like Redux, MobX ets. The
          state management tools help us to maintain usability, maintainability,
          scalability, testability and reusability.
        </p>
      </div>
    </article>
  );
};

export default StateManagementReactApp;
