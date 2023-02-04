import React from "react";
import Head from "next/head";
import { Hero } from "@/modules/landing-page/components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | Music App</title>
      </Head>

      <Hero />
    </>
  );
};

export default HomePage;
