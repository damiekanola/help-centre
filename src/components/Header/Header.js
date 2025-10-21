import {Flex} from '@chakra-ui/react';

import {VeergeLogo} from './VeergeLogo';
export const Header = () => {
  return (
    <>
      <Flex
        direction="row"
        justify="space-between"
        w="full"
        px="5%"
        height="82px"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="2"
        bg="#191919"
        align="center"
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
      >
        <a href="https://test-veerge.myxellia.io/">
          <VeergeLogo />
        </a>
      </Flex>
    </>
  );
};
