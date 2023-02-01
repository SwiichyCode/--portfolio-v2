import React from "react";
import styled from "styled-components";

export const CardRegular = ({ ...props }) => {
  return (
    <Container {...props}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--gap-8);
  width: 100%;
  min-height: 17rem;
  max-width: ${(props) => `${props.mWidth}px` || "50rem"};
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-medium);
  padding: var(--gap-12);

  div {
    width: 100%;
    height: 1.1rem;
    border-radius: 4px;
    background-color: var(--color-pink-400);

    &:nth-child(1) {
      width: 40%;
    }
    &:nth-child(2) {
      width: 90%;
    }
    &:nth-child(3) {
      width: 70%;
    }
  }
`;
