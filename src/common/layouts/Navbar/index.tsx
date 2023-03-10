import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const router = useRouter();

  return (
    <Box position="fixed" top="0" w="100%" zIndex="100">
      <Box display={{ base: "none", lg: "block" }} position="relative">
        <Box
          w="60%"
          bg="white"
          boxShadow="md"
          px="6"
          py="4"
          height="68px"
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
            <Container display="flex">
              <Link href="/">
                <Text fontSize="2xl" color="green.400" fontWeight="bold">
                  Cook
                </Text>
              </Link>

              <HStack
                spacing="8"
                display={{ base: "none", lg: "flex" }}
                zIndex="3"
                ml={{
                  lg: "16%",
                  xl: router.pathname === "/recipes" ? "400px" : "300px",
                }}
              >
                <Link href="/" shallow>
                  Home
                </Link>
                <Link href="/#recipe" shallow>
                  Recipe
                </Link>
                <Link href="/#about" shallow>
                  About Us
                </Link>
                {router.pathname === "/recipes" ? null : (
                  <Link href="/recipes">
                    <Button colorScheme="green" zIndex="3">
                      Get Started
                    </Button>
                  </Link>
                )}
              </HStack>
            </Container>
          </Box>
        </Box>
      </Box>
      <MobileNavbar />
    </Box>
  );
};

export default Navbar;
