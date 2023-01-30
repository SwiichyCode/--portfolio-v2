import styled from "styled-components";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import { NavSocial } from "@/components/NavSocial";
import { ToolsAccessButton } from "@/components/ToolsAccessButton";
import { Toggle } from "@/components/Toggle";
import useStore from "@/stores/backgroundStore";
// import { useWindowSize } from "@/hooks/useWindowSize";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
export const Header = () => {
  const toggleBackground = useStore((state) => state.toggleBackground);

  const [width, height] = useWindowSize();

  return (
    <Container>
      <Wrapper className="a">
        <Logo />
        <Navbar />
      </Wrapper>
      <Wrapper>
        <Toggle handleToggle={toggleBackground} />
        {/* <Toggle handleToggle={toggleBackground} /> */}
        <NavSocial />
        <ToolsAccessButton />
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
  z-index: 1000;
  /* backdrop-filter: blur(3px); */
  /* -webkit-backdrop-filter: blur(3px); */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-24);
`;
