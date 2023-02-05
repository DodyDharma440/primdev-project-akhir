import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Box, Button, Skeleton, Text } from "@chakra-ui/react";
import { IMeal } from "../../interfaces";

const MealCardSkeleton = () => {
  return (
    <Box
      position="relative"
      h="400px"
      w="100%"
      borderRadius="md"
      overflow="hidden"
      bg="gray.50"
    >
      <Box
        position="absolute"
        inset="0"
        p="4"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column"
      >
        <Skeleton mb="4" width="fit-content">
          <Text color="white" fontSize="2xl" fontWeight="bold">
            Meal Name
          </Text>
        </Skeleton>
        <Skeleton style={{ width: "100%" }}>
          <Button
            width="100%"
            variant="outline"
            color="white"
            _hover={{
              color: "gray.800",
              backgroundColor: "white",
            }}
          >
            See Details
          </Button>
        </Skeleton>
      </Box>
    </Box>
  );
};

type MealCardProps = {
  meal: IMeal;
};

const MealCard: React.FC<MealCardProps> & {
  Skeleton: typeof MealCardSkeleton;
} = ({ meal }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      position="relative"
      h="400px"
      w="100%"
      borderRadius="md"
      overflow="hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box zIndex="1" h="100%">
        <Box
          transform={`scale(${isHover ? "1.1" : "1"})`}
          transition="transform 0.6s ease-out"
          position="relative"
          h="100%"
        >
          <Image
            src={meal.strMealThumb}
            alt={`Thumb ${meal.strMeal}`}
            objectFit="cover"
            layout="fill"
            loading="lazy"
          />
        </Box>
        <Box
          position="absolute"
          inset="0"
          bg="black"
          transition="opacity 0.6s"
          opacity={isHover ? "0.3" : "0.6"}
        />
      </Box>
      <Box
        position="absolute"
        inset="0"
        p="4"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column"
      >
        <Text mb="4" color="white" fontSize="2xl" fontWeight="bold">
          {meal.strMeal}
        </Text>
        <Link
          style={{ width: "100%" }}
          passHref
          href={`/recipes/detail/${meal.idMeal}`}
        >
          <Button
            width="100%"
            variant="outline"
            color="white"
            _hover={{
              color: "gray.800",
              backgroundColor: "white",
            }}
          >
            See Details
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

MealCard.Skeleton = MealCardSkeleton;

export default MealCard;
