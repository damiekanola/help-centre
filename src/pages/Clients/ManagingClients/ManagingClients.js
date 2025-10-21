import React, {useRef} from 'react';
import {Box, Text, ListItem, UnorderedList} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/managing-client.jpg';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {clientsData} from '../../../constant/pages';

export const ManagingClients = () => {
  const introRef = useRef(null);
  const scheduleInspectionRef = useRef(null);
  const blacklistRef = useRef(null);
  const transferOwnershipRef = useRef(null);
  const terminateTransactionRef = useRef(null);
  const additionalCostsRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const scheduleInspectionCheck = useIsInViewport(scheduleInspectionRef);
  const blacklistCheck = useIsInViewport(blacklistRef);
  const transferOwnershipCheck = useIsInViewport(transferOwnershipRef);
  const terminateTransactionCheck = useIsInViewport(terminateTransactionRef);
  const additionalCostsCheck = useIsInViewport(additionalCostsRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {
      check: scheduleInspectionCheck,
      id: 'schedule-inspection',
      title: 'How to schedule an inspection on behalf of a client',
    },
    {check: blacklistCheck, id: 'blacklist', title: 'How to blacklist an account'},
    {
      check: transferOwnershipCheck,
      id: 'transfer-ownership',
      title: 'How to transfer ownership of a property',
    },
    {
      check: terminateTransactionCheck,
      id: 'terminate-transaction',
      title: 'How to terminate a transaction',
    },
    {
      check: additionalCostsCheck,
      id: 'additional-costs',
      title: 'How to request additional costs',
    },
  ];

  const articleMeta = {
    title: 'Managing Other Client Interactions & Property Transfers',
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
          Efficiently managing client interactions and other transactions is crucial for a seamless
          experience. This guide covers essential processes{' '}
          <b>
            such as scheduling inspections, blacklisting accounts, transferring property ownership,
            terminating transactions, and requesting additional closing costs
          </b>{' '}
          to help streamline operations.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="scheduleinspection" ref={scheduleInspectionRef}>
        <Text className="content_head">How to schedule an inspection on behalf of a client</Text>
        <Text as="p" my={'30px'}>
          Scheduling an inspection helps track client visits, collect feedback, and improve
          engagement. Follow these steps to schedule an inspection:
        </Text>

        <UnorderedList>
          <ListItem>
            Navigate to the <b>Users Section</b> and select the client.
          </ListItem>
          <ListItem>
            Click on <b>More Options</b>.
          </ListItem>
          <ListItem>
            Select <b>Schedule Inspection</b>.
          </ListItem>
          <ListItem>
            The inspection will be scheduled, and the client will receive a notification.
          </ListItem>
        </UnorderedList>

        <Text as="p" marginTop={'30px'} fontWeight="700">
          Why is This Important?
        </Text>

        <UnorderedList>
          <ListItem>Securely storing important client documents</ListItem>
          <ListItem>Keeping all transaction-related files in one place</ListItem>
          <ListItem>Ensuring easy retrieval for both internal teams and clients</ListItem>
          <ListItem>Enhancing transparency in the sales process</ListItem>
        </UnorderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="blacklist" ref={blacklistRef}>
        <Text className="content_head">How to blacklist an account</Text>
        <Text as="p" marginTop={'30px'}>
          Blacklisting an account prevents a user from accessing your web or mobile applications or
          engaging with your platform. This may be necessary in cases of fraud, policy violations,
          or security concerns.
        </Text>
        <UnorderedList>
          <ListItem>
            Navigate to the <b>Users Section</b> and select the client profile.
          </ListItem>
          <ListItem>
            Click on <b>More Options</b>.
          </ListItem>
          <ListItem>
            Scroll down and select <b>Add to Blacklist</b>.
          </ListItem>
        </UnorderedList>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="transferownership" ref={transferOwnershipRef}>
        <Text className="content_head">How to transfer ownership of a property</Text>
        <Text as="p" marginTop={'30px'}>
          Property ownership transfers occur when a client sells their property to another buyer.
          This process ensures accurate records of ownership transfers.
        </Text>
        <UnorderedList>
          <ListItem>
            Navigate to the <b>Users Profile</b> and go to the <b>Transactions Section.</b>
          </ListItem>
          <ListItem>
            Select the <b>specific transaction</b> related to the property being transferred.
          </ListItem>
          <ListItem>
            Click the <b>More Options button</b> and scroll down to <b>Transfer Ownership.</b>
          </ListItem>
          <ListItem>
            Enter the <b>email of the new buyer</b> and fill in the required details.
          </ListItem>
          <ListItem>
            After submission, verify the transfer by checking the <b>new buyer’s profile</b> to
            confirm the property has been successfully assigned.
          </ListItem>
        </UnorderedList>
        <Text as="p" marginTop={'30px'} fontWeight="700">
          Why is This Important?
        </Text>

        <UnorderedList>
          <ListItem>
            Ensures a seamless transition of property ownership with accurate records.
          </ListItem>
          <ListItem>Helps track property resale transactions within the system.</ListItem>
          <ListItem>Keeps all stakeholders updated with the latest ownership information.</ListItem>
        </UnorderedList>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="terminate-transaction" ref={terminateTransactionRef}>
        <Text className="content_head">How to terminate a transaction</Text>
        <Text as="p" marginTop={'30px'}>
          Property ownership transfers occur when a client sells their property to another buyer.
          This process ensures accurate records of ownership transfers.
        </Text>
        <UnorderedList>
          <ListItem>
            Navigate to the <b>Users Section</b> and select the client.
          </ListItem>
          <ListItem>
            Click on the <b>specific transaction</b> you wish to terminate.
          </ListItem>
          <ListItem>
            A drawer will open displaying <b>transaction details</b>.
          </ListItem>
          <ListItem>
            Click the <b>More Options button</b> on the upper-right corner.
          </ListItem>
          <ListItem>
            Scroll down and select T<b>erminate Transaction</b> and confirm the action.
          </ListItem>
        </UnorderedList>
        <Text as="p" marginTop={'30px'} fontWeight="700">
          What Happens After Termination?
        </Text>

        <UnorderedList>
          <ListItem>
            The <b>transaction disappears</b> from the client’s portfolio without any alert.
          </ListItem>
          <ListItem>
            The terminated transaction remains visible in your internal management system for
            tracking purposes.
          </ListItem>
          <ListItem>Ensures accurate reporting and prevents unauthorized reversals.</ListItem>
        </UnorderedList>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="additional-costs" ref={additionalCostsRef}>
        <Text className="content_head">How to request additional costs</Text>
        <Text as="p" marginTop={'30px'}>
          In some cases, additional costs may arise during the finalization of a transaction. This
          allows you to request additional closing costs directly without needing to terminate an
          existing transaction.
        </Text>
        <UnorderedList spacing={'1px'} mt={'30px'}>
          <ListItem>
            Navigate to <b>the Users Section</b> and select the client.
          </ListItem>
          <ListItem>
            Click on the s<b>pecific transaction</b> you wish to add additional closing costs to.
          </ListItem>
          <ListItem>
            Click the <b>More Options</b> button on the upper-right corner.
          </ListItem>
          <ListItem>
            Scroll down and <b>select Request Additional Closing Costs.</b>
          </ListItem>
          <ListItem>Enter the required details regarding the additional cost.</ListItem>
          <ListItem>
            Click <b>Proceed </b>to submit the request for processing.
          </ListItem>
        </UnorderedList>
        <Text as="p" marginTop={'30px'} fontWeight="700">
          Once submitted, the <b>client</b> will be notified and prompted to complete the additional
          payment.
        </Text>
      </Box>
    </BlogLayout>
  );
};
