import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "../../ButtonElement";
import "./FormContact.css";

function FormContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact-service",
        form.current,
        "user_oH3eSQTag7GyWdkaAn7BN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form name="contact" ref={form} onSubmit={sendEmail}>
        <div className="form-field">
          <label>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-field">
          <label>Phone Number</label>
          <input
            id="number"
            type="number"
            name="number"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-field">
          <label>Message</label>
          <br />
          <textarea
            id="message"
            type="text"
            name="message"
            placeholder="..."
          ></textarea>
        </div>
        <div className="form-button">
          <button type="submit" id="button" className="form-btn">
            Send
          </button>
        </div>
      </form>
    </>
  );
}

export default FormContact;
