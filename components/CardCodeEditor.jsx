import React from "react";
import styled from "styled-components";

export const CardCodeEditor = () => {
  return (
    <Container>
      <div className="header">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="body">
        <div className="line-numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  border-radius: 0.8rem;
  background-color: #1e293b;
  box-shadow: var(--shadow-medium);

  .header {
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    height: 3.2rem;
    gap: var(--gap-8);
    border-bottom: 2px solid var(--color-grey-200);

    .dot {
      display: inline-block;
      border-radius: 50%;
      width: 11px;
      height: 11px;
      background: rgb(216, 224, 234);

      &:nth-child(1) {
        background: #ff5f56;
      }

      &:nth-child(2) {
        background: #ffbd2e;
      }

      &:nth-child(3) {
        background: #27c93f;
      }
    }
  }

  .body {
    display: flex;
    height: 20rem;
    padding: 1.6rem;
  }

  .line-numbers {
    display: flex;
    flex-direction: column;
    gap: var(--gap-14);
    font-size: var(--font-size-14);
    font-weight: 500;
    color: var(--color-white);
    opacity: 0.5;
  }
`;
