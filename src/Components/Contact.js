import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => {};

  return (
    <div className="contact-section">
      <p>CONTACT</p>
      <h3>Connect with me</h3>
      <form className="contact-form" action="">
        <div className="contact-input">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p className="error-msg">some</p>
        </div>
        <div className="contact-input">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Id"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="error-msg"></p>
        </div>
        <div className="contact-input">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
          <p className="error-msg"></p>
        </div>
        <div className="connect-btn">
          <button className="btn btn-outline">
            Lets Connect <img src="./images/send.png" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}
