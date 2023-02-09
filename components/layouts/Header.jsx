import styled from "styled-components";
import { Logo } from "@/components/common/Logo";
import { Navbar } from "@/components/layouts/Navbar";
import { NavSocial } from "@/components/layouts/NavSocial";
import { ToolsAccessButton } from "@/components/common/ToolsAccessButton";
import { Toggle } from "@/components/common/Toggle";
import useStore from "@/stores/backgroundStore";
import { SocialArrow } from "@/components/common/SocialArrow";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Header = () => {
  const toggleBackground = useStore((state) => state.toggleBackground);
  const toolsActive = useStore((state) => state.toolsActive);
  const size = useWindowSize();

  return (
    <Container>
      <Wrapper>
        <Logo />
        {size.width > 880 && <Navbar />}
      </Wrapper>
      <Wrapper>
        {/* <Toggle handleToggle={toggleBackground} /> */}
        <NavSocial />
        <ToolsAccessButton />
        {!toolsActive && <SocialArrow />}
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  max-width: 1550px;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.4rem;
  transition: all 0.3s ease-in-out;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-24);
  z-index: 1000;
`;
