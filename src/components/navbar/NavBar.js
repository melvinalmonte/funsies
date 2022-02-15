import React from 'react';

import {
  Box,
  Button,
  chakra,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

import { CgDarkMode } from 'react-icons/cg';

export default function NavBar() {
  const bg = useColorModeValue('#CDB699', 'gray.800');
  const { toggleColorMode } = useColorMode();

  return (
    <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex width={'100%'}>
          <chakra.a href="/" display="flex" alignItems="center">
            <VisuallyHidden>Animal Personality Test</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
            Animal Personality Test
          </chakra.h1>
          <Spacer />
          <Box>
            <IconButton
              bg={bg}
              size={'sm'}
              aria-label={'toggle color mode'}
              onClick={toggleColorMode}
              icon={<CgDarkMode />}
            />
          </Box>
        </Flex>
      </Flex>
    </chakra.header>
  );
}
