import React from "react";

const PrototypicalInheritance = () => {
  return (
    <article class="card w-full bg-base-100 shadow">
      <div class="card-body">
        <h2 class="card-title capitalize">
          Prototypical Inheritance in Javascript
        </h2>
        <p className="mb-4">
          Simply say, prototypical inheritance refers to the ability to access
          object properties from another object. We use a JavaScript prototype
          to add new properties and methods to an existing object constructor.
          JavaScript does not have "methods" in the form that class-based
          languages define them. In JavaScript, any function can be added to an
          object in the form of a property. An inherited function acts just as
          any other property, including property shadowing as shown above (in
          this case, a form of method overriding). JavaScript objects are
          dynamic "bags" of properties (referred to as own properties).
          JavaScript objects have a link to a prototype object.
        </p>
        <p className="mb-4">
          The building block of JS is object. JavaScript does not have "methods"
          in the form that class-based languages define them. In JavaScript, any
          function can be added to an object in the form of a property. When
          trying to access a property of an object, the property will not only
          be sought on the object but on the prototype of the object, the
          prototype of the prototype, and so on until either a property with a
          matching name is found or the end of the prototype chain is reached.
          An inherited function acts just as any other property, including
          property shadowing as shown above (in this case, a form of method
          overriding).
        </p>
      </div>
    </article>
  );
};

export default PrototypicalInheritance;
