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
    <Flex w="100vw" overflow="hidden">
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={5} zIndex="2">
          <Box w="100vw" h="100%" overflow="hidden">
            <Container maxW="container.xl" h="100%">
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
                    w="400px"
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
        <GridItem colSpan={7}>
          <Box
            flex="1"
            transform="skewX(15deg) translateX(120px)"
            backgroundImage="url(https://www.themealdb.com/images/media/meals/1548772327.jpg)"
            height="100%"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            w="100%"
            minH="800px"
            position="relative"
          >
            <Box position="absolute" backgroundColor="#00000051" inset="0" />
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
