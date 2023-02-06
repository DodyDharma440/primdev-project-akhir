import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { HStack, Input, Button } from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";
import { useSearch } from "../../stores";

const Search = () => {
  const router = useRouter();
  const { searchValue, setSearchValue, setFreezedValue } = useSearch();

  const handleSearch = useCallback(() => {
    setFreezedValue(searchValue);
    router.push(`/search?q=${searchValue}`);
  }, [router, searchValue, setFreezedValue]);

  return (
    <HStack>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Recipe..."
        flex="1"
        size="lg"
        focusBorderColor="green.500"
      />
      <Button
        leftIcon={<HiSearch />}
        aria-label="Search"
        size="lg"
        colorScheme="green"
        onClick={handleSearch}
      >
        Search
      </Button>
    </HStack>
  );
};

export default Search;
