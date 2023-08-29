import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import reg from "../../assets/images/reg.png";
import email from "../../assets/images/verify_email.png";
import pass_setup from "../../assets/images/pass_setup.png";
import account_setup from "../../assets/images/account_setup.png";
import phone from "../../assets/images/phone_verification.png";
import pending from "../../assets/images/pending_appr.png";
import id from "../../assets/images/select_id.png";
import settings from "../../assets/images/settings.png";
import edit from "../../assets/images/edit.png";
import details from "../../assets/images/fill_details.png";
import { SlArrowRight } from "react-icons/sl";

export const Fisrttimesetup = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="account">
      <Show breakpoint="(min-width: 769px)">
        <div class="rightsidenav">
          <Text className="article_text">In this article</Text>
          <ul className={style}>
            <li onClick={handleClick}>
              <a href="#account">Setting up a Veerge account</a>
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
            <Link to="">Topic 5</Link>
          </Flex>
          <Flex columnGap="20px">
            <Image src={file} h="18px" w="14px" /> <Link to="">Subtopic 2</Link>
          </Flex>
        </div>
      </Show>

      <Text className="head_" id="account">
        FIRST TIME SETUP
      </Text>
      <Text className="publish">Published: November 23, 2022</Text>
      <Box>
        <Text className="content_head">SETTING UP A VEERGE ACCOUNT</Text>
        <Text className="content">
          Creating a Veerge account is free, easy and can be done in a few
          minutes. The steps below should guide you on how to create your
          account.
          <Text marginTop="20px">
            What you'll need:
            <ol style={{ listStyleType: "decimal", paddingLeft: "15px" }}>
              <li> Be at least 18 years old (we’ll ask for proof)</li>
              <li>
                {" "}
                A government-issued photo ID (we don’t accept passport cards)
              </li>
              <li>
                A phone number connected to your smartphone (we'll send SMS text
                messages).
              </li>
            </ol>
          </Text>
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 1
        </Text>
        <Text className="content">
          Simply click the link{" "}
          <a href="/" style={{ color: "#8486f2" }}>
            here
          </a>
          . You’ll be asked for the following information:
          <ul style={{ paddingLeft: "20px" }}>
            <li>Your legal full name (we'll require proof for verification purposes).</li>
            <li>An email address that you have access to. Please use a valid and active email.</li>
          </ul>
        </Text>
        <Image src={reg} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 2
        </Text>
        <Text className="content">
          You'll receive an email from no-reply@myxellia.io. This email will contain an OTP (One-Time Password).
          Please enter the OTP provided in the email to verify your email address. Click on "Verify" once you've entered the OTP.
        </Text>
        <Image src={email} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 3
        </Text>
        <Text className="content">
          You will be prompted to create a password (please create a memorable password).
          Passwords must be at least 8 characters long and have an estimated offline crack time over 6,000 seconds. We do not enforce arbitrary restrictions on numbers, special characters, or maximum password length.
          However, any passwords longer than 72 characters will be truncated.
        </Text>
        <Image src={pass_setup} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 4
        </Text>
        <Text className="content">
          Fill in the information:
          <ul style={{ paddingLeft: "25px" }}>
            <li>
              Select your country and enter a phone number connected to your
              smartphone (we'll send an OTP to your number).
            </li>
            <li>Enter your legal business name (we’ll ask for proof).</li>
            <li>
              Enter company address (Mails might be sent to this address)
            </li>
            <li>If prompted enter your company’s Registration number.</li>
          </ul>{" "}
        </Text>
        <Image src={account_setup} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 5
        </Text>
        <Text className="content">
          Enter the six-digit code texted to your phone number, if you didn’t
          receive OTP, you might need to use voice call OTP.
        </Text>
        <Image src={phone} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 6
        </Text>
        <Text className="content">
          This is the final step; select ID type, type in your ID number,
          expiration date, and upload the ID.
        </Text>
        <Image src={id} mt="30px" mx="auto" />
        <Text className="content" mt="20.7" fontWeight={700}>
          Once you've completed this step, click "Okay," and you'll be directed to the dashboard. However,
          please note that before you can fully utilise Veerge, we'll need more information about you and your business.
          We're eager to learn more about your company,
          so kindly fill in the details regarding your expected activities.
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 7
        </Text>
        <Text className="content">
          Navigate to the settings section, click on "Edit Profile," and provide your BVN (Bank Verification Number).
        </Text>
        <Image src={edit} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="70px">
          STEP 9
        </Text>
        <Text className="content" mt="20.7">
          Proceed to the compliance section and Fill in the details;
          <ul style={{ paddingLeft: "25px" }}>
            <li>
              Phone number
            </li>
            <li>company’s email company’s website</li>
            <li>
              Bio
            </li>
            <li>social media links</li>
          </ul>{" "}
        </Text>
        <Image src={details} mt="30px" mx="auto" />
        <Text className="content" mt="20.7">
          <b>
            Our compliance team willl review your application and provide a
            response within 48 hours.
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
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/" style={{ color: "#5d5fef" }}>
                What is KYC automation
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
              <a href="/" style={{ color: "#5d5fef" }}>
                What is myxellia technology
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
              <a href="/" style={{ color: "#5d5fef" }}>
                Where is veerge available
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
          </Text>
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
