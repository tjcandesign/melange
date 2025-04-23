import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#225D94',
      dark: '#1a4670',
      accent: '#B88746',
      blue: '#225D94',
      gold: '#B88746'
    },
  },
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Open Sans", sans-serif',
    mono: '"Courier New", monospace',
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
