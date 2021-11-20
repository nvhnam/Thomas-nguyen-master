import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: rgba(0, 0, 0, 1);
  margin-top: 950px;
  /* background-color: #e2c9be; */
  /* background-color: linear-gradient(315deg, #e2c9be 0%, #fbf7e9 74%); */
  z-index: 5;

  @media screen and (max-width: 767px) {
    height: 560px;
    margin-top: 1450px;
  }

  @media screen and (width: 320px) {
    margin-top: 1270px;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: auto;
  max-width: 1100px;
  padding: 1rem;
  margin-top: 0rem;
  margin-left: 2rem;

  @media screen and (max-width: 1024px) {
    margin-top: 0.2rem;
  }

  @media screen and (max-width: 940px) {
    margin-left: 1.2rem;
    margin-top: -0.5rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0.1rem;
    margin-right: -1rem;
    margin-top: 3rem;
    width: 85%;
    padding: 0rem;
  }

  @media screen and (max-width: 320px) {
    margin-left: 0;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const ContactCol1 = styled.div`
  width: 400px;
  height: auto;
  padding: 0.9rem;
  background-color: #ffdab9;
  opacity: 0.8;
  /* background-color: #e2c9be; */
  /* background-color: linear-gradient(315deg, #e2c9be 0%, #fbf7e9 74%); */
  /* box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 35%); */
  border-radius: 6px;

  @media screen and (max-width: 940px) {
    width: 360px;
  }

  @media screen and (max-width: 767px) {
    width: 85%;
    opacity: 0.75;
  }

  @media screen and (max-width: 320px) {
    padding: 0.4rem;
  }
`;

export const FormHeading = styled.h1`
  font-size: 2rem;
  color: #010606;
  text-align: center;
  margin: 1rem 0.5rem 0 0.5rem;
  font-family: var(--Rubik);

  @media screen and (max-width: 940px) {
    font-size: 1.85rem;
    margin: 0.8rem 0.4rem 0 0.4rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.3rem;
    margin: 0.4rem 0.2rem 0 0.2rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    margin: 0.4rem 0.2rem 0 0.2rem;
  }
`;

