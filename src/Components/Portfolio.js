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
        title={"Amazon"}
        desc={"Automated System for Material Return from Customer."}
        features={[
          "User Authentication",
          "Browse Products",
          "Responsive UI",
          "State Management",
          "Add Products to Cart",
          "Checkout & Payment",
        ]}
        techStack={["javaScript", "html", "css", "react", "firebase"]}
        liveLink={"https://fir-2bbb7.web.app/"}
        repoLink={"github.com/deekshith-S-Shetty/amazon"}
      />
    </div>
  );
}
