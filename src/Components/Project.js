import React from "react";
import "./Project.css";

export default function Project({
  title,
  desc,
  features,
  techStack,
  liveLink,
  repoLink,
}) {
  return (
    <div className="projects-section">
      <div className="project-text">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
        <h3 className="project-features-title">Features</h3>
        <div className="project-features">
          {features.map((feature, idx) => (
            <div key={idx} className="project-feature">
              {idx + 1}. {feature}
            </div>
          ))}
        </div>
        <h3 className="project-techstack-title">Tech Stack</h3>
        <div className="project-techstacks">
          {techStack.map((stack, idx) => (
            <img
              className="project-techStack"
              key={idx}
              src={`./images/${stack}.png`}
              alt="techStack logo"
            />
          ))}
        </div>
        <div className="link-btn">
          <div className="projects-link">
            <button className="btn btn-color">See Live</button>
          </div>
          <div className="github-link">
            <button className="btn btn-outline">GitHub Repo</button>
          </div>
        </div>
      </div>
      <div className="project-image">
        <div className="project-image-container">
          <img src={`./images/${title}.png`} alt="" />
        </div>
      </div>
    </div>
  );
}