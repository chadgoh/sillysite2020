import { Link } from "gatsby";
import * as React from "react";
import Boop from "../components/Boop";
import Scream from "../components/Scream";
import sound from "../sounds/wilhemScream.mp3";
import useSound from "use-sound";

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
      style={{
        display: "grid",
        gridTemplateColumns: "2px 1fr 2px",
        height: "100vh",
      }}>
      <div
        style={{
          gridColumn: "2",
          display: "grid",

          gridTemplateRows: "repeat(3, 1fr)",
          gridTemplateColumns: "repeat(3, 1fr)",
          backgroundColor: "#B5EAD7",
        }}>
        <div style={{ gridColumn: "2", alignSelf: "center" }}>
          <Link to="/about"> About Page &rarr;</Link>
        </div>

        <div
          style={{
            gridColumn: "1",
            padding: "5px",
          }}>
          <span onMouseDownCapture={increasePlaybackRate}>
            <Scream>
              <span role="img" aria-label="Pig">
                🐷
              </span>
            </Scream>
          </span>
        </div>
        <div style={{ gridColumn: "2", padding: "5px" }}>
          <span onMouseDownCapture={resetPlaybackRate}>
            <Scream>
              <span role="img" aria-label="Pig">
                👨
              </span>
            </Scream>
          </span>
        </div>
        <div style={{ gridColumn: "3", padding: "5px" }}>
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
