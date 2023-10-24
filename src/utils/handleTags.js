import { Box, Text } from '@chakra-ui/react';

export const handleTagType = (type) => {

  switch (type) {
    case 'Beginner':
      return (
        <Box w='fit-content' bg='#4545FE1A' borderRadius='full' px='8px' py='2px'>
          <Text fontSize={'10px'} fontWeight={300} color='#4545FE' mx='auto'>Beginner</Text>
        </Box>
      );
    case 'Advanced':
      return (
        <Box w='fit-content' bg='#FF91031A' borderRadius='full' px='8px' py='2px'>
          <Text fontSize={'10px'} fontWeight={300} color='#FF9103' mx='auto'>Advanced</Text>
        </Box>
      );
    case 'Intermediate':
      return (
        <Box w='fit-content' bg='#E7FBF5' borderRadius='full' px='8px' py='2px'>
          <Text fontSize={'10px'} fontWeight={300} color='#064B38' mx='auto'>Intermediate</Text>
        </Box>
      );

    default:
      break;
  }
};
