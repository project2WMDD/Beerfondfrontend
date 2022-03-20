import React from "react";
import PictureSide from "./PictureSide";
import Footer from "./Footer";
import "./LoginForm.css";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

function LoginForm() {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <div className="logo-form">
          <div className="image-people">
            <PictureSide />
          </div>

          <div className="login-form">
            <div className="form-heading">
              <h2>LOGIN</h2>
              <p>Welcome:)</p>
            </div>
            <form className="form-log-in">
              <div className="form-div">
                <label htmlFor="email">Email</label>
                <input type="email" name="name" id="email" required></input>
              </div>
              <div className="form-div">
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" id="pwd" required></input>
              </div>
              <div className="btn-sub">
              <Link to='/prefrences'><button type="submit">Submit</button></Link>
              </div>

              <div className="pwd-forgot">
                <p>Forgot Password?</p>
              </div>

              <div className="acct-signup">
                <p>
                  Don't have an account? <Link to="/signup">Sign Up?</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div style={{ backgroundColor: "#F7D04B" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
