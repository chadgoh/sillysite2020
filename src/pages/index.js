import { Link } from "gatsby";
import * as React from "react";
import { Heading, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import Scream from "../components/Scream";
import sound from "../sounds/wilhemScream.mp3";
import useSound from "use-sound";
import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { VscDebugRestart } from "@react-icons/all-files/vsc/VscDebugRestart";
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
    <>
      <Heading color="red.500"> BeepBoopBeep </Heading>
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
                    aria-label="Minus Button"
                    icon={<FaMinus />}
                  />
                </Scream>
              </span>
            </GridItem>
            <GridItem>
              <span onMouseDownCapture={resetPlaybackRate}>
                <Scream>
                  <IconButton
                    colorScheme="red"
                    aria-label="Reset Button"
                    icon={<VscDebugRestart />}
                  />
                </Scream>
              </span>
            </GridItem>
            <GridItem>
              <span onMouseDownCapture={reducePlaybackRate}>
                <Scream>
                  <IconButton
                    colorScheme="red"
                    aria-label="Plus Button"
                    icon={<FaPlus />}
                  />
                </Scream>
              </span>
            </GridItem>
            <GridItem rowStart={2} colSpan={3}>
              <Center>
                <Text fontSize="sm">Press for sounds!</Text>
              </Center>
            </GridItem>
            <GridItem rowStart={3} colSpan={3}>
              <Center textAlign="center">
                <Text fontSize="xs">Buttons change playback rate</Text>
              </Center>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default IndexPage;
