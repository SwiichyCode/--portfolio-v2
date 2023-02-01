import React from "react";
import styled from "styled-components";
import Link from "next/link";

// Todo: Need to refactor this component

export const HeroStep = () => {
  return (
    <Container>
      <h3>What awaits you:</h3>
      <div className="step">
        <div className="step__wrapper">
          <div className="index blue">1</div>
          <div className="line blue"></div>
          <StyledLink href="/about">About me</StyledLink>
        </div>
        <div className="step__wrapper">
          <div className="index orange">2</div>
          <div className="line orange"></div>
          <StyledLink href="/">Projects</StyledLink>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 100rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gap-24);

  h3 {
    color: var(--text-color);
    font-size: var(--font-size-24);
    font-family: var(--font-jetbrains);
  }

  .step {
    display: flex;
    gap: var(--gap-24);

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--gap-12);
    }
  }

  .index {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    background: var(--color-blue);
    color: var(--color-white);
    font-size: var(--font-size-20);
    font-weight: 700;
  }

  .line {
    display: flex;
    width: 40px;
    height: 2px;
  }

  .blue {
    background-image: linear-gradient(
      to right,
      var(--color-blue),
      var(--color-cyan)
    );
  }

  .orange {
    background-image: linear-gradient(
      to right,
      var(--color-orange),
      var(--color-yellow)
    );
  }
`;

const StyledLink = styled(Link)`
  font-family: var(--font-jetbrains);
  font-size: var(--font-size-22);
  color: var(--text-color);
  text-decoration: none;
`;
