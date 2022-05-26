import React from "react";

const UnitTestReactApp = () => {
  return (
    <article class="card w-full bg-base-100 shadow">
      <div class="card-body">
        <h2 class="card-title capitalize">
          Necessity and importance of Unit Test in React App
        </h2>
        <p className="mb-4">
          Unit Test is the process of software development where each individual
          bunch of the code are tested, which is called unit. Unit can be a
          function, method, procedure, module, or object. The purpose is to
          validate that each unit of the software code performs as expected.
          This testing methodology is done during the development process by the
          software developers and sometimes QA staff. The main purpose of unit
          testing is to isolate written code to test and determine the bugs,
          responsible for feature break.
        </p>

        <p>
          The advantages of unit testing are finding problem at early state that
          prevent encountering compound error. A problem detected at earlier
          stage or development environment cost lighter than production
          environment. Developer can easily debug, make change quickly to code
          base and migrate to new project.
        </p>
      </div>
    </article>
  );
};

export default UnitTestReactApp;
