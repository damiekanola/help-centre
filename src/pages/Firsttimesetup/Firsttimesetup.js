import React, { useRef, useState } from "react";
import { Box, Text, Image, Flex, useToast, Show, VStack, Divider, OrderedList, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import reg from "../../assets/images/reg.png";
import email from "../../assets/images/verify_email.png";
import pass_setup from "../../assets/images/pass_setup.png";
import account_setup from "../../assets/images/account_setup.png";
import phone from "../../assets/images/phone_verification.png";
import id from "../../assets/images/select_id.png";
import edit from "../../assets/images/edit.png";
import details from "../../assets/images/fill_details.png";
import QuestionsAndReplies from "../../components/Faq/QuestionsAndReplies";
import LeftNav from "../../components/Leftsidenav/Leftsidenav";
import peters from '../../assets/images/peters-pic.png';
import farouk from '../../assets/images/farouk.png';
import fatima from '../../assets/images/fateemah.png'
import mobolaji from '../../assets/images/mobolaji.png'
import Helpful from "../../components/Faq/Helpful";
import useIsInViewport from "../../utils/useOnScreen/useOnScreen";

export const Fisrttimesetup = () => {
  const toast = useToast();

  const accountRef = useRef(null)
  const stepsRef = useRef(null);
  const questionsRef = useRef(null)

  const accountCheck = useIsInViewport(accountRef);
  const stepsCheck = useIsInViewport(stepsRef);
  const questionsCheck = useIsInViewport(questionsRef)


  const articleContent = [
    { check: accountCheck, id: 'account', title: 'First Time Setup' },
    { check: stepsCheck, id: 'steps', title: 'Steps' },
    { check: questionsCheck, id: 'questions', title: 'Questions & Replies' },
  ]

  const questions = [
    {
      image: peters,
      name: 'Peters T.',
      date: 'Jun 15, 2023',
      content: "Why am I not getting OTP?",
      replies: [
        <Box>
          <Text>
            Hello,
            There could be multiple factors contributing to your lack of receiving an OTP (One-Time Password):
          </Text>

          <OrderedList>
            <ListItem mt='20px'>
              <b>Correct Information:</b> Ensure that you have accurately entered your phone number during the registration process. Double-check for any potential typos or errors.
            </ListItem>
            <ListItem mt='20px'>
              <b>Network Issues:</b> Delays in receiving OTPs may arise due to network related problems. Verify your network connectivity and attempt the process again.
            </ListItem>
            <ListItem mt='20px'>
              <b>Server Delays:</b> The service responsible for providing the OTP might be encountering technical complications or delays. These delays might be the result of server disruptions or high levels of user traffic.
            </ListItem>
            <ListItem mt='20px'>
              <b>Device Issues:</b> If you are using a device that experiences difficulties in receiving messages—such as an older phone or a device with limited storage—it could impede the delivery of OTPs.
            </ListItem>
            <ListItem mt='20px'>
              <b>Mobile Carrier Issues:</b> In instances where you are not receiving OTPs via SMS, it is plausible that your mobile carrier is facing problems with message delivery.
            </ListItem>
          </OrderedList>
          <Text mt='20px'>
            As an alternative, consider exploring the option of utilizing voice OTPs, which can offer an alternative approach to authentication.
          </Text>





        </Box>
      ]
    },
    {
      image: fatima,
      name: 'Fateemah S.',
      date: 'Jun 02, 2023',
      content: "It’s been a week and my account still hasn’t been approved, do I need to provide more information?",
      replies: [
        `Hello,
        We wanted to inform you that your account approval is pending due to an ongoing review process. Typically, this review process takes around 3 days to complete. However, please understand that if there are any complexities in verifying the provided information, the process might extend beyond this timeframe. 
        Rest assured that we are diligently working through this process. If there's a need for additional information, we will promptly reach out to you.`
      ]
    },
    {
      name: 'Tracy K.',
      date: 'May 28, 2023',
      content: "My application was rejected ?? Is there any reason for that?",
      replies: [
        `Hello,
        We understand that you may have questions about the recent rejection of your application. The reasons for rejection could stem from a few factors. These might include challenges in verifying the status of your property development company, the possibility that the individual who created the account lacked the authority to enter agreements on behalf of the company, or discrepancies in the
        information provided.
        If you have received a rejection email, the specific reason for the rejection should have been detailed within that communication. We encourage you to review the email for further clarification on the decision. If you require any assistance or have additional inquiries, please don't hesitate to reach out to our support team. We're here to help address any concerns you may have.
        Thank you for your understanding.`
      ]
    },
    {
      image: mobolaji,
      name: 'Mobolaji F.',
      date: 'May 12, 2023',
      content: 'My Listings, User, dashboard and other applications are not working? How do I make them work?????',
      replies: [
        `Hello,
      Access to this feature is currently unavailable as your account is pending approval. Once your account has been approved, you will be able to select a subscription of your choice. This will grant you access to the features you are seeking.
      Thank you for your patience and we look forward to having you fully onboarded.`
      ]
    },
    {
      name: 'Samuel G.',
      date: 'May 08, 2023',
      content: 'My account was pending approval last night but this morning I couldn’t log in anymore.',
      replies: [
        `Hello,
      If you're currently experiencing this issue, it's possible that your application has been rejected. Please review the email associated with your registration – you should find the reason for the rejection explained there. If you require any assistance or wish to contest the decision, please don't hesitate to get in touch with our support team.
      Thank you for your understanding and cooperation.`
      ]
    },
    {
      image: farouk,
      name: 'Farouk I.',
      date: 'May 05, 2023',
      content: 'My account was pending approval last night but this morning I couldn’t log in anymore.',
      replies: [
        `Hello,
        Upon the approval of your account and your selection of a subscription tier, you will be able to create your application. Please note that the Basic and Premium tiers grant access solely to the web application. 
        On the other hand, Veerge Plus subscriptions provide access to either mobile applications, web applications, or both, depending on your preference.
        Thank you for your interest, and we're excited to have you on board.`
      ]
    }
  ]

  const relatedContent = [
    { link: "/approved_whats_next", text: 'Approved, what next?' },
    { link: "/terms", text: 'Terms of service' },
    { link: "/privacy", text: 'Privacy policy' }
  ]


  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />

      <Text className="head_">
        FIRST TIME SETUP
      </Text>
      <Text className="publish">Published: November 23, 2022</Text>
      <Box pt="30px" id="account" ref={accountRef}>
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

      <Box id="steps" ref={stepsRef}>
        <Box>
          <Text className="content_head">
            STEP 1
          </Text>
          <Text className="content">
            To begin, click on the provided
            <a href="https://veerge.myxellia.io/auth/onboarding" style={{ color: "#8486f2" }}>  link  </a>
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
            You'll receive an email from   <span style={{ color: "#8486f2" }}>  no-reply@myxellia.io  </span>. This email will contain an OTP (One-Time Password).
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

      <Box ref={questionsRef}>
        <QuestionsAndReplies questions={questions} />
      </Box>

      <Helpful />

    </div>
  );
};
