import React from "react";
import {
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  Icon,
  Box,
  Tag,
  Grid,
  GridItem,
  Center,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { IoMdListBox, IoMdPricetag } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const MealDetailsSkeleton = () => {
  return (
    <Container py="32">
      <Container maxW="container.md" mb="12">
        <Skeleton mb="4">
          <Heading textAlign="center" fontSize="5xl" fontWeight="black">
            Meal Name
          </Heading>
        </Skeleton>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          fontSize="18px"
          spacing={{ base: "4", md: "0" }}
        >
          <HStack>
            <Icon as={IoMdListBox} color="green.500" fontSize="18px" />
            <Skeleton>
              <Text color="gray.700">Category</Text>
            </Skeleton>
          </HStack>
          <Text display={{ base: "none", md: "block" }} px="2" color="gray.400">
            |
          </Text>
          <HStack>
            <Icon as={IoMdPricetag} color="green.500" fontSize="18px" />
            <Skeleton>
              <Tag color="gray.700">Tag</Tag>
            </Skeleton>
          </HStack>
          <Text display={{ base: "none", md: "block" }} px="2" color="gray.400">
            |
          </Text>
          <HStack>
            <Icon as={IoLocationSharp} color="green.500" fontSize="18px" />
            <Skeleton>
              <Text color="gray.700">Area</Text>
            </Skeleton>
          </HStack>
        </Stack>
      </Container>
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: "0", lg: "10" }}>
        <GridItem colSpan={{ base: 12, lg: 6 }}>
          <Box
            w={{ base: "100%", lg: "90%" }}
            transform="translateX(16px) translateY(16px)"
            mb="10"
          >
            <Skeleton transform="translateX(-16px) translateY(-16px)">
              <Box
                height="500px"
                overflow="hidden"
                position="relative"
                bg="gray.100"
              />
            </Skeleton>
          </Box>
          <Box py="6">
            <Skeleton mb="4">
              <Text fontSize="2xl" fontWeight="bold">
                Ingredients
              </Text>
            </Skeleton>
            <Box
              overflowX="auto"
              whiteSpace="nowrap"
              display="flex"
              py="2"
              pr="32px"
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                  "-ms-overflow-style": "none",
                  " scrollbar-width": "none",
                },
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((num, index) => {
                const isLast = num === 6;

                return (
                  <Center
                    key={index}
                    display="inline-block"
                    mr={isLast ? "0" : "4"}
                  >
                    <Box
                      p="4"
                      boxShadow="md"
                      border="1px solid"
                      borderColor="gray.100"
                      bg="gray.50"
                      mb="2"
                      w="100px"
                      h="100px"
                    />
                    <Box maxW="100px">
                      <Skeleton mb="2">
                        <Text fontWeight="bold" whiteSpace="pre-wrap">
                          Name
                        </Text>
                      </Skeleton>
                      <Skeleton w="40%">
                        <Text
                          fontWeight="bold"
                          fontSize="sm"
                          whiteSpace="pre-wrap"
                          color="gray.600"
                        >
                          1
                        </Text>
                      </Skeleton>
                    </Box>
                  </Center>
                );
              })}
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 6 }}>
          <Skeleton mb="4">
            <Heading fontWeight="bold" fontSize="3xl" color="gray.700">
              Instructions
            </Heading>
          </Skeleton>
          <Box>
            <SkeletonText mb="2" skeletonHeight={"3"} />
            <SkeletonText mb="4" skeletonHeight={"3"} />
            <SkeletonText mb="2" skeletonHeight={"3"} />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default MealDetailsSkeleton;
