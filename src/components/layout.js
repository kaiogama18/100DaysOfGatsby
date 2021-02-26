import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";
import SEO from './seo';

export default function Layout({ children }) {
  return (
    <ChakraProvider>
      <SEO />
      <Navbar />
      <Flex justifyContent="center" m={5}>
        <Box  w="3xl" overflow="hidden">
          {children}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
