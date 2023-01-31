import styled from "styled-components";
import { Logo } from "@/components/common/Logo";
import { Navbar } from "@/components/layouts/Navbar";
import { NavSocial } from "@/components/layouts/NavSocial";
import { ToolsAccessButton } from "@/components/common/ToolsAccessButton";
import { Toggle } from "@/components/common/Toggle";
import useStore from "@/stores/backgroundStore";
import { SocialArrow } from "@/components/common/SocialArrow";

export const Header = () => {
  const toggleBackground = useStore((state) => state.toggleBackground);
  const toolsActive = useStore((state) => state.toolsActive);

  return (
    <Container>
      <Wrapper className="a">
        <Logo />
        <Navbar />
      </Wrapper>
      <Wrapper>
        <Toggle handleToggle={toggleBackground} />
        <NavSocial />
        <ToolsAccessButton />
        {!toolsActive && <SocialArrow />}
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.4rem;

  img {
    position: absolute;
    top: 0;
    left: -50px;
    width: 100%;
    z-index: -2;
    display: none;
    @media (max-width: 1110px) {
      display: block;
      width: 150px;
      left: -0px;
      bottom: 0;
    }
  }

  /* backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px); */
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-24);
  z-index: 1000;
`;
