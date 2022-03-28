import React from "react";

function Footer() {
  return (
    <div className="footer-web">
      <div className="logo-collg">
        <div className="foot-logo">
          <h1>BEERFOND</h1>
          <p>
            2022 Langara St <br />
            Vancouver, BC
          </p>
        </div>
      </div>
      <div className="social-phnum">
        <div className="brands">
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-instagram" />
        </div>
        <div className="phnum">
          <p>123 456 7890</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
