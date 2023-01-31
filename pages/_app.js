import GlobalStyle from "@/styles/globalStyles";
import styled from "styled-components";
import useStore from "@/stores/backgroundStore";
import { Header } from "@/components/layouts/Header";
import { RemoveScroll } from "react-remove-scroll";
import { Tools } from "@/components/pages/Tools";
import "../styles/main.css";

export default function App({ Component, pageProps }) {
  const backgroundState = useStore((state) => state.backgroundActive);
  const toolsState = useStore((state) => state.toolsActive);

  return (
    <Container backgroundState={backgroundState}>
      <GlobalStyle />
      {toolsState && (
        <RemoveScroll>
          <Tools />
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
  max-width: 1550px;
  margin: 0 auto;
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
