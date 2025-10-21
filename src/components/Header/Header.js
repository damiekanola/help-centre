import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Show,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {Searchbar} from '../Searchbar/Searchbar';
// import logo from '../../assets/images/veergelogo.png';
import logo from '../../assets/images/veergelogo.svg';
import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {VeergeLogo} from './VeergeLogo';
export const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef();
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
          {/* <Image src={logo} /> */}
          <VeergeLogo />
          {/* <Text fontSize={'12px'} color="#fff">
              Powered by Myxellia
            </Text> */}
        </a>
      </Flex>
    </>
  );
};
