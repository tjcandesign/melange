import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#2D3436',
      accent: '#B8860B',
      light: '#F5F5F5',
    },
  },
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Open Sans", sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
