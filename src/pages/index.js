import { Link } from "gatsby";
import * as React from "react";
import { IconButton, Link as ChakraLink } from "@chakra-ui/react";
import Scream from "../components/Scream";
import sound from "../sounds/wilhemScream.mp3";
import useSound from "use-sound";
import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { FaOptinMonster } from "@react-icons/all-files/fa/FaOptinMonster";
import { ImMan } from "@react-icons/all-files/im/ImMan";
import { GiPig } from "@react-icons/all-files/gi/GiPig";
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
    <Grid
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(3, 1fr)"
      bg="gray.50"
      h="100vh">
      <GridItem
        rowSpan={1}
        colSpan={1}
        colStart={3}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Center>
          <Text fontSize="xl">
            <ChakraLink color="red.500">
              <Link to="/about"> About Page &rarr;</Link>
            </ChakraLink>
          </Text>
        </Center>
      </GridItem>

      <GridItem
        rowSpan={1}
        colSpan={1}
        colStart={3}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Grid templateColumns="repeat(3,1fr)" templateRows="1fr, 1fr" gap={3}>
          <GridItem>
            <span onMouseDownCapture={increasePlaybackRate}>
              <Scream>
                <IconButton
                  colorScheme="red"
                  aria-label="Pig Button"
                  icon={<GiPig />}
                />
              </Scream>
            </span>
          </GridItem>
          <GridItem>
            <span onMouseDownCapture={resetPlaybackRate}>
              <Scream>
                <IconButton
                  colorScheme="red"
                  aria-label="Man Button"
                  icon={<ImMan />}
                />
              </Scream>
            </span>
          </GridItem>
          <GridItem>
            <span onMouseDownCapture={reducePlaybackRate}>
              <Scream>
                <IconButton
                  colorScheme="red"
                  aria-label="Monster Button"
                  icon={<FaOptinMonster />}
                />
              </Scream>
            </span>
          </GridItem>
          <GridItem rowStart={2} colSpan={3}>
            <Center>
              <Text fontSize="sm">Press for sounds!</Text>
            </Center>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default IndexPage;
