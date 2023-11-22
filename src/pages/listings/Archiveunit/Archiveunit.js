import React, { useRef } from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { ink } from "react-router-dom";
import archive1 from '../../../assets/images/archive/archive-1.png';
import archive2 from '../../../assets/images/archive/archive-2.png';
import archive3 from '../../../assets/images/archive/archive-3.png';
import archive4 from '../../../assets/images/archive/archive-4.png';
import archive5 from '../../../assets/images/archive/archive-5.png';
import archive6 from '../../../assets/images/archive/archive-6.png';
import archiveStep1 from '../../../assets/images/archive/archive-step-1.png';
import archiveStep2 from '../../../assets/images/archive/archive-step-2.png';
import archiveStep3 from '../../../assets/images/archive/archive-step-3.png';
import archiveStep4 from '../../../assets/images/archive/archive-step-4.png';
import archiveStep5 from '../../../assets/images/archive/archive-step-5.png';
import QuestionsAndReplies from "../../../components/Faq/QuestionsAndReplies";
import RightNav from "../../../components/Listings/RightNav";
import LeftNav from "../../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../../components/Faq/Helpful";
import useIsInViewport from "../../../utils/useOnScreen/useOnScreen";
import HideUnsubscribed from "../../../hoc/Hidefull";

const Archiveunit = () => {
  const toast = useToast();


  const how_toRef = useRef(null)
  const how_to_removeCheckRef = useRef(null)
  const questionsRef = useRef(null)

  const how_toCheck = useIsInViewport(how_toRef);
  const how_to_removeCheck = useIsInViewport(how_to_removeCheckRef)
  const questionsCheck = useIsInViewport(questionsRef)


  const articleContent = [
    { check: how_toCheck, id: 'how_to', title: 'How to archive a unit' },
    { check: how_to_removeCheck, id: 'how_to_remove', title: 'How to remove a unit from achieve' },
    { check: questionsCheck, id: 'questions', title: 'Questions & Replies' },
  ]

  const questions = [
    {
      name: 'David M.',
      date: 'Jun 25, 2023',
      content: "I tried to archive units, but I didn't get the allocation prompt.",
      replies: [
        <Box>
          <Text>Hello David,</Text>
          <Text mt='20px'>
            This situation might occur if allocations haven't been established yet for the specific units. The allocation prompt is typically presented during the creation of allocations. If you haven't reached that step, you might not encounter the prompt.
          </Text>
          <Text mt='20px'>
            Should you require further assistance or encounter any issues, please don't hesitate to reach out to our support team. We're here to help!
          </Text>
        </Box >
      ]
    }
  ]


  const relatedContent = [
    { link: '/intro_to_veerge', text: 'Intro to Veerge' },
    { link: "/blog/understanding_fraction", text: 'Understanding Fractional Real estate ' },
    { link: "/blog/veerge_data", text: 'Veerge & Data analytics' },
    { link: "/users_experience", text: 'End-to-End experience' }
  ]

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <RightNav />
      <Box id="how_to" ref={how_toRef}>
        <Text className="head_">HOW TO ARCHIVE A UNIT</Text>
        <Text className="publish">Published: February 18, 2023</Text>
        <Text className="content" lineHeight={'25px'}>
          <Text as='p'>
            If you want to reserve specific units for a special purpose, these are the steps to follow:
          </Text>
        </Text>

        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">
            Navigate to the relevant listing.
          </Text>

          <Image src={archive1} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="30px">
            STEP 2
          </Text>
          <Text className="content">
            Choose the specific unit you want to reserve from the list.
          </Text>

          <Image src={archive2} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content">
            Click on the dropdown menu at the top right corner of the page. Choose "Archived Unit"
          </Text>
          <Image src={archive3} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 4
          </Text>
          <Text className="content">
            Choose "Add to Archived" on the drawer.
          </Text>

          <Image src={archive4} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 5
          </Text>
          <Text className="content">
            In the ensuing window, input the number of units you wish to archive. This number must be less than the total units of that specific type
          </Text>

          <Image src={archive5} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 6
          </Text>
          <Text className="content">
            After completing the above steps, an allocation screen will appear, allowing you to select the exact units to archive.
          </Text>
          <Image src={archive6} mt="30px" mx="auto" w='full' />
        </Box>
      </Box>

      <Box id="how_to_remove" ref={how_to_removeCheckRef}>
        <Text className="head_">HOW TO REMOVE FROM ARCHIVE</Text>

        <Text className="content">
          <Text as='p'>
            When the time comes to make the listing available to the public again, follow these steps:
          </Text>
        </Text>

        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">
            Go to the "Listings" section and locate the relevant listing
          </Text>

          <Image src={archiveStep1} mt="30px" mx="auto" w='full' />
        </Box>

        <Box>
          <Text className="content_head">STEP 2</Text>
          <Text className="content">
            Click on the dropdown menu at the top right corner of the listing's page. Select "Archived Units".
          </Text>

          <Image src={archiveStep2} mt="30px" mx="auto" w='full' />
        </Box>

        <Box>
          <Text className="content_head">STEP 3</Text>
          <Text className="content">
            Identify the unit you wish to reintroduce, and click on it.
          </Text>

          <Image src={archiveStep3} mt="30px" mx="auto" w='full' />
        </Box>

        <Box>
          <Text className="content_head">STEP 4</Text>
          <Text className="content">
            An option to "Remove from Archived" will appear. Input the number of units you want to restore from archived status.
          </Text>

          <Image src={archiveStep4} mt="30px" mx="auto" w='full' />
        </Box>

        <Box>
          <Text className="content_head">STEP 5</Text>
          <Text className="content">
            Similar to before, an allocation screen will prompt you to select the exact units to restore.
          </Text>

          <Image src={archiveStep5} mt="30px" mx="auto" w='full' />
          <Text className="content">
            By following these steps, you can seamlessly manage unit availability, whether reserving them for future release or restoring them to the public domain. This level of control ensures that your property's market exposure aligns with your strategic objectives
          </Text>

        </Box>
      </Box>


      <Box ref={questionsRef} id='questions'>
        <QuestionsAndReplies questions={questions} />
      </Box>

      <Helpful />

    </div>
  );
};

export default HideUnsubscribed(Archiveunit)