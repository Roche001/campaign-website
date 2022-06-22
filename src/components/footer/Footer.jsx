import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div id="footer">
      <div className="icons">
        <div className="icon-a">
          <a className="icon icon-facebook" href="https://www.facebook.com/">
            {" "}
            <BsFacebook />
          </a>
        </div>
        <div className="icon-a">
          <a className="icon icon-instagram" href="https://www.instagram.com">
            <AiFillInstagram />
          </a>
        </div>
        <div className="icon-a">
          <a className="icon icon-twitter" href="https://www.twitter.com">
            <span>
              <BsTwitter />
            </span>
          </a>
        </div>
        <div className="icon-a">
          <a className="icon icon-linkedin" href="https://www.linkedin.com">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
