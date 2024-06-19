import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h3 className="name">Hi, I'm Deekshith</h3>
        <h1 className="profile">Full Stack Web Developer</h1>
        <p className="desc">
          I design and develop web applications with a focus on functionality.
          Explore my projects to learn more or connect with me.
        </p>
        <div className="home-btn">
          <div className="projects-btn">
            <button className="btn btn-color">
              My Projects <img src="./images/arrow.png" alt="arrow" />
            </button>
          </div>
          <div className="connect-btn">
            <button className="btn btn-outline">
              Lets Connect <img src="./images/send.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}