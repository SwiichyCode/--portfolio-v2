import React, { useState, useEffect, useRef } from "react";

export const useGradientTransition = (duration) => {
  const blueGradient =
    "linear-gradient(to right, var(--color-blue), var(--color-cyan))";
  const orangeGradient =
    "linear-gradient(to right, var(--color-orange), var(--color-yellow))";

  const [color, setColor] = useState(orangeGradient);
  const colorRef = useRef(color);

  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  useEffect(() => {
    let interval;
    let transition = false;

    const handleTransition = () => {
      setColor((currentColor) => {
        if (currentColor === blueGradient) {
          transition = true;
          return orangeGradient;
        } else {
          transition = true;
          return blueGradient;
        }
      });
    };

    if (!transition) {
      handleTransition();
    }

    interval = setInterval(() => {
      handleTransition();
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  return colorRef.current;
};
