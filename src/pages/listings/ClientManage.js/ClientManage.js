import React, {useRef} from 'react';
import {Box, Text, Image, List, ListItem, OrderedList, UnorderedList} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/client_manag.jpg';

import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {Card} from '../../../components/Faq/Card';

import {listingsData} from '../../../constant/pages';

export const ClientManage = () => {
  const introRef = useRef(null);
  const editRef = useRef(null);
  const modifyRef = useRef(null);
  const paymentRef = useRef(null);
  const unitpriceRef = useRef(null);
  const unitquantityRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const editCheck = useIsInViewport(editRef);
  const modifyCheck = useIsInViewport(modifyRef);
  const paymentCheck = useIsInViewport(paymentRef);
  const unitpriceCheck = useIsInViewport(unitpriceRef);
  const unitquantityCheck = useIsInViewport(unitquantityRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'How to change listing information'},
    {check: editCheck, id: 'edit', title: 'Edit listing information'},
    {check: modifyCheck, id: 'modify', title: 'Modifying unit information'},
    {check: unitpriceCheck, id: 'unitprice', title: 'How to modify unit price'},
    {check: unitquantityCheck, id: 'unitquantity', title: 'How to modify unit quantity'},
    {check: paymentCheck, id: 'payment', title: 'Editing payment plan'},
  ];

  const articleMeta = {
    title: 'Managing Clients: Your Cornerstone for Leads & Sales',
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
        <Text as="p">
          This section explains how to effectively manage your clients with the system, serving as
          the foundation for nurturing leads and overseeing the sales process. If you’re a
          development company with existing customers, you may be wondering how to migrate that
          client base into the system. That's exactly what we'll cover here.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="edit" ref={editRef}>
        <Text className="content_head">
          Understanding client accounts and Migrating Existing Customers
        </Text>
        <Text as="p" marginTop={'30px'} lineHeight={'28px'}>
          To put it simply, Myxellia functions similarly to an account system used by banks. Just as
          a bank assigns an account to each customer—allowing them to view all their financial
          activities in one place—
          <b>
            Myxellia enables property development companies to create accounts for their clients,
            consolidating everything they own into a single, easily accessible dashboard.
          </b>
          <br />
          For <b>new clients</b>, this account allows for a <b>personalized experience</b> right
          from the beginning. For existing clients, their entire transaction history—whether
          completed or ongoing—is seamlessly integrated, ensuring they have a clear overview of
          their property portfolio.
          <br />
          Just like a bank offers two ways to open an account—<b>
            online self-registration
          </b> or <b>in-person registration</b> where a banker sets it up on behalf of the
          customer—Myxellia follows the same principle:
        </Text>

        <OrderedList fontWeight={'700'} my={'30px'}>
          <ListItem>
            Clients can create an account themselves by visiting your application.
          </ListItem>
          <ListItem>You, as the development company, can create accounts on their behalf.</ListItem>
        </OrderedList>

        <Text as="p" marginTop={'30px'} lineHeight={'28px'}>
          However, if your company has been operating before implementing Myxellia, you already have
          <b>an existing client base</b> that was previously managed manually. In this guide, we’ll
          walk you through how to migrate those clients into Myxellia so that when they log in for
          the first time, they can immediately see their ownership details.
        </Text>

        <Card
          heading={'Onboarding Guide'}
          action={'Learn More'}
          title={'Why Client Account Matter even for New Client without investment'}
          desc={
            'What happens next will depend on your specific role in your organization’s setup and migration process.'
          }
        />
        <Box>
          <Text>What Clients Will See After Migration</Text>
        </Box>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="modify" ref={modifyRef}>
        <Text className="content_head">Creating Clients Accounts</Text>
        <Box my={'30px'}>
          <Text fontWeight="bold" fontSize="lg" mb={3}>
            1. One-by-One Account Creation
          </Text>
          <UnorderedList spacing={'2px'} pl={'10px'}>
            <ListItem>Click the “plus icon” button next to the menu.</ListItem>
            <ListItem>
              Select{' '}
              <Text as="span" fontWeight="medium">
                Create User Account
              </Text>
              .
            </ListItem>
            <ListItem>
              Enter the client’s first name, last name, and middle name (optional).
            </ListItem>
            <ListItem>
              Provide a valid email address (critical for future communication and account
              notifications).
            </ListItem>
            <ListItem>
              Enter the phone number, ensuring the correct country code is included.
            </ListItem>
            <ListItem>Upload a profile picture and ID documentation if available.</ListItem>
            <ListItem>Add a note for the User if necessary.</ListItem>
            <ListItem>
              Click{' '}
              <Text as="span" fontWeight="medium">
                Create Account
              </Text>
              .
            </ListItem>
          </UnorderedList>
        </Box>
        <Box my={'30px'}>
          <Text fontWeight="bold" fontSize="lg" mb={3}>
            2. Bulk Migration
          </Text>
          <UnorderedList spacing={2} pl={6}>
            <ListItem>
              Select{' '}
              <Text as="span" fontWeight="medium">
                Import User Account
              </Text>
              .
            </ListItem>
            <ListItem>
              Download the provided template and fill it out, beginning from row two. The first row
              contains column titles—do not overwrite it.
            </ListItem>
            <ListItem>Remember: The middle name field is optional.</ListItem>
            <ListItem>Save the completed file as a CSV.</ListItem>
            <ListItem>Upload the CSV file.</ListItem>
            <ListItem>Verify that your new users appear in the Users list.</ListItem>
          </UnorderedList>
        </Box>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="unitprice" ref={unitpriceRef}>
        <Text className="content_head">Next Steps</Text>
        <Text mt={'30px'}>
          For a more comprehensive walkthrough, please watch the accompanying video. Following these
          steps carefully will ensure a seamless and hassle-free migration process.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="unitquantity" ref={unitquantityRef}>
        <Text className="content_head">
          Assigning transactions: I have migrated, but their investment still can’t be found
        </Text>

        <Text>
          Once you’ve created or imported client accounts, you also need to assign their purchased
          units (properties). There are two primary approaches:
        </Text>
        <Box my={'25px'}>
          <Text fontWeight="bold" fontSize="lg" mb={3}>
            Method 1: Assign Property During One-by-One Creation
          </Text>

          <OrderedList spacing={'2px'}>
            <ListItem>
              Before finalizing the account creation, you’ll notice a button labeled{' '}
              <Text as="span" fontWeight="medium">
                Assign Property
              </Text>
              .
            </ListItem>
            <ListItem>
              Click it to open a new page where you can select the listing and the specific unit the
              client invested in. Once this button is clicked, the user’s account is created.
            </ListItem>
            <ListItem>
              If the listing or unit is sold out, the option may be hidden or unclickable.
            </ListItem>
            <ListItem>
              Choose either a payment plan or outright purchase:
              <UnorderedList spacing={'2px'} pl={6} mt={2}>
                <ListItem>
                  <Text as="span" fontWeight="medium">
                    Outright:
                  </Text>{' '}
                  Select this option if the full payment was made at once. Enter the amount paid and
                  the date of payment. If the closing cost is already paid, input that as well and
                  upload any related documents (e.g., signed contracts).
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="medium">
                    Payment Plan:
                  </Text>{' '}
                  Select this option if the payment is being made or was made in multiple
                  instalments over an agreed period. Enter the payment plan duration (in months).
                  Input the initial deposit, then select “Add” to log past payments if any, ensuring
                  the totals match the payment calculator.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </OrderedList>
        </Box>

        <Box my={'25px'}>
          <Text fontWeight="bold" fontSize="lg" mb={3}>
            Method 2: Assign Property After Account Creation
          </Text>

          <Text>If you didn’t assign properties during the account creation process:</Text>

          <OrderedList spacing={'2px'} pl={6}>
            <ListItem>
              Go to the{' '}
              <Text as="span" fontWeight="medium">
                Users
              </Text>{' '}
              section, locate the client, and click on the{' '}
              <Text as="span" fontWeight="medium">
                View
              </Text>{' '}
              button to open their profile.
            </ListItem>
            <ListItem>
              Click on the{' '}
              <Text as="span" fontWeight="medium">
                More Options
              </Text>{' '}
              button to open the options drawer.
            </ListItem>
            <ListItem>
              Select{' '}
              <Text as="span" fontWeight="medium">
                Assign Property
              </Text>{' '}
              and follow the same steps outlined above.
            </ListItem>
          </OrderedList>
        </Box>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="payment" ref={paymentRef}>
        <Text className="content_head">Frequently Asked Questions(FAQs)</Text>
      </Box>
    </BlogLayout>
  );
};
