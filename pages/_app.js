import GlobalStyle from "@/styles/globalStyles";
import { Header } from "@/components/global/Header";
import { ThemeLayout } from "@/components/layouts/ThemeLayout";
import { AppLayout } from "@/components/layouts/AppLayout";
import { ToolsLayout } from "@/components/layouts/ToolsLayout";
import { AppWrapper } from "@/components/layouts/AppWrapper";
import "../styles/main.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeLayout>
      <AppLayout>
        <GlobalStyle />

        <ToolsLayout />

        <AppWrapper>
          <Header />
          <Component {...pageProps} />
        </AppWrapper>
      </AppLayout>
    </ThemeLayout>
  );
}
