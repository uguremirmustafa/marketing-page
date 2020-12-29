/** @format */

import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import imageUrlFor from '../utils/imageUrlFor';
function ImageCard({ image }) {
  const imgUrl = imageUrlFor(image).ignoreImageParams().width(400);
  return (
    <Box w="260px" h="260px" m="4">
      <Image
        src={imgUrl}
        borderRadius="2xl"
        w="100%"
        height="100%"
        objectFit="cover"
        boxShadow="md"
      />
    </Box>
  );
}

export default ImageCard;
