import React from "react";
import { Button } from "../../ButtonElement";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactCol1,
  ContactForm,
  FormHeading,
  FormField,
  FormLabel,
  FormInput,
  FormTextInput,
  FormButton,
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
              {/* <ContactForm name="contact">
                <FormField>
                  <FormLabel>Name</FormLabel>
                  <FormInput
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    required
                  ></FormInput>
                </FormField>
                <FormField>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput
                    id="name"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    required
                  ></FormInput>
                </FormField>
                <FormField>
                  <FormLabel>Phone Number</FormLabel>
                  <FormInput
                    id="phone"
                    type="number"
                    placeholder="Enter your phone number"
                    required
                    name="number"
                  ></FormInput>
                </FormField>
                <FormField>
                  <FormLabel>Message</FormLabel>
                  <FormTextInput
                    id="message"
                    type="text"
                    placeholder="..."
                    name="message"
                    required
                  ></FormTextInput>
                </FormField>
                <FormButton>
                  <Button
                    primary={false}
                    big={false}
                    fontBig={false}
                    type="submit"
                  >
                    Send
                  </Button>
                </FormButton>
              </ContactForm> */}
            </ContactCol1>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
