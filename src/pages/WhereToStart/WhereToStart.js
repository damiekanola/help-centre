import React, {useRef} from 'react';
import {
  Box,
  Text,
  ListItem,
  OrderedList,
  UnorderedList,
  Image,
  VStack,
  Button,
  Flex,
} from '@chakra-ui/react';
import protectedImg from '../../assets/images/home/where_to_start.jpg';
import started from '../../assets/images/home/getting_started.jpg';
import check from '../../assets/images/home/check.png';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../layouts/BlogLayout';
import {trendingData} from '../../constant/pages';
import {useSearchParams} from 'react-router-dom';

export const WhereToStart = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const testingRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const testingCheck = useIsInViewport(testingRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: testingCheck, id: 'testing', title: 'Ready to dive in?'},
  ];

  const articleMeta = {
    title: 'My Manager Told Me About This—Where Do I Start?',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
  };

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={trendingData}
    >
      <Box id="how_to" ref={introRef}>
        <Text as="p" marginTop={'30px'}>
          <b>Hello there! </b> If you’re part of the internal team and just heard about Myxellia
          from your manager, you’re not alone. In fact, this is how <b>8 out of 10</b> people get
          introduced to the platform. To help you get up to speed quickly, we’ve prepared:
        </Text>
        <OrderedList color={'#4545FE'} textDecoration={'underline'} my={'40px'} ml={'20px'}>
          <ListItem>Overview of Myxellia</ListItem>
          <ListItem>A Quick Video</ListItem>
          <ListItem>Getting Started: A Simple & Quick One</ListItem>
        </OrderedList>
        <Text as="p">
          Now that you have a grasp of Myxellia’s fundamentals, here’s a high-level approach to
          ensure you experience a smooth and successful transition:
        </Text>

        <Text as="p" fontWeight={'700'} mt={'30px'}>
          1. Testing & Pilot Phase
        </Text>
        <Text as="p">
          Before committing your entire operation to Myxellia, it’s wise to test the platform in a
          smaller, controlled environment.
        </Text>
        <UnorderedList marginTop={'20px'}>
          <ListItem>
            <b>Pilot Project:</b> Start with a limited group of users to identify any unforeseen
            issues.
          </ListItem>
          <ListItem>
            <b>Gather Feedback:</b> Evaluate how Myxellia integrates into your existing processes,
            taking note of areas needing adjustment.
          </ListItem>
          <ListItem>
            <b>Address Concerns:</b> Encourage the team to share questions early and highlight the
            benefits of Myxellia—this fosters understanding and enthusiasm
          </ListItem>
        </UnorderedList>

        <Text as="p" fontWeight={'700'} mt={'30px'}>
          2. Training & Change Management
        </Text>
        <Text as="p">
          For those in charge of the migration, here’s an outline of the key stages you’ll work
          through. This approach helps ensure you experience a smooth and successful transition.
        </Text>
        <UnorderedList mt={'20px'}>
          <ListItem>
            <b>Highlight Benefits:</b> Show how Myxellia streamlines daily tasks and improves
            productivity.
          </ListItem>
          <ListItem>
            <b>Ongoing Support:</b> Offer instructional materials, open Q&A sessions, and clear
            communication channels for troubleshooting.
          </ListItem>

          <ListItem>
            <b>Encourage Adoption:</b> When team members see tangible value in the platform, they’re
            more likely to embrace it fully.
          </ListItem>
        </UnorderedList>

        <Text as="p" fontWeight={'700'} mt={'30px'}>
          3. Business Migration & Setup
        </Text>
        <Text as="p">Transferring your existing data into Myxellia is a critical step:</Text>
        <OrderedList mt={'20px'}>
          <ListItem>
            <b>Plan the Transfer:</b> Determine which data sets migrate first, and how they should
            be organized.
          </ListItem>
          <ListItem>
            <b>Validate Data:</b> After import, verify that everything is accurate and properly
            placed—this reduces the risk of errors or duplicates.
          </ListItem>
        </OrderedList>

        <Text fontWeight={'700'} mt={'30px'}>
          Step 1: Create Listings
        </Text>
        <Text>
          When you first log in, Veerge will feel like a <b>blank canvas</b>. Begin by adding your
          properties (often called “listings”), forming the foundation to showcase what your company
          offers.
        </Text>
        <UnorderedList ml={'20px'}>
          <ListItem>
            We’ve prepared documentation and video tutorials—pick whichever format suits you best.
          </ListItem>
        </UnorderedList>

        <Text fontWeight={'700'} mt={'30px'}>
          Step 2: Set Up Your “Digital Hub”
        </Text>
        <Text>
          Next, create your 'digital hub'—essentially your web application. This will serve as the
          central platform connecting your services with your clients, guiding them through the
          entire buyer journey, from the initial property search to the final purchase.
        </Text>
        <Text fontWeight={'700'} mt={'30px'}>
          Step 3: Bring Your Client Base Onboard
        </Text>
        <Text>
          Finally, shift focus to client records. Whether they’re past buyers with fully paid
          properties or current clients on payment plans, importing these details offers multiple
          benefits:
        </Text>
        <UnorderedList mt={'20px'}>
          <ListItem>
            <b>Keep Clients Informed:</b> Update them about new developments or upsell
            opportunities.
          </ListItem>
          <ListItem>
            <b>Maintain Goodwill:</b> Even fully paid clients may need your services again or
            provide referrals.
          </ListItem>
        </UnorderedList>
        <Text mt={'20px'}>
          Beyond mere data management, this step strengthens relationships and ensures everyone
          benefits from your improved platform.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="steps">
        <Box ref={testingRef}>
          <Text className="content_head">Ready to dive in?</Text>
          <Text as="p" marginTop="40px">
            If you’ve familiarized yourself with these steps and feel prepared to move forward,
            click below to begin your official onboarding and start leveraging Myxellia’s powerful
            capabilities for your real estate operations.
          </Text>

          <Box
            w={'100%'}
            bgColor={'#FFF7ED'}
            p={'30px 40px'}
            borderRadius={'16px'}
            my={'20px'}
            alignItems={'stretch'}
            justifyContent={'space-between'}
            gap={'20px'}
            h={'fit-content'}
          >
            <Flex w={'50%'} direction="column" gap={'15px'} alignItems={'start'}>
              <Text
                borderBottom={'4px solid #FFCF25'}
                pb={'8px'}
                fontSize={'18px'}
                fontWeight={'500'}
                letterSpacing={'-1px'}
              >
                Onboarding Kit
              </Text>
              <Text fontSize="28px" fontWeight="500" lineHeight={'30px'} letterSpacing={'-1px'}>
                Master Myxellia in Minutes
              </Text>
              <Text>Follow our quick guide to start using Myxellia like a pro.</Text>
              <Button bgColor="#000000" color="#fff" borderRadius="full" p="17px 21px">
                Get Started
              </Button>
            </Flex>
          </Box>

          <Text as="p" marginTop="20px">
            We’re excited to have you on board and look forward to helping your team make the most
            of <b>Myxellia!</b>
          </Text>
        </Box>
      </Box>
    </BlogLayout>
  );
};
