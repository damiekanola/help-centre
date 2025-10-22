import React, {useRef} from 'react';
import {Box, Text, ListItem, UnorderedList, Image, Button, Flex, Link} from '@chakra-ui/react';
import protectedImg from '../../assets/images/home/account_approved.jpg';
import started from '../../assets/images/home/getting_started.jpg';
import check from '../../assets/images/home/check.png';
import veerge from '../../assets/icons/veerge-logo.svg';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {trendingData} from '../../constant/pages';

import {BlogLayout} from '../../layouts/BlogLayout';

export const AccountApproved = () => {
  const introRef = useRef(null);
  const testingRef = useRef(null);
  const trainingRef = useRef(null);
  const migrationRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const testingCheck = useIsInViewport(testingRef);
  const trainingCheck = useIsInViewport(trainingRef);
  const migrationCheck = useIsInViewport(migrationRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: testingCheck, id: 'testing', title: 'Testing and pilot phase'},
    {check: trainingCheck, id: 'training', title: 'Training and change management'},
    {check: migrationCheck, id: 'migration', title: 'Business Migration & Setup'},
  ];

  const articleMeta = {
    title: 'My Account Has Been Approved-What’s Next?',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    readTime: '3 minute read',
    image: protectedImg,
  };

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={trendingData}
    >
      <Box id="intro" ref={introRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text as="p" marginTop={'30px'}>
            <b>Congratulations! </b>Your account has been successfully verified, and you should have
            received a confirmation email.
          </Text>
          <Text as="p">
            Before proceeding, take a moment to familiarise yourself with a few key concepts. Click
            the card below for a quick overview:
          </Text>

          <Flex
            direction={{base: 'column-reverse', lg: 'row'}}
            w={'100%'}
            bgColor={'#FFF7ED'}
            p={'30px 40px'}
            borderRadius={'16px'}
            my={'20px'}
            alignItems={'stretch'}
            justifyContent={'space-between'}
            gap={'20px'}
            h={{base: 'fit-content', md: '350px'}}
          >
            <Flex flex="1" direction="column" gap={'10px'} alignItems={'start'}>
              <Flex borderBottom={'4px solid #FFCF25'} alignContent={'center'} gap={'5px'}>
                <Image src={veerge} w={'24px'} h={'24px'} />
                <Text pb={'8px'} fontSize={'18px'} fontWeight={'500'} letterSpacing={'-1px'}>
                  Onboarding Guide
                </Text>
              </Flex>

              <Text fontSize="28px" fontWeight="500" lineHeight={'30px'} letterSpacing={'-1px'}>
                Getting Started: A Simple & Quick One
              </Text>
              <Text>
                What happens next will depend on your specific role in your organization’s setup and
                migration process.
              </Text>
              <Button
                bgColor="#000000"
                color="#fff"
                borderRadius="full"
                p="20px 21px"
                letterSpacing={'-1px'}
                lineHeight={'1.6'}
                alignItems={'center'}
              >
                Learn More
              </Button>
            </Flex>
            <Box flex="1" w="100%" h="80%" my={'auto'} borderRadius={'3px'} overflow={'hidden'}>
              <Image
                src={started}
                alt="getting started"
                objectFit={'cover'}
                w={'100%'}
                h={'100%'}
              />
            </Box>
          </Flex>

          <Text p={'20px 28px'} borderLeft={'4px solid #6A6AFE'} my={'30px'} fontWeight={'500'}>
            Only the account owner should sign up on behalf of a company. In many cases, however,
            the account owner is not the person directly handling the system transition. Often, the
            work is assigned to individuals in roles such as IT, Accounting, or Sales.
          </Text>
          <Text as="p" fontWeight={'700'}>
            Step 1: Invite your team
          </Text>
          <Text as="p">
            If you’re the account owner but not in charge of the day-to-day migration, your
            immediate next step is to <b>invite the team members</b> who will be responsible for
            moving your operations to Myxellia. These can be colleagues who understand your internal
            processes, regardless of whether they have formal technical training. Anyone proficient
            with basic computer tasks can manage this process—it’s about having a competent,
            detail-oriented person rather than someone with advanced IT skills.
          </Text>

          <Text as="p" textDecoration={'underline'} color={'#4545FE'} my={'20px'}>
            Watch the video below to learn how to invite a team member
          </Text>
          <Image src={check} my="30px" mx="auto" w="full" />
          <Text as="p" my={'30px'}>
            Once you’ve invited them, share this{' '}
            <Link textDecoration={'underline'} color={'#4545FE'}>
              guide
            </Link>{' '}
            so they can continue from here.
          </Text>
          <Text as="p" fontWeight={'700'}>
            Step 2: If You’re Managing the Migration
          </Text>
          <Text as="p">
            For those in charge of the migration, here’s an outline of the key stages you’ll work
            through. This approach helps ensure you experience a smooth and successful transition.
          </Text>
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box ref={testingRef} id="testing">
        <Text className="content_head">Testing and pilot phase</Text>
        <Text as="p" marginTop="40px">
          Before fully transitioning your operations to Myxellia, it’s best to begin with a
          controlled trial to ensure a smooth rollout.
        </Text>

        <UnorderedList marginTop={'20px'}>
          <ListItem>
            <b>Pilot Project:</b> Start with a small group of users to identify any unexpected
            challenges.
          </ListItem>
          <ListItem>
            <b>Gather Feedback:</b> Use this stage to observe how Myxellia integrates into your
            current workflows and note any adjustments needed before a full deployment.
          </ListItem>
          <ListItem>
            <b>Address Concerns:</b> Encourage your team to ask questions and share feedback early
            on. Clearly communicate the benefits of Myxellia so everyone understands how it
            simplifies daily tasks.
          </ListItem>
        </UnorderedList>

        <Text as="p" marginTop="20px">
          Running a short pilot and resolving any issues that arise will help you confidently expand
          Myxellia across your entire organization.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box ref={trainingRef} id="training">
        <Text className="content_head">Training & change management</Text>
        <Text as="p" marginTop="40px">
          Transitioning from on-premises or legacy systems to a cloud-based platform can be a big
          shift for your team. During the pilot phase and beyond:
        </Text>

        <UnorderedList mt={'20px'}>
          <ListItem>
            <b>Highlight Benefits:</b> Emphasize how Myxellia streamlines operations and improves
            productivity.
          </ListItem>
          <ListItem>
            <b>Ongoing Support:</b> Provide training materials, tutorials, and open communication
            channels for any queries.
          </ListItem>
          <ListItem>
            <b>24/7 Transaction Processing:</b> Payments can be confirmed within minutes,
            drastically reducing bottlenecks and human error.
          </ListItem>
          <ListItem>
            <b>Encourage Adoption:</b> When employees see the value in the new system, they’re more
            likely to embrace it fully.
          </ListItem>
        </UnorderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box ref={migrationRef} id="migration">
        <Text className="content_head">Business Migration & Setup</Text>
        <Text as="p" marginTop="40px">
          Moving data from your old systems into Myxellia is an important part of setting up your
          new environment. A smooth transition ensures your team and clients can start benefiting
          from the platform right away.
        </Text>

        <Text mt={'20px'}>
          <b>1. Plan the Transfer:</b>Decide which data should be moved first and how to organize
          it.
        </Text>

        <Text>
          <b>2. Validate Your Data:</b> After importing, confirm that all information is accurate
          and properly placed—this helps avoid data loss or duplicates.
        </Text>
        <Text></Text>
        <Text fontWeight={'700'} mt={'20px'}>
          Step 1: Create Your Listings
        </Text>
        <Text>
          When you first log in, Myxellia will look like a blank canvas. Begin by adding your
          properties, often referred to as creating listings. These listings form the foundation of
          your company’s digital presence, showcasing what you offer to buyers and investors. To
          help you get started, we’ve prepared detailed documentation and video tutorials on how to
          create and manage listings. Choose whichever format suits you best.
        </Text>
        <Text fontWeight={'700'} mt={'20px'}>
          Step 2: Set Up Your Digital Hub
        </Text>
        <Text>
          After adding your listings, the next step is to build your Digital Hub—your company’s
          dedicated web application. This serves as a central meeting point for both existing and
          potential clients. We often refer to it as a “convergence point” because it brings
          together every stage of the buyer journey—from the first property search to final purchase
          and beyond.
        </Text>
        <Text fontWeight={'700'} mt={'20px'}>
          Step 3: Bring Your Client Base Onboard
        </Text>
        <Text>
          Finally, shift your focus to your client records. Whether past buyers (who have fully
          paid) or current clients (possibly on payment plans), transferring their information into
          Myxellia fosters stronger relationships:
        </Text>

        <UnorderedList mt={'30px'}>
          <ListItem>
            <b>Keep Clients Informed:</b> Share updates on new projects, offers, or investment
            opportunities.
          </ListItem>
          <ListItem>
            <b>Maintain Goodwill:</b> Stay connected with existing clients for future referrals or
            repeat purchases.
          </ListItem>
        </UnorderedList>

        <Text as="p" marginTop="20px">
          Adding this data is more than just a technical step—it’s a way to keep connections warm
          and ensure everyone benefits from the improved platform.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box>
        <Box w={'100%'} bgColor={'#FFF7ED'} p={'21px 32px'} borderRadius={'8px'} my={'20px'}>
          <Text pb={'8px'} fontWeight={'600'} fontSize={'18px'} color={'#000000EB'}>
            What happens if there’s an error during import?
          </Text>
          <Text>
            Myxellia flags incomplete or duplicate entries automatically. You’ll see a summary of
            any issues, so you can fix them before finalizing the import.
          </Text>
        </Box>
        <Box w={'100%'} bgColor={'#FFF7ED'} p={'21px 32px'} borderRadius={'8px'} my={'20px'}>
          <Text as="p" pb={'8px'} fontWeight={'600'} fontSize={'18px'} color={'#000000EB'}>
            Can I make changes after data import?
          </Text>
          <Text>
            Yes! You can edit or update property details, client information, or transaction records
            anytime within the platform.
          </Text>
        </Box>
        <Text>
          If you have any questions or run into any issues, feel free to reach out for{' '}
          <Link textDecoration={'underline'} color={'#4545FE'}>
            support
          </Link>
          , and remember to consult our <b>knowledge</b> base for additional resources.
        </Text>
      </Box>
    </BlogLayout>
  );
};
