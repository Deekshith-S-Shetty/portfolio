import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [hamburger, setHamburger] = useState(true);
  return (
    <div className={`header ${!hamburger && "background-change"}`}>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
      </div>
      <div
        className="burger-icon"
        onClick={() => {
          setHamburger(!hamburger);
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/${
            hamburger ? "ham" : "close"
          }.png`}
          alt=""
        />
      </div>
      <div className={`header-info burger ${hamburger && "hidden"}`}>
        <div className="header-links">
          <p className="project-link">
            <a className="scroll-link" href="#projects">
              Projects
            </a>
          </p>
          <p className="about-me">
            <a className="scroll-link" href="#about">
              About Me
            </a>
          </p>
          <p className="contact">
            <a className="scroll-link" href="#contact">
              Contact
            </a>
          </p>
        </div>
        <div className="header-icons">
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
    </div>
  );
}
