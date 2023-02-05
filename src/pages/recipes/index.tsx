import Head from "next/head";
import React from "react";
import { PageHeader } from "@/common/layouts";
import { ExploreContent } from "@/modules/explore/components";

const RecipesPage = () => {
  return (
    <>
      <Head>
        <title>Explore Recipes</title>
      </Head>

      <PageHeader
        title="Explore Recipes"
        subtitle="Explore the recipes you need."
      />
      <ExploreContent />
    </>
  );
};

export default RecipesPage;
