import {
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { GrHomeRounded } from "react-icons/gr";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { searchData } from "./data";
import "./Search.css";
export const Searchbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      maxW="1440px"
      w="100%"
      px="78px"
      height="67px"
      direction="row"
      justify="space-between"
      align="center"
      position="fixed"
      zIndex="1"
      bg="#ffffff"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
    >
      <Flex maxW="319px" direction="row" columnGap="18px" align="center">
        <Link to="/">
          <GrHomeRounded />
        </Link>{" "}
        <SlArrowRight />
        <Link
          to="fisrt_time_setup"
          style={{
            textDecoration: "none",
            href: "fisrt_time_setup",
            color: "#5D5FEF",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "18px",
          }}
        >
          First time setup
        </Link>
      </Flex>
      <form>
        <Flex
          direction="row"
          align="center"
          maxW="300px"
          h="43px"
          bg="#F5F5F5"
          border=" 1px solid #E4E4E4"
          borderRadius=" 12px"
          pr="5px"
        >
          <Input
            placeholder="Search for a topic"
            type="text"
            border="none"
            FontWeight="400"
            fontSize="12px"
            lineHeight="15px"
            color="#606060"
            onClick={onOpen}
            _focusVisible={{
              border: "none",
            }}
          />
          <CiSearch style={{ width: "25px", height: "25px" }} />
        </Flex>
      </form>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay bg="rgba(0,0,0,0.2)" />
        <ModalContent>
          <ModalBody>
            <Flex direction="row" align="center">
              <CiSearch style={{ width: "25px", height: "25px" }} />
              <Input
                placeholder="Search the docs"
                type="text"
                border="none"
                FontWeight="400"
                fontSize="12px"
                lineHeight="15px"
                color="#606060"
                onClick={onOpen}
                _focusVisible={{
                  border: "none",
                }}
              />
            </Flex>

            {searchData.map((data) => {
              const { route, searchQuery } = data;
              return (
                <Flex
                  direction="column"
                  rowGap="4px"
                  justify="center"
                  align="center"
                  mt="20px"
                  width="400px"
                >
                  <Link to={route} className="a__">
                    <Flex
                      direction="row"
                      justify="space-between"
                      className="link__"
                      px="15px"
                      align="center"
                    >
                      <Text>{searchQuery}</Text>

                      <MdSubdirectoryArrowLeft />
                    </Flex>
                  </Link>
                </Flex>
              );
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
