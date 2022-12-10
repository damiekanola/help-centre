import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { GrHomeRounded } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Searchbar = () => {
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
        {" "}
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
          />
          <button type="submit">
            {" "}
            <CiSearch style={{ width: "25px", height: "25px" }} />
          </button>
        </Flex>
      </form>
    </Flex>
  );
};
