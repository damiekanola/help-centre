import {HStack, Text} from '@chakra-ui/react';

export const VeergeLogo = () => {
  return (
    <HStack w={`max-content`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 56 56"
        fill="none"
      >
        <path
          d="M44.3615 40.963L47.9884 34.4836L43.8733 27.529L48 20.6786L44.2685 13.782H35.9802L31.7838 6.82733H24.1697L20.0198 13.8051H11.8826L8 20.4585L12.3708 27.4131L8 34.7618L11.871 41.0906H20.0081L24.1116 48.1727H31.8768L35.8175 40.9167L44.3615 40.963ZM27.9128 43.2812L23.263 35.0979H14.2075L19.0201 27.5406L14.2075 19.8441H23.2746L27.9244 11.881L32.272 19.7514H41.5716L36.7823 27.4478L41.5716 35.1327H32.1906L27.9128 43.2812Z"
          fill="#fff"
        />
      </svg>

      <Text fontSize={{base: '20px', md: '30px'}} color="#fff">
        Veerge
      </Text>
    </HStack>
  );
};
