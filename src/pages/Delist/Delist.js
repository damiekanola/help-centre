import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import delist1 from "../../assets/images/delist1.svg";
import delist2 from "../../assets/images/delist2.svg";
import delist3 from "../../assets/images/delist3.svg";
import delist4 from "../../assets/images/delist4.svg";
import { SlArrowRight } from "react-icons/sl";

export const Delist = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="delist">
      <div class="rightsidenav">
        <Text className="article_text">In this article</Text>
        <ul className={style}>
          <li onClick={handleClick}>
            <a href="#delist">How to delist a listing</a>
          </li>
          <li onClick={handleClick}>
            <a href="#faq"> FAQs</a>
          </li>
        </ul>
        <Text className="article_text" mt="60px">
          Related Content
        </Text>
        <Flex columnGap="20px">
          <Image src={file} h="18px" w="14px" />
          <Link to="/">Intro to Veerge</Link>
        </Flex>

        <Flex columnGap="20px">
          <Image src={file} h="18px" w="14px" />
          <Link to="fractional_real_estate">
            Understanding Fractional Real estate{" "}
          </Link>
        </Flex>
        <Flex columnGap="20px">
          <Image src={file} h="18px" w="14px" />{" "}
          <Link to="veerge_and_data">Veerge & Data analytics</Link>
        </Flex>
      </div>
      <Text className="head_">HOW TO DELIST A LISTING </Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 1
        </Text>
        <Text className="content">
          The first step is to go to listings and select the dropdown button
          beside transactions
        </Text>

        <Image src={delist1} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 2
        </Text>
        <Text className="content">
          Click on the make listings private button
        </Text>

        <Image src={delist2} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 3
        </Text>
        <Text className="content">
          You will be asked if you are sure; Kindly select yes.
        </Text>

        <Image src={delist3} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 4
        </Text>
        <Text className="content">
          You will be prompted to a screen to send an invitation (This step is
          optional). We are aware that in some cases the listing might be
          getting delisted from the online store, however you intend to give
          private access to some exclusive buyers (That’s where the step is
          applicable).
        </Text>
        <Text className="content" mt="0px">
          Kindly input all emails or select users from the recommendations if
          necessary and proceed. If not, kindly skip this process.
        </Text>
        <Image src={delist4} mt="30px" mx="auto" />
      </Box>

      <Box marginTop="50px" id="faq">
        <Text className="content_head">FAQs</Text>
        <Flex
          maxW="621px"
          minH="192px"
          borderRadius="5px"
          border="0.3px solid #000000"
          direction="column"
        >
          <Box minH="64px" borderBottom="0.3px solid #000000">
            <Flex
              direction="row"
              columnGap="33px"
              pl="30px"
              mt="22px"
              alignItems="center"
            >
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/create_listing" style={{ color: "#5d5fef" }}>
                How do i create a listing
              </a>
            </Flex>
          </Box>
          <Box minH="64px" borderBottom="0.3px solid #000000">
            <Flex
              direction="row"
              columnGap="33px"
              pl="30px"
              mt="22px"
              alignItems="center"
            >
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />
              <a href="/create_unit" style={{ color: "#5d5fef" }}>
                How to create a unit
              </a>
            </Flex>
          </Box>
          <Box minH="64px">
            <Flex
              direction="row"
              columnGap="33px"
              pl="30px"
              mt="22px"
              alignItems="center"
            >
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/create_online_store" style={{ color: "#5d5fef" }}>
                How to create an online store
              </a>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box marginTop="70px" textAlign="right">
        <Text className="content_head">Was this helpful?</Text>
        <Flex direction="row" justifyContent="flex-end" maxW="451px">
          <Text
            borderRight="1px solid #5d5fef"
            color="#5d5fef"
            pr="8px"
            cursor="pointer"
            onClick={() =>
              toast({
                position: "bottom-center",
                isClosable: true,
                render: () => (
                  <Box color="white" p={3} bg="#000000">
                    Thank you for your feedback.
                  </Box>
                ),
              })
            }
          >
            Yes
          </Text>{" "}
          <Text
            color="#5d5fef"
            pl="8px"
            cursor="pointer"
            onClick={() =>
              toast({
                position: "bottom-center",
                isClosable: true,
                render: () => (
                  <Box color="white" p={3} bg="#000000">
                    Thank you for your feedback.
                  </Box>
                ),
              })
            }
          >
            No
          </Text>
        </Flex>
      </Box>
    </div>
  );
};
