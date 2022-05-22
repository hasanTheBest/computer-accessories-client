import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Hubble_space_telescope.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-secondary-focus">
            404, Not Found!
          </h1>
          <p className="mb-5">
            The page/content you are looking for is not available or out of
            scope. try exploring another page/content
          </p>
          <Link className="btn btn-primary normal-case" to="/home">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
