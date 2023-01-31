import styled from "styled-components";
import { Logo } from "@/components/common/Logo";
import { Navbar } from "@/components/layouts/Navbar";
import { NavSocial } from "@/components/layouts/NavSocial";
import { ToolsAccessButton } from "@/components/common/ToolsAccessButton";
import { Toggle } from "@/components/common/Toggle";
import useStore from "@/stores/backgroundStore";

export const Header = () => {
  const toggleBackground = useStore((state) => state.toggleBackground);

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
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.4rem;
  z-index: 1000;
  /* backdrop-filter: blur(3px); */
  /* -webkit-backdrop-filter: blur(3px); */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-24);
`;
