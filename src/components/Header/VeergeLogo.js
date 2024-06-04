import {HStack, Text} from '@chakra-ui/react';

export const VeergeLogo = () => {
  return (
    <HStack gap={`8px`} w={`max-content`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.002 19.9991L40.0009 0V19.9991H20.002Z" fill="white" />
        <path d="M0 0L20.0008 19.9991H0V0Z" fill="white" />
        <path d="M20.0008 19.9991L0 0H20.0008V19.9991Z" fill="white" />
        <path d="M20.002 39.9999V19.999H40.0009L20.002 39.9999Z" fill="white" />
      </svg>

      <Text fontSize={`30px`} color="#fff">
        Veerge
      </Text>
    </HStack>
  );
};
