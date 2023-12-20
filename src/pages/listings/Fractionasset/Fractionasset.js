import React, { useRef } from "react";
import { Box, Text, Image, useDisclosure } from "@chakra-ui/react";
import fractionalize1 from '../../../assets/images/fractionalize/fractionalize-1.png';
import fractionalize2 from '../../../assets/images/fractionalize/fractionalize-2.png';
import fractionalize3 from '../../../assets/images/fractionalize/fractionalize-3.png';
import fractionalize4 from '../../../assets/images/fractionalize/fractionalize-4.png';
import fractionalize5 from '../../../assets/images/fractionalize/fractionalize-5.png';
import fractionalize6 from '../../../assets/images/fractionalize/fractionalize-6.png';
import fractionalize7 from '../../../assets/images/fractionalize/fractionalize-7.png';
import fractionalize8 from '../../../assets/images/fractionalize/fractionalize-8.png';
import fractionalize9 from '../../../assets/images/fractionalize/fractionalize-9.png';
import fractionalize10 from '../../../assets/images/fractionalize/fractionalize-10.png';
import fractionalize11 from '../../../assets/images/fractionalize/fractionalize-11.png';
import QuestionsAndReplies from "../../../components/Faq/QuestionsAndReplies";
import RightNav from "../../../components/Listings/RightNav";
import LeftNav from "../../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../../components/Faq/Helpful";
import useIsInViewport from "../../../utils/useOnScreen/useOnScreen";
import HideUnsubscribed from "../../../hoc/Hidefull";
import Strategy from "../../../components/Drawer/strategy";

const Fractionasset = () => {
  const strategyModal = useDisclosure();

  const how_toRef = useRef(null)
  const questionsRef = useRef(null)

  const how_toCheck = useIsInViewport(how_toRef);
  const questionsCheck = useIsInViewport(questionsRef)


  const articleContent = [
    { check: how_toCheck, id: 'how_to', title: 'How to fractionalise an asset' },
    { check: questionsCheck, id: 'questions', title: 'Questions & Replies' },
  ]

  const questions = [
    {
      name: 'Grace C.',
      date: 'Jun 25, 2023',
      content: "How do I increase the price per fraction?",
      replies: [
        <Box>
          <p>Hello Grace,</p>
          <p>
            You can't directly adjust the price per fraction independently. When you increase the outright price of the unit, the price per fraction will automatically adjust accordingly. Any change you make to the outright price will be reflected in the price per fraction as well. If you have any further questions, feel free to ask.
          </p>
        </Box>
      ]
    },
    {
      name: 'Peters G.',
      date: 'Jun 25, 2023',
      content: "I am trying to fractionalise a separate unit, but the only one I can fractionalise is the one I already fractionalised.",
      replies: [
        <Box>
          <p> Hello Peters, </p>
          <p>
            In this situation, you might need to reach out to our support team for assistance. Please note that you can only fractionalise a certain unit type, and while you can fractionalise multiple quantities of that unit type, you cannot fractionalise multiple different unit types simultaneously. For example, if you have a project with 10 2-bedroom units and 5 3-bedroom units, you can fractionalise either the 2-bedroom units or the 3-bedroom units, but not both at the same time. You can also fractionalise multiple quantities of the SAME unit type. If you encounter any challenges, our support team can guide you through the process and provide additional assistance"
          </p>
        </Box>
      ]
    },
    {
      name: 'Daniella W.',
      date: 'Jun 25, 2023',
      content: "How does allocation work in the case of fractional ownership?",
      replies: [
        <Box>
          <p>Hello Daniella, </p>
          <p>
            In the case of fractional ownership, the allocation process involves manual assignment by the admin. This means that the admin of the project will need to allocate specific units to the fractional co-owners from the 'Manage Allocation' section. If you have any questions or need assistance with this process, please don't hesitate to reach out to our support team. We're here to help!
          </p>
        </Box>
      ]
    }
  ]

  const relatedContent = [
    { link: '/intro_to_veerge', text: 'Intro to Veerge' },
    { link: "/blog/understanding_fraction", text: 'Understanding Fractional Real estate ' },
    { link: "/blog/veerge_data", text: 'Veerge & Data analytics' }
  ]

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <RightNav />
      <Text className="head_">FRACTIONALISING A PROPERTY</Text>
      <Text className="publish">Published: February 18, 2023</Text>
      <Box id="how_to" ref={how_toRef} mt='40px'>
        <Text className="content" lineHeight={'25px'}>
          <Text as='p'>
            Let's explore the process of fractionalizing a unit into smaller segments, catering to individuals with lower purchasing power.
          </Text>
          <a href="https://matador-support-seven.vercel.app/blog/understanding_fraction" target="_blank">
            <Text as='p' mt='20px' cursor={'pointer'} color={'#5d5fef'}>
              Click here to learn more about fractional Real Estate
            </Text>
          </a>
          <Text as='p' mt='20px'>
            Consider the scenario where you decide to fractionalize a 1-bedroom flat and offer each fraction at <b>50,000.00 Naira</b>. These are the steps to follow.
          </Text>
        </Text>

        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">
            Begin by going to the specific listing.
          </Text>

          <Image src={fractionalize1} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="30px">
            STEP 2
          </Text>
          <Text className="content">
            Locate the particular unit you intend to fractionalize.
          </Text>

          <Image src={fractionalize2} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content">
            Open the unit dropdown menu on the left-hand side.
          </Text>
          <Image src={fractionalize3} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 4
          </Text>
          <Text className="content">
            Scroll through the options and select <b>"Fractionalise."</b> This will prompt a new screen to appear.
          </Text>

          <Image src={fractionalize4} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 5
          </Text>
          <Text className="content">
            On the new screen, input the price per fraction. For instance, in this scenario, the price per fraction could be set at <b>50,000.00 Naira</b>.
          </Text>

          <Image src={fractionalize5} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 6
          </Text>
          <Text className="content">
            Since you are fractionalizing only one unit, set the quantity to one.
          </Text>
          <Image src={fractionalize6} mt="30px" mx="auto" w='full' />
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 7
          </Text>
          <Text className="content">
            Next, move on to the strategy section. Choose between the two available strategies: "Buy to Flip" or "Buy to Hold.
            <Text as='span' color='#5d5fef' cursor={'pointer'} onClick={strategyModal.onOpen}> "Click here to read about “Buy to Flip” & “Buy to Hold”</Text>
          </Text>
          <Image src={fractionalize7} mt="30px" mx="auto" w='full' />
        </Box>


        <Box>
          <Text className="content_head" mt="40px">
            STEP 8
          </Text>
          <Text className="content">
            For the deal structure, select <b>"Equity."</b> This choice indicates that all fractional owners hold ownership stakes. Given that this is a "Buy to Flip" strategy, dividends are unlikely.
          </Text>
          <Image src={fractionalize8} mt="30px" mx="auto" w='full' />
        </Box>


        <Box>
          <Text className="content_head" mt="40px">
            STEP 9
          </Text>
          <Text className="content">
            Proceed to upload  <Text as='span' color='#5d5fef' cursor={'pointer'}>the investor packet</Text>, ensuring that all relevant information is included.
          </Text>
          <Image src={fractionalize9} mt="30px" mx="auto" w='full' />
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 10
          </Text>
          <Text className="content">
            List the stakeholders involved. In this instance, stakeholder names might include Legal Partner - Frezlars, Financial Partner - Sterling Bank, and potentially other parties such as Asset Management or Insurance Companies.
          </Text>
          <Image src={fractionalize10} mt="30px" mx="auto" w='full' />
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 11
          </Text>
          <Text className="content">
            Complete the process by reviewing the fractional summary, ensuring that all details are accurate and aligned with your intentions.
          </Text>
          <Image src={fractionalize11} mt="30px" mx="auto" w='full' />
          <Text className="content" mt="40px">
            By following these steps, you can effectively fractionalize a unit, making property ownership accessible to a wider range of individuals. The granular approach of fractionalization, accompanied by strategic decision-making, can contribute to a more inclusive and versatile real estate offering.
          </Text>
        </Box>
      </Box>

      <Box id="questions" ref={questionsRef}>
        <QuestionsAndReplies questions={questions} />
      </Box>
      <Helpful />
      <Strategy drawerModal={strategyModal} />
    </div>
  );
};

export default HideUnsubscribed(Fractionasset)