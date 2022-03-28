import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import "./NavNew.css";

function NavNew() {
  return (
    <div className="nav-new">
      <div className="logo-navnew">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navnew-links">
        <ul className="menu-icon">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/search">
            <li>Search</li>
          </Link>
          <Link to="/map">
            <li>Map</li>
          </Link>
          <Link to="/favorites">
            <li>Favorites</li>
          </Link>
          <Link to="/settings">
            <li>Settings</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavNew;
