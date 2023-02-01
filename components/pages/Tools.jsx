import styled from "styled-components";
import { motion } from "framer-motion";

const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export const Tools = ({ toolsState }) => {
  return (
    <Container as={motion.div} animate={toolsState ? show : hide}></Container>
  );
};

const Container = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(226, 232, 240, 0.95);
  opacity: 1;
  z-index: 999;
`;
