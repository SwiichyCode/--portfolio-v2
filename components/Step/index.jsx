import React from "react";
import styled from "styled-components";

export const Step = ({ index, title, color, lSize, fSize }) => {
  return (
    <StyledStep color={color} lSize={lSize}>
      <Index color={color}>{index}</Index>
      <div className={"line blue"}></div>
      <Card fSize={fSize}>{title}</Card>
    </StyledStep>
  );
};

const Index = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background-image: ${(props) =>
    props.color === "blue"
      ? "linear-gradient(to right, var(--color-blue), var(--color-cyan))"
      : "linear-gradient(to right, var(--color-orange), var(--color-yellow))"};

  color: var(--color-white);
  font-size: var(--font-size-20);
  font-weight: 700;
`;

const StyledStep = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gap-24);
  color: var(--text-color);

  .line {
    display: flex;
    width: ${(props) => (props.lSize ? `${props.lSize}px` : "40px")};
    height: 2px;
    background-image: ${(props) =>
      props.color === "blue"
        ? "linear-gradient(to right, var(--color-blue), var(--color-cyan))"
        : "linear-gradient(to right, var(--color-orange), var(--color-yellow))"};
  }
`;

const Card = styled.article`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(props) => (props.fSize ? props.fSize : "6rem")};
  font-weight: 700;
  /* color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    var(--color-blue),
    var(--color-cyan)
  ); */
  filter: var(--fileredShadow);
`;
