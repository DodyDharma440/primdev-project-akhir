import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HiSearch } from "react-icons/hi";
// import {}

const Hero = () => {
  return (
    <Flex w="100vw" overflow="hidden" mb="10">
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={4} zIndex="2">
          <Box w="100vw" h="100%" overflow="hidden">
            <Container h="100%">
              <Flex flexDirection="column" justifyContent="center" h="100%">
                <Box mb="4">
                  <Heading
                    mb="4"
                    fontSize="6xl"
                    lineHeight="1.4em"
                    fontWeight="black"
                  >
                    Help You to Cook <br /> Healthy Food
                  </Heading>
                  <Text fontSize="2xl" letterSpacing="0.5px">
                    Find yout favourite recipe now!
                  </Text>
                </Box>
                <HStack>
                  <Input
                    placeholder="Search Recipe..."
                    w="300px"
                    size="lg"
                    focusBorderColor="green.500"
                  />
                  <Button
                    leftIcon={<HiSearch />}
                    aria-label="Search"
                    size="lg"
                    colorScheme="green"
                  >
                    Search
                  </Button>
                </HStack>
              </Flex>
            </Container>
          </Box>
        </GridItem>
        <GridItem colSpan={8}>
          <Box transform="skewX(15deg) translateX(20%)" overflow="hidden">
            <Box
              flex="1"
              transform="skewX(-15deg)"
              backgroundImage="url(/images/hero-banner.jpg)"
              w="100%"
              height="100%"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              minH="800px"
              position="relative"
              ml="-12%"
            >
              <Box position="absolute" backgroundColor="#00000051" inset="0" />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
