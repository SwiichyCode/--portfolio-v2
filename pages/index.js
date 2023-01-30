import { useState } from "react";
import useStore from "@/stores/backgroundStore";
import styled from "styled-components";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CardStory } from "@/components/CardStory";
import { Tools } from "@/components/Tools";
import { RemoveScroll } from "react-remove-scroll";
import { TabsStory } from "@/components/TabsStory";

export default function Home() {
  const backgroundState = useStore((state) => state.backgroundActive);
  const toolsState = useStore((state) => state.toolsActive);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container backgroundState={backgroundState}>
      <AppContainer>
        {toolsState && (
          <RemoveScroll>
            <Tools />
          </RemoveScroll>
        )}
        <Header />
        <Wrapper>
          <Hero />
          <CardStory />
        </Wrapper>

        {/* <ComponentsBuilder>
          <TabsStory />
        </ComponentsBuilder> */}
      </AppContainer>
    </Container>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -4.8rem;
  padding-left: 4.8rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: 100%; */
  font-family: "Inter", sans-serif;
  background-image: ${(props) =>
    props.backgroundState &&
    `linear-gradient(
      transparent 23px,
      rgba(220, 220, 200, 0.8) 24px,
      transparent 24px
    ),
    linear-gradient(
      90deg,
      transparent 23px,
      rgba(220, 220, 200, 0.8) 24px,
      transparent 24px
    )`};
  background-size: 100% 32px, 32px 100%;
  background-color: #f5f5f5;
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.8));
  padding: 0 4.8rem;

  @media (max-width: 1110px) {
    padding: 0 2.4rem;
    height: 100vh;
  }

  @media (max-width: 550px) {
    padding: 0 1.2rem;
    height: 100%;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
  overflow-x: hidden;
`;

const ComponentsBuilder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
