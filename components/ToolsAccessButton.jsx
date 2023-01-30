import React from "react";
import styled from "styled-components";
import { BsGear } from "react-icons/bs";
import { ButtonRainbow } from "./ButtonRainbow";
import { rainbowBtnTheme } from "@/styles/themes";
import useStore from "@/stores/backgroundStore";
import arrow from "@/public/arrow.svg";
export const ToolsAccessButton = () => {
  const toolsActive = useStore((state) => state.toolsActive);
  const toggleTools = useStore((state) => state.toggleTools);

  console.log(toolsActive);

  return (
    <Container>
      <ButtonRainbow onClick={toggleTools} themes={rainbowBtnTheme}>
        <BsGear />
        <span>Quick Access</span>
      </ButtonRainbow>

      {!toolsActive && <img src="/arrow.svg" alt="arrow down" />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 1000;

  span {
    @media (max-width: 1110px) {
      display: none;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: -50px;
    width: 100%;
    z-index: -1;
    display: none;

    &:before {
      content: "hello";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: red;
    }

    @media (max-width: 1110px) {
      display: block;
      width: 150px;
      left: -90px;
      bottom: 0;
    }
  }
`;
