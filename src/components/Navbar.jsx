import React from "react";
import { MenuItems } from "./MenuItem";
import logo from "../images/logo1.png";
import styles from "../components/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-logo">
          <img src={logo} alt="logo" />
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
