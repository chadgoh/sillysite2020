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
  const increasePlaybackRate = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  const reducePlaybackRate = () => {
    setPlaybackRate(playbackRate - 0.1);
    play();
  };
  return (
    <div>
      <button onClick={increasePlaybackRate}>
        <span role="img" aria-label="Heart">
          🐷
        </span>
      </button>
      <button onClick={reducePlaybackRate}>👨</button>
    </div>
  );
}
