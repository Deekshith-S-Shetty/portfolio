import React from "react";
import { skills } from "../constants";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-section">
      <p>SKILLS</p>
      <h2>Tech Stack I Work With</h2>
      <div className="all-skills">
        {skills.map((skill) => (
          <div key={skill.text} className="individual-skill">
            <div className="individual-skill-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/${skill.image}`}
                alt={skill.alt}
              />
            </div>
            <p>{skill.text}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
