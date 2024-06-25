import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errorValues, setErrorValues] = useState(initialValues);
  const [showSuccessText, setShowSuccessText] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send("service_y5r801i", "template_qtmmlla", formValues, {
          publicKey: "SDxqsjOrdIJTsGdHs",
        })
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setFormValues(initialValues);
            setShowSuccessText(true);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Name is required";
    }

    if (!formValues.email) {
      errors.email = "Email is required";
    }

    if (!formValues.message) {
      errors.message = "Message is required";
    }

    setErrorValues(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="contact-section">
      <p>CONTACT</p>
      <h3>Connect with me</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
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
          <p className="error-msg">{errorValues.name}</p>
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
          <p className="error-msg">{errorValues.email}</p>
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
          <p className="error-msg">{errorValues.message}</p>
        </div>
        <div className="connect-btn" id="form-connect-btn">
          <button className="btn btn-outline">
            <a href="#" onClick={handleSubmit} className="scroll-link">
              Lets Connect <img src="./images/send.png" alt="" />
            </a>
          </button>
        </div>
      </form>
      {showSuccessText && (
        <div className="contact-success-msg">
          Thank you for your email. I will get back to you shortly. In the
          meantime, feel free to visit my{" "}
          <a
            href="https://www.linkedin.com/in/deekshith-shetty-3a4138224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
}
