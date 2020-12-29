/** @format */

import React from 'react';
import { Box, Flex, Link, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
function Navbar() {
  const NavLink = ({ href, children, ...props }) => (
    <Link px={2} color="white" {...props}>
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
  return (
    <nav>
      <Flex px={5} py={4} fontWeight="bold">
        <Flex
          maxWidth="1024px"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          mx="auto"
        >
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <Image src="" size={30} />
            <Text pl={3} color="white">
              AwesomeTech
            </Text>
          </Flex>
          <Box>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/">Contact</NavLink>
          </Box>
        </Flex>
      </Flex>
    </nav>
  );
}

export default Navbar;
