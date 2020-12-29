/** @format */

import React from 'react';
import imageUrlFor from '../utils/imageUrlFor';
import { Flex, Image, Heading, Text, Box } from '@chakra-ui/react';
import Navbar from './Navbar';

const Hero = ({ hero }) => {
  const imgUrl = imageUrlFor(hero.heroImage.asset).ignoreImageParams().height(700);
  return (
    <Flex direction="column" justify="center" align="center" pt="8">
      <Flex
        bgImage={`url(${imgUrl})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        h="400px"
        justify="space-between"
        direction="column"
        pb="16"
        boxShadow="lg"
      >
        <Navbar />
        <Box mb="16">
          <Heading color="white" textAlign="center" as="h2" size="3xl">
            {hero.header}
          </Heading>
          <Heading color="white" textAlign="center" pt="8" as="h3" size="lg">
            {hero.subtitle}
          </Heading>
        </Box>
      </Flex>
      <Text p="16" lineHeight="1.8rem" fontSize="xl">
        {hero.description}
      </Text>
    </Flex>
  );
};

export default Hero;
