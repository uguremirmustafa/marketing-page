/** @format */

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import sanity from '../lib/sanity';
import imageUrlFor from '../utils/imageUrlFor';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import { Flex, List } from '@chakra-ui/react';
const queryFeatures = `*[_type == "feature"] {
  _id,
  name,
  description,
  mainImage

}
`;
const queryHero = `*[_type == "hero"] {
  header,
  subtitle,
  description,
  heroImage,
}
`;

const Posts = ({ features, hero }) => {
  console.log(hero);
  return (
    <Layout>
      <Hero hero={hero} />
      <Flex wrap="wrap">
        {features.map((feature) => (
          <Feature feature={feature} key={feature._id} />
        ))}
      </Flex>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const features = await sanity.fetch(queryFeatures);
  const hero = await sanity.fetch(queryHero);

  return {
    props: { features, hero: hero[0] }, // will be passed to the page component as props
  };
};

export default Posts;
