import React from "react";

function HeaderContent() {
  return (
    <>
      <main id="main" className="grid-container grid-container--home">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase">
            So, you want to travel to
            <span className="d-block fs-900 ff-serif text-white">Space</span>
          </h1>
          <p>
            Let's face it; if you want to go to space, you might as wll
            genuinely to to outer space and not hover kind of on the edge of it.
            well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a
            href="#"
            className="large-button uppercase ff-serif text-dark bg-white"
          >
            Explore
          </a>
        </div>
      </main>
    </>
  );
}

export default HeaderContent;
