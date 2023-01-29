import React from "react";
import styled from "styled-components";

export const CardStory = () => {
  return (
    <Container>
      <h3>What awaits you:</h3>
      <div className="step">
        <div className="step__wrapper">
          <div className="index blue">1</div>
          <div className="line blue"></div>
          <Card>About me</Card>
        </div>
        <div className="step__wrapper">
          <div className="index orange">2</div>
          <div className="line orange"></div>
          <Card>Projects</Card>
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
  padding: 0rem 2.4rem;

  /* padding: 0rem 0rem; */

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

const Card = styled.article`
  /* display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  max-width: 20rem;
  border-radius: 8px;
  border: 1px solid var(--color-blue);
  padding: 1rem;
  background: var(--color-white);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.17);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.17); */

  font-family: var(--font-jetbrains);
  font-size: var(--font-size-20);
`;
