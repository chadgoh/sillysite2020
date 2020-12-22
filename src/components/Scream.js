import React from "react";
import { useBoop } from "../hooks/use-boop";
import { animated } from "react-spring";

export default function Scream({ children }) {
  const [style, trigger] = useBoop({ scale: 3, rotation: 120, timing: 200 });

  return (
    <button onMouseDownCapture={trigger}>
      <animated.span style={style}>{children}</animated.span>
    </button>
  );
}
