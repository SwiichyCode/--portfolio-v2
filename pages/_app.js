import GlobalStyle from "@/styles/globalStyles";
import styled from "styled-components";
import useStore from "@/stores/backgroundStore";
import { Header } from "@/components/layouts/Header";
import { RemoveScroll } from "react-remove-scroll";
import { Tools } from "@/components/features/Tools";
import "../styles/main.css";

export default function App({ Component, pageProps }) {
  const backgroundState = useStore((state) => state.backgroundActive);
  const toolsState = useStore((state) => state.toolsActive);

  return (
    <Container backgroundState={backgroundState}>
      <GlobalStyle />

      {toolsState && (
        <RemoveScroll>
          <Tools toolsState={toolsState} />
        </RemoveScroll>
      )}

      <AppWrapper>
        <Header />
        <Component {...pageProps} />
      </AppWrapper>
    </Container>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 450px) {
    /* padding: 0 1.2rem; */
    height: 100%;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    mask-image: linear-gradient(
      transparent,
      #000 30%,

      transparent 100%
    );
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.8)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");

    @media screen and (max-width: 450px) {
      /* padding: 0 1.2rem; */
      height: 100%;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Inter", sans-serif;
  overflow: hidden;

  /* @media (max-width: 1110px) {
    padding: 0 2.4rem;
    height: 100vh;
  } */

  @media screen and (max-width: 450px) {
    padding: 0 1.2rem;
    height: 100%;
  }
`;
