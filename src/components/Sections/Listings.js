import {Box, SimpleGrid, Text} from '@chakra-ui/react';
import {listingsData} from '../../constant/pages';

import {HomePageCard} from '../../pages/Homepage/HomePageCard';

export const Listings = () => {
  return (
    <>
      <Box width={'100%'} mb="-2px">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1440 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1439.85 101.24H0C0 101.24 37.3295 0.13324 454.175 0.133301C871.021 0.133361 1373.87 73.5866 1439.85 101.24Z"
            fill="#EBEBFF"
          />
        </svg>
      </Box>
      <Box bg={'#EBEBFF'}>
        <Box w="90%" mx="auto" py={'50px'} >
          <Text
            fontWeight={'500'}
            fontSize={{base: '30px', md: '40px'}}
            pb={'20px'}
            mb={'30px'}
            borderBottom={'1px solid #1B1B1B29'}
          >
            Essential Guides for Property Management
          </Text>
          <SimpleGrid
            w="full"
            gap="30px"
            columns={{base: 1, md: 3, lg: 3}}
            justify={'center'}
            alignItems={'center'}
          >
            {listingsData.map((detail, i) => (
              <HomePageCard detail={detail} key={i} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Box width={'100%'} mb="-2px">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1440 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.000366211 8.39233e-05H1439.85C1439.85 8.39233e-05 1402.52 101.107 985.675 101.107C568.83 101.107 65.9839 27.6536 -0.000366211 8.39233e-05Z"
            fill="#EBEBFF"
          />
        </svg>
      </Box>
    </>
  );
};
