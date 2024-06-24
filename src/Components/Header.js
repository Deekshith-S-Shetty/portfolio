import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [hamburger, setHamburger] = useState(true);
  return (
    <div className={`header ${!hamburger && "background-change"}`}>
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div
        className="burger-icon"
        onClick={() => {
          setHamburger(!hamburger);
        }}
      >
        <img src={`./images/${hamburger ? "ham" : "close"}.png`} alt="" />
      </div>
      <div className={`header-info burger ${hamburger && "hidden"}`}>
        <div className="header-links">
          <p className="project-link">Projects</p>
          <p className="about-me">About Me</p>
          <p className="contact">Contact</p>
        </div>
        <div className="header-icons">
          <img src="./images/linkedin.png" alt="Linkedin" className="h-icons" />
          <img src="./images/x.png" alt="x" className="h-icons" />
          <img src="./images/github.png" alt="github" className="h-icons" />
        </div>
      </div>
    </div>
  );
}
