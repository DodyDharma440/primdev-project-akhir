import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { IMeal } from "../../interfaces";
import MealCard from "../MealCard";

type MealsGridProps = {
  isLoading: boolean;
  meals: IMeal[];
};

const MealsGrid: React.FC<MealsGridProps> = ({ isLoading, meals }) => {
  return (
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
  );
};

export default MealsGrid;
