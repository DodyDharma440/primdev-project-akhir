import React from "react";
import Head from "next/head";
import { Hero, Recipes } from "@/modules/landing-page/components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Hero />
      <Recipes />
    </>
  );
};

export default HomePage;
