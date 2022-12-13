import React from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import create1 from "../../assets/images/create1.png";
import create2 from "../../assets/images/create2.png";
import create3 from "../../assets/images/create3.png";
import create4 from "../../assets/images/create4.png";
import create5 from "../../assets/images/create5.png";
import create6 from "../../assets/images/create6.png";
import archive7 from "../../assets/images/archive7.png";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

export const Createunit = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };

  return (
    <div className="main" id="unit">
      <div class="rightsidenav">
        <Text className="article_text">In this article</Text>
        <ul className={style}>
          <li onClick={handleClick}>
            <a href="#unit">How to create unit allocations</a>
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
      <Text className="head_">HOW TO CREATE UNIT ALLOCATIONS</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content_head">STEP 1</Text>
        <Text className="content">
          Go to listings information page and select the unit you want to create
          unit numbering or allocations for and click on create allocations
        </Text>

        <Image src={create1} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="30px">
          STEP 2
        </Text>
        <Text className="content">
          It prompts an allocation type screen, kindly select the type that is
          applicable to you.
        </Text>

        <Image src={create2} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 3
        </Text>
        <Text className="content">
          You will be requested to input milestone if you selected either smart
          allocation or allocation by request. This is the milestone where users
          are eligible to be allocated a unit
        </Text>
        <Image src={create3} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 4
        </Text>
        <Text className="content">
          You will have to upload your site map (You can upload up to 5 images)
        </Text>

        <Image src={create4} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 5
        </Text>
        <Text className="content">
          This is where you fill In the numbering of the unit type.
        </Text>

        <Image src={archive7} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 6
        </Text>
        <Text className="content">Click on proceed and publish</Text>
      </Box>
      <Text className="head_" mt="80px">
        HOW ALLOCATION WORKS ON CLIENT’S END
      </Text>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 1
        </Text>
        <Text className="content">
          When the client has made payment to the stipulated milestone, the
          client will have access to the select allocation button
        </Text>

        <Image src={create5} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 2
        </Text>
        <Text className="content">
          A list of available units will be displayed and the client will have
          to select one. It will be allocated if it’s a smart allocation and it
          will be allocated after your approval if its an allocatiton by request
        </Text>
        <Image src={create6} mt="30px" mx="auto" />
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
            <Flex direction="row" columnGap="33px" pl="30px" mt="22px">
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/fractionalize_asset" style={{ color: "#5d5fef" }}>
                How do i fractionalise a unit
              </a>
            </Flex>
          </Box>
          <Box minH="64px" borderBottom="0.3px solid #000000">
            <Flex direction="row" columnGap="33px" pl="30px" mt="22px">
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />
              <a href="/delist" style={{ color: "#5d5fef" }}>
                How to delist a listing from online store
              </a>
            </Flex>
          </Box>
          <Box minH="64px">
            <Flex direction="row" columnGap="33px" pl="30px" mt="22px">
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/archive_unit" style={{ color: "#5d5fef" }}>
                How to archive a unit
              </a>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box marginTop="70px">
        <Text className="content_head">Was this helpful?</Text>
        <Flex direction="row">
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
