import {Box, SimpleGrid, Text} from '@chakra-ui/react';
import {clientsData} from '../../constant/pages';

import {HomePageCard} from '../../pages/Homepage/HomePageCard';

export const Client = () => {
  return (
    <Box bg={'#FFF'}>
    

      <Box w="90%" mx="auto" py={'50px'}>
        <Text
          fontWeight={'500'}
          fontSize={{base:'30px', md:'40px'}}
          pb={'20px'}
          mb={'30px'}
          borderBottom={'1px solid #1B1B1B29'}
        >
         Essential Guides for Client Management
        </Text>
        <SimpleGrid
          w="full"
          gap="30px"
          columns={{base: 1, md: 3, lg: 3, xl: 4}}
          justify={'center'}
          alignItems={'center'}
        >
          {clientsData.map((detail, i) => (
            <HomePageCard detail={detail} key={i} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
