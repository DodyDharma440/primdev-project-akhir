import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box position="fixed" top="0" w="100%" zIndex="100">
      <Box position="relative">
        <Box
          w="60%"
          bg="white"
          boxShadow="md"
          px="6"
          py="4"
          position="relative"
          _after={{
            content: "''",
            position: "absolute",
            right: "-62px",
            top: "-25px",
            borderStyle: "solid",
            width: "100px",
            height: "68px",
            backgroundColor: "#fff",
            boxShadow:
              "3px 4px 6px -1px rgba(0, 0, 0, 0.1),5px 2px 4px -1px rgba(0, 0, 0, 0.06)",
            transform: "rotate(-45deg)",
            borderLeft: "2px solid #fff",
          }}
        >
          <Box w="calc(100vw - var(--chakra-space-12))">
            <Container maxW="container.xl">
              <Text fontSize="2xl" color="green.400" fontWeight="bold">
                Cook
              </Text>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
