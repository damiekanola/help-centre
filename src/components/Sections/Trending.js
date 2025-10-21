import {Box, SimpleGrid, Text} from '@chakra-ui/react';

import {trendingData} from '../../constant/pages';
import {HomePageCard} from '../../pages/Homepage/HomePageCard';
import {OverviewCard} from '../../pages/Homepage/OverviewCard';
export const Trending = () => {
  return (
    <>
      <Box width={'100%'} bg={'#0d0d0d'} mb="-2px">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1440 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1446 114H0C0 114 37.4889 -6.83176e-05 456.115 0C874.741 6.83176e-05 1379.73 82.8201 1446 114Z"
            fill="white"
          />
        </svg>
      </Box>
      <Box w="90%" mx="auto" py={'50px'} bg={'#ffffff'}>
        <Box>
          <Text
            fontWeight={'500'}
            fontSize={{base:'30px', md:'40px'}}
            pb={'20px'}
            mb={'30px'}
            borderBottom={'1px solid #1B1B1B29'}
          >
            Featured and Trending
          </Text>
          <OverviewCard />
          <SimpleGrid
            w="full"
            gap="30px"
            columns={{base: 1, md: 2, lg: 2, xl: 2}}
            justify={'center'}
            alignItems={'center'}
          >
            {trendingData.map((detail, i) => (
              <HomePageCard detail={detail} key={i} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};
