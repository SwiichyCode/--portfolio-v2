import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/themes";

export const ThemeLayout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
