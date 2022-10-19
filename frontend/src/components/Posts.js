import { Box, Button, Text } from '@chakra-ui/react';

const Posts = () => {
  return (
    <Box mt={6}>
      <Button colorScheme="blue" variant="outline" mb={4} cursor="pointer">
        Upload
      </Button>

      <Text textAlign="left" mb={4}>
        Posts
      </Text>
    </Box>
  );
};
export default Posts;
