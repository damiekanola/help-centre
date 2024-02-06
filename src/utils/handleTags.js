import { Box, Text } from '@chakra-ui/react';

export const handleTagType = (type) => {
  return (
    <Box w='fit-content' bg='#FF91031A' borderRadius='lg' px='10px' py='5px'>
      <Text fontSize={'12px'} fontFamily={'euclid-light'} color='#FF9103' mx='auto'>{type}</Text>
    </Box>
  )
};
