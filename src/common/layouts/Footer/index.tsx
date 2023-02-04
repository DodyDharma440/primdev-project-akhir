import React from "react";
import Link from "next/link";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="white" py="12">
      <Container>
        <Center flexDirection="column">
          <Link href="/">
            <Heading mb="8" color="green.500" fontSize="2xl">
              Cook App
            </Heading>
          </Link>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Link href="#">
              <Text
                mx="4"
                color="gray.500"
                _hover={{ color: "green.500" }}
                transition="color .2s"
              >
                Home
              </Text>
            </Link>
            <Text color="gray.300" display={{ base: "none", lg: "block" }}>
              |
            </Text>
            <Link href="#">
              <Text
                mx="4"
                color="gray.500"
                _hover={{ color: "green.500" }}
                transition="color .2s"
              >
                Recipes
              </Text>
            </Link>
            <Text color="gray.300" display={{ base: "none", lg: "block" }}>
              |
            </Text>
            <Link href="#">
              <Text
                mx="4"
                color="gray.500"
                _hover={{ color: "green.500" }}
                transition="color .2s"
              >
                Search
              </Text>
            </Link>
            <Text color="gray.300" display={{ base: "none", lg: "block" }}>
              |
            </Text>
            <Link href="#">
              <Text
                mx="4"
                color="gray.500"
                _hover={{ color: "green.500" }}
                transition="color .2s"
              >
                About
              </Text>
            </Link>
          </Stack>
        </Center>
        <Divider mt="8" mb="4" w="90%" mx="auto" />
        <Center>
          <Text fontSize="sm" color="gray.500">
            Copyright &copy; 2023
          </Text>
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;
