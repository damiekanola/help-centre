import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/client-accounts.jpg';

import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';

export const ClientAccount = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const owningRef = useRef(null);
  const buyerRef = useRef(null);
  const thinkingRef = useRef(null);
  const questionRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const owningCheck = useIsInViewport(owningRef);
  const buyerCheck = useIsInViewport(buyerRef);
  const thinkingCheck = useIsInViewport(thinkingRef);
  const questionCheck = useIsInViewport(questionRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: owningCheck, id: 'owning', title: 'Owning the client relationship from day one'},
    {check: buyerCheck, id: 'buyer', title: 'The right way to handle a potential buyer'},
    {check: thinkingCheck, id: 'thinking', title: 'Thinking beyond immediate sales'},
    {check: questionCheck, id: 'question', title: 'So, what’s the real question?'},
  ];

  const articleMeta = {
    title: 'Why Client Accounts Matter- Even for New Clients without an Investment',
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
        <Text as="p" marginTop={'30px'}>
          <b>A common question we hear is:</b> <br /> "It feels like this system is only important
          for existing clients, but what value does it add to new clients who have no investment
          yet?"
          <br /> At first glance, it might seem like Myxellia’s infrastructure primarily benefits
          clients who already own properties. However, its true power lies in{' '}
          <b>
            helping you architect a business that feels personally designed for every client, even
            potential buyers— those who haven't purchased yet
          </b>
          . The key to long-term success in real estate is <b>client ownership</b>—not just selling
          to those who can buy today, but also nurturing those who may buy in the future.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="owning" ref={owningRef}>
        <Text className="content_head">Owning the client relationship from day one</Text>
        <Text as="p" marginTop={'30px'}>
          A potential buyer walks into your development company’s office or calls to inquire about
          properties. They’ve never interacted with your online platform, never signed up on your
          website, and haven’t made a purchase. However, they’re interested—they’re asking
          questions, scheduling an inspection, and exploring possibilities.
        </Text>
        <Text as="p" marginTop={'30px'}>
          Why?
        </Text>
        <OrderedList>
          <ListItem>
            <b>Captures a digital footprint </b>– You now have <b>structured data</b> on this
            prospect, making follow-ups easier and more personalized.
          </ListItem>
          <ListItem>
            <b>Centralizes client interactions</b> – Even if different team members handle the
            client over time, everything is logged in one place.
          </ListItem>
          <ListItem>
            <b>Turns every lead into a long-term relationship</b> – Even if they don’t buy today,
            you ensure they remain in your ecosystem until they’re ready.
          </ListItem>
        </OrderedList>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="buyer" ref={buyerRef}>
        <Text className="content_head">The right way to handle a potential buyer</Text>
        <Text as="p" marginTop={'30px'}>
          A potential buyer walks into your <b>development company’s office </b>or calls to inquire
          about properties. They’ve never interacted with your online platform, never signed up on
          your website, and haven’t made a purchase. However, they’re interested—they’re asking
          questions, scheduling an inspection, and exploring possibilities.
        </Text>
        <Text as="p" marginTop={'30px'} fontWeight={'700'}>
          Step 1: Create an Account for the Client
        </Text>
        <UnorderedList>
          <ListItem>
            If it’s a phone call, you already have their phone number and should ask for their email
            and full name—these three details are enough to create an account.
          </ListItem>
          <ListItem>
            The team member handling the call should log a summary of the conversation as a note on
            their account.
          </ListItem>
        </UnorderedList>
        <Text as="p" marginTop={'30px'} fontWeight={'700'}>
          Why is this important?
        </Text>
        <Text>
          If the client calls back <b>two years</b> from now, even if the team members who initially
          engaged with them have left the company, the entire interaction history remains intact.
          The next person who picks up the conversation will instantly have the full context, making
          the client feel recognized and valued.
        </Text>

        <Text as="p" marginTop={'30px'} fontWeight={'700'}>
          Step 2: Schedule the Inspection on Their Behalf
        </Text>
        <Text>
          Instead of asking the client to go to your website and book an inspection themselves
          (which might come off as impersonal or inconvenient), take the initiative to{' '}
          <b>schedule it for them directly within the system.</b>
        </Text>
        <UnorderedList>
          <ListItem>The client is automatically reminded of the inspection.</ListItem>
          <ListItem>
            Once the inspection is complete, <b>Myxellia triggers a smart feedback request</b>
            —collecting valuable insights about their experience.
          </ListItem>
        </UnorderedList>
        <Text as="p" marginTop={'30px'} fontWeight={'700'}>
          Step 3: Capture Client Preferences
        </Text>
        <Text>
          If the client has browsed properties via your platform, Myxellia l
          <b>ogs their interactions</b>—what properties caught their attention, what fits their
          budget, what they prioritized (design, size, location, etc.).
        </Text>
        <Text>
          If they’ve only interacted offline, team members should manually log what piqued their
          interest.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="thinking" ref={thinkingRef}>
        <Text className="content_head">Thinking beyond immediate sales</Text>
        <Text as="p" marginTop={'30px'}>
          When we say "potential buyers," we don’t just mean people ready to purchase today. We’re
          also talking about:
        </Text>

        <UnorderedList>
          <ListItem>
            People <b>who will have the purchasing power in the future.</b>
          </ListItem>
          <ListItem>
            People <b>who need more time to decide.</b>
          </ListItem>
          <ListItem>
            People <b>who may refer others based on their experience.</b>
          </ListItem>
        </UnorderedList>
        <Text as="p">
          This expands your audience far beyond immediate sales transactions, ensuring that even if
          someone doesn’t buy today, you never lose them.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="question" ref={questionRef}>
        <Text className="content_head">So, what’s the real question?</Text>
        <Text as="p" marginTop={'30px'}>
          It’s not just <b>“How do we manage today’s buyers?”</b> It’s{' '}
          <b>“How do we ensure that, whenever someone is ready to buy, they buy from us?”</b>That’s
          what <b>owning the clients</b> at scale truly means, creating a personalized journey that
          ensures they never slip through the cracks. Even if they don’t buy now, you’re building a
          direct, ongoing connection—so when the time comes, they already trust you. This is the
          real power of the Myxellia infrastructure—transforming your business from a one-time sales
          operation into a <b>long-term client engagement machine</b>.
        </Text>
      </Box>
    </BlogLayout>
  );
};
