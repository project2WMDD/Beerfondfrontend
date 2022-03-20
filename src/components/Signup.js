import React from "react";
//import LoginForm from './LoginForm'
import PictureSide from "./PictureSide";
import "../components/Signup.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

function Signup() {
  return (
    <div>
      {/* <Navbar />  */}
      <div>
        <div className="signup-parent">
          <div className="image-people">
            <PictureSide />
          </div>
          <div className="sign-child">
            <div className="signup-heading">
              <h2>SIGN UP</h2>
              <p>Welcome:)</p>
            </div>
            <div className="signup-form">
              <form className="form">
                <div className="signup-div">
                  <label htmlFor="fname">Full Name</label>
                  <input type="text" name="name" id="fname" required></input>
                </div>
                <div className="signup-div">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required></input>
                </div>
                <div className="signup-div">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    required
                  ></input>
                </div>
                <div className="signup-div">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" name="dob" id="dob" required></input>
                </div>
                <div className="signup-div">
                  <label htmlFor="pwd">Password</label>
                  <input type="password" name="pwd" id="pwd" required></input>
                </div>
                <div className="signup-div">
                  <label htmlFor="cpwd">Confirm Password</label>
                  <input type="password" name="pwd" id="cpwd" required></input>
                </div>
                <div className="btn-signup">
                 
                    <button type="submit" onClick={ (e) => { alert("User Signed Up Successfully") 
                        e.preventDefault()
                    }}>SIGN UP</button>
        
                </div>
                <div className="pwd-forgot">
                  <p>
                    Already have an account? <Link to="/login">Login</Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#F7D04B" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Signup;
