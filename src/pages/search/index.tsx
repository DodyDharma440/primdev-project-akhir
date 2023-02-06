import React, { useEffect } from "react";
import Head from "next/head";
import { Text } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { PageHeader } from "@/common/layouts";
import { useSearch } from "@/modules/explore/stores";
import { SearchContent } from "@/modules/explore/components";

type SearchPageProps = {
  value: string;
};

const SearchPage: NextPage<SearchPageProps> = ({ value }) => {
  const { setSearchValue, setFreezedValue } = useSearch();

  useEffect(() => {
    setSearchValue(value);
    setFreezedValue(value);
  }, [setFreezedValue, setSearchValue, value]);

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>

      <PageHeader
        title="Search Recipes"
        subtitle={
          <>
            Search Results for{" "}
            <Text as="span" fontWeight="bold">
              {value}
            </Text>
          </>
        }
      />
      <SearchContent />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({
  query,
}) => {
  const value = query.q as string;

  if (!value) {
    return {
      redirect: {
        destination: query.ref ? `/${query.ref}` : "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      value,
    },
  };
};

export default SearchPage;
