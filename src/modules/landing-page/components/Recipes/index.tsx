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
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { apiMeal } from "@/common/api";
import { IMeal } from "@/modules/meals/interfaces";
import { MealCard, MealsGrid } from "@/modules/meals/components";

const Recipes = () => {
  const { data, isLoading } = useQuery({
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

      <Container>
        <MealsGrid isLoading={isLoading} meals={meals.slice(0, 8)} />
        <Center my="6">
          <Link href="/recipes">
            <Button colorScheme="green" size="lg">
              More Recipes
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  );
};

export default Recipes;
