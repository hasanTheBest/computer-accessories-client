import React from "react";

const NotSetStateDirect = () => {
  return (
    <article className="card w-full bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title capitalize">Direct State Update</h2>
        <p className="mb-4">
          We should never update the state directly. If we change/update state
          directly we loose control of the state across all the components. We
          update state directly and call setState afterward will just replace
          the update we made. When one directly modify the state, it does not
          change the this.state immediately, instead, it creates a pending state
          transition, and accessing it after calling this method will only
          return the present value.
        </p>
        <p>
          Mutating state directly can produce odd bugs, and components are hard
          to control and optimize. React has three lifecycle phases, mounting
          phases, updating and unmounting. Mutating state directly make
          disturbance to the these phase and react app becomes unmanageable and
          unpredictable.
        </p>
      </div>
    </article>
  );
};

export default NotSetStateDirect;
