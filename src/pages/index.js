import { Link } from "gatsby";
import * as React from "react";
import Boop from "../components/Boop";
import Scream from "../components/Scream";
import sound from "../sounds/wilhemScream.mp3";
import useSound from "use-sound";

// markup
const IndexPage = () => {
  const [playbackRate, setPlaybackRate] = React.useState(0.5);
  const [play] = useSound(sound, {
    playbackRate,
    volume: 0.5,
  });

  const increasePlaybackRate = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  const resetPlaybackRate = () => {
    setPlaybackRate(1);
    play();
  };

  const reducePlaybackRate = () => {
    if (playbackRate > 0.2) {
      setPlaybackRate(playbackRate - 0.1);
    } else {
      setPlaybackRate(0.2);
    }
    play();
  };
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B5EAD7",
      }}>
      <div style={{ alignSelf: "center" }}>
        <Boop rotation={20} timing={200}>
          <button>
            <Link to="/about"> About Page</Link>
          </button>
        </Boop>
        <div>
          <span onMouseDownCapture={increasePlaybackRate}>
            <Scream>
              <span role="img" aria-label="Pig">
                🐷
              </span>
            </Scream>
          </span>
          <span onMouseDownCapture={resetPlaybackRate}>
            <Scream>
              <span role="img" aria-label="Pig">
                👨
              </span>
            </Scream>
          </span>
          <span onMouseDownCapture={reducePlaybackRate}>
            <Scream>
              <span role="img" aria-label="Pig">
                👾
              </span>
            </Scream>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
