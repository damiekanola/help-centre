import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/images/veergelogo.png";
import React from "react";
export const Header = () => {
  return (
    <Flex
      maxW="1440px"
      w="100%"
      px="78px"
      height="82px"
      position="fixed"
      zIndex="1"
      bg="#191919"
      align="center"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
    >
      <Image src={logo} />
    </Flex>
  );
};
