import React, { useRef } from "react";
import { Box, Text, Image, useToast } from "@chakra-ui/react";
import delist1 from '../../../assets/images/delist/delist-1.png';
import delist2 from '../../../assets/images/delist/delist-2.png';
import delist3 from '../../../assets/images/delist/delist-3.png';
import delist4 from '../../../assets/images/delist/delist-4.png';
import delist5 from '../../../assets/images/delist/delist-5.png';
import QuestionsAndReplies from "../../../components/Faq/QuestionsAndReplies";
import RightNav from "../../../components/Listings/RightNav";
import LeftNav from "../../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../../components/Faq/Helpful";
import useIsInViewport from "../../../utils/useOnScreen/useOnScreen";
import HideUnsubscribed from "../../../hoc/Hidefull";

const Delist = () => {
  const toast = useToast();

  const how_toRef = useRef(null)
  const questionsRef = useRef(null)

  const how_toCheck = useIsInViewport(how_toRef);
  const questionsCheck = useIsInViewport(questionsRef)


  const articleContent = [
    { check: how_toCheck, id: 'how_to', title: 'How to delist a listing' },
    { check: questionsCheck, id: 'questions', title: 'Questions & Replies' },
  ]

  const questions = [
    {
      name: 'David J.',
      date: 'Jun 25, 2023',
      content: " If I delist a listing, will existing subscribers still have access to it on their application?",
      replies: [
        <Box>
          <p> Hello David,</p>
          <p>
            yes, existing subscribers will still have access to the delisted listing on their application. However, non-subscribers won't have access to it by default. The only way non-subscribers can gain access to the delisted listing is through methods such as receiving a private offer, being granted private access, or receiving a shared private link.
          </p>
        </Box>
      ]
    }
  ]

  const relatedContent = [
    { link: '/intro_to_veerge', text: 'Intro to Veerge' },
    { link: "/listings/create_listing", text: 'How to create a listing' },
    { link: "/blog/veerge_data", text: 'Veerge & Data analytics' },
    { link: "/users_experience", text: 'End-to-End experience' }
  ]

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <RightNav />
      <Text className="head_">HOW TO DELIST A LISTING</Text>
      <Text className="publish">Published: February 18, 2023</Text>
      <Box id="how_to" ref={how_toRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text as='p'>
            Delisting a listing involves removing it from public visibility within the application and converting it into a private offering. Here's how you can accomplish this:
          </Text>
        </Text>

        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">
            Start by navigating to the "Listings" section.
          </Text>

          <Image src={delist1} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="30px">
            STEP 2
          </Text>
          <Text className="content">
            Locate the dropdown menu situated at the top right corner of the listings page.
          </Text>

          <Image src={delist2} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content">
            From the dropdown options, choose "Make Private." This action initiates the process of delisting.
          </Text>
          <Image src={delist3} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 4
          </Text>
          <Text className="content">
            At this point, you might be prompted to an invitation screen. This step is optional and is particularly useful when you plan to grant private access to a select group of exclusive buyers. If applicable, proceed to the next step; otherwise, you can skip this part.
          </Text>

          <Image src={delist4} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 5
          </Text>
          <Text className="content">
            If you choose to proceed with invitations, input the relevant email addresses or select users from the provided recommendations. These invitations will grant the chosen individuals exclusive access to the delisted listing. If invitations aren't necessary, you can simply skip this step.
          </Text>
          <Image src={delist5} mt="30px" mx="auto" w='full' />
          <Text className="content">
            By following these steps, you can effectively delist a listing, making it private and restricting access to a select audience, either through private invitations or by maintaining it exclusively offline. This versatile approach ensures that you have control over the visibility and accessibility of your listings, tailored to your specific marketing and business strategies.
          </Text>
        </Box>
      </Box>

      <Box id='questions' ref={questionsRef} >
        <QuestionsAndReplies questions={questions} />
      </Box>
      <Helpful />

    </div>
  );
};

export default HideUnsubscribed(Delist)