import { useEffect, useRef, useReducer } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TodoList } from "@/components/features/Tools/TodoList";
import { Navbar } from "@/components/layouts/Navbar";
import { useWindowSize } from "@/hooks/useWindowSize";

const show = {
  opacity: 1,
  display: "flex",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export const Tools = ({ toolsState }) => {
  const [ignored, fctMiseAJour] = useReducer((x) => x + 1, 0);
  const constraintsRef = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    fctMiseAJour();
  }, [toolsState]);

  return (
    <Container
      as={motion.div}
      ref={constraintsRef}
      animate={toolsState ? show : hide}
    >
      {size.width < 880 && <Navbar mobile={true} />}
      {/* <TodoList as={motion.div} drag dragConstraints={constraintsRef} /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 1.4rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(226, 232, 240, 0.95);
  opacity: 1;
  z-index: 999;
  overflow: hidden;
`;
