import React from "react";
import { projects } from "../constants";
import Project from "./Project";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-section" id="projects">
      <div className="portfolio-intro">
        <p>PORTFOLIO</p>
        <h2>Projects I have worked on</h2>
      </div>

      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          desc={project.desc}
          features={project.features}
          techStack={project.techStack}
          liveLink={project.liveLink}
          repoLink={project.repoLink}
          image={project.image}
        />
      ))}
    </div>
  );
}
