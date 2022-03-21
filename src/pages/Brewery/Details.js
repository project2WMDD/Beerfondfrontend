import React from "react";
// import { useState } from 'react'
import { Link } from "react-router-dom";
import NavNew from "../../components/NavNew";
// import About from './About'
import Footer from "../../components/Footer";

const Details = () => {
  //jsx
  return (
    <div>
      <div className="">
        <div>
          <p>33 ACRES BREWING</p>
          <img src={""} alt="Acres" />
          <Link to="/reservation">
            <button type="submit">Book</button>
          </Link>
        </div>
        <div className="btn-book">
          <div className="btn-about">
            <button>About</button>
          </div>
          <div className="btn-menu">
            <button>Menu</button>
          </div>
          <div className="btn-location">
            <button>Location</button>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
