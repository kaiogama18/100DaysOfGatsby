import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Flex justifyContent="center" m={5}>
        <Box p={5} w="2xl" overflow="hidden">
          {children}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
