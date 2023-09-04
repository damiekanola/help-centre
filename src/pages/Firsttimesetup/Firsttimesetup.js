import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast, Show, VStack } from "@chakra-ui/react";
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
  const [active, setActive] = useState("account");
  const handleClick = (id) => {
    console.log(id);
    // setStyle("bluenav");
    setActive(id)
  };

  const articleContent = [
    { id: 'account', title: 'First Time Setup' },
    { id: 'steps', title: 'Steps' },
    { id: 'questions', title: 'Questions & Replies' },
  ]

  return (
    <div className="main">
      <Show breakpoint="(min-width: 769px)">
        <Box position={'fixed'} min-height='751px' left='0' w='100%' maxW={'282px'} pl='40px' h='20px !important' >
          <Text className="article_text">In this article</Text>
          <Flex mt='20px' direction={'column'} align={'stretch'}>
            {articleContent.map((content, i) => (
              <Flex
                key={i} cursor={'pointer'}
                onClick={() => handleClick(content.id)}
                borderLeft={i !== articleContent.length - 1 && '1px solid #E4E4E4'}
                pb='25px' justify='flex-start' align='flex-start'>
                <Box ml='-5px' w='10px' h='10px' borderRadius={'full'} bg={active === content.id ? '#4545FE' : '#E4E4E4'} />
                <Text
                  maxW={'80%'}
                  mt='-5px'
                  ml='20px'
                  fontSize={'14px'}
                  fontWeight={active === content.id ? 500 : 400}
                  color={active === content.id ? '#4545FE' : '#191919'}
                >
                  <a href={`#${content.id}`}>
                    {content?.title}
                  </a>
                </Text>
              </Flex>
            ))}
          </Flex>

          <Text className="article_text" mt="40px">
            Related Content
          </Text>
          <VStack mt='20px' spacing={'17px'} align='stretch'>
            <Flex columnGap="20px">
              <Image src={file} />
              <Link to="/into_to_veerge">Intro to veerge</Link>
            </Flex>

            <Flex columnGap="20px">
              <Image src={file} /> <Link to="/approved_whats_next">Approved, what next?</Link>
            </Flex>
            <Flex columnGap="20px">
              <Image src={file} /> <Link to="/terms">Terms of service</Link>
            </Flex>
          </VStack>
        </Box>
      </Show>

      <Text className="head_">
        FIRST TIME SETUP
      </Text>
      <Text className="publish">Published: November 23, 2022</Text>
      <Box pt="30px" id="account">
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

      <Box id="steps">
        <Box>
          <Text className="content_head">
            STEP 1
          </Text>
          <Text className="content">
            To begin, click on the provided
            <a href="/" style={{ color: "#8486f2" }}>  link  </a>
            . You'll be asked to provide the following information:
            <ul style={{ paddingLeft: "20px" }}>
              <li>Your legal full name (we'll require proof for verification purposes).</li>
              <li>An email address that you have access to. Please use a valid and active email.</li>
            </ul>
          </Text>
          <Image src={reg} mt="30px" mx="auto" />
        </Box>
        <Box>
          <Text className="content_head" mt="50px">
            STEP 2
          </Text>
          <Text className="content">
            You'll receive an email from   <a href="/" style={{ color: "#8486f2" }}>  no-reply@myxellia.io  </a>. This email will contain an OTP (One-Time Password).
            Please enter the OTP provided in the email to verify your email address. Click on "Verify" once you've entered the OTP.
          </Text>
          <Image src={email} mt="30px" mx="auto" />
        </Box>
        <Box>
          <Text className="content_head" mt="50px">
            STEP 3
          </Text>
          <Text className="content">
            You will be prompted to create a password <b>(please create a memorable password)</b>.
            Passwords must be at least 8 characters long and have an estimated offline crack time over 6,000 seconds. We do not enforce arbitrary restrictions on numbers, special characters, or maximum password length.
            However, any passwords longer than 72 characters will be truncated.
          </Text>
          <Image src={pass_setup} mt="30px" mx="auto" />
        </Box>
        <Box>
          <Text className="content_head" mt="50px">
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
          <Text className="content_head" mt="50px">
            STEP 5
          </Text>
          <Text className="content">
            Enter the six-digit code texted to your phone number, if you didn’t
            receive OTP, you might need to use voice call OTP.
          </Text>
          <Image src={phone} mt="30px" mx="auto" />
        </Box>
        <Box>
          <Text className="content_head" mt="50px">
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
          <Text className="content_head" mt="50px">
            STEP 7
          </Text>
          <Text className="content">
            Navigate to the settings section, click on "Edit Profile," and provide your BVN (Bank Verification Number).
          </Text>
          <Image src={edit} mt="30px" mx="auto" />
        </Box>
        <Box>
          <Text className="content_head" mt="50px">
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
      </Box>

      <Box pt="30px" id="questions">
      </Box>

      <Box marginTop="50px">
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
