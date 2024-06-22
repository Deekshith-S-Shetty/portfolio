import React, { Component } from "react";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="about-container">
          <div className="image-section">
            <img className="self-image" src="./images/self.png" alt="My pic" />
          </div>
          <div className="about-info">
            <p>ABOUT ME</p>
            <h3>Here's more about me</h3>
            <div className="about-desc-section">
              <p className="about-desc">
                I am Deekshith Shetty, based in Bangalore, India.
              </p>
              <p className="about-desc">
                I have been learning and build projects on Full-Stack Web
                Development.
              </p>
              <p className="about-desc">
                I have designed and developed a range of full-stack applications
                using React, NodeJS, Firebase, MongoDB, SQL, etc...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
