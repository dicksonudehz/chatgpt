import React from "react";
import "./nav.css";
import illustrator from "../assets/headerillustrator.png";
import googlelogo from "../assets/google.png";
import bitmaplogo from "../assets/Bitmap.png";
import dropboxlogo from "../assets/dropbox.png";
import slacklogo from "../assets/slack.png";
import shopifylogo from "../assets/shopify.png";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  return (
    <div className="mainNavContentContainer">
      
      <div className="navToogle">
          <MenuIcon className="navMenuIcon"/>
        </div>
          <input type="checkbox" className="checkToogle" />
          <div id="toogleContainer">
      <div className="navContainer" id="navContainerCont">
        <div className="leftContainer">
          <ul>
            <li>GPT-3</li>
            <li>Home</li>
            <li>what is GPT?</li>
            <li>Open AI</li>
            <li>case studey</li>
            <li>library</li>
          </ul>
        </div>
        <div className="rightContainer">
          <span>sign in</span>
          <button className="signUpButton">sign up</button>
          </div>
        </div>
      </div>
      <div className="navBodyContainer">
        <div className="leftBodyContainer">
          <h1>
            let's build something <br />
            amazing with GPT-3
            <br /> openAi
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="signupContainer">
            <input
              type="text"
              placeholder="your email address"
              className="inputClass"
            />
            <button className="getStarted">get started</button>
          </div>
        </div>
        <div className="rightNavContainer">
          <img src={illustrator} alt="right nav holder" className="image" />
        </div>
      </div>
      <div className="sponsorContainer">
        <img src={googlelogo} alt="google logo" />
        <img src={bitmaplogo} alt="google logo" />
        <img src={dropboxlogo} alt="google logo" />
        <img src={slacklogo} alt="google logo" />
        <img src={shopifylogo} alt="google logo" />
      </div>
    </div>
  );
}

export default Nav;
