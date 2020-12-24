import React from "react";
import { Link } from "gatsby";
import {
  Grid,
  GridItem,
  Text,
  Link as ChakraLink,
  Box,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { IoMdCheckboxOutline } from "@react-icons/all-files/io/IoMdCheckboxOutline";
import { CgSmileSad } from "@react-icons/all-files/cg/CgSmileSad";
import NavBar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <Grid
        pt={10}
        bg="gray.50"
        h={["100vh", "100vh", "100vh"]}
        gridTemplateRows="5%, 1fr auto"
        alignItems="start"
        justifyItems="center">
        <GridItem placeItems="center">
          <ChakraLink color="red.500">
            <Link to="/">← Back to home page</Link>
          </ChakraLink>
          <Text mt={5} fontSize="xl" fontWeight="bold">
            About
          </Text>
          <Box w={[300, 400, 500]}>
            <Text mb={5} fontSize="lg">
              Using the{" "}
              <ChakraLink
                href="https://www.gatsbyjs.com/blog/silly-site-challenge/"
                isExternal
                color="red.500">
                Gatsby #SillySiteChallenge
              </ChakraLink>{" "}
              as an opportunity implement some of the content that Josh Comeau
              has written on his{" "}
              <ChakraLink
                href="https://www.joshwcomeau.com"
                isExternal
                color="red.500">
                blog.
              </ChakraLink>
            </Text>

            <Text as="u" fontWeight="bold">
              Goals
            </Text>
            <List listStylePosition="inside" mb={5}>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="red.500" />
                <ChakraLink
                  color="red.500"
                  isExternal
                  href="https://www.joshwcomeau.com/react/boop/">
                  Hover Animations
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="red.500" />
                <ChakraLink
                  color="red.500"
                  isExternal
                  href="https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/">
                  UseSound Library
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="red.500" />
                use a component library for quick styling - went with{" "}
                <ChakraLink
                  color="red.500"
                  isExternal
                  href="https://chakra-ui.com/">
                  ChakraUI
                </ChakraLink>
              </ListItem>
            </List>

            <Text as="u" fontSize="xs">
              Notes:
            </Text>
            <Text fontSize="xs">
              Not using Markdown files as ChakraUI's CSSReset seemingly gets in
              the way of Markdown styling <CgSmileSad />
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default AboutPage;
