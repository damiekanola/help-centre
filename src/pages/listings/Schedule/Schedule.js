import React, {useRef} from 'react';
import {Box, Text, ListItem,  UnorderedList, Image, List} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/schedule.jpg';

import step11 from '../../../assets/images/client/schedule/step1.png';
import step12 from '../../../assets/images/client/schedule/step2.png';
import step13 from '../../../assets/images/client/schedule/step3.png';
import step14 from '../../../assets/images/client/schedule/step4.png';
import step15 from '../../../assets/images/client/schedule/step5.png';
import {FaqCard} from '../../../components/Faq/FaqCard';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';

import {listingsData} from '../../../constant/pages';

export const Schedule = () => {

  const introRef = useRef(null);
  const scheduleRef = useRef(null);
  const offerRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const scheduleCheck = useIsInViewport(scheduleRef);
  const offerCheck = useIsInViewport(offerRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Schedule Inspections'},
    {check: scheduleCheck, id: 'schedule', title: 'How to Schedule Inspection on behalf of a User'},
    {check: offerCheck, id: 'offer', title: 'Give an offer'},
  ];

  const articleMeta = {
    title: 'Manage Property Inspections',
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
      otherresources={listingsData}
    >
      <Box id="intro" ref={introRef}>
        <Text className="content_head">Schedule Inspections</Text>
        <Text as="p" marginTop={'30px'}>
          Easily schedule inspections on behalf of clients and track feedback after each visit!
        </Text>
        <Text as="p" marginTop={'30px'}>
          Every inspection scheduled is automatically logged under the user’s profile, creating a
          clear record of visit history and helping you monitor client engagement. Once an
          inspection is completed, clients receive a push notification prompting them to share
          feedback—capturing their experience while it’s still fresh.
        </Text>
        <Text as="p" marginTop={'30px'}>
          This feedback provides valuable insights into recurring issues or service gaps, helping
          you enhance future property visits and overall client satisfaction.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="schedule" ref={scheduleRef}>
        <Text className="content_head">How to Schedule Inspection on behalf of a User</Text>
        <Text as="p" marginTop={'30px'} fontSize={'20px'} fontWeight={'700'}>
          A step-by-step guide
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            Navigate to the <b>Users </b>section, view the profile of the User you want to{' '}
            <b>schedule inspection</b> for.
          </Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Click the <b>“More Options”</b> button on the right-hand side to access the drawer and
            select Schedule Inspection
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3(i)
          </Text>
          <Text>
            Input all required fields and proceed
            <UnorderedList>
              <ListItem>
                If assigning the inspection to a team member registered on Veerge, search the
                teammate’s name and proceed
              </ListItem>
            </UnorderedList>
          </Text>
          <Text mt={'20px'}>
            Note: The teammate must be a registered user on Veerge. You can assign the inspection to
            an agent or, if you prefer to handle it yourself, simply search for your name and assign
            the inspection directly to you.
          </Text>
          <Image src={step13} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3(ii)
          </Text>
          <Text>
            Input all required fields and proceed
            <UnorderedList>
              <ListItem>
                If assigning the inspection to an external member, input the assignee’s (the
                external member) full name, phone number, and email address.
              </ListItem>
            </UnorderedList>
          </Text>
          <Text mt={'20px'}>
            Note: The external member will get a mail about the inspection details
          </Text>
          <Image src={step14} mt={'30px'} w={'full'} />
        </Box>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 5
          </Text>
          <Text>
            Confirm the details and <b>Schedule Inspection</b>
          </Text>
          <Image src={step15} mt={'30px'} w={'full'} />
        </Box>
      </Box>
      <Box id="offer" ref={offerRef}>
        <Text className="content_head">Give an Offer</Text>
        <Text as="p" marginTop={'30px'}>
          Send private purchase offers directly through this feature—perfect for when a client wants
          a custom payment plan or a personalized purchase agreement. It allows you to negotiate
          discreetly and securely with buyers, keeping all offer details documented and organized
          within the platform.
        </Text>
        <Text fontSize="lg" fontWeight="semibold" mb={4} mt={'20px'}>
          How to give an Offer:
        </Text>

        <List spacing={'2px'} styleType="none">
          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 1:
            </Text>{' '}
            View the profile of the user you want to give an offer to.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 2:
            </Text>{' '}
            Click on the{' '}
            <Text as="span" fontWeight="semibold">
              “More Options”
            </Text>{' '}
            button at the top-right corner to open the options drawer, then select{' '}
            <Text as="span" fontWeight="semibold">
              Give an Offer
            </Text>
            .
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 3:
            </Text>{' '}
            Fill the required fields on the modal that appears and proceed.
          </ListItem>
        </List>
        <Text className="content_head" mt={'40px'}>
          Frequently Asked Questions(FAQs)
        </Text>
        <FaqCard
          question={'Where can I see the scheduled inspection requests?'}
          asker={'Elijah O.'}
        >
          <Text>
            To view the list of pending inspection requests you have, click on Request on the
            navigation bar.
          </Text>
          <Text>
            You can Approve Inspections or Reschedule inspections to a later or closer date on this
            page.
          </Text>
        </FaqCard>
        <FaqCard
          question={
            'What should I do if I’m unavailable on the date a client schedules an inspection?'
          }
          asker={'Adediwura A.'}
        >
          <Text>
            If you’re unavailable on the scheduled inspection date, you can easily reschedule the
            inspection a date and time that works for you.
          </Text>
          <Text>
            You can also reassign the inspection to an agent or teammate that will be available on
            the scheduled date.
          </Text>
        </FaqCard>
      </Box>
    </BlogLayout>
  );
};
