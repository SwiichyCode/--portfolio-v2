import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledButton } from "@/components/base/Button";

export const ButtonRainbow = ({ onClick, themes, mWidth, children }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThemeIndex((currentIndex) => {
        if (currentIndex === themes.length - 1) {
          return 0;
        } else {
          return currentIndex + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTheme = themes[currentThemeIndex];

  return (
    <StyledRainbowButton
      onClick={onClick}
      currentTheme={currentTheme}
      mWidth={mWidth}
    >
      {children}
    </StyledRainbowButton>
  );
};

const StyledRainbowButton = styled(StyledButton)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${(props) => `${props.mWidth}px`};
  filter: ${(props) => props.currentTheme.theme};
  border: ${(props) => props.currentTheme.border};
  font-weight: 600;
  z-index: 2;
`;
