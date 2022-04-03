import React, { useState } from "react";
import bg2 from "../component/menu/icon-hamburger.svg";
import bg3 from "../component/menu/icon-close.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [btn, setBtn] = useState("0%");
  const [bg1, setBg1] = useState(bg3);
  const position = { transform: `translatex(${btn})` };
  const bg = { backgroundImage: `url(${bg1})` };
  const Mune = () => {
    if (btn === "100%") {
      setBtn("0%");
    } else if (btn === "0%") {
      setBtn("100%");
    } else {
      setBtn("0%");
    }
    if (bg1 === bg2) {
      setBg1(bg3);
    } else {
      setBg1(bg2);
    }
  };

  // const bgMenu = () => {};

  return (
    <>
      <header className="primary-heanding flex">
        {/* <a href="#main">Skip to content</a> */}
        <div>
          <img
            src="../assets\shared/logo.svg"
            alt="space tourism logo"
            className="logo"
          />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={Mune}
          style={bg}
        >
          <span className="sr-only">menu</span>
        </button>
        <nav>
          <ul
            style={position}
            id="primary-navigation"
            className="primary-navigation underline-indicators flex"
          >
            <li className="active">
              <Link
                to="/"
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span aria-hidden="true">00</span> Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span aria-hidden="true">01</span> Destination
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span aria-hidden="true">02</span> Crow
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span aria-hidden="true">03</span> Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
