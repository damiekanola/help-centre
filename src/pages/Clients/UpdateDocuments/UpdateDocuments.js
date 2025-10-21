import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/update-docs.jpg';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';

export const UpdateDocuments = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const updateRef = useRef(null);
  const stepsRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const updateCheck = useIsInViewport(updateRef);
  const stepsCheck = useIsInViewport(stepsRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: updateCheck, id: 'update', title: 'Why update documents?'},
    {check: stepsCheck, id: 'steps', title: 'Steps to update documents'},
  ];

  const articleMeta = {
    title: 'How to update documents',
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
          Managing client records effectively is essential for ensuring smooth operations.{' '}
          <b>
            This provides a structured way to upload and store important documents within each
            client’s profile
          </b>
          , ensuring that transaction-related files are securely logged and easily accessible when
          needed.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="update" ref={updateRef}>
        <Text className="content_head">Why update documents?</Text>
        <Text as="p" marginTop={'30px'}>
          Updating documents ensures that all client records are properly organized and accessible.
          This helps with:
        </Text>

        <UnorderedList>
          <ListItem>Securely storing important client documents</ListItem>
          <ListItem>Keeping all transaction-related files in one place</ListItem>
          <ListItem>Ensuring easy retrieval for both internal teams and clients</ListItem>
          <ListItem>Enhancing transparency in the sales process</ListItem>
        </UnorderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="steps" ref={stepsRef}>
        <Text className="content_head">Steps to update documents</Text>
        <Text as="p" marginTop={'30px'}>
          Updating documents ensures that all client records are properly organized and accessible.
          This helps with:
        </Text>
        <Text mt={'30px'} fontWeight={'700'}>
          Step 1: Open the Transaction Drawer
        </Text>
        <UnorderedList>
          <ListItem>
            Go to the <b>Users </b>tab.
          </ListItem>
          <ListItem>
            Select the <b>client</b> whose document needs to be updated.
          </ListItem>
          <ListItem>
            A drawer will open—click <b>“View Profile”</b> to access their details.
          </ListItem>
          <ListItem>
            Click <b>“View Transactions”</b> of the relevant transaction.
          </ListItem>
        </UnorderedList>
        <Text mt={'30px'} fontWeight={'700'}>
          Step 2: Access the Owner’s Packet
        </Text>
        <UnorderedList>
          <ListItem>
            In the Transaction Drawer, click on More Options at the top right-hand corner. In the
            ensuing window, click on <b>“Owner’s Packet”.</b>
          </ListItem>
          <ListItem>
            A new drawer will appear, displaying all stored documents related to the client.
          </ListItem>
        </UnorderedList>
        <Text mt={'30px'} fontWeight={'700'}>
          Step 3: Upload the Document
        </Text>
        <UnorderedList>
          <ListItem>
            Click <b>“Upload Document”</b> and select the file from your device.
          </ListItem>
          <ListItem>Ensure the document is named correctly for easy reference.</ListItem>
          <ListItem>
            Once uploaded, <b>the document is automatically saved </b>and attached to the client’s
            account.
          </ListItem>
        </UnorderedList>
      </Box>
    </BlogLayout>
  );
};
