import React from "react";
import Image from "next/legacy/image";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import TestiItem from "./TestiItem";
import { testimonials } from "../../constants";

const About = () => {
  return (
    <Box pt="80px">
      <Box mb="8">
        <Heading textAlign="center">What people say about us?</Heading>
        <Divider
          my="4"
          w="150px"
          borderColor="green.500"
          borderBottomWidth="5px"
          mx="auto"
        />
      </Box>

      <Box position="relative" py="20">
        <Image
          src="/images/about-banner.jpg"
          alt="About Banner"
          objectFit="cover"
          layout="fill"
        />
        <Box bg="black" position="absolute" inset="0" opacity="0.5" />
        <Container zIndex="2" position="relative">
          <Grid templateColumns="repeat(12, 1fr)" gap="6">
            {testimonials.map((testi, index) => {
              return (
                <GridItem key={index} colSpan={4}>
                  <TestiItem testi={testi} />
                </GridItem>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Box bg="gray.50" py="20">
        <Container bg="white" py="10">
          <Container maxW="90%">
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Heading fontSize="3xl" fontWeight="700" mb="3">
                  Are you ready to cook healthy food?
                </Heading>
                <Text fontSize="lg">Find your favourite recipe now!</Text>
              </Box>
              <Button size="lg" colorScheme="green">
                Get Started
              </Button>
            </Flex>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
