import React, {useRef} from 'react';
import {Box, Text, Image, Link, OrderedList, ListItem, List} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/manage-ownership.jpg';
import {FaqCard} from '../../../components/Faq/FaqCard';
import step1 from '../../../assets/images/client/step1.png';
import step2 from '../../../assets/images/client/step2.png';
import step3 from '../../../assets/images/client/step3.png';
import step4 from '../../../assets/images/client/step4.png';
import step5 from '../../../assets/images/client/step5.png';
import step11 from '../../../assets/images/client/step11.png';
import step12 from '../../../assets/images/client/step12.png';
import step13 from '../../../assets/images/client/step13.png';
import step14 from '../../../assets/images/client/step14.png';
import step33 from '../../../assets/images/client/step33.png';
import step34 from '../../../assets/images/client/step34.png';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {clientsData} from '../../../constant/pages';

export const ManageOwnership = () => {
  const introRef = useRef(null);
  const assignpropertyRef = useRef(null);
  const assignunitRef = useRef(null);
  const transferRef = useRef(null);
  const coownerRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const assignpropertyCheck = useIsInViewport(assignpropertyRef);
  const assignunitCheck = useIsInViewport(assignunitRef);
  const transferCheck = useIsInViewport(transferRef);
  const coownerCheck = useIsInViewport(coownerRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Managing Ownership'},
    {check: assignpropertyCheck, id: 'assignproperty', title: 'How to Assign a Property to a User'},
    {check: assignunitCheck, id: 'assignunit', title: 'How to Assign a Unit to a User'},
    {check: transferCheck, id: 'transfer', title: 'Transfer of Ownership'},
    {check: coownerCheck, id: 'coowner', title: 'Co-owner’s access'},
  ];

  const articleMeta = {
    title: 'How to Update or Change Ownership of Properties',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
  };

  const steps = [
    'On the user’s profile, click View Transactions for the listing you want to grant co-owner’s access for.',
    'Click on the “option icon” button on the drawer and select Grant co-owner’s access from the options',
    'Input the email address of the user you want to grant co-owner’s access.Note: The email address must belong to an existing registered user.',
    'Confirm the details and proceed.',
  ];

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={clientsData}
    >
      <Box id="how_to" ref={introRef}>
        <Text className="content_head">Manage Ownership of Properties</Text>
        <Text as="p" marginTop={'30px'}>
          Define who owns, co-owns, or manages each property and unit. Assign, transfer, or share
          access easily to keep user’s portfolio organized and transparent.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="assignproperty" ref={assignpropertyRef}>
        <Text className="content_head">How to Assign a Property to a User</Text>
        <Text as="p" marginTop={'30px'}>
          A step-by-step guide
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            Go to the <b>Users</b> section and <b>View the profile</b> of the user you want to
            assign a property to.
          </Text>
          <Image src={step1} mt={'30px'} w={'full'} />
        </Box>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Click the <b>More Options </b>button on the right side, then choose{' '}
            <b>Assign Property</b> from the options that appears.
          </Text>
          <Image src={step2} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3(i)
          </Text>
          <Text>
            Select the listing and the particular unit of the listing you want to assign. Input all
            other required fields and proceed.
          </Text>
          <Text mt={'20px'}>
            View this{' '}
            <Link
              href="/listings#protected"
              className="link"
              color={'#4545FE'}
              textDecoration={'underline'}
            >
              article
            </Link>{' '}
            to understand some of the terms used on this page better.
          </Text>
          <Image src={step3} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3(ii)
          </Text>
          <Text>
            If allocations have already been created for the selected listing or unit, a dropdown
            will appear for you to select an allocation (this step is optional). You can also assign
            unit allocations directly from this section. Input all other required fields and
            proceed. If no allocation has been created, the unit allocation will be assigned through
            a different process. View this article to understand Unit Allocation better.
          </Text>
          <Text mt={'20px'}>
            If no allocation has been created, the unit allocation will be assigned through a
            different process.
          </Text>
          <Text mt={'20px'}>
            View this{' '}
            <Link
              href="/listings/create_allocations"
              className="link"
              color={'#4545FE'}
              textDecoration={'underline'}
            >
              article
            </Link>{' '}
            to understand Unit Allocation better.
          </Text>
          <Image src={step4} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            You’ve successfully assigned the property to the user! You can now manage all
            transactions related to this property.
          </Text>
          <Image src={step5} mt={'30px'} w={'full'} />
        </Box>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="assignunit" ref={assignunitRef}>
        <Text className="content_head">How to Assign a Unit to a User</Text>
        <Text as="p" marginTop={'30px'}>
          A step-by-step guide
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            On the user’s profile, click View Transactions for the listing linked to the unit you
            want to assign.
          </Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Click on the “option icon” button on the drawer and select Assign Unit from the options
          </Text>
          <Text mt={'20px'}>
            View this{' '}
            <Link
              href="/listings/archive_unit"
              className="link"
              color={'#4545FE'}
              textDecoration={'underline'}
            >
              article
            </Link>{' '}
            to understand how to archive and unarchive units.
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>Confirm the details from your selections and proceed.</Text>
          <Image src={step13} mt={'30px'} w={'full'} />
        </Box>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="transfer" ref={transferRef}>
        <Text className="content_head">Transfer of Ownership</Text>
        <Text as="p" marginTop={'30px'}>
          Transfer ownership allows you to assign the property to a new owner once the sale has been
          completed. This action should only be taken after the seller has confirmed receipt of full
          payment from the buyer to ensure a smooth and verified handover of ownership rights.
        </Text>
        <Text as="p" marginTop={'30px'} fontWeight={'700'} fontSize={'20px'}>
          A step-by-step guide
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            On the user’s profile, click View Transactions for the listing linked to the unit you
            want to assign.
          </Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Click on the “option icon” button on the drawer and select <b>Transfer ownership</b>{' '}
            from the options
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            Input the email address of the registered user you want to transfer ownership to. Input
            all other required fields and proceed.
          </Text>
          <Image src={step33} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Enter the 6-digit verification code generated by your Authenticator app to proceed.
          </Text>
          <Image src={step34} mt={'30px'} w={'full'} />
        </Box>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="coowner" ref={coownerRef}>
        <Text className="content_head">Co-owner’s access</Text>
        <Text as="p" marginTop={'30px'}>
          Granting co-owner access allows you to add an additional user who can view and manage
          details related to the property—such as transactions, documents, and updates—without
          transferring full ownership.
        </Text>
        <Text as="p" marginTop={'30px'} fontWeight={'700'} fontSize={'20px'}>
          A step-by-step guide
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'700'}>How to grant co-owner’s access:</Text>

          <List styleType="none" spacing={''}>
            {steps.map((step, index) => (
              <ListItem key={index}>
                <Text as="span" fontWeight="bold">
                  Step {index + 1}:
                </Text>{' '}
                {step}
              </ListItem>
            ))}
          </List>
        </Box>

        <Text className="content_head" mt={'30px'}>
          Frequently Asked Questions(FAQs)
        </Text>

        <FaqCard id='manageownershipq1' question={'How do I set up my Authenticator app?'} asker={'Joseph O.'}>
          <Text>
            To perform certain actions on Veerge, you’ll need to input a code from your
            authenticator app. Here is how to set it up:
          </Text>
          <OrderedList pl={'13px'}>
            <ListItem>
              On the navigation bar, click on the dropdown icon near the user profile
            </ListItem>
            <ListItem>Select 2-factor Authentication</ListItem>
            <ListItem>Enable 2-factor Authentication</ListItem>
            <ListItem>Enter the verification mail sent to your registered mail</ListItem>
          </OrderedList>
        </FaqCard>
        <FaqCard id='manageownershipq2'
          question={'I want to adjust the details of a transaction. How do I do this?'}
          asker={'Precious O.'}
        >
          <Text>
            If you made a mistake while registering details of a transaction or you want to modify
            the transaction, you can restructure it by following these steps:
          </Text>
          <OrderedList pl={'13px'}>
            <ListItem>Navigate to the user that the property is assigned to</ListItem>
            <ListItem>
              <b>View transaction</b> of the listing
            </ListItem>
            <ListItem>Click on “Options icon” button</ListItem>
            <ListItem>
              Select <b>Restructure transaction</b>
            </ListItem>
            <ListItem>Make your corrections and Update the transaction</ListItem>
          </OrderedList>
        </FaqCard>
      </Box>
    </BlogLayout>
  );
};
