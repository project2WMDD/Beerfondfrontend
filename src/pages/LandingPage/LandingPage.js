import React, {useEffect} from 'react';
import drink from '../../images/pale-glass.png';
import Footer from '../../components/Footer'
import OurTeam from '../../components/OurTeam';
import { useGlobalContext } from '../../context/globalContext';
//import Signup from './Signup'
import {useNavigate} from 'react-router-dom'
import './LandingPage.css';
import { Link } from 'react-router-dom';
// import Navbar from "./Navbar";

function LandingPage() {
  let navigate = useNavigate();
  // function handClick(){
  //     navigate('/Signup')
  // }
  let { user } = useGlobalContext();
  useEffect(() => {
    if (user) {
      navigate('/preferences');
    }
  }, [user, navigate]);

  return (
    <div>
      {/* <Navbar /> */}
      <div className='landing-page'>
        <div className='hero-intro'>
          <div className='hero-img'>
            <p className="hero-img-text">
              FIND YOUR <br />
              PERFECT BEER
            </p>
            {/* <div className='empty-blue'></div> */}
            <div className="hero-img-container">
              <img src={drink} alt='pale beer' />
            </div>
          </div>

          <div className='content-part'>
            <h2 className='content-part-heading'>Welcome to Beerfond website</h2>

            <p className='content-part-text'>
              This website makes it simple to find the greatest food and beer
              pairings. This will also assist you in reserving a table at a
              popular restaurant serving your favourite cuisine.
            </p>

            <div className='btn-sign'>
              <Link to='/signup'>
                <button type='submit'>Sign Up</button>
              </Link>
              {/* <Link to='/Signup'>Sign In</Link> */}
            </div>
          </div>
        </div>

        <div className='about-us-container'>
          <div className='likes-about'>
            <div className='likes'>
              <i className='fa-regular fa-heart' />
              <p>Discover your ideal beer</p>
            </div>
            <div className='likes'>
              <i className='fa-solid fa-location-dot' />
              <p>Find where to find it</p>
            </div>
            <div className='likes'>
              <i className='fa-regular fa-circle-check' />
              <p>Book a table </p>
            </div>
          </div>

          <div className='about-us'>
            <h4>About us</h4>
            <p>
              We make it simple to find the greatest food and beer pairings. You
              will know more about your favourite beers
            </p>
          </div>
        </div>

        <div className='team'>
          <OurTeam />
        </div>

        <div className='foot-land'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
