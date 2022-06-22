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
        <a href="https://www.facebook.com/">
          {" "}
          <BsFacebook />
        </a>
        <a className="icon icon-instagram" href="https://www.instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://www.twitter.com">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
