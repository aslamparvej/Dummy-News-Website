import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="header">
      <h1 className="logo">newsBazar</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/stockmarket">Stock Market</Link></li>
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
