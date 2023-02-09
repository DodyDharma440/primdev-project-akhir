import React, { useCallback } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiSearch } from "react-icons/hi";
import { useSearch } from "@/modules/explore/stores";

const Hero = () => {
  const router = useRouter();
  const { searchValue, setSearchValue, setFreezedValue } = useSearch();

  const handleSearch = useCallback(() => {
    setFreezedValue(searchValue);
    router.push(`/search?q=${searchValue}`);
  }, [router, searchValue, setFreezedValue]);

  return (
    <Flex w="100vw" overflow="hidden" mb="10">
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={4} zIndex="2" minH="800px">
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
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <Button
                    leftIcon={<HiSearch />}
                    aria-label="Search"
                    size="lg"
                    colorScheme="green"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </HStack>
              </Flex>
            </Container>
          </Box>
        </GridItem>
        <GridItem colSpan={8}>
          <Box
            display={{ base: "none", lg: "block" }}
            transform="skewX(15deg) translateX(20%)"
            overflow="hidden"
          >
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
