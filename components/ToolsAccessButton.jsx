import React from "react";
import styled from "styled-components";
import { BsGear } from "react-icons/bs";
import { ButtonRainbow } from "./ButtonRainbow";
import { rainbowBtnTheme } from "@/styles/themes";
import useStore from "@/stores/backgroundStore";

export const ToolsAccessButton = () => {
  const toggleTools = useStore((state) => state.toggleTools);

  return (
    <Container>
      <ButtonRainbow onClick={toggleTools} themes={rainbowBtnTheme}>
        <BsGear />
        <span>Quick Access</span>
      </ButtonRainbow>
    </Container>
  );
};

const Container = styled.div`
  z-index: 1000;

  span {
    @media (max-width: 1110px) {
      display: none;
    }
  }
`;
