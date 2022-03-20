import React from "react";
import vipul from "../images/Vipul.jpeg";
import saurabh from "../images/saurab.jpeg";
import tej from "../images/tej.jpeg";
import gurunkit from "../images/gur.jpeg";
import gustavo from "../images/gustav.jpeg";
import harinder from "../images/harinder.jpeg";
import paula from "../images/paula.jpeg";

function OurTeam() {
  return (
    <div className="team-5">
      <div className="team-name">
        <h3>Our Team</h3>
      </div>
      <div className="des-dev">
        <div className="designers">
          <div className="dev-img-imtro">
            <img src={paula} alt="paula" />
            <div className="dev-intro">
              <p>Paula Valero</p>
              <p>UX/UI Designer</p>
            </div>
          </div>
          <div className="dev-img-imtro">
            <img src={harinder} alt="harinder" />
            <div className="dev-intro">
              <p>Harinder Kaur</p>
              <p>UX/UI Designer</p>
            </div>
          </div>
          <div className="dev-img-imtro" id="gurankit">
            <img src={gurunkit} alt="gurunkit" />
            <div className="dev-intro">
              <p>Gurankit Singh</p>
              <p>UX/UI Designer</p>
            </div>
          </div>
        </div>
        <div className="developers">
          <div className="dev-img-imtro">
            <img src={gustavo} alt="gustavo" />
            <div className="dev-intro">
              <p>Gustavo Monte</p>
              <p>Front End developer</p>
            </div>
          </div>
          <div className="dev-img-imtro">
            <img src={vipul} alt="Vipul" />
            <div className="dev-intro">
              <p>Vipul Gupta</p>
              <p>Developer Lead</p>
            </div>
          </div>
          <div className="dev-img-imtro">
            <img src={tej} alt="tejaswini" />
            <div className="dev-intro">
              <p>Tejaswini MK</p>
              <p>Front End Developer</p>
            </div>
          </div>
          <div className="dev-img-imtro">
            <img src={saurabh} alt="saurabh" />
            <div className="dev-intro">
              <p>Saurabh Sindhu</p>
              <p>Fullstack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
