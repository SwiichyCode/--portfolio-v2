import React from "react";
import styled from "styled-components";

export const PageLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-height));
  padding: 0 2.4rem;

  h1 {
    font-size: 4rem;
  }
`;
