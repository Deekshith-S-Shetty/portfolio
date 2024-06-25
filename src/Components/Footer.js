import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo" id="footer-logo">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
        </div>
        <div className="footer-text">
          &#169; 2024 Deekshith shetty. All rights reserved.
        </div>
      </div>
      <div className="footer-right">
        <a
          href="https://www.linkedin.com/in/deekshith6980/"
          className="scroll-link"
          target="_blank"
          rel={"noreferrer"}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
            alt="Linkedin"
            className="h-icons"
          />
        </a>
        <a
          href="https://x.com/deekshith6980"
          className="scroll-link"
          target="_blank"
          rel={"noreferrer"}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/x.png`}
            alt="x"
            className="h-icons"
          />
        </a>
        <a
          href="https://github.com/deekshith-S-Shetty/"
          className="scroll-link"
          target="_blank"
          rel={"noreferrer"}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/github.png`}
            alt="github"
            className="h-icons"
          />
        </a>
      </div>
    </div>
  );
}
