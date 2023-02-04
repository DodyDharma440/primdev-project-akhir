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
            right: "-100px",
            top: "0",
            dropShadow: "md",
            width: "",
            height: 0,
            borderStyle: "solid",
            borderWidth: "68px 100px 0 0",
            borderColor: "#fff transparent transparent transparent",
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
