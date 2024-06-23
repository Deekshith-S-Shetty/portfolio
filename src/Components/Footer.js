import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="footer-text">
          &#169; 2024 Deekshith shetty. All rights reserved.
        </div>
      </div>
      <div className="footer-right">
        <img src="./images/linkedin.png" alt="Linkedin" className="h-icons" />
        <img src="./images/x.png" alt="x" className="h-icons" />
        <img src="./images/github.png" alt="github" className="h-icons" />
      </div>
    </div>
  );
}
