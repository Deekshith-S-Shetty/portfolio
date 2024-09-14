import React from "react";
import Project from "./Project";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-section" id="projects">
      <div className="portfolio-intro">
        <p>PORTFOLIO</p>
        <h2>Projects I have worked on</h2>
      </div>

      <Project
        title={"PixaEdit"}
        desc={"A Full Blown Project On Image Manipulation."}
        features={[
          "User Authentication with OTP Verification",
          "Image Editing Tools: Object removal, recoloring, background removal, and more",
          "Coin-Based System: Edits deduct coins from user balance",
          "Stripe Integration: For purchasing more coins",
          "Responsive UI & State Management",
        ]}
        techStack={["nextjs", "typescript", "mongodb", "html", "css"]}
        liveLink={"https://pixa-edit.vercel.app"}
        repoLink={"https://github.com/Deekshith-S-Shetty/pixaedit"}
      />

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

      <Project
        title={"Amazon"}
        desc={
          "Amazon is a React-based clone of Amazon, using Firebase for backend and Stripe for payments. It showcases full e-commerce functionality without a traditional backend server."
        }
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
        repoLink={"https://github.com/deekshith-S-Shetty/amazon"}
      />
    </div>
  );
}
