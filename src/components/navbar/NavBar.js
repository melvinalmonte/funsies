import React from 'react';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function NavBar() {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  return (
    <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.a
            href="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            <VisuallyHidden>Animal Personality Test</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
            Animal Personality Test
          </chakra.h1>
        </Flex>
      </Flex>
    </chakra.header>
  );
}
