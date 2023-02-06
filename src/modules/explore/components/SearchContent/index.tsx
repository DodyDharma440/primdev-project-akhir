import React, { useEffect, useMemo } from "react";
import { Center, Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { MealsGrid } from "@/modules/meals/components";
import { useSearch } from "../../stores";
import Search from "../Search";
import { getMealsByName } from "../../api";

const SearchContent = () => {
  const { freezedValue, setSearchValue } = useSearch();
  const { data, isLoading } = useQuery({
    queryKey: [`search-${freezedValue}`],
    queryFn: () => getMealsByName({ name: freezedValue }),
    enabled: Boolean(freezedValue),
  });

  const meals = useMemo(() => {
    return data?.data.meals || [];
  }, [data?.data.meals]);

  useEffect(() => {
    return () => {
      setSearchValue("");
    };
  }, [setSearchValue]);

  return (
    <Container py="20">
      <Container maxW="container.md">
        <Search />
      </Container>

      {meals.length === 0 && !isLoading ? (
        <Center my="4">No result.</Center>
      ) : (
        <MealsGrid isLoading={isLoading} meals={meals} />
      )}
    </Container>
  );
};

export default SearchContent;
