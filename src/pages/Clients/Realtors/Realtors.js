import React, {useRef} from 'react';
import {Box, Text, ListItem, UnorderedList, Image, List, OrderedList} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/realtors.jpg';
import {Card} from '../../../components/Faq/Card';
import {FaqCard} from '../../../components/Faq/FaqCard';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {clientsData} from '../../../constant/pages';

import create1 from '../../../assets/images/client/realtors/create1.png';
import create2 from '../../../assets/images/client/realtors/create2.png';
import create3 from '../../../assets/images/client/realtors/create3.png';
import create4 from '../../../assets/images/client/realtors/create4.png';
import create5 from '../../../assets/images/client/realtors/create5.png';
import create6 from '../../../assets/images/client/realtors/create6.png';
import create7 from '../../../assets/images/client/realtors/create7.png';
import comm1 from '../../../assets/images/client/realtors/comm1.png';
import comm2 from '../../../assets/images/client/realtors/comm2.png';
import comm3 from '../../../assets/images/client/realtors/comm3.png';
import mod1 from '../../../assets/images/client/realtors/mod1.png';
import mod2 from '../../../assets/images/client/realtors/mod2.png';
import mod3 from '../../../assets/images/client/realtors/mod3.png';
import mod4 from '../../../assets/images/client/realtors/mod4.png';
import mod5 from '../../../assets/images/client/realtors/mod5.png';

export const Realtors = () => {
  const introRef = useRef(null);
  const updateRef = useRef(null);
  const stepsRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const updateCheck = useIsInViewport(updateRef);
  const stepsCheck = useIsInViewport(stepsRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Managing Realtor Accounts'},
    {check: updateCheck, id: 'update', title: 'How to Create a Realtors Account on Veerge'},
    {check: stepsCheck, id: 'steps', title: 'Create and Modify Commissions'},
  ];

  const articleMeta = {
    title: 'Managing Realtors: How to Add Agents and Set Commissions',
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
        <Text className="content_head">Managing Realtor Accounts</Text>
        <Text as="p" marginTop={'30px'}>
          Realtors can join your network in two ways—either through accounts you create for them as
          the admin or by signing up directly from your Store page.
          <br /> Once registered, realtors can log in via your Store to access their dashboard,
          manage listings, and track performance.
        </Text>

        <Box marginTop={'30px'}>
          <Text as="p" fontWeight={'700'}>
            Centralized Account Management
          </Text>
          <Text as="p">
            As the developer, you have full control over realtor accounts within Veerge. You can
            create, edit, or remove accounts, assign commissions, and monitor sales activities—all
            from one place.
          </Text>
        </Box>
        <Text as="p" marginTop={'30px'}>
          Managing realtor accounts through Veerge ensures seamless collaboration, transparency, and
          accurate tracking of every transaction.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="update" ref={updateRef}>
        <Text className="content_head">How to Create a Realtors Account on Veerge</Text>
        <Text as="p" marginTop={'30px'} fontSize={'20px'} fontWeight={'700'}>
          A step-by-step guide
        </Text>
        <Box my={'30px'}>
          <Text fontWeight={'700'}>STEP 1</Text>
          <Text>
            Navigate to the <b>Users</b> section on Veerge
          </Text>
          <Image src={create1} w={'full'} alt="step1" mt={'30px'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'700'}>STEP 2</Text>
          <Text>
            Click on <b>Realtors</b> above the users overview table
          </Text>
          <Image src={create2} w={'full'} alt="step1" mt={'30px'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'700'}>STEP 3</Text>
          <Text>
            Click on <b>Create Realtor’s</b> Account.
          </Text>
          <Image src={create3} w={'full'} alt="step1" mt={'30px'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'700'}>STEP 4(i)</Text>
          <Text>
            For <b>Bulk uploads</b> (In a case of migrating existing realtors) realtors account can
            be created through CSV upload.
          </Text>
          <Box>
            <Text fontWeight={'700'}>Steps to upload through CSV:</Text>
            <List listStyle="none" spacing={'2px'}>
              <ListItem>
                <b>Step 1:</b> Download the provided template and begin filling it out from row two,
                as the first row contains column titles that should not be modified.{' '}
              </ListItem>
              <ListItem>
                <b>Step 2</b>: When you’re done, save the file in<b> CSV format</b> and upload it
                here.There’ll an information message confirming the status of your upload
              </ListItem>
            </List>
          </Box>
          <Image src={create4} w={'full'} alt="step1" mt={'30px'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'700'}>STEP 4(ii)</Text>
          <Text>
            For creating realtors account<b> manually</b> (In a case of individual realtor)
          </Text>
          <OrderedList pl={'10px'}>
            <ListItem>
              Click on <b>Add manually instead</b>
            </ListItem>
          </OrderedList>
          <Image src={create5} w={'full'} alt="step1" mt={'30px'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'700'}>STEP 4(ii)</Text>
          <Text>
            For creating realtors account<b> manually</b> (In a case of individual realtor)
          </Text>
          <OrderedList pl={'10px'}>
            <ListItem>Input the required details and proceed</ListItem>
          </OrderedList>
          <Image src={create6} w={'full'} alt="step1" mt={'30px'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'700'}>STEP 5</Text>
          <Text>
            The realtor’s account has been successfully created, and you can now manage the
            realtor’s details and activities within Veerge!
          </Text>
          <Image src={create7} w={'full'} alt="step1" mt={'30px'} />
        </Box>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="steps" ref={stepsRef}>
        <Text className="content_head">Create and Modify Commissions</Text>
        <Box marginTop={'30px'}>
          <Text as="p" fontWeight={'700'} fontSize={'20px'}>
            How to Create Commission
          </Text>
          <Box my={'30px'}>
            <Text fontWeight={'700'}>STEP 1</Text>
            <Text>Go to the listing you want to create a commission for.</Text>
            <Image src={comm1} w={'full'} alt="step1" mt={'30px'} />
          </Box>
          <Box my={'30px'}>
            <Text fontWeight={'700'}>STEP 2</Text>
            <Text>
              Still on the overview page, click the <b>Edit</b> button in the <b>Commission</b>{' '}
              section.
            </Text>
            <Image src={comm2} w={'full'} alt="step1" mt={'30px'} />
          </Box>
          <Box my={'30px'}>
            <Text fontWeight={'700'}>STEP 3</Text>
            <Text>Here, you can enter:</Text>
            <UnorderedList>
              <ListItem>
                <b>Percentage for In-house Realtors (%):</b>
                <Text>
                  Set the commission rate for your internal realtors who work directly under your
                  company.
                </Text>
              </ListItem>
              <ListItem>
                <b>Percentage for Registered Realtors (%):</b>
                <Text>
                  Set the commission rate for realtors who have signed up through your store’s
                  Realtor Portal.
                </Text>
              </ListItem>
            </UnorderedList>

            <Text>
              Example: Enter <b>“3.00”</b> for <b>in-house realtors</b> and <b>“5.00”</b> for{' '}
              <b>registered realtors</b> if that’s your preferred structure.
            </Text>
            <Image src={comm3} w={'full'} alt="step1" mt={'30px'} />
          </Box>
        </Box>

        <Box marginTop={'30px'}>
          <Text as="p" fontWeight={'700'} fontSize={'20px'}>
            How to Modify Commission
          </Text>
          <Box my={'30px'}>
            <Text fontWeight={'700'}>STEP 1</Text>
            <Text>
              Click on <b>Realtors </b>above the users overview table
            </Text>
            <Image src={mod1} w={'full'} alt="step1" mt={'30px'} />
          </Box>
          <Box my={'30px'}>
            <Text fontWeight={'700'}>STEP 2</Text>
            <Text>
              <b>View details</b> of the realtor you want to modify commission for
            </Text>
            <Image src={mod2} w={'full'} alt="step1" mt={'30px'} />
          </Box>
          <Box my={'30px'}>
            <Text fontWeight={'700'}>STEP 3</Text>
            <Text>
              Click the <b>“More Options”</b> button on the right-hand side to access the drawer and
              select <b>Modify Commission</b>.
            </Text>

            <Image src={mod3} w={'full'} alt="step1" mt={'30px'} />
          </Box>
          <Box my={'30px'}>
            <Text fontWeight={'700'}>STEP 4</Text>
            <Text>
              <b>Select the listing</b> you want to modify commission for.
            </Text>

            <Image src={mod4} w={'full'} alt="step1" mt={'30px'} />
          </Box>
          <Box my={'30px'}>
            <Text fontWeight={'700'}>STEP 5</Text>
            <Text>
              Modify the commission as you want (Increase or Decrease) and click on <b>Update</b>.
            </Text>

            <Image src={mod5} w={'full'} alt="step1" mt={'30px'} />
          </Box>
        </Box>

        <Card />
        <Text className="content_head" mt={'30px'}>
          Frequently Asked Questions(FAQs)
        </Text>
        <FaqCard
          asker={'Christopher O.'}
          question={'How do I assign an agent to a transaction that has been recorded?'}
        >
          <Text>To assign an agent to a transaction, follow these steps: </Text>
          <OrderedList spacing={'2px'} pl={'12px'}>
            <ListItem>Navigate to the user that the property is assigned to</ListItem>
            <ListItem>
              <b>View transaction</b> of the listing
            </ListItem>
            <ListItem>
              Click on <b>“Options icon”</b> button
            </ListItem>
            <ListItem>
              Select <b>Assign Agent</b>
            </ListItem>
            <ListItem>Review the summary provided and Get Started</ListItem>
            <ListItem>
              Input the email of the registered agent you want to assign the property to
            </ListItem>
          </OrderedList>
        </FaqCard>
      </Box>
    </BlogLayout>
  );
};
