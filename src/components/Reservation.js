import React from "react";
import Footer from "./Footer";
// import NavNew from "./NavNew";
import acres from "../images/33Acres7-1024x768.jpg";
import { Link } from "react-router-dom";
import "./Reservation.css";
function Reservation() {
  return (
    <div>
      {/* <NavNew /> */}
      <div className="reserve-container">
        <div className="reserve-img">
          <img src={acres} alt="Acres" />
        </div>
        <div>
          <h2>33 ACRES BREWING</h2>
          <form className="reserve-child">
            <div className="reserve-form">
              <label htmlFor="num">Select people number</label>
              <input
                type="number"
                name="num"
                id="num"
                min={1}
                max={15}
                required
              ></input>
            </div>
            <div className="reserve-form">
              <label htmlFor="date">Select the date</label>
              <input type="date" name="num" id="date" required></input>
            </div>
            <div className="reserve-form">
              <label htmlFor="hour">Select the time</label>
              <input
                type="time"
                name="num"
                id="hour"
                min="09:00"
                max="22:00"
                required
              ></input>
            </div>
          </form>
          <div className="btn-book-reserve">
            <Link to="/confirmation">
              <button type="submit">Book</button>
            </Link>
            <Link to="/details">
              <button type="submit">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reservation;
