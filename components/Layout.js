/** @format */

import React from 'react';
import Head from 'next/head';
import { Flex, Heading, Link, Box } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Box bg="">
      <Head>
        <title>awesometech.com</title>
      </Head>
      <Flex>
        <Box as="main" maxWidth="1024px" w="100%" mx="auto">
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
