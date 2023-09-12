import React, { useRef } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import homeOwner1 from '../../../assets/images/homeOwners/home-owners-packet-1.png';
import homeOwner2 from '../../../assets/images/homeOwners/home-owners-packet-2.png';
import homeOwner3 from '../../../assets/images/homeOwners/home-owners-packet-3.png';
import QuestionsAndReplies from "../../../components/Faq/QuestionsAndReplies";
import LeftNav from "../../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../../components/Faq/Helpful";
import useIsInViewport from "../../../utils/useOnScreen/useOnScreen";
import LeadRightNav from "../../../components/Lead/RightNav";

export const HomeOwnersPacket = () => {

  const how_toRef = useRef(null)
  const stepsRef = useRef(null)
  const questionsRef = useRef(null)

  const how_toCheck = useIsInViewport(how_toRef);
  const stepsCheck = useIsInViewport(stepsRef)
  const questionsCheck = useIsInViewport(questionsRef)


  const articleContent = [
    { check: how_toCheck, id: 'how_to', title: 'Create an account' },
    { check: stepsCheck, id: 'steps', title: 'Steps' },
    { check: questionsCheck, id: 'questions', title: 'Questions & Replies' },
  ]

  const questions = [
    {
      name: 'David G.',
      date: 'Jun 07, 2023',
      content: "Hello, I have a situation where a client made a payment outside the application. Is there a method to record this payment within the application?",
      replies: [
        `Hi David,
        Absolutely. Here's what you can do: Head to the 'Pending Offer' section, and
        you'll find the respective account number. Proceed to initiate a transfer to this
        account. As soon as the transaction is complete, the updates will seamlessly reflect on both ends, ensuring accurate records. If you require any further assistance with this process, don't hesitate to reach out to our support team.
        We're here to help`
      ]
    }
  ]



  return (
    <div className="main">
      <LeftNav articleContent={articleContent} />
      <LeadRightNav />
      <Text className="head_">SEND AN OFFER</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box id="how_to" ref={how_toRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text as='p'>
            In the realm of real estate transactions, negotiation often plays a pivotal role.
            Within this landscape, the price displayed on the user’s application most times
            is not set in stone for the development company—it's subject to negotiation.
            This is where 'Private Offer' feature comes into play. Imagine a potential buyer
            spotting a property on your application and desiring to explore a deal more
            aligned with their preferences. In such cases, they can interact with the chatbot
            or get in touch via phone to initiate negotiations.
          </Text>
          <Text as='p' marginTop="20px">
            Should the development company entertain the offered price, they will
            generate a 'Private Offer' tailored to the negotiated terms. This confidential
            proposition grants the prospective buyer access to a personalized deal beyond
            what's publicly listed on the application.
          </Text>
          <Text as='p' marginTop="20px">
            Navigating this process involves several steps, which will be outlined below:
          </Text>
        </Text>
      </Box>
      <Box id="steps" ref={stepsRef}>
        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">
            Navigate to the users section and select the specific user you intend to share the document with.
          </Text>

          <Image src={homeOwner1} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="30px">
            STEP 2
          </Text>
          <Text className="content">
            Click on the chosen property, then proceed to the upper right corner and access the dropdown menu.
          </Text>

          <Image src={homeOwner2} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content">
            Choose the "Upload Homeowner's Packet" option, proceed to upload the PDF document, and finalize the process by clicking "Proceed."
          </Text>
          <Image src={homeOwner3} mt="30px" mx="auto" w='full' />
        </Box>
      </Box>

      <Box id='questions' ref={questionsRef}>
        <QuestionsAndReplies questions={questions} />
      </Box>

      <Helpful />
    </div>
  );
};
