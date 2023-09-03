import React from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { ink } from "react-router-dom";
import archive1 from '../../assets/images/archive-1.png';
import archive2 from '../../assets/images/archive-2.png';
import archive3 from '../../assets/images/archive-3.png';
import archive4 from '../../assets/images/archive-4.png';
import archive5 from '../../assets/images/archive-5.png';
import archive6 from '../../assets/images/archive-6.png';
import archiveStep1 from '../../assets/images/archive-step-1.png';
import archiveStep2 from '../../assets/images/archive-step-2.png';
import archiveStep3 from '../../assets/images/archive-step-3.png';
import archiveStep4 from '../../assets/images/archive-step-4.png';
import archiveStep5 from '../../assets/images/archive-step-5.png';
import QuestionsAndReplies from "../../components/Faq/QuestionsAndReplies";
import RightNav from "../../components/Listings/RightNav";
import LeftNav from "../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../components/Faq/Helpful";

export const Archiveunit = () => {
  const toast = useToast();

  const articleContent = [
    { id: 'how_to', title: 'How to archive a unit' },
    { id: 'how_to_remove', title: 'How to remove a unit from achieve' },
    { id: 'questions', title: 'Questions & Replies' },
  ]

  const questions = [
    {
      name: 'David M.',
      date: 'Jun 25, 2023',
      content: "I tried to archive units, but I didn't get the allocation prompt.",
      replies: [
        "Hello David,This situation might occur if allocations haven't been established yet for the specific units. The allocation prompt is typically presented during the creation of allocations. If you haven't reached that step, you might not encounter the prompt.Should you require further assistance or encounter any issues, please don't hesitate to reach out to our support team. We're here to help!"
      ]
    }
  ]



  return (
    <div className="main" id="how_to">
      <LeftNav articleContent={articleContent} />
      <RightNav />
      <Text className="head_">HOW TO ARCHIVE A UNIT</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content" lineHeight={'25px'}>
          <Text as='p'>
            If you want to reserve specific units for a special purpose, these are the steps to follow:
          </Text>
        </Text>
      </Box>
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

      <Text className="head_" id="how_to_remove">HOW TO REMOVE FROM ARCHIVE</Text>

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



      <QuestionsAndReplies questions={questions} />


      <Helpful />

    </div>
  );
};
