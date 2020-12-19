import React from "react";
import { useBoop } from "../hooks/use-boop";
import { animated } from "react-spring";

export default function Scream({ children }) {
  const [style, trigger] = useBoop({ scale: 3, rotation: 120, timing: 200 });

  return (
    <button
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "25px",
        fontSize: "5rem",
      }}
      onMouseDownCapture={trigger}>
      <animated.span style={style}>{children}</animated.span>
    </button>
  );
}
