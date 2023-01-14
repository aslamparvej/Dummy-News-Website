import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="header">
      <h1 className="logo">newsBazar</h1>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/sports">
            <li>Sports</li>
          </Link>
          <Link to="/technology">
            <li>Technology</li>
          </Link>
          <Link to="/stockmarket">
            <li>Stock Market</li>
          </Link>
        </ul>
      </nav>
      <div
        className={"hamburger " + (openMenu && "active")}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  );
};

export default Header;
