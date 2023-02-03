import React from "react";
import Head from "next/head";
import { Content } from "@/common/layouts";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | Music App</title>
      </Head>

      <Content title="Discover">Discover</Content>
    </>
  );
};

export default HomePage;
