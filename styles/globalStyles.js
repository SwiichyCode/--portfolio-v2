import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body, button {
    font-family: 'Plus Jakarta Sans', sans-serif;
}

:root {
--color-blue: #007CF0;
--color-cyan: #00DFD8;
--color-orange: #ff4D4D;
--color-yellow: #F9CB28;
--color-purple: #7928CA;
--color-pink: #FF0080;
--color-white: #fff;
--color-black: #000;
--color-grey: #D8E0EA;
--color-grey-200: rgba(0, 0, 0, .2);
--color-twitter: #1c9aef;
--color-react: #61DAFB;

--radius-md: 0.8rem;

--text-color: #334155;

--gap-4: 0.4rem;
--gap-8: 0.8rem;
--gap-12: 1.2rem;
--gap-14: 1.4rem;
--gap-16: 1.6rem;
--gap-24: 2.4rem;
--gap-36: 3.6rem;
--gap-48: 4.8rem;

--font-size-12: 1.2rem;
--font-size-14: 1.4rem;
--font-size-13: 1.3rem;
--font-size-15: 1.5rem;
--font-size-16: 1.6rem;
--font-size-18: 1.8rem;
--font-size-20: 2rem;
--font-size-22: 2.2rem;
--font-size-24: 2.4rem;
--font-size-32: 3.2rem;

--font-size-big: 6rem;

--font-weight-500: 500;
--font-weight-700: 700;

--font-jetbrains: 'JetBrains Mono', monospace;

--fileredShadow: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
--fileredDynamic: drop-shadow(0px 4px 4px rgba(0, 124, 240, 0.25));
--cardShadow: 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
--transition-all: all 0.3s ease-in-out;

--shadow-large: box-shadow:
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
--shadow-smallest: 0px 2px 4px rgba(0,0,0,.1);
--shadow-extra-small: 0px 4px 8px rgba(0,0,0,.12);
--shadow-small: 0 5px 10px rgba(0,0,0,.12);
--shadow-medium: 0 8px 30px rgba(0,0,0,.12);
--shadow-large: 0 30px 60px rgba(0,0,0,.12);
--shadow-hover: 0 30px 60px rgba(0,0,0,.12);
--shadow-sticky: 0 12px 10px -10px rgba(0,0,0,.12);

--header-breakpoint: 1110px;
}
`;

export default GlobalStyle;
