import useStore from "@/stores/backgroundStore";
import styled from "styled-components";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroStep } from "@/components/HeroStep";
import { Tools } from "@/components/Tools";
import { RemoveScroll } from "react-remove-scroll";
import { About } from "@/components/About";
export default function Home() {
  const backgroundState = useStore((state) => state.backgroundActive);
  const toolsState = useStore((state) => state.toolsActive);

  const tabsItems = [
    {
      id: 1,
      tabName: "About Me",
      render: <div>tab 1 content</div>,
    },
    {
      id: 2,
      tabName: "Professional experience",
      render: <div>tab 2 content</div>,
    },
    {
      id: 3,
      tabName: "Skills",
      render: <div>tab 3 content</div>,
    },
  ];

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
          <HeroStep />
        </Wrapper>

        <About />
      </AppContainer>
    </Container>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -4.8rem;
  padding-left: 4.8rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
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
    /* height: 100vh; */
  }

  @media (max-width: 550px) {
    padding: 0 1.2rem;
    /* height: 100%; */
  }
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
`;

const ComponentsBuilder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  .line {
    width: 2px;
    height: 20rem;
    background-image: linear-gradient(
      to top,
      var(--color-blue),
      var(--color-cyan)
    );
  }

  .index {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--color-white);
    /* margin: 2.4rem 0; */

    font-family: "Roboto Mono", monospace;
    background-image: linear-gradient(
      to right,
      var(--color-blue),
      var(--color-cyan)
    );
  }
  /* justify-content: center; */
  /* align-items: center; */
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
`;
