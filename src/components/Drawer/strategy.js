import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import check from '../../assets/svgs/check-circle.svg';

export const Strategy = ({ drawerModal }) => {
  return (
    <Drawer isOpen={drawerModal?.isOpen} placement="right" onClose={drawerModal?.onClose} >
      <DrawerOverlay />
      <DrawerContent mt="82px" zIndex="1" py="22px" maxW="400px" overflowY={'scroll'}>
        <DrawerCloseButton />
        <Flex px={'21px'} justify="center" direction="column" gap="10px">
          <Image
            alt=""
            h="36px"
            w="36px"
            borderRadius={'21px'}
            src={check}
            border="6px solid rgba(69, 69, 254, 0.10)"
            bg="rgba(69, 69, 254, 0.10)"
          />
          <Text color="#191919" fontWeight={500} fontSize="18px">
            Strategy
          </Text>
        </Flex>
        <Box
          px={'21px'}
          mt="20px"
          pt="20px"
          color="#3D3D3D"
          fontSize={'14px'}
          
          bg="#FBFCFC"
          pb='40px'
        >
          <Text  color='#191919' fontSize={'16px'}>
            "Buy to flip" and "buy to hold" are two distinct investment strategies within the realm of real estate, including fractional real estate ownership:
          </Text>
          <Text mt='20px'  color='#191919' >
            Buy to Flip
          </Text>
          <Text mt='10px'>
            Objective: The primary aim of the buy-to-flip strategy is to acquire a property with the intent of promptly renovating or enhancing it and then selling it at a higher price, ideally yielding a profit within a relatively short timeframe. In some instances, it could be for fractional owners to target off-plan development projects that are undervalued at their launch but are anticipated to appreciate significantly or reach market value upon completion. Their goal is to acquire shares of these projects during the early stages, hold them through the construction phase, and then rapidly sell to individuals or investors seeking ownership in a finished unit within the development.
          </Text>
          <Text mt='20px'>
            Timeframe: Investors adopting this strategy typically have a relatively short investment horizon, often spanning just a few months.
          </Text>
          <Text mt='20px'>
            Risks: This strategy can carry increased risks due to its reliance on precise market timing, renovation costs, and the need to locate a buyer willing to pay a higher price. If the property doesn't sell swiftly or renovation expenses exceed expectations, profits may be diminished or even turn into losses.
          </Text>
          <Text mt='20px'  color='#191919'>
            Buy to Hold
          </Text>
          <Text mt='10px'>
            Objective: Buy-to-hold investors procure properties with the intention of retaining ownership for an extended period, often spanning years or even decades. Their primary goals are to generate rental income and potentially benefit from long-term property appreciation.
          </Text>
          <Text mt='20px'>
            Timeframe: Investors employing this strategy possess a longer investment horizon and are less perturbed by short-term market fluctuations.
          </Text>
          <Text mt='20px'>
            Risks: Although buy-to-hold strategies are generally viewed as less risky than flipping, they still entail potential risks, including property maintenance costs, market volatility, and the possibility of vacancies.
            Fractional real estate ownership allows multiple investors to pool their resources and collaboratively invest in real estate properties.
          </Text>
          <Text mt='20px'>
            Whether one chooses the buy-to-flip or buy-to-hold strategy, fractional ownership confers key advantages, including reduced individual financial commitment, diversification, and access to real estate investments that may otherwise be beyond individual investors' reach.
          </Text>
          <Text mt='20px'>
            Investors should meticulously assess their financial objectives, risk tolerance, and investment timeline when deciding between these two strategies.
          </Text>
          <Text mt='20px'>
            Additionally, enlisting the expertise of seasoned professionals, such as real estate agents and financial advisors, can provide invaluable guidance in executing these strategies effectively.
          </Text>
        </Box>
        {/* </DrawerBody> */}
      </DrawerContent>
    </Drawer >
  );
};

export default Strategy;
