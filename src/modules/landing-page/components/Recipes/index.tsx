import React, { useMemo } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { apiMeal } from "@/common/api";
import { IMeal } from "@/modules/meals/interfaces";
import { MealCard } from "@/modules/meals/components";

const Recipes = () => {
  const { data, isLoading, isRefetching, error } = useQuery({
    queryKey: ["recipes-home"],
    queryFn: () => apiMeal.get<{ meals: IMeal[] }>(`/filter.php?c=Seafood`),
  });

  const meals = useMemo(() => {
    return data?.data.meals || [];
  }, [data?.data.meals]);

  return (
    <Box py="80px">
      <Box mb="8">
        <Heading textAlign="center">Our Recipes</Heading>
        <Divider
          my="4"
          w="150px"
          borderColor="green.500"
          borderBottomWidth="5px"
          mx="auto"
        />
      </Box>

      <Container maxW="container.xl">
        <Grid templateColumns="repeat(12, 1fr)" gap="4">
          {meals.slice(0, 8).map((meal, index) => {
            return (
              <GridItem colSpan={3} key={index}>
                <MealCard meal={meal} />
              </GridItem>
            );
          })}
        </Grid>
        <Center my="6">
          <Button colorScheme="green" size="lg">
            More Recipes
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default Recipes;
