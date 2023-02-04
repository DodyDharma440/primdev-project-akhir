import React from "react";
import Head from "next/head";
import { About, Hero, Recipes } from "@/modules/landing-page/components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section id="home">
        <Hero />
      </section>
      <section id="recipe">
        <Recipes />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
};

export default HomePage;
