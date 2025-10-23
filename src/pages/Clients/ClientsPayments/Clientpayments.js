import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/client-payments.jpg';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {FaqCard} from '../../../components/Faq/FaqCard';
import {clientsData} from '../../../constant/pages';

export const ClientPayments = () => {
  const introRef = useRef(null);
  const updateRef = useRef(null);
  const afterUpdateRef = useRef(null);
  const faqRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const updateCheck = useIsInViewport(updateRef);
  const afterUpdateCheck = useIsInViewport(afterUpdateRef);
  const faqCheck = useIsInViewport(faqRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: updateCheck, id: 'update', title: 'How to update transactions manually'},
    {
      check: afterUpdateCheck,
      id: 'after-update',
      title: 'What happens after updating the transactions?',
    },
    {check: faqCheck, id: 'faq', title: 'Frequently Asked Questions (FAQs)'},
  ];

  const articleMeta = {
    title: 'Managing Client Payments: A Guide to Logging Transaction',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
  };

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={clientsData}
    >
      <Box id="intro" ref={introRef}>
        <Text as="p" marginTop={'30px'}>
          <b>Transactions can either be automated or manually updated</b>. If you haven’t enabled
          automated payments, new payments won’t be automatically logged. This means that for every
          installment a client makes, you will need to manually update the transaction in the system
          to ensure accurate records.
          <br /> This guide walks you through the process of updating a transaction manually.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="update" ref={updateRef}>
        <Text className="content_head">How to update transaction manually</Text>
        <Text mt={'30px'} fontWeight={'700'}>
          Step 1: Access the User’s Profile
        </Text>
        <UnorderedList>
          <ListItem>
            Navigate to the <b>Users tab.</b>
          </ListItem>
          <ListItem>
            Locate and <b>select the client </b>whose transaction you need to update.
          </ListItem>
          <ListItem>
            click on the<b> “view”</b> button that appears along the row where the client’s name is
            found
          </ListItem>
          <ListItem>
            <b>A drawer will open</b> on the right-hand side—click <b>“View Profile”</b> to expand
            the client’s details.
          </ListItem>
        </UnorderedList>
        <Text mt={'30px'} fontWeight={'700'}>
          Step 2: Locate the Transaction
        </Text>
        <UnorderedList>
          <ListItem>
            Click <b>“View Transactions”</b> to access the specific payment record.
          </ListItem>
          <ListItem>
            <b>A drawer displaying the transaction</b> details will appear.
          </ListItem>
        </UnorderedList>
        <Text mt={'30px'} fontWeight={'700'}>
          Step 3: Update the Payment Details
        </Text>
        <UnorderedList>
          <ListItem>
            On the upper right-hand side of the drawer, click the{' '}
            <b>more options button (beside the "Close" button).</b>
          </ListItem>
          <ListItem>
            Scroll down and select <b>“Update Deposit” </b>from the drawer.
          </ListItem>
          <ListItem>
            Enter the necessary details:
            <Box>
              <UnorderedList>
                <ListItem>Amount Paid</ListItem>
                <ListItem>Date of Payment</ListItem>
                <ListItem>Upload Payment Receipt (to ensure proper documentation)</ListItem>
              </UnorderedList>
            </Box>
          </ListItem>
        </UnorderedList>
        <Text mt={'30px'} fontWeight={'700'}>
          Step 4: Authenticate & Confirm
        </Text>
        <OrderedList>
          <ListItem>
            Launch your <b>Authenticator App</b> and enter the generated security code.
          </ListItem>
          <ListItem>
            Click <b>proceed</b> to finalize the update.
          </ListItem>
        </OrderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="afterUpdate" ref={afterUpdateRef}>
        <Text className="content_head">What happens after updating the transactions?</Text>
        <UnorderedList mt={'30px'}>
          <ListItem>
            The client is <b>instantly notified</b> that their payment has been recorded.
          </ListItem>
          <ListItem>
            The transaction is updated in <b>real-time</b>, reflecting the latest balance.
          </ListItem>
          <ListItem>
            The uploaded receipt ensures transparency and serves as proof of payment.
          </ListItem>
        </UnorderedList>
      </Box>

      <Box id="faq" ref={faqRef}>
        <Text className="content_head" mt={'40px'}>
          Frequently Asked Questions (FAQs)
        </Text>
        <FaqCard
          id="clientpaymentquestion1"
          asker={'Manuel G.'}
          question={
            'Can I have back up account details on Veerge in case the one provided doesn’t go through?'
          }
        >
          <Text>
            Yes, you can! We call this a failsafe account. Here is how to setup a failsafe account:
          </Text>
          <OrderedList>
            <ListItem>Click on the dropdown arrow beside your account name</ListItem>
            <ListItem>Select Payment </ListItem>
            <ListItem>Select Bank Account</ListItem>
            <ListItem>Review the summary provided and add your bank account details</ListItem>
          </OrderedList>
        </FaqCard>
        <FaqCard
          id="clientpaymentquestion2"
          asker={'Manuel G.'}
          question={'How does the payment gateway work?'}
        >
          <Text>
            Myxellia connects to trusted gateways like Flutterwave and PayPal, allowing clients to
            make secure payments directly on the platform. All transactions are automatically
            verified and recorded in real time.
          </Text>
          <Text mt={'30px'} fontWeight={'700'}>
            Set up your Payment Gateway
          </Text>
          <OrderedList>
            <ListItem>Click on the dropdown arrow beside your account name</ListItem>
            <ListItem>Select Payment </ListItem>
            <ListItem>Select Bank Account</ListItem>
            <ListItem>Review the summary provided and add your bank account details</ListItem>
          </OrderedList>
        </FaqCard>
      </Box>
    </BlogLayout>
  );
};
