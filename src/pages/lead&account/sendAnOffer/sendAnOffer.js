import React, {useRef} from 'react';
import {Box, Text, Image} from '@chakra-ui/react';
import sendOffer1 from '../../../assets/images/sendOffer/send-an-offer-1.png';
import sendOffer2 from '../../../assets/images/sendOffer/send-an-offer-2.png';
import sendOffer3 from '../../../assets/images/sendOffer/send-an-offer-3.png';
import sendOffer4 from '../../../assets/images/sendOffer/send-an-offer-4.png';
import sendOffer5 from '../../../assets/images/sendOffer/send-an-offer-5.png';
import sendOffer6 from '../../../assets/images/sendOffer/send-an-offer-6.png';
import QuestionsAndReplies from '../../../components/Faq/QuestionsAndReplies';
import LeftNav from '../../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../../components/Faq/Helpful';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import LeadRightNav from '../../../components/Lead/RightNav';
import HideLeadUnsubscribed from '../../../hoc/HidefullLead';

const SendAnOffer = () => {
  const how_toRef = useRef(null);
  const stepsRef = useRef(null);
  const questionsRef = useRef(null);

  const how_toCheck = useIsInViewport(how_toRef);
  const stepsCheck = useIsInViewport(stepsRef);
  const questionsCheck = useIsInViewport(questionsRef);

  const articleContent = [
    {check: how_toCheck, id: 'how_to', title: 'Create an account'},
    {check: stepsCheck, id: 'steps', title: 'Steps'},
    {check: questionsCheck, id: 'questions', title: 'Questions & Replies'},
  ];

  const questions = [
    {
      name: 'David G.',
      date: 'Jun 07, 2023',
      content:
        'Hello, I have a situation where a client made a payment outside the application. Is there a method to record this payment within the application?',
      replies: [
        `Hi David,
        Absolutely. Here's what you can do: Head to the 'Pending Offer' section, and
        you'll find the respective account number. Proceed to initiate a transfer to this
        account. As soon as the transaction is complete, the updates will seamlessly reflect on both ends, ensuring accurate records. If you require any further assistance with this process, don't hesitate to reach out to our support team.
        We're here to help`,
      ],
    },
  ];

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <LeadRightNav />
      <Text className="head_">SEND AN OFFER</Text>
      <Text className="publish">Published: March 26, 2023</Text>
      <Box id="how_to" ref={how_toRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text as="p" marginTop={'30px'}>
            In the realm of real estate transactions, negotiation often plays a pivotal role. Within
            this landscape, the price displayed on the user’s application most times is not set in
            stone for the development company—it's subject to negotiation. This is where 'Private
            Offer' feature comes into play. Imagine a potential buyer spotting a property on your
            application and desiring to explore a deal more aligned with their preferences. In such
            cases, they can interact with the chatbot or get in touch via phone to initiate
            negotiations.
          </Text>
          <Text as="p" marginTop="20px">
            Should the development company entertain the offered price, they will generate a
            'Private Offer' tailored to the negotiated terms. This confidential proposition grants
            the prospective buyer access to a personalized deal beyond what's publicly listed on the
            application.
          </Text>
          <Text as="p" marginTop="20px">
            Navigating this process involves several steps, which will be outlined below:
          </Text>
        </Text>
      </Box>
      <Box id="steps" ref={stepsRef}>
        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">
            Begin by heading to the <b>'Users'</b> section, where you can select the relevant user.
          </Text>

          <Image src={sendOffer1} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="30px">
            STEP 2
          </Text>
          <Text className="content">
            Scroll drown to select the <b>'Give an Offer'</b> button.
          </Text>

          <Image src={sendOffer2} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content">
            Proceed to specify key details. This includes selecting the listing and unit in
            question. Depending on the payment structure—outright purchase or payment plan—you'll
            define the payment type accordingly.
          </Text>
          <Image src={sendOffer3} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 4
          </Text>
          <Text className="content">
            For outright purchases, input the negotiated amount. If it's a payment plan, you'll need
            to provide the initial deposit, outline instalment payments along with their due dates,
            and set an expiration date for the offer.
          </Text>

          <Image src={sendOffer4} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 5
          </Text>
          <Text className="content">
            Essential for formalizing the negotiation, the purchase agreement is uploaded at this
            juncture.
          </Text>

          <Image src={sendOffer5} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 6
          </Text>
          <Text className="content">
            With all pertinent information in place, you can now dispatch the offer for
            consideration.
          </Text>
          <Image src={sendOffer6} mt="30px" mx="auto" w="full" />
          <Text className="content" mt="30px">
            {/* Once dispatched, the offer enters a 'Pending' status within the profile. Its
            progression hinges on the potential buyer either submitting the initial deposit or
            upon the offer's expiration date, beyond which it ceases to be valid. This
            streamlined process empowers both buyers and sellers in their quest for a
            mutually beneficial real estate arrangement. */}
            After sending the offer, it's labeled as 'Pending' in the profile. It moves forward when
            the buyer either pays the initial deposit or until the offer expires. This simple
            process helps both buyers and sellers find a good real estate deal.
          </Text>
        </Box>
      </Box>

      <Box id="questions" ref={questionsRef}>
        <QuestionsAndReplies questions={questions} />
      </Box>

      <Helpful />
    </div>
  );
};

export default HideLeadUnsubscribed(SendAnOffer);
