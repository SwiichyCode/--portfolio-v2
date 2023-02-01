import React from "react";
import useStore from "@/stores/GlobalStateStore";
import { RemoveScroll } from "react-remove-scroll";
import { Tools } from "@/components/features/Tools";

export const ToolsLayout = () => {
  const toolsState = useStore((state) => state.toolsActive);

  return (
    <>
      {toolsState && (
        <RemoveScroll>
          <Tools toolsState={toolsState} />
        </RemoveScroll>
      )}
    </>
  );
};
