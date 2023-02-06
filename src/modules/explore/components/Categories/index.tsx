import React, { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Container, Text, Skeleton } from "@chakra-ui/react";
import { apiMeal } from "@/common/api";
import { ICategory } from "@/modules/categories/interfaces";
import { useCategory } from "../../stores";

const Categories = () => {
  const { activeCategory, onChangeCategory } = useCategory();
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => apiMeal.get<{ categories: ICategory[] }>("/categories.php"),
  });

  const categories = useMemo(() => {
    return data?.data.categories || [];
  }, [data?.data.categories]);

  useEffect(() => {
    if (categories.length) {
      onChangeCategory(categories[0].strCategory);
    }
  }, [categories, onChangeCategory]);

  return (
    <Container maxW="container.md">
      <Text textAlign="center" mb="2" fontSize="sm" fontWeight="bold">
        Filter by Categories
      </Text>

      <Box
        overflowX="auto"
        whiteSpace="nowrap"
        py="2"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
            "-ms-overflow-style": "none",
            " scrollbar-width": "none",
          },
        }}
      >
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => {
              return (
                <Skeleton
                  display="inline-block"
                  mr={i === 7 ? "0" : "4"}
                  key={i}
                >
                  <Button px="6">Category</Button>
                </Skeleton>
              );
            })}
          </>
        ) : (
          <>
            {categories.map((category, index) => {
              const { strCategory } = category;
              const isActive = category.strCategory === activeCategory;
              const isLast = index === categories.length - 1;

              return (
                <Box key={index} display="inline-block" mr={isLast ? "0" : "4"}>
                  <Button
                    px="6"
                    onClick={() => onChangeCategory(strCategory)}
                    colorScheme={isActive ? "green" : "gray"}
                  >
                    {strCategory}
                  </Button>
                </Box>
              );
            })}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Categories;
