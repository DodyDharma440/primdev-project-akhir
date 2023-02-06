import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { MealCard, MealsGrid } from "@/modules/meals/components";
import { useCategory } from "../../stores";
import { getMealsByCategory } from "../../api";
import Categories from "../Categories";
import Search from "../Search";

const ExploreContent = () => {
  const { activeCategory } = useCategory();
  const { data, isLoading } = useQuery({
    queryKey: [`meals-${activeCategory}`],
    queryFn: () => getMealsByCategory({ category: activeCategory }),
    enabled: Boolean(activeCategory),
  });

  const meals = useMemo(() => {
    return data?.data.meals || [];
  }, [data?.data.meals]);

  return (
    <Container py="20">
      <Container maxW="container.md" mb="6">
        <Search />
      </Container>
      <Categories />
      <MealsGrid isLoading={isLoading} meals={meals} />
    </Container>
  );
};

export default ExploreContent;
