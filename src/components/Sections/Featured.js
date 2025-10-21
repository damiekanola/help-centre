import {Box, SimpleGrid, Text} from '@chakra-ui/react';
import {gettingStarteddata} from '../../constant/pages';
import {HomePageCard} from '../../pages/Homepage/HomePageCard';

export const Featured = () => {
  return (
    <Box w="90%" mx="auto" py="50px">
     

      <Text
        fontWeight={'500'}
        fontSize={{base:'30px', md:'40px'}}
        pb={'20px'}
        mb={'30px'}
        borderBottom={'1px solid #1B1B1B29'}
      >
        Getting Started
      </Text>
      <SimpleGrid
        w="full"
        gap="30px"
        columns={{base: 1, md: 3, lg: 3, xl: 4}}
        justify={'center'}
        alignItems={'center'}
      >
        {gettingStarteddata.map((detail, i) => (
          <HomePageCard detail={detail} key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
