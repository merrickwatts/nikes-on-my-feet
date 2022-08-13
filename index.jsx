import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
    brand: {
        1000: '9ca1a5',
        900: '#2ecOea',
        800: '#1289c8',
        700: '4d3e3f',
        600: '2d4d7a',
        500: '889ba2', 
        400: 'd2d2d6',
        300: '96654b',
        200: '206c87',
        100: 'c98d71'
    },
}

const theme = extendTheme ({ colors })
 
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}