import React from "react";
import styled from "styled-components";

export const PageLayout = ({ children, fTitle, sTitle, subTitle }) => {
  return (
    <Container>
      {/* <HeaderWrapper>
        <h1>{fTitle}</h1>
        <h2>{sTitle}</h2>
        <p>{subTitle}</p>
      </HeaderWrapper> */}
      {children}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 1550px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0rem 10%; */
  /* background-image: linear-gradient(
    180deg,
    transparent 0%,

    rgba(255, 255, 255, 0.651) 50%,
    rgba(255, 255, 255, 1) 100%
  ); */
  padding: 0 2.4rem;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: var(--text-color);
  font-family: "Roboto", sans-serif;
  padding-top: calc(4.8rem + 2rem);

  h1 {
    font-size: 2.4rem;
    color: var(--color-blue);
    padding-left: 1rem;
  }

  h2 {
    font-size: 6.4rem;
  }

  p {
    font-size: 2.4rem;
    font-weight: 400;
  }
`;
