import React, { useRef } from "react";
import { Box, Text, Image, Flex, useToast, Show, VStack } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import file from "../../../assets/icons/file.png";
import createLead1 from '../../../assets/images/create-lead/create-lead-account-1.png';
import createLead2 from '../../../assets/images/create-lead/create-lead-account-2.png';
import createLead3 from '../../../assets/images/create-lead/create-lead-account-3.png';
import createLead4 from '../../../assets/images/create-lead/create-lead-account-4.png';

import createLeadS1 from '../../../assets/images/create-lead/create-lead-account-2-1.png';
import createLeadS2 from '../../../assets/images/create-lead/create-lead-account-2-2.png';
import createLeadS3 from '../../../assets/images/create-lead/create-lead-account-2-3.png';
import createLeadS4 from '../../../assets/images/create-lead/create-lead-account-2-4.png';
import createLeadS5 from '../../../assets/images/create-lead/create-lead-account-2-5.png';
import createLeadS6 from '../../../assets/images/create-lead/create-lead-account-2-6.png';
import createLeadS7 from '../../../assets/images/create-lead/create-lead-account-2-7.png';
import createLeadS8 from '../../../assets/images/create-lead/create-lead-account-2-8.png';
import createLeadS9 from '../../../assets/images/create-lead/create-lead-account-2-9.png';
import createLeadS10 from '../../../assets/images/create-lead/create-lead-account-2-10.png';
import createLeadS11 from '../../../assets/images/create-lead/create-lead-account-2-11.png';

import { useState } from "react";
import QuestionsAndReplies from "../../../components/Faq/QuestionsAndReplies";
import RightNav from "../../../components/Listings/RightNav";
import LeftNav from "../../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../../components/Faq/Helpful";
import useIsInViewport from "../../../utils/useOnScreen/useOnScreen";
import LeadRightNav from "../../../components/Lead/RightNav";
import Blocker from "../../../components/blocker";

export const CreateLeadAccount = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const toView = true
  // searchParams.get('isrestricted') === 'true'

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
      name: 'Khamil F.',
      date: 'Jun 07, 2023',
      content: "I assigned a property to an account, but now I can't find it in their profile overview anymore.",
      replies: [
        "Greetings Khamil,It seems that the property's absence from the account's profile overview could stem from a dispute initiated by the account owner. When you assign a property to an account, it necessitates validation from the account holder's side as well. To gain insights into the situation, I recommend heading to the ticket section. In situations like this, a ticket is automatically generated to track any arising issues. In these cases, account holders are usually prompted to add contexts to the reasons behind the dispute. If the explanation on the ticket section isn't sufficiently clear, you might need to establish direct communication with the account owner to better comprehend the nature of the discrepancy and discern what might have gone awry. This open line of communication should shed light on the issue and pave the way for a resolution."
      ]
    }
  ]


  const relatedContent = [
    { link: '/first_time_setup', text: 'First time setup' },
    { link: "/approved_what_next", text: 'Approved, what next?' },
    { link: "/terms", text: 'Terms of service' },
    { link: "/users_experience", text: 'End-to-End experience' }
  ]

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <LeadRightNav />
      <Box w='full'>
        <Text className="head_">Create aN ACCOUNT</Text>
        <Text className="publish">Published: March 26, 2023</Text>
        <Box id="how_to" ref={how_toRef}>
          <Text className="content" lineHeight={'25px'}>
            <Text as='p' marginTop={'30px'}>
              Lead management serves as the cornerstone of the sales process, providing the crucial framework for nurturing potential leads aligned with your target audience. Guiding these prospects through the various stages of the lead lifecycle demands a systematic approach, characterized by swift follow-ups, meticulous segmentation, and the precise delegation of leads to the appropriate sales representatives. The essence lies in maintaining impeccably timed interactions that resonate with the lead's journey.
            </Text>
            <Text as='p' marginTop="20px">
              Typically, the majority of leads poised on the brink of conversion will comprise individuals who have registered on your platform, be it through mobile or web applications. Nevertheless, there will be instances where leads are acquired externally and require manual entry.
            </Text>
            <Text as='p' marginTop="20px">
              In such cases, the following procedural steps are indispensable:
            </Text>
          </Text>
        </Box>


        <Box id="steps" ref={stepsRef}>
          <Box>
            <Text className="content_head">STEP 1</Text>
            <Text className="content">
              Begin by navigating to the designated <b>"Users"</b> section within the system.
            </Text>

            <Image src={createLead1} mt="30px" mx="auto" w='full' />
          </Box>
          <Box display={toView ? 'block' : 'none'}>
            <Box>
              <Text className="content_head" mt="30px">
                STEP 2
              </Text>
              <Text className="content">
                Initiate the lead logging process by selecting the <b>"Create Account"</b> option.
              </Text>

              <Image src={createLead2} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 3
              </Text>
              <Text className="content">
                Populate the requisite lead information fields with accurate data.
              </Text>
              <Image src={createLead3} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 4
              </Text>
              <Text className="content">
                Enhance the lead's profile by appending relevant supplementary details or notes.
              </Text>

              <Image src={createLead4} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 5
              </Text>
              <Text className="content">
                Confirm the lead account's creation by clicking <b>"Create Lead Account."</b>
              </Text>

              {/* <Image src={createLead5} mt="30px" mx="auto" w='full' /> */}
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 6
              </Text>
              <Text className="content">
                Conclude the process, ensuring meticulous recording of the lead's particulars and associated notes.
              </Text>
              {/* <Image src={createLead6} mt="30px" mx="auto" w='full' /> */}
              <Text className="content" marginTop={'20px'}>
                <b>
                  In parallel scenarios where clients make property purchases external to the
                  application, the onboarding process presents distinct requirements. One
                  frequent scenario involves new entrants to the Veerge platform, particularly
                  property development firms aiming to integrate their existing clientele. For such
                  scenarios, a specialized set of steps is vital:
                </b>
              </Text>
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 1
              </Text>
              <Text className="content">
                Commence by accessing the user management interface.
              </Text>
              <Image src={createLeadS1} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 2
              </Text>
              <Text className="content">
                Activate the account creation procedure by selecting the <b>"Create Account"</b> option.
              </Text>
              <Image src={createLeadS2} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 3
              </Text>
              <Text className="content">
                Populate essential fields, encompassing name, phone number, and optionally, a profile picture. Ensure the accuracy of the provided email.
              </Text>
              <Image src={createLeadS3} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 4
              </Text>
              <Text className="content">
                Progress to the property assignment phase by clicking on <b>"Assign Property."</b>
              </Text>
              <Image src={createLeadS4} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 5
              </Text>
              <Text className="content">
                Identify the relevant listing and unit to be allocated to the user.
              </Text>
              <Image src={createLeadS5} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 6
              </Text>
              <Text className="content">
                Detail the transaction specifics, discerning between outright payments and payment plans. For outright payments, input a single transaction on the day of completion. For payment plans, record each instalment individually, including the
                initial deposit and subsequent payments.
              </Text>
              <Image src={createLeadS6} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 7
              </Text>
              <Text className="content">
                Account for pending payments by enumerating due dates and corresponding amounts.
              </Text>
              <Image src={createLeadS7} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 8
              </Text>
              <Text className="content">
                Attach the purchase agreement to the account, solidifying the transaction.
              </Text>
              <Image src={createLeadS8} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 9
              </Text>
              <Text className="content">
                If the account owner possesses multiple properties, append further units as necessary.
              </Text>
              <Image src={createLeadS9} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 10
              </Text>
              <Text className="content">
                Execute the allocation phase, aligning specific units with the respective account holder.
              </Text>
              <Image src={createLeadS10} mt="30px" mx="auto" w='full' />
            </Box>
            <Box>
              <Text className="content_head" mt="40px">
                STEP 11
              </Text>
              <Text className="content">
                Finalize the process, culminating in the successful assignment of units and completion of the transaction.
              </Text>
              <Image src={createLeadS11} mt="30px" mx="auto" w='full' />
              <Text className="content" mt='30px'>
                In both lead management and property acquisition scenarios, meticulous
                attention to detail and adherence to the prescribed steps are imperative for
                ensuring accuracy, enhancing user experience, and optimizing sales efficacy.
              </Text>
            </Box>

          </Box>
        </Box>

        <Box display={toView ? 'block' : 'none'}>
          <Box id='questions' ref={questionsRef}>
            <QuestionsAndReplies questions={questions} />
          </Box>
          <Helpful />
        </Box>

      </Box>
      {!toView && <Blocker />}

    </div>
  );
};
