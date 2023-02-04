import React from "react";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";

type RecipeProps = {
  mealId: string;
};

const Recipe: NextPage<RecipeProps> = ({mealId}) => {
  return (
    <>
      <Head>
        <title>Recipe Detail</title>
      </Head>

      {mealId}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      mealId: params?.id || "",
    },
  };
};

export default Recipe;
