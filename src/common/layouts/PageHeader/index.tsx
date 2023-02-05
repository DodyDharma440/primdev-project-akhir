import React, { useState } from "react";
import Image from "next/legacy/image";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

type PageHeaderProps = {
  imageUrl?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  imageUrl,
  title,
  subtitle,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      pt="70px"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset="0"
        transition="transform 1s"
        transform={`scale(${isHover ? "1.1" : "1"})`}
      >
        <Image
          src={imageUrl || "/images/hero-banner.jpg"}
          alt="About Banner"
          objectFit="cover"
          layout="fill"
        />
      </Box>
      <Box bg="black" position="absolute" inset="0" opacity="0.7" />
      <Container zIndex="2" position="relative" py="20">
        <Flex justifyContent="center" flexDirection="column" color="white">
          <Text fontSize="5xl" mb="2" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="lg">{subtitle}</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default PageHeader;
