import {
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  Icon,
  Tag,
  Box,
  Center,
  Stack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/legacy/image";
import React, { use, useMemo } from "react";
import { IoMdListBox, IoMdPricetag } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { getMealById } from "../../api";
import { IIngredient } from "../../interfaces";
import MealDetailsSkeleton from "./Skeleton";

type MealDetailsProps = {
  mealId: string;
};

const MealDetails: React.FC<MealDetailsProps> = ({ mealId }) => {
  const { data, isLoading } = useQuery({
    queryKey: [`meal-${mealId}`],
    queryFn: () => getMealById({ id: mealId }),
  });

  const meal = useMemo(() => {
    return data?.data.meals?.[0];
  }, [data?.data.meals]);

  const ingredients = useMemo(() => {
    const _ingredients: IIngredient[] = [];
    if (meal) {
      const ingredientLists: Record<`strIngredient${number}`, string> = {};
      Object.entries(meal).forEach(([key, value]) => {
        if (key.includes("strIngredient")) {
          ingredientLists[key as `strIngredient${number}`] = value;
        }
      });

      Object.entries(ingredientLists).forEach(([key, value], index) => {
        const capitalize = (val: string) => {
          if (val) {
            return val
              .split(" ")
              .map((v) => `${v.charAt(0).toUpperCase()}${v.slice(1)}`)
              .join(" ");
          }
          return "";
        };

        if (value) {
          _ingredients.push({
            name: value,
            measurement:
              meal[
                `strMeasure${key.replace(
                  "strIngredient",
                  ""
                )}` as keyof typeof meal
              ] || "-",
            thumbnailUrl: `https://www.themealdb.com/images/ingredients/${capitalize(
              value
            )}.png`,
          });
        }
      });
    }
    return _ingredients;
  }, [meal]);

  return isLoading ? (
    <MealDetailsSkeleton />
  ) : (
    <Container py="32">
      <Container maxW="container.md" mb="12">
        <Heading textAlign="center" fontSize="5xl" mb="4" fontWeight="black">
          {meal?.strMeal}
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          fontSize="18px"
          spacing={{ base: "4", md: "0" }}
        >
          <HStack>
            <Icon as={IoMdListBox} color="green.500" fontSize="18px" />
            <Text color="gray.700">{meal?.strCategory}</Text>
          </HStack>
          <Text display={{ base: "none", md: "block" }} px="2" color="gray.400">
            |
          </Text>
          <HStack>
            <Icon as={IoMdPricetag} color="green.500" fontSize="18px" />
            {meal?.strTags.split(",").map((tag, index) => {
              return (
                <Tag color="gray.700" key={index}>
                  {tag}
                </Tag>
              );
            })}
          </HStack>
          <Text display={{ base: "none", md: "block" }} px="2" color="gray.400">
            |
          </Text>
          <HStack>
            <Icon as={IoLocationSharp} color="green.500" fontSize="18px" />
            <Text color="gray.700">{meal?.strArea}</Text>
          </HStack>
        </Stack>
      </Container>
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: "0", lg: "10" }}>
        <GridItem colSpan={{ base: 12, lg: 6 }}>
          <Box
            w={{ base: "100%", lg: "90%" }}
            border="4px solid"
            borderColor="green.400"
            transform="translateX(16px) translateY(16px)"
            mb="10"
          >
            <Box
              height="500px"
              overflow="hidden"
              position="relative"
              bg="gray.100"
              transform="translateX(-16px) translateY(-16px)"
            >
              <Image
                src={meal?.strMealThumb || "/"}
                alt="Thumbnail"
                objectFit="cover"
                layout="fill"
              />
            </Box>
          </Box>
          <Box py="6">
            <Text fontSize="2xl" mb="4" fontWeight="bold">
              Ingredients
            </Text>
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
              {ingredients.map((ingredient, index) => {
                const isLast = ingredients.length - 1 === index;
                const { name, measurement, thumbnailUrl } = ingredient;

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
                    >
                      <Box
                        position="relative"
                        w="100px"
                        h="100px"
                        overflow="hidden"
                        borderRadius="sm"
                      >
                        <Image
                          src={thumbnailUrl}
                          alt={`Thumbnail ${name}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </Box>
                    </Box>
                    <Box maxW="100px">
                      <Text fontWeight="bold" whiteSpace="pre-wrap">
                        {name}
                      </Text>
                      <Text
                        fontWeight="bold"
                        fontSize="sm"
                        whiteSpace="pre-wrap"
                        color="gray.600"
                      >
                        {measurement}
                      </Text>
                    </Box>
                  </Center>
                );
              })}
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 6 }}>
          <Heading mb="4" fontWeight="bold" fontSize="3xl" color="gray.700">
            Instructions
          </Heading>
          <Box>
            <Text lineHeight="1.8" whiteSpace="pre-wrap">
              {meal?.strInstructions}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default MealDetails;
