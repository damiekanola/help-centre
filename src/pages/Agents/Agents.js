import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import agent1 from "../../assets/images/agent1.png";
import agent2 from "../../assets/images/agent2.png";
import agent3 from "../../assets/images/agent3.png";
import agent4 from "../../assets/images/agent4.png";
import agent5 from "../../assets/images/agent5.png";
import agent6 from "../../assets/images/agent6.png";
import agent7 from "../../assets/images/agent7.png";
import { SlArrowRight } from "react-icons/sl";

export const Agents = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState("");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };

  return (
    <div className="main">
      <Show breakpoint="(min-width: 769px)">
        <div class="rightsidenav">
          <Text className="article_text">In this article</Text>
          <ul className={style}>
            <li onClick={handleClick}>
              <a href="#agents">How agents sign up</a>
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
      <Text className="head_" id="agents">
        HOW AGENTS SIGN UP
      </Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content_head">STEP 1</Text>
        <Text className="content">
          The agent has to go to the portal and select “get started as an agent”
        </Text>

        <Image src={agent1} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="30px">
          STEP 2
        </Text>
        <Text className="content">
          The agent has to input and email address
        </Text>

        <Image src={agent2} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 3
        </Text>
        <Text className="content">
          The agent has to verify the email and fill in information to register
          account
        </Text>
        <Image src={agent3} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 4
        </Text>
        <Text className="content">
          Once that has been filled the agent has to fill in
          <ul style={{ paddingLeft: "20px" }}>
            <li>Date of birth</li>
            <li>Highest education level</li>
            <li>Marital status</li>
            <li>Company name</li>
            <li>Residential address</li>
            <li>Company address</li>
          </ul>
        </Text>

        <Image src={agent4} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 5
        </Text>
        <Text className="content">
          The agent has to upload any form of Valid ID and a request drops on
          your portal to verify the account.
        </Text>

        <Image src={agent5} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 6
        </Text>
        <Text className="content">
          You can either accept or reject the request. Once you have accepted
          their request, they have access to all properties for sale
        </Text>
        <Image src={agent6} mt="30px" mx="auto" />
      </Box>

      <Box>
        <Text className="content_head" mt="40px">
          STEP 7
        </Text>
        <Text className="content">
          The agent gets an email that they have been approved and can generate
          their referral link. Once anyone signs up with their link, It logged
          on the user’s profile
        </Text>

        <Image src={agent7} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 8
        </Text>
        <Text className="content">
          When the buyer purchases any property for the first time, the agent
          will be automatically paid their commission. (The process is
          automated, if you’ve automated the process, if you choose to not
          automate it, you will have to pay the commission to the agent manually
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
              <a href="/fisrt_time_setup" style={{ color: "#5d5fef" }}>
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
              <a href="/fisrt_time_setup" style={{ color: "#5d5fef" }}>
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
