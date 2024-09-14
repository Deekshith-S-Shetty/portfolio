import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-section">
      <p>SKILLS</p>
      <h2>Tech Stack I Work With</h2>
      <div className="all-skills">
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/react.png`}
            alt="react logo"
          />
          <p>React</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/javaScript.png`}
            alt="javascript logo"
          />
          <p>JavaScript</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/typescript.png`}
            alt="typescript logo"
          />
          <p>TypeScript</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/nextjs.png`}
            alt="nextjs logo"
          />
          <p>NextJS</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/html.png`}
            alt="html logo"
          />
          <p>HTML</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/css.png`}
            alt="css logo"
          />
          <p>CSS</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/git.png`}
            alt="git logo"
          />
          <p>Git</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/firebase.png`}
            alt="firebase logo"
          />
          <p>Firebase</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/sql.png`}
            alt="sql logo"
          />
          <p>SQL</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/figma.png`}
            alt="figma logo"
          />
          <p>Figma</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/mongodb.png`}
            alt="mongodb logo"
          />
          <p>MongoDB</p>
        </div>
        <div className="individual-skill">
          <img
            src={`${process.env.PUBLIC_URL}/images/node.png`}
            alt="node logo"
          />
          <p>NodeJS</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
