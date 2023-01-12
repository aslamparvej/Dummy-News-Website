import React from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul>
        <li>
          <Link to="/" onClick={()=> setOpenMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to="/sports" onClick={()=> setOpenMenu(false)}>Sports</Link>
        </li>
        <li>
          <Link to="/technology" onClick={()=> setOpenMenu(false)}>Technology</Link>
        </li>
        <li>
          <Link to="/stockmarket" onClick={()=> setOpenMenu(false)}>Stock Market</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
