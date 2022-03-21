import React from "react";
import { MenuItems } from "./MenuItem";
import logo from "../images/logo1.png";
import "./Navbar.css";
import { Link, Router } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-logo">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className="menu-icon">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
