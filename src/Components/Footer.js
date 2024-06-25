import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo" id="footer-logo">
          <img src="./images/logo.png" alt="" />
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
          <img src="./images/linkedin.png" alt="Linkedin" className="h-icons" />
        </a>
        <a
          href="https://x.com/deekshith6980"
          className="scroll-link"
          target="_blank"
          rel={"noreferrer"}
        >
          <img src="./images/x.png" alt="x" className="h-icons" />
        </a>
        <a
          href="https://github.com/deekshith-S-Shetty/"
          className="scroll-link"
          target="_blank"
          rel={"noreferrer"}
        >
          <img src="./images/github.png" alt="github" className="h-icons" />
        </a>
      </div>
    </div>
  );
}
