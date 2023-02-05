import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { useCategory } from "../../stores";
import { getMealsByCategory } from "../../api";
import Categories from "../Categories";
import { MealCard } from "@/modules/meals/components";

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
      <Categories />
      <Box my="6">
        <Grid templateColumns="repeat(12, 1fr)" gap="4">
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                return (
                  <GridItem colSpan={{ base: 12, md: 6, lg: 3 }} key={i}>
                    <MealCard.Skeleton />
                  </GridItem>
                );
              })}
            </>
          ) : (
            <>
              {meals.map((meal, index) => {
                return (
                  <GridItem colSpan={{ base: 12, md: 6, lg: 3 }} key={index}>
                    <MealCard meal={meal} />
                  </GridItem>
                );
              })}
            </>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default ExploreContent;
