import React, { useEffect, useMemo } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { MealsGrid } from "@/modules/meals/components";
import { getMealsByCategory } from "@/modules/explore/api";
import { getCategories } from "@/modules/categories/api";

const Recipes = () => {
  const { data: dataCategory, isLoading: isLoadingCategory } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const categories = useMemo(() => {
    return dataCategory?.data.categories || [];
  }, [dataCategory]);

  const randCategory = useMemo(() => {
    const index = Math.floor(Math.random() * categories.length);
    return categories[index]?.strCategory;
  }, [categories]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["recipes-home"],
    queryFn: () => getMealsByCategory({ category: randCategory }),
    enabled: false,
  });

  const meals = useMemo(() => {
    return data?.data.meals || [];
  }, [data?.data.meals]);

  useEffect(() => {
    if (randCategory) {
      refetch();
    }
  }, [randCategory, refetch]);

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
        <MealsGrid
          isLoading={isLoading || isLoadingCategory}
          meals={meals.slice(0, 8)}
        />
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
