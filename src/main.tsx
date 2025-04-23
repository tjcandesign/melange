import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#225d94',
      accent: '#D69E2E',
      blue: '#225d94'
    },
  },
  fonts: {
    heading: '"Courier New", monospace',
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
