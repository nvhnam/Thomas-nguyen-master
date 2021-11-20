import React from "react";
import { Button } from "../../ButtonElement";

export default function FormContact() {
  return (
    <>
      <form
        name="contact"
        netlify
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
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
            type="number"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-field">
          <label>Message</label>
          <br />
          <textarea type="text" name="message" placeholder="..."></textarea>
        </div>
        <div className="form-button">
          <Button primary={false} big={false} fontBig={false} type="submit">
            Send
          </Button>
        </div>
      </form>
    </>
  );
}
