import React from "react";
import useStore from "@/stores/backgroundStore";
import { useWindowSize } from "@/hooks/useWindowSize";
import { BsGear } from "react-icons/bs";
import { ButtonRainbow } from "@/components/common/ButtonRainbow";
import { rainbowBtnTheme } from "@/styles/themes";

export const ToolsAccessButton = () => {
  const size = useWindowSize();
  const toggleTools = useStore((state) => state.toggleTools);

  return (
    <>
      <ButtonRainbow onClick={toggleTools} themes={rainbowBtnTheme}>
        <BsGear />
        {size.width > 1110 && <span>Quick Access</span>}
      </ButtonRainbow>
    </>
  );
};
