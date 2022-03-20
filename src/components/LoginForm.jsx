import React from "react";
import PictureSide from "./PictureSide";
import Footer from "./Footer";
import styles from "../components/LoginForm.css";

function LoginForm() {
  return (
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
              <input type="email" name="name" id="email"></input>
            </div>
            <div className="form-div">
              <label htmlFor="pwd">Password</label>
              <input type="password" name="pwd" id="pwd"></input>
            </div>
            <div className="btn-sub">
              <button type="submit">Submit</button>
            </div>

            <div className="pwd-forgot">
              <p>Forgot Password?</p>
            </div>

            <div className="acct-signup">
              <p>Don't have an account? Sign Up?</p>
            </div>
          </form>
        </div>
      </div>
      <div style={{ backgroundColor: "#F7D04B" }}>
        <Footer />
      </div>
    </div>
  );
}

export default LoginForm;
