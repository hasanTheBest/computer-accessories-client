import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="max-w-screen-md mx-auto">
      <div className="text-center p-6 mb-12">
        <h2 className="text-4xl font-semibold">Mahmudul Hasan</h2>
        <p>mhasan.send@gmail.com</p>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-8">
          <span className="text-3xl text-accent-focus">Technologies</span> - I
          use
        </h3>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Frontend */}
          <div class="card bg-base-100 shadow-xl w-full">
            <div class="card-body">
              <h2 class="card-title">Frontend</h2>
              <ul className="menu">
                <li>JavaScript</li>
                <li>React</li>
                <li>React Redux</li>
                <li>Material UI</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap5</li>
                <li>Tailwind CSS</li>
                <li>Daisy UI</li>
              </ul>
            </div>
          </div>

          {/* Backend */}
          <div class="card bg-base-100 shadow-xl w-full">
            <div class="card-body">
              <h2 class="card-title">Backend</h2>
              <ul className="menu">
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>Nodemon</li>
                <li>NoSQL</li>
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div class="card bg-base-100 shadow-xl w-full">
            <div class="card-body">
              <h2 class="card-title">Tools</h2>
              <ul className="menu">
                <li>React Router</li>
                <li>Styled Components</li>
                <li>Firebase - auth and hosting</li>
                <li>React Query</li>
                <li>Rect Hook form</li>
                <li>React Formik</li>
                <li>Yup</li>
                <li>SASS/SCSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-8">
          <span className="text-3xl text-accent-focus">Projects</span> - I have
          made
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Project 1 recipe explorer */}
          <div class="indicator w-full">
            <div class="indicator-item indicator-bottom">
              <a
                class="btn btn-primary"
                href="https://try-recipes.netlify.app/"
              >
                Explore
              </a>
            </div>
            <div class="card border">
              <div class="card-body">
                <h2 class="card-title">Recipe Explorer</h2>
                <p>
                  A recipe explorer app, built with ReactJS, Material UI and
                  React Router
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 Al quran */}
          <div class="indicator w-full">
            <div class="indicator-item indicator-bottom">
              <a
                class="btn btn-primary"
                href="https://hasanthebest.github.io/al-quran-js/"
              >
                Explore
              </a>
            </div>
            <div class="card border">
              <div class="card-body">
                <h2 class="card-title">Al Quran</h2>
                <p>
                  Read and listen Al Quran verse by verse with translation and
                  recitation
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 Al quran */}
          <div class="indicator w-full">
            <div class="indicator-item indicator-bottom">
              <a
                class="btn btn-primary"
                href="https://hasanthebest.github.io/fruity-facts/"
              >
                Explore
              </a>
            </div>
            <div class="card border">
              <div class="card-body">
                <h2 class="card-title">Fruity Facts</h2>
                <p>The facts and nutrition value of the fruits</p>
              </div>
            </div>
          </div>

          {/* Project 4 Al quran */}
          <div class="indicator w-full">
            <div class="indicator-item indicator-bottom">
              <a
                class="btn btn-primary"
                href="https://hasanthebest.github.io/js-wall-clock/"
              >
                Explore
              </a>
            </div>
            <div class="card border">
              <div class="card-body">
                <h2 class="card-title">JS Wall Clock</h2>
                <p>
                  HTML5 structured, CSS3 styled, JS powered full function analog
                  wall Clock
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
