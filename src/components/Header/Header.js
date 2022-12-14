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
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Leftsidenav } from "../Leftsidenav/Leftsidenav";
import { Searchbar } from "../Searchbar/Searchbar";
import logo from "../../assets/images/veergelogo.png";
import React, { useRef } from "react";
export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Show breakpoint="(min-width: 769px)">
        <Flex
          direction="row"
          justify="space-between"
          maxW="1440px"
          m="0 auto"
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
      </Show>
      <Show breakpoint="(max-width: 768px)">
        <Flex
          direction="row"
          justify="space-between"
          maxW="770px"
          m="0 auto"
          px="20px"
          height="72px"
          bg="#191919"
          align="center"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
        >
          <Image src={logo} />
          <GiHamburgerMenu onClick={onOpen} style={{ color: "#ffffff" }} />

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody>
                <Text
                  color="#000000"
                  fontSize="24px"
                  letterSpaceing="0.13em"
                  lineHeight="30px"
                  mt="50px"
                  textAlign="center"
                >
                  Help Center
                </Text>
                <Searchbar />
                <Leftsidenav />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Show>
    </>
  );
};
