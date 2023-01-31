import React from "react";
import styled from "styled-components";

export const SocialArrow = () => {
  return <Container src="/arrow.svg" alt="arrow down" />;
};

const Container = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: -50px;
  width: 100%;
  z-index: -2;

  @media (max-width: 1110px) {
    display: block;
    width: 150px;
    left: -0px;
    bottom: 0;
  }
`;
