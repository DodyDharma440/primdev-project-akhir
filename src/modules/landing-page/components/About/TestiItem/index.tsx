import React from "react";
import { Avatar, Box, Center, Heading, Text } from "@chakra-ui/react";
import { ITestimonial } from "@/modules/landing-page/interfaces";

type TestiItemProps = {
  testi: ITestimonial;
};

const TestiItem: React.FC<TestiItemProps> = ({ testi }) => {
  return (
    <Box bg="white" p="6" position="relative" borderRadius="sm">
      <Avatar
        position="absolute"
        bg="green.600"
        size="lg"
        top="-30px"
        left="0"
        name={testi.name}
      />
      <Center flexDirection="column">
        <Heading fontSize="xl" mb="4">
          {testi.name}
        </Heading>
        <Text textAlign="center">{testi.description}</Text>
      </Center>
    </Box>
  );
};

export default TestiItem;
