import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Sidebar from "../Sidebar";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container minH="100vh" maxW="container.xl" mx="auto" px="2">
      <Flex my="10" position="relative">
        <Sidebar />
        <Box flex="1">{children}</Box>
      </Flex>
    </Container>
  );
};

export default PageLayout;
