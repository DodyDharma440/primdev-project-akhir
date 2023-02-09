import React, { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

const MobileNavbar = () => {
  const router = useRouter();
  const stackRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%" position="relative" display={{ base: "block", lg: "none" }}>
      <Box bg="white" p="4" boxShadow="md" position="relative" zIndex="2">
        <Container display="flex" justifyContent="space-between">
          <Link href="/">
            <Text fontSize="2xl" color="green.400" fontWeight="bold">
              Cook
            </Text>
          </Link>
          <IconButton onClick={onToggle} aria-label="Toggle Nav Menu">
            <HiMenu />
          </IconButton>
        </Container>
      </Box>

      <Box
        bg="white"
        boxShadow="md"
        position="relative"
        zIndex="1"
        overflow="hidden"
        transition="all 0.4s"
        height={isOpen ? stackRef.current?.clientHeight : "0"}
      >
        <VStack ref={stackRef} spacing="6" p="6">
          <Link href="/" shallow onClick={onToggle}>
            Home
          </Link>
          <Link href="/#recipe" shallow onClick={onToggle}>
            Recipe
          </Link>
          <Link href="/#about" shallow onClick={onToggle}>
            About Us
          </Link>
          {router.pathname === "/recipes" ? null : (
            <Link href="/recipes" onClick={onToggle}>
              <Button colorScheme="green" zIndex="3">
                Get Started
              </Button>
            </Link>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default MobileNavbar;
