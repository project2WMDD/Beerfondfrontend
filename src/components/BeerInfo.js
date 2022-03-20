import React from "react";
import beer from "../images/pale-glass.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import NavNew from "./NavNew";
import "./Beerinfo.css";

function BeerInfo() {
  return (
    <div>
      <NavNew />
      <div
        className="
            beer-info"
      >
        <div className="beerinfo-img">
          <h2>PALE ALE</h2>
          <img src={beer} alt="pale beer" />
        </div>

        <div className="char-container">
          <div className="beer-character">
            <h1>Characteristics</h1>
            <p>
              Characterized by floral, fruity, citrus like, piney, resinous
              American hops, the American pale ale is a medium bodied beer with
              low to medium caramel, and carries with it a toasted maltiness.
              American pale ale is one of the most food-friendly styles to enjoy
            </p>
          </div>
          <div className="food-match">
            <h3>Food Match</h3>
            <ul>
              <li>Salads</li>
              <li>grilled Meats</li>
              <li>Medium cheese</li>
              <li>Desserts</li>
              <li>Seafood</li>
            </ul>
          </div>
          <div className="find-it">
            <h3>Where to find it</h3>
            <ul>
              <Link to="/details">
                <li>33 Acres</li>
              </Link>
              <li>Market Beer</li>
              <li>Tap and Bar</li>
              <li>Earls</li>
              <li>Jambo Grill</li>
            </ul>
          </div>
          <div className="brands-place">
            <h3>Brands</h3>
            <ul>
              <li>Vancouver Island</li>
              <li>Parkate</li>
              <li>Athletic brewing</li>
              <li>lupolo</li>
              <li>Stanely Park Brewing</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(255, 198, 5, 0.4)" }}>
        <Footer />
      </div>
    </div>
  );
}

export default BeerInfo;
