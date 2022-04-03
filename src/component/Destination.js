import React from "react";
import moon from "./destination/image-moon.png";

function Destination() {
  return (
    <>
      <main
        id="main"
        className="grid-container grid-container--Destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>
        <img src={moon} alt="" />
        <div className="tab-list underline-indicators flex ">
          <button
            aria-selected="true"
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 mt-0"
          >
            Moon
          </button>
          <button
            aria-selected="false"
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 mt-0"
          >
            Mars
          </button>
          <button
            aria-selected="false"
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 mt-0"
          >
            Europa
          </button>
          <button
            aria-selected="false"
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 mt-0"
          >
            Titan
          </button>
        </div>
        <article className="destination-info">
          <h2>Moon</h2>
          <p>
            See our planet as you've never seen it before. A perfect relaxing
            trip away regain perspective and come back refreshed. While you're
            there, take in some by visiting the Luna 2 and Apollo 11 landing
            sites.
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif fs-500 uppercase">384,400 km</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif fs-500 uppercase">3 days</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Destination;
