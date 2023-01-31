import React from "react";
import styled from "styled-components";

export const PageLayout = ({ children, fTitle, sTitle, subTitle }) => {
  return (
    <Container>
      <HeaderWrapper>
        <h1>{fTitle}</h1>
        <h2>{sTitle}</h2>
        <p>{subTitle}</p>
      </HeaderWrapper>
      {children}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: calc(100vh - var(--header-height));
  padding: 10rem 2.4rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: var(--text-color);
  font-family: "Roboto", sans-serif;

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
