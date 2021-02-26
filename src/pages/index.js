import { Box, Heading } from "@chakra-ui/layout";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Box borderRadius="lg" overflow="hidden" w="3xl">
          <StaticImage
            quality={100}
            layout="fullWidth"
            placeholder="blurred"
            formats={["auto", "webp"]}
            src="../images/headphone.jpeg"
            alt="headphone banner background red"
          />
        </Box>

        <Box p="6">
          <Heading size="lg">
            High-quality stereo speakers to notebooks and desktops. They
            guarantee clean and natural sound.
          </Heading>
        </Box>
      </Layout>
    </>
  );
}
