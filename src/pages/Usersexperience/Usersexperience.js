import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import end1 from "../../assets/images/end1.png";
import end2 from "../../assets/images/end2.png";
import end3 from "../../assets/images/end3.png";
import end4 from "../../assets/images/end4.png";
import end5 from "../../assets/images/end5.png";
import end6 from "../../assets/images/end6.png";
import end7 from "../../assets/images/end7.png";
import { SlArrowRight } from "react-icons/sl";

export const Usersexperience = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="experience">
      <div class="rightsidenav">
        <Text className="article_text">In this article</Text>
        <ul className={style}>
          <li onClick={handleClick}>
            <a href="#experience">User’s end-to-end experience</a>
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
      <Text className="head_">USER’S END-TO-END EXPERIENCE</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 1
        </Text>
        <Text className="content">The user goes to the online store.</Text>
      </Box>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 2
        </Text>
        <Text className="content">
          Click on the top right button beside transactions and select
          fractionalise.
        </Text>

        <Image src={end1} mt="20px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 3
        </Text>
        <Text className="content">
          The user selects the account type (Personal or corporate) and fills in
          the following information
          <ul style={{ listStyleType: "none" }}>
            <li>-First name</li> <li>-Last name</li> <li>-Phone number</li>
            <li>-Email address</li> <li>-Upload ID (Optional)</li>
          </ul>
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 4
        </Text>
        <Text className="content">
          Once the account has been created, the user can explore listed
          properties, share with friends, add to watchlist, schedule inspection
          and lots more.
        </Text>
        <Image src={end2} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 5
        </Text>
        <Text className="content">
          The user clicks on the property that piques their interest, scrolls to
          the unit that piques their interest and selects buy property.
        </Text>
        <Image src={end3} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 6
        </Text>
        <Text className="content">
          Click on Buy property and go to the payment type of their choice
          (Payment plan or outright).
        </Text>
        <Image src={end4} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 7
        </Text>
        <Text className="content">
          The user will proceed to payment (Payment of initial deposit).
        </Text>
        <Image src={end5} mt="30px" mx="auto" />
        <Text className="content" mt="38px" mb="33px">
          <b>
            You will get the payment in your bank account immediately and the
            purchase is automatically logged on your software.
          </b>
        </Text>
        <Image src={end6} mt="30px" mx="auto" />
      </Box>

      <Text className="head_" mt="44px">
        HOW TO CO-OWN A PROPERTY
      </Text>
      <Box>
        <Text className="content_head" mt="20px">
          STEP 8
        </Text>
        <Text className="content">
          From <b>step 7</b>, the user selects invite a co-owner.
        </Text>
        <Image src={end7} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 9
        </Text>
        <Text className="content">
          Select the payment type that is convenient for all parties involved.
        </Text>
      </Box>

      <Box>
        <Text className="content_head" mt="70px">
          STEP 10
        </Text>
        <Text className="content">
          The following info will be filled
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              The email address of the person you intend to own the property
              with
            </li>{" "}
            <li>The equity or ownership percentage of the person</li>{" "}
            <li>offer expiration date</li>
            <li>A note</li>
          </ul>
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 11
        </Text>
        <Text className="content">
          This can be repeated as many times as possible
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 12
        </Text>
        <Text className="content">
          Everyone that’s been invited either has to accept or reject the
          invitation before the host can make payment
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="36px">
          STEP 13
        </Text>
        <Text className="content">
          If anyone rejects, the equity is automatically assigned to the host
          and once there is no pending user, the host makes the payment and
          every other person is alerted to make the payment
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
