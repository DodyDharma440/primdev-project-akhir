import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type ContentProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  rightSection?: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ children, title, rightSection }) => {
  return (
    <Box>
      <Flex justifyContent="space-between" flexWrap="wrap" gap="4" mb="6">
        <Heading>{title}</Heading>
        <Box>{rightSection}</Box>
      </Flex>
      {children}
    </Box>
  );
};

export default Content;
