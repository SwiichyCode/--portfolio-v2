import GlobalStyle from "@/styles/globalStyles";
import "../styles/main.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
