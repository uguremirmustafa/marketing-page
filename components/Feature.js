/** @format */

import React from 'react';
import imageUrlFor from '../utils/imageUrlFor';
import Link from 'next/link';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
const Feature = ({ feature }) => {
  const imgUrl = imageUrlFor(feature.mainImage).ignoreImageParams().width(300);
  return (
    <Link href={`/feature/${feature._id}`}>
      <Flex
        mx="auto"
        maxW="300px"
        direction="column"
        justify="space-between"
        align="center"
        bg="gray.100"
        borderRadius="2xl"
        my="8"
        boxShadow="lg"
        cursor="pointer"
        transition="ease-in-out 0.2s all"
        _hover={{ boxShadow: 'xl' }}
      >
        <Image
          src={imgUrl}
          maxW="400px"
          borderTopRadius="2xl"
          height="200px"
          width="300px"
          objectFit="cover"
        />
        <Heading as="h3" size="lg" p="4">
          {feature.name}
        </Heading>
        <Text px="8" mb="6" textAlign="center">
          {feature.description}
        </Text>
      </Flex>
    </Link>
  );
};

export default Feature;
