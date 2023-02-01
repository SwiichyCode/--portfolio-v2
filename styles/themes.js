import { mixins } from "./mixins";

export const rainbowBtnTheme = [
  {
    theme: "drop-shadow(0px 4px 4px rgba(0, 124, 240, 0.25))",
    border: "1px solid var(--color-blue)",
    color: "rgba(0, 124, 240, 0.8)",
  },
  // {
  //   theme: "drop-shadow(0px 4px 4px rgba(0, 255, 255, 0.25))",
  //   border: "1px solid var(--color-cyan)",
  //   color: "rgba(0, 255, 255, 0.8)",
  // },
  {
    theme: "drop-shadow(0px 4px 4px rgba(249, 203, 40, 0.25))",
    border: "1px solid var(--color-yellow)",
    color: "rgba(249, 203, 40, 0.8)",
  },
  // add more themes here
];

export const theme = {
  mixins,
};
