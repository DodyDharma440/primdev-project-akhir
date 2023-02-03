import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Divider, Heading, HStack, Text } from "@chakra-ui/react";
import { sidebarMenus } from "@/common/constants/layouts";

const Sidebar = () => {
  const router = useRouter();
  return (
    <Box
      position="sticky"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.600"
      w="280px"
      p="4"
      mr="4"
      h="600px"
      top="10"
    >
      <Heading fontSize="2xl" textAlign="center">
        Music APP
      </Heading>
      <Divider my="4" />
      <Box mt="10">
        <Text fontWeight="bold" px="4" mb="4">
          Browse
        </Text>
        {sidebarMenus.map(({ icon: Icon, label, path }, index) => {
          const isActive = path === router.pathname;

          return (
            <Link href={path} key={index}>
              <HStack
                color={isActive ? "blue.500" : "gray.400"}
                spacing="4"
                px="4"
                py="2"
                mb="3"
                transition="color 0.5s"
                _hover={{ color: isActive ? "blue.600" : "white" }}
              >
                <Icon size={20} />
                <Text fontWeight={isActive ? "bold" : "500"}>{label}</Text>
              </HStack>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Sidebar;
