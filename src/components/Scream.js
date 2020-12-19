import React from "react";
import useSound from "use-sound";
import scream from "../sounds/wilhemScream.mp3";

export default function Scream() {
  // const soundUrl = "../sounds/wilhemScream.mp3";
  const [playbackRate, setPlaybackRate] = React.useState(0.5);
  const [play] = useSound(scream, {
    playbackRate,
    volume: 0.5,
  });
  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };
  return (
    <button onClick={handleClick}>
      <span role="img" aria-label="Heart">
        🐷
      </span>
    </button>
  );
}
