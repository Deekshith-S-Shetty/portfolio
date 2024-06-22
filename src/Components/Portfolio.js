import React from "react";
import Project from "./Project";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-section">
      <div className="portfolio-intro">
        <p>PORTFOLIO</p>
        <h2>Projects I have worked on</h2>
      </div>

      <Project
        title={"Customer-Returns"}
        desc={"Automated System for Material Return from Customer."}
        features={[
          "User Authentication",
          "Delivery Status",
          "Check & Return Ordered Products",
          "Approval & Response From Manufacturer",
          "Responsive UI",
          "State Management",
        ]}
        techStack={["javaScript", "html", "css", "react", "firebase"]}
        liveLink={"https://customerreturn-97bdd.web.app/"}
        repoLink={"https://github.com/Deekshith-S-Shetty/Customer-Returns"}
      />
    </div>
  );
}
