import React, {useRef} from 'react';
import {Box, Text, Image, Flex, useToast, Show, VStack} from '@chakra-ui/react';
import createUnit1 from '../../../assets/images/create-unit/create-unit-1.png';
import createUnit2 from '../../../assets/images/create-unit/create-unit-2.png';
import createUnit3 from '../../../assets/images/create-unit/create-unit-3.png';
import createUnit4 from '../../../assets/images/create-unit/create-unit-4.png';
import createUnit5 from '../../../assets/images/create-unit/create-unit-5.png';
import createUnit6 from '../../../assets/images/create-unit/create-unit-6.png';
import createUnit7 from '../../../assets/images/create-unit/create-unit-7.png';
import createUnit8 from '../../../assets/images/create-unit/create-unit-8.png';
import {useState} from 'react';
import QuestionsAndReplies from '../../../components/Faq/QuestionsAndReplies';
import RightNav from '../../../components/Listings/RightNav';
import LeftNav from '../../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../../components/Faq/Helpful';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import HideUnsubscribed from '../../../hoc/Hidefull';

const Createunit = () => {
  const how_toRef = useRef(null);
  const stepsRef = useRef(null);
  const questionsRef = useRef(null);

  const how_toCheck = useIsInViewport(how_toRef);
  const stepsCheck = useIsInViewport(stepsRef);
  const questionsCheck = useIsInViewport(questionsRef);

  const articleContent = [
    {check: how_toCheck, id: 'how_to', title: 'How to create unit  allocation'},
    {check: stepsCheck, id: 'steps', title: 'Steps'},
    {check: questionsCheck, id: 'questions', title: 'Questions & Replies'},
  ];

  const questions = [
    {
      name: 'Dhaval B.',
      date: 'Jun 07, 2023',
      content:
        'I tried to create an allocation, but it redirected me to the archive page. Any suggestions',
      replies: [
        <Box>
          <Text> Hello Dhaval,</Text>
          <Text mt="20px">
            This situation may have arisen due to the unit being archived before initiating the
            allocation step. To address this, follow these steps:
          </Text>
          <Text mt="20px">
            Check the boxes of the specific units you intend to archive.Complete the archiving
            process.It's important to note that during the initial archiving, you didn't get to
            choose the exact units you wanted to archive. For instance, if there are 10 units under
            a category and you archived 5, you didn't specify whether it should be units Flat 1 to
            Flat 5 or Flat 5 to Flat 10. The screen prompt you encountered is designed to help you
            precisely select the units you wish to remove from archive.
          </Text>
          <Text mt="20px">
            Should you require further assistance, don't hesitate to schedule a meeting with our
            support team. We're here to help!
          </Text>
        </Box>,
      ],
    },
  ];

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <RightNav />
      <Text className="head_">HOW TO CREATE UNIT ALLOCATIONS</Text>
      <Text className="publish">Published: February 18, 2023</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Box id="how_to" ref={how_toRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text as="p" marginTop={'30px'}>
            In the Veerge context, Allocation refers to the deliberate process of designating
            specific units or properties within a development project to particular individuals or
            entities. This encompasses tasks like assigning units to buyers, investors, partners, or
            any other stakeholders engaged in the project.
          </Text>
          <Text as="p" marginTop="20px">
            Allocations play a vital role in ensuring precise unit assignment to the appropriate
            individuals, guided by factors like agreements, contracts, preferences, or prior
            purchases. This procedure holds particular significance in projects involving multiple
            units, such as apartment complexes or housing estates, where each unit boasts unique
            features, sizes, and values.
          </Text>
          <Text as="p" marginTop="20px">
            Let's delve into the example of Barrio Logan to understand how allocation milestones are
            handled: Assuming Barrio Logan's allocation milestone is set at 70%, here are the steps
            to navigate this process:
          </Text>
        </Text>
      </Box>
      <Box id="steps" ref={stepsRef}>
        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">
            Begin by choosing the listing and the specific unit you wish to allocate. For instance,
            let's take the example of the 1 bedroom flat.
          </Text>

          <Image src={createUnit1} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="30px">
            STEP 2
          </Text>
          <Text className="content">
            Once you've selected the unit, opt for <b>"Create Allocation."</b>
          </Text>

          <Image src={createUnit2} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content">
            Next, pick the <b>"Smart Allocation"</b> option for this unit.
          </Text>
          <Image src={createUnit3} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 4
          </Text>
          <Text className="content">
            Select the appropriate milestone that corresponds with the allocation process. This
            milestone defines the stage at which allocation becomes available, often linked to
            project progress. In this case we will choose 70% (i.e once subscribers have made 70% of
            payment they are eligible for allocation.
          </Text>

          <Image src={createUnit4} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 5
          </Text>
          <Text className="content">
            Provide images that offer a comprehensive breakdown of the building's layout or
            structure (You can upload up to 5 images).
          </Text>

          <Image src={createUnit5} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 6
          </Text>
          <Text className="content">
            You'll encounter an input field equivalent to the quantity of units available. Fill in
            the necessary details for each unit within the selected type, in this case it will be
            “Flat 1,2,3,4,5,6,7,8,9 & 10”.
          </Text>
          <Image src={createUnit6} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 7
          </Text>
          <Text className="content">
            Proceed through the allocation setup, reviewing the details you've inputted.
          </Text>
          <Image src={createUnit7} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 8
          </Text>
          <Text className="content">
            Once you're satisfied, finalize the process, and your allocation setup for the 1 bedroom
            flat is complete.
          </Text>
          <Image src={createUnit8} mt="30px" mx="auto" w="full" />
          <Text className="content" lineHeight={'25px'}>
            <Text as="p" marginTop="20px">
              Remember, these steps apply to every other unit you intend to allocate—except for the
              penthouse. Since the penthouse is a single unit with no allocation divisions, you
              won't need to perform the allocation setup for it.
            </Text>
            <Text as="p" marginTop="20px">
              Now, let's explore a common scenario:
            </Text>
            <Text as="p" marginTop="20px">
              what if you wish to withhold certain units from immediate public display on the
              application? There are instances where you might want to reserve specific units for a
              later date, gradually releasing them when the time is right. This strategy can help
              maintain a controlled pace of sales and align with your business objectives. With{' '}
              <a
                href="https://matador-support-seven.vercel.app/listings/archive_unit"
                target="_blank"
              >
                <Text cursor={'pointer'} as="span" color="#5d5fef">
                  {' '}
                  Archiving of a unit
                </Text>
              </a>{' '}
              you have the flexibility to strategically manage unit availability, ensuring a
              tailored approach to your property's market presence.
            </Text>
            <a
              href="https://matador-support-seven.vercel.app/listings/archive_unit"
              target="_blank"
            >
              <Text cursor={'pointer'} as="p" marginTop="20px" color="#5d5fef">
                Click here to learn how to archive a unit
              </Text>
            </a>
          </Text>
        </Box>
      </Box>

      <Box id="questions" ref={questionsRef}>
        <QuestionsAndReplies questions={questions} />
      </Box>

      <Helpful />
    </div>
  );
};

export default HideUnsubscribed(Createunit);
