import React from "react";
import styled from "styled-components";

export const PageLayout = ({ children, title }) => {
  return (
    <Container>
      <HeaderWrapper>
        <Title>{title}</Title>
        <Subtitle>
          Explore my journey, skills, and goals as an aspiring web developer
        </Subtitle>
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
`;

const Title = styled.h1`
  font-size: 6.4rem;
  font-family: "Roboto", sans-serif;
  //roboto
`;

const Subtitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
`;
