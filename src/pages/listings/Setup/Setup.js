import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image, List} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/schedule.jpg';
import step1 from '../../../assets/images/create-lead/1.png';
import step2 from '../../../assets/images/create-lead/2.png';
import step3 from '../../../assets/images/create-lead/3.png';
import step4 from '../../../assets/images/create-lead/4.png';
import step5 from '../../../assets/images/create-lead/5.png';
import step6 from '../../../assets/images/create-lead/6.png';
import step7 from '../../../assets/images/create-lead/7.png';
import step8 from '../../../assets/images/create-lead/8.png';
import step9 from '../../../assets/images/create-lead/9.png';
import {FaqCard} from '../../../components/Faq/FaqCard';

// import check from '../../assets/images/home/check.png';
// import engage from '../../assets/images/home/engage.png';
// import trust from '../../assets/images/home/trust.png';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';

export const Setup = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const scheduleRef = useRef(null);
  const offerRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const scheduleCheck = useIsInViewport(scheduleRef);
  const offerCheck = useIsInViewport(offerRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Set Up Your Store Template'},
    {check: scheduleCheck, id: 'schedule', title: 'How to Schedule Inspection on behalf of a User'},
    {check: offerCheck, id: 'offer', title: 'Give an offer'},
  ];

  const articleMeta = {
    title: 'How to set up your Store template',
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
      relatedContent={relatedContent}
    >
      <Box id="intro" ref={introRef}>
        <Text className="content_head">Set Up Your Store Template</Text>
        <Text as="p" marginTop={'30px'}>
          Easily schedule inspections on behalf of clients and track feedback after each visit!
        </Text>
        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 1
          </Text>
          <Text>Start by clicking on the “menu icon” button on the Navigation bar.</Text>
          <Image src={step1} mt="30px" w="full" alt="Step 1" />
        </Box>

        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 2
          </Text>
          <Text>Select Application.</Text>
          <Image src={step2} mt="30px" w="full" alt="Step 2" />
        </Box>

        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 3
          </Text>
          <Text>Select any template that matches your brand’s identity.</Text>
          <Image src={step3} mt="30px" w="full" alt="Step 3" />
        </Box>

        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 4
          </Text>
          <Text>Select your brand color.</Text>
          <Image src={step4} mt="30px" w="full" alt="Step 4" />
        </Box>

        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 5
          </Text>
          <Text>Select a theme that goes well with your brand color.</Text>
          <Image src={step5} mt="30px" w="full" alt="Step 5" />
        </Box>

        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 6
          </Text>
          <Text>Review the details provided and proceed.</Text>
          <Image src={step6} mt="30px" w="full" alt="Step 6" />
        </Box>

        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 7
          </Text>
          <Text>
            Create your web application URL (e.g., <b>Myxellia.67878.com</b>).
          </Text>
          <Image src={step7} mt="30px" w="full" alt="Step 7" />
        </Box>

        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 8
          </Text>
          <Text>Wait a few minutes to initialize deployment of your application.</Text>
          <Image src={step8} mt="30px" w="full" alt="Step 8" />
        </Box>

        <Box my="30px">
          <Text fontWeight="600" color="#000000EB">
            STEP 9
          </Text>
          <Text>
            You now have your store URL! Clients can use this link to access your listings, explore
            available properties, and engage directly with your offerings.
          </Text>
          <Image src={step9} mt="30px" w="full" alt="Step 9" />
        </Box>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="schedule" ref={scheduleRef}>
        <Text className="content_head">E-Subscription URL</Text>
        <Text as="p" marginTop={'30px'} fontSize={'20px'} fontWeight={'700'}>
          E-Sub (Electronic Subscription) links make it easy for clients to secure a unit or listing
          directly from the link. When a client or Agent opens the link or scans the QR code,
          they’re taken straight to the subscription page for that specific unit—no need to search
          or navigate through multiple listings.
        </Text>
        <Box mt={'30px'}>
          <Text>You can:</Text>
          <UnorderedList>
            <ListItem>
              Copy the link to share it directly with clients or post it on your digital platforms.
            </ListItem>
            <ListItem>
              Share the QR code to give clients instant access by simply scanning it.
            </ListItem>
            <ListItem>
              Download the QR code for use on flyers, banners, or other marketing materials.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box mt={'30px'}>
          <Text fontWeight={'500'}>How to get the E-subscription URL:</Text>
          <UnorderedList>
            <ListItem>
              <b>Step 1:</b> Go to the listing you want to copy <b>E-subscription URL</b> for
            </ListItem>
            <ListItem>
              <b>Step 2:</b> On the overview page, go to the <b>E-subscription URL section</b>
            </ListItem>
            <ListItem>
              <b>Step 3:</b> Copy your link or download the QR code and share as you want
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </BlogLayout>
  );
};
