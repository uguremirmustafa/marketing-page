/** @format */

import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import myTheme from '../styles/theme';
const theme = extendTheme(myTheme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
