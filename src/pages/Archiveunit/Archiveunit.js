import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import archive1 from "../../assets/images/archive1.png";
import archive2 from "../../assets/images/archive2.png";
import archive3 from "../../assets/images/archive3.png";
import archive4 from "../../assets/images/archive4.png";
import archive5 from "../../assets/images/archive5.png";
import archive6 from "../../assets/images/archive6.png";
import archive7 from "../../assets/images/archive7.png";
import { SlArrowRight } from "react-icons/sl";

export const Archiveunit = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="archive">
      <Show breakpoint="(min-width: 769px)">
        <div class="rightsidenav">
          <Text className="article_text">In this article</Text>
          <ul className={style}>
            <li onClick={handleClick}>
              <a href="#archive">How to archive a unit</a>
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
      </Show>
      <Text className="head_">HOW TO ARCHIVE A UNIT</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content_head">STEP 1</Text>
        <Text className="content">
          Go to listings information page, scroll down and you’ll see the unit
          types. Kindly, select the unit you intend to archive
        </Text>

        <Image src={archive1} mt="20px" />
      </Box>
      <Box>
        <Text className="content_head" mt="30px">
          STEP 2
        </Text>
        <Text className="content">
          Click on the dropdown on the top right and select archive unit.
        </Text>

        <Image src={archive2} mt="20px" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 3
        </Text>
        <Text className="content">
          It will prompt a screen and you will be asked to input the number of
          units you intend to archive. Kindly fill in the information and
          proceed.
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 4
        </Text>
        <Text className="content">
          If you have created unit numbering or unit allocations, you will be
          prompted to select the units you want to archive. Kindly, check the
          boxes and proceed
        </Text>

        <Image src={archive3} mt="30px" />
      </Box>

      <Text className="head_" mt="100px">
        HOW TO REMOVE A UNIT FROM ARCHIVE
      </Text>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 1
        </Text>
        <Text className="content">Go to the listing info page.</Text>

        <Image src={archive4} mt="30px" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 2
        </Text>
        <Text className="content">
          Use the top right drop down and select manage archived unit.
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 3
        </Text>
        <Text className="content">
          Go to the unit and click on remove unit from archive.
        </Text>

        <Image src={archive5} mt="30px" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 4
        </Text>
        <Text className="content">
          You will be asked to enter the unit you intend to take out, kindly
          input and proceed.
        </Text>

        <Image src={archive6} mt="30px" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 5
        </Text>
        <Text className="content">
          If you have created unit numbering or unit allocations, you will be
          prompted to select the units you want to remove from archive. Kindly,
          check the boxes and proceed
        </Text>

        <Image src={archive7} mt="30px" />
        <Text className="content" mt="30px">
          <b>
            Go to the unit information page, the number of available units
            should have increased
          </b>
        </Text>
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
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/fractionalize_asset" style={{ color: "#5d5fef" }}>
                How do i fractionalise a unit
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
              <SlArrowRight style={{ color: "#5d5fef" }} />
              <a href="/delist" style={{ color: "#5d5fef" }}>
                How to delist a listing from online store
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
              <SlArrowRight style={{ color: "#5d5fef" }} />
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
