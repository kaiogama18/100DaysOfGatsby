import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Box p={4}>{children}</Box>
    </ChakraProvider>
  );
}
