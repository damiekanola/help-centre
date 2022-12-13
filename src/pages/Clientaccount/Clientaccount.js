import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import account1 from "../../assets/images/account1.png";
import account2 from "../../assets/images/account2.png";
import { BsExclamationCircle } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";

export const Clientaccount = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };

  return (
    <div className="main" id="client">
      <div class="rightsidenav">
        <Text className="article_text">In this article</Text>
        <ul className={style}>
          <li onClick={handleClick}>
            <a href="#client">How to create a client’s account</a>
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
      <Text className="head_">HOW TO CREATE A CLIENT ACCOUT</Text>
      <Text className="publish">Published: November 24, 2022</Text>

      <Box>
        <Text className="content_head" mt="36px">
          STEP 1
        </Text>
        <Text className="content">
          Go to users and select create client account.
        </Text>

        <Image src={account1} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 2
        </Text>
        <Text className="content">
          Fill in the following information
          <ul style={{ listStyleType: "none" }}>
            <li>-First name</li> <li>-Last name</li> <li>-Phone number</li>{" "}
            <li>-Email address</li> <li>-Upload ID (Optional)</li>
          </ul>
        </Text>
        <Image src={account2} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 3
        </Text>
        <Text className="content">
          This is where you pick the property the client purchased
          <ul style={{ listStyleType: "none" }}>
            <li>-Select the listing,</li>{" "}
            <li>-Select the property unit (if prompted)</li>
          </ul>
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 4
        </Text>
        <Text className="content">
          This is where you input how the client made payments; Either outright
          or payment plan
        </Text>
        <Text className="content">
          If the client paid outright, all you have to do is input amount and
          date of payment while If it’s a payment plan, Input past payments and
          upcoming payments (if there are any.)
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 5
        </Text>
        <Text className="content">
          This is where you allocate a unit to the account, pick one of the
          already created allocations and assign to the account If an allocation
          already exists, if an allocation doesn’t exist, kindly skip.
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 6
        </Text>
        <Text className="content">
          The summary of the account is displayed and you complete.
        </Text>
      </Box>
      <Flex
        maxW="624px"
        minH="99px"
        bg="#d9d9d9"
        borderRadius="10px"
        mt="70px"
        pl="15px"
        pt="23px"
        direction="row"
        columnGap="7px"
      >
        <BsExclamationCircle style={{ width: "25px", height: "25px" }} />
        <Text fontSize="15px" fontWeight="300">
          The client gets an automated email from your company to complete the
          account creation process
        </Text>
      </Flex>
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
              <a href="/create_unit" style={{ color: "#5d5fef" }}>
                How do I create allocations
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
