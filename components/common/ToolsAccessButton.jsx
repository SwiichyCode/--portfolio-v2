import React from "react";
import styled from "styled-components";
import useStore from "@/stores/backgroundStore";
import { useWindowSize } from "@/hooks/useWindowSize";
import { BsGear } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { ButtonRainbow } from "@/components/common/ButtonRainbow";
import { rainbowBtnTheme } from "@/styles/themes";

export const ToolsAccessButton = () => {
  const size = useWindowSize();
  const toolsActive = useStore((state) => state.toolsActive);
  const toggleTools = useStore((state) => state.toggleTools);

  return (
    <Container>
      <ButtonRainbow onClick={toggleTools} themes={rainbowBtnTheme}>
        {toolsActive ? (
          <MdClose className="icon" />
        ) : (
          <BsGear className="icon" />
        )}

        {size.width > 1110 && (
          <span>{toolsActive ? "Close tools" : "Tools access"}</span>
        )}
      </ButtonRainbow>
    </Container>
  );
};

const Container = styled.div`
  button {
    min-width: 14.7rem;

    @media (max-width: 1110px) {
      min-width: auto;
    }
  }
  .icon {
    font-size: 1.5rem;
  }
`;
