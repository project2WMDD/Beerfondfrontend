import React from "react";
//import LoginForm from './LoginForm'
import PictureSide from "./PictureSide";
import styles from "../components/Signup.css";
import Footer from "./Footer";

function Signup() {
  return (
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
                <input type="text" name="name" id="fname"></input>
              </div>
              <div className="signup-div">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"></input>
              </div>
              <div className="signup-div">
                <label htmlFor="mobile">Mobile</label>
                <input type="number" name="mobile" id="mobile"></input>
              </div>
              <div className="signup-div">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" name="dob" id="dob"></input>
              </div>
              <div className="signup-div">
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" id="pwd"></input>
              </div>
              <div className="signup-div">
                <label htmlFor="cpwd">Confirm Password</label>
                <input type="password" name="pwd" id="cpwd"></input>
              </div>
              <div className="btn-signup">
                <button type="submit" onClick={ (e)=>e.preventDefault()}>SIGN UP</button>
              </div>
              <div className="pwd-forgot">
                <p>Already have an account? Login</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#F7D04B" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
