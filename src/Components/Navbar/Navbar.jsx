import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__item" to="/">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__item" to="/about">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__item" to="/ai">
            Music Player
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
