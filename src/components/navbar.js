import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { Link, useStaticQuery } from "gatsby";
import React from "react";

export default function Navbar() {
  const { site } = useStaticQuery(query);
  const { defaultTitle } = site.siteMetadata;

  return (
    <>
      <Box h="2vh" bg="red.500" />
      <Flex justifyContent="center" m={5}>
        <Box w="3xl">
          <Stack direction="row" justify="space-between" align="center">
            <Link to="/">
              <Heading size="md" my="2">
                {defaultTitle}
              </Heading>
            </Link>

            <Stack direction="row">
              <Link to="/contact">
                <Heading size="xs" my="2">
                  Contact
                </Heading>
              </Link>
              <Link to="/about">
                <Heading size="xs" my="2">
                  About
                </Heading>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
      }
    }
  }
`;
