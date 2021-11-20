import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactCol1,
  FormHeading,
} from "./ContactElement";
import "./Contact.css";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactRow>
            <ContactCol1>
              <FormHeading>Contact Us</FormHeading>
              <FormContact />
            </ContactCol1>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
