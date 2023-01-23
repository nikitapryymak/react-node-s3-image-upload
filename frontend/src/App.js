import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Profile from './components/Profile';
import theme from './config/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="2xl" m="3rem auto" p={5} maxW={700}>
        <Profile />
      </Box>
    </ChakraProvider>
  );
}

export default App;
