import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import inspections1 from "../../assets/images/inspections1.svg";
import inspections2 from "../../assets/images/inspections2.svg";
import inspections3 from "../../assets/images/inspections3.svg";
import inspections4 from "../../assets/images/inspections4.svg";
import inspections5 from "../../assets/images/inspections5.svg";
import { SlArrowRight } from "react-icons/sl";

export const Inspections = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="inspect">
      <div class="rightsidenav">
        <Text className="article_text">In this article</Text>
        <ul className={style}>
          <li onClick={handleClick}>
            <a href="#inspect">Inspections on Veerge</a>
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
      <Text className="head_">INSPECTIONS ON VEERGE </Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 1
        </Text>
        <Text className="content">
          Whoever wants to inspect a property has to click on request a tour
          button on the listing information page
        </Text>

        <Image src={inspections1} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 2
        </Text>
        <Text className="content">
          The person selects;
          <ul style={{ paddingLeft: "20px" }}></ul>
          The inspection type (In-person or video chat)
          <li>Inspection time</li>
          <li>Then sends a request.</li>
        </Text>

        <Image src={inspections2} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 3
        </Text>
        <Text className="content">
          The request drops on the portal and you either accept or reschedule
        </Text>

        <Image src={inspections3} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 4
        </Text>
        <Text className="content">
          When you accept, you are asked who you want to assign to? (either
          yourself or someone else)
        </Text>
        <Image src={inspections4} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 5
        </Text>
        <Text className="content">
          If you are assigning to someone else, you need to fill in the person’s
          email and a note. The assignee will get an email notification.
        </Text>
        <Image src={inspections5} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 6
        </Text>
        <Text className="content">
          A summary screen will be prompted and it there is no adjustment to be
          made, kindly complete.
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
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/first_time_setup" style={{ color: "#5d5fef" }}>
                How do i set up my account for the first time?
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
              <a href="/Verified_whats_next" style={{ color: "#5d5fef" }}>
                My account has been verified, what next?
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
