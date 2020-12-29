/** @format */

import React from 'react';
import { Box, Heading, Text, Flex, Image, Tag, List, ListItem, ListIcon } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import Layout from '../../components/Layout';
import sanity from '../../lib/sanity';
import ImageCard from '../../components/ImageCard';
import Navbar from '../../components/Navbar';
import imageUrlFor from '../../utils/imageUrlFor';
const queryFeatures = `*[_type == "feature"] {_id}`;
const querySingleFeture = `*[_type == "feature" && _id == $id] {
    _id,
    name,
    description,
    mainImage,
    availableDevices,
    images
  }[0]
  `;

function SingleFeature({ feature }) {
  console.log(feature);
  const imgUrl = imageUrlFor(feature.mainImage).ignoreImageParams().width(1024);

  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" minWidth="100%" p="4">
        <Box h="500px" pb="8">
          <Image src={imgUrl} h="100%" w="100%" objectFit="cover" boxShadow="lg" />
        </Box>
        <Heading textTransform="capitalize" mb="8" color="blue.800">
          {feature.name}
        </Heading>
        <Text fontSize="xl" mb="4" color="blue.600">
          {feature.description}
        </Text>
        <Text fontSize="xl" mb="4">
          Available devices
        </Text>
        <List spacing={2}>
          {feature.availableDevices.map((device) => (
            <ListItem key={device} fontSize="lg">
              <ListIcon as={PlusSquareIcon} color="green.500" />
              {device}
            </ListItem>
          ))}
        </List>
        <Flex direction="row" align="center" wrap="wrap">
          {feature.images.map((image) => (
            <ImageCard image={image} key={image} />
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on persons
  const features = await sanity.fetch(queryFeatures);
  const paths = features.map((feature) => ({
    params: { id: feature._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }) => {
  const feature = await sanity.fetch(querySingleFeture, { id: params.id });
  return { props: { feature } };
};

export default SingleFeature;
