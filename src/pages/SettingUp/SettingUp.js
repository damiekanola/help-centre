import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList} from '@chakra-ui/react';
import protectedImg from '../../assets/images/home/account_approved.jpg';
import {FaqCard} from '../../components/Faq/FaqCard';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../layouts/BlogLayout';

import {gettingStarteddata} from '../../constant/pages';

export const SettingUp = () => {


  const requirementsRef = useRef(null);
  const guideRef = useRef(null);
  const reviewRef = useRef(null);
  const faqRef = useRef(null);

  const requirementsCheck = useIsInViewport(requirementsRef);
  const guideCheck = useIsInViewport(guideRef);
  const reviewCheck = useIsInViewport(reviewRef);
  const faqCheck = useIsInViewport(reviewRef);

  const articleContent = [
    {check: requirementsCheck, id: 'requirements', title: 'Registration Requirements'},
    {check: guideCheck, id: 'guide', title: 'Step-by-step guide to setting up your account'},
    {check: reviewCheck, id: 'review', title: 'Application Review'},
    {check: faqCheck, id: 'faq', title: 'Frequently asked Questions'},
  ];

  const articleMeta = {
    title: 'Setting Up Your Account',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'February 04, 2025',
    image: protectedImg,
  };

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={gettingStarteddata}
    >
      <Box>
        <Text as="p" marginTop={'30px'}>
          As you consider setting up your <b>Myxellia</b> account, a common question arises:{' '}
          <b>Who should actually sign up?</b> In many organizations, the IT team is usually tasked
          with onboarding new software. However, the key difference with Myxellia is that{' '}
          <b>the person who signs up becomes the account owner by default</b>. Because of this, we
          strongly recommend that a <b>permanent member</b> of your organization—often a business
          owner or senior manager—complete the initial sign-up. Afterward, this individual can
          invite IT personnel (or anyone else) and grant them admin access to handle day-to-day
          technical tasks. <br />
          If you happen to be both the owner and the one setting up the system, once your account is
          created you can go straight into configuring your property portfolio.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box ref={requirementsRef} id="requirements">
        <Text className="content_head">Registration Requirements</Text>
        <Text as="p" marginTop="40px">
          Before you begin the registration process, please ensure you meet the following criteria:
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

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={guideRef} id="guide">
        <Text className="content_head">Step-by-step guide to setting up your account</Text>
        <Text fontWeight={'700'} mt={'40px'}>
          Step 1: Select a Region
        </Text>
        <OrderedList pl={'20px'}>
          <ListItem>
            Click on the appropriate link for either the Demo or Live environment.
          </ListItem>
          <ListItem>
            Choose your primary region of operation. If your business spans multiple regions, pick
            the location where your company headquarters is based.
          </ListItem>
        </OrderedList>

        <Text fontWeight={'700'} mt={'20px'}>
          Step 2: Enter Your Basic Information
        </Text>
        <Text>You’ll be prompted to fill in your personal details, including:</Text>
        <UnorderedList pl={'20px'}>
          <ListItem>Full Legal Name (verification proof may be requested)</ListItem>
          <ListItem>
            Valid Email Address (must be active, as all communications will be sent here)
          </ListItem>
        </UnorderedList>

        <Text fontWeight={'700'} mt={'20px'}>
          Step 3: Verify Your Email
        </Text>
        <Text>
          Once you submit your basic information, you’ll receive an email from no-reply@myxellia.io
          containing a One-Time Password (OTP).
        </Text>
        <OrderedList pl={'20px'}>
          <ListItem>Enter the OTP where prompted.</ListItem>
          <ListItem>
            Click the <b>“Verify”</b> button.
          </ListItem>
        </OrderedList>

        <Text fontWeight={'700'} mt={'20px'}>
          Step 4: Create a Password
        </Text>
        <Text>
          You’ll now create a secure, memorable password. Please note the following requirements:
        </Text>
        <UnorderedList pl={'20px'}>
          <ListItem>
            Minimum <b>8 characters</b> in length
          </ListItem>
          <ListItem>No restrictions on numbers or special characters</ListItem>
          <ListItem>
            Passwords longer than <b>72 characters</b> will be truncated (only the first 72
            characters are used)
          </ListItem>
        </UnorderedList>
        <Text fontWeight={'700'} mt={'20px'}>
          Step 5: Provide Business Information
        </Text>
        <Text>Next, you’ll be asked to enter details about your organization:</Text>
        <UnorderedList pl={'20px'}>
          <ListItem>Legal Business Name (proof of registration may be requested)</ListItem>
          <ListItem>Company Address (used for official correspondence)</ListItem>
          <ListItem>Company Email Address (may be subject to verification)</ListItem>
        </UnorderedList>
        <Text fontWeight={'700'} mt={'20px'}>
          Step 6: Activity Information
        </Text>
        <Text>
          Answer a few questions about your expected activities on the platform. This helps Myxellia
          tailor its features to your specific needs.
        </Text>

        <Text fontWeight={'700'} mt={'20px'}>
          Step 7: Extra Information (Optional but Recommended)
        </Text>
        <Text>
          While not mandatory, providing additional details at this stage can speed up your
          application review. Check out the accompanying video above for guidance on filling in
          these fields.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={reviewRef} id="review">
        <Text className="content_head">Application Review</Text>
        <Text as="p" marginTop="40px">
          Once all steps are complete, our compliance team will review your application. You can
          typically expect a response within<b> 48 hours</b>. During this period, feel free to
          prepare any additional documentation that might be requested.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={faqRef} id="faq">
        <Text className="content_head">Frequently Asked Questions(FAQs)</Text>

        <FaqCard question={'How do I change my password?'} asker={'Joseph O.'}>
          <Text>
            Go to your account settings and select <b>Change Password</b>. Enter your current
            password, then create and confirm your new one.
          </Text>
        </FaqCard>
        <FaqCard question={'How do I change my phone number?'} asker={'Precious O.'}>
          <Text>
            Go to <b>Account Settings</b>, select <b>Business Information</b>, and click the{' '}
            <b>Edit icon</b>. From there, you can update your phone number and other business
            details.
          </Text>
        </FaqCard>
      </Box>
    </BlogLayout>
  );
};
