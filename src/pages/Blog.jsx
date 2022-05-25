import React from "react";
import FilterProductByName from "./Blog/FilterProductByName";
import NotSetStateDirect from "./Blog/NotSetStateDirect";
import PerformanceReactApp from "./Blog/PerformanceReactApp";
import PrototypicalInheritance from "./Blog/PrototypicalInheritance";
import StateManagementReactApp from "./Blog/StateManagementReactApp";
import UnitTestReactApp from "./Blog/UnitTestReactApp";

const Blog = () => {
  return (
    <section>
      <header>
        <h2 className="text-center my-8 text-4xl font-semibold">
          React Concepts
        </h2>
        <div className="flex flex-col gap-6 xl:gap-12 max-w-4xl mx-auto">
          <PerformanceReactApp />
          <UnitTestReactApp />
          <StateManagementReactApp />
          <NotSetStateDirect />
          <PrototypicalInheritance />
          <FilterProductByName />
        </div>
      </header>
    </section>
  );
};

export default Blog;
