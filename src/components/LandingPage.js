import React from "react";
import drink from "../images/pale-glass.png";
import Footer from "./Footer";
import OurTeam from "./OurTeam";
//import Signup from './Signup'
//import {useNavigate} from 'react-router-dom'
import "./LandingPage.css";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

function LandingPage() {
  // let navigate = useNavigate();
  // function handClick(){
  //     navigate('/Signup')
  // }
  return (
    <div>
      {/* <Navbar /> */}
      <div className="landing-page">
        <div className="hero-intro">
          <div className="hero-img">
            <p>
              FIND YOUR <br />
              PERFECT BEER
            </p>
            <div className="empty-blue"></div>
            <img src={drink} alt="pale beer" />
          </div>
          <div className="content-part">
            <h2>Welcome to Beerfond website</h2>
            <p>
              This website makes it simple to find the greatest food and beer
              pairings. This will also assist you in reserving a table at a
              popular restaurant serving your favourite cuisine.
            </p>
            <div className="btn-sign">
              <Link to="/signup">
                <button type="submit">Sign Up</button>
              </Link>
              {/* <Link to='/Signup'>Sign Up</Link> */}
            </div>
          </div>
        </div>
        <div className="aboutus">
          <div className="likes-about">
            <div className="likes">
              <i className="fa-regular fa-heart" />
              <p>Discover your ideal beer</p>
            </div>
            <div className="likes">
              <i className="fa-solid fa-location-dot" />
              <p>Find where to find it</p>
            </div>
            <div className="likes">
              <i className="fa-regular fa-circle-check" />
              <p>Book a table </p>
            </div>
          </div>
          <div className="about-us">
            <h4>About us</h4>
            <p>
              We make it simple to find the greatest food and beer pairings. You
              will know more about your favourite beers
            </p>
          </div>
        </div>
        <div className="team">
          <OurTeam />
        </div>
        <div className="foot-land">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
