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
export const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Show breakpoint="(min-width: 769px)">
        <Flex
          direction="row"
          justify="space-between"
          // m="0 auto"
          w="full"
          px="78px"
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
            <Image src={logo} />
            <Text fontSize={'12px'} color="#fff">
              Powered by Myxellia
            </Text>
          </a>
        </Flex>
      </Show>
      <Show breakpoint="(max-width: 768px)">
        <Flex
          direction="row"
          justify="space-between"
          maxW="770px"
          w="100%"
          position="fixed"
          zIndex="2"
          m="0 auto"
          px="20px"
          height="72px"
          bg="#191919"
          align="center"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
        >
          <Link to="/">
            {' '}
            <Image src={logo} />
          </Link>
        </Flex>
      </Show>
    </>
  );
};
