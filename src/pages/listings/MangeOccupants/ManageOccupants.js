import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image, List} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/manage-occupants.jpg';
import step1 from '../../../assets/images/archive/1.png';
import step2 from '../../../assets/images/archive/2.png';
import step3 from '../../../assets/images/archive/3.png';
import step4 from '../../../assets/images/archive/4.png';
import step5 from '../../../assets/images/archive/5.png';
import step11 from '../../../assets/images/archive/step1.png';
import step12 from '../../../assets/images/archive/step2.png';
import step13 from '../../../assets/images/archive/step3.png';
import step14 from '../../../assets/images/archive/step4.png';
import { listingsData } from '../../../constant/pages';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';

export const ManageOccupants = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const removeRef = useRef(null);
  const pinRef = useRef(null);
  const controlRef = useRef(null);

  const inspectRef = useRef(null);
  const packetRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const removeCheck = useIsInViewport(removeRef);
  const pinCheck = useIsInViewport(pinRef);
  const controlCheck = useIsInViewport(controlRef);
  const inspectCheck = useIsInViewport(inspectRef);
  const packetCheck = useIsInViewport(packetRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Managing Occupants'},
    {check: removeCheck, id: 'remove', title: 'How to remove from archive'},
    {check: pinCheck, id: 'pin', title: 'How pinning a listing works'},
    {check: controlCheck, id: 'control', title: 'Control who sees your listing'},
    {check: inspectCheck, id: 'inspect', title: 'Manage inspection availability'},
  ];

  const articleMeta = {
    title: 'Managing Occupants',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
  };

 

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
     otherresources={listingsData}
    >
      <Box id="how_to" ref={introRef}>
        <Text className="content_head">Managing Occupants</Text>
        <Text as="p" marginTop={'30px'}>
          Managing occupants allows you to add and update details of individuals currently residing
          in a unit, ensuring accurate tenant records. By assigning occupants to specific units, you
          maintain clear, up-to-date information on who lives in each property — helping prevent
          confusion or duplicate entries.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="remove" ref={removeRef}>
        <Text className="content_head">A step-by-step guide</Text>
        <Text as="p" marginTop={'30px'}>
          When the time comes to make the units available to the public again, follow these steps:
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>Go to the "Listings" section and locate the relevant unit within the listing.</Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Select the specific unit you want to make public again, click on the “More Options”
            button at the top-right corner to open the options drawer, and then scroll down to click
            "Archived Units."
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            An option to "Remove from Archive" will appear. Input the number of units you want to
            restore from archived status then click on the “Proceed” button
          </Text>
          <Image src={step13} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Similar to before, if a unit allocation system exists, an allocation screen will prompt
            you to select the exact units to restore.
          </Text>
          <Image src={step14} mt={'30px'} w={'full'} />
        </Box>
      </Box>
      <Box id="pin" ref={pinRef}>
        <Text className="content_head">How Pinning a Listing Works</Text>
        <Text as="p" marginTop={'30px'}>
          Pinning a listing allows you to highlight your top properties by keeping them fixed at the
          top of your application for maximum visibility. Once pinned, any new listings you create
          will appear below it, ensuring the pinned listing remains front and center until you
          choose to unpin it.
        </Text>

        <List spacing={3} styleType="none">
          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 1:
            </Text>{' '}
            Go to the specific listing you want to pin.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 2:
            </Text>{' '}
            Click the More Options button on the right-hand side to access the drawer.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 3:
            </Text>{' '}
            Select{' '}
            <Text as="span" fontWeight="semibold">
              Pin this listing
            </Text>
            .
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 4:
            </Text>{' '}
            A drawer will appear explaining what it means to pin a listing. After reviewing the
            details, click{' '}
            <Text as="span" fontWeight="semibold">
              Proceed
            </Text>
            , and a success message will confirm that your listing has been pinned.
          </ListItem>
        </List>

        <Text as="p" marginTop={'30px'}>
          The pinned listing will appear at the top of the listings for customers, helping them see
          your featured properties first.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="control" ref={controlRef}>
        <Text className="content_head">Control Who Sees Your Listing</Text>
        <Text as="p" marginTop={'30px'}>
          Make your listing private to remove it from public view while keeping it visible to your
          existing subscribers or selected buyers.
        </Text>

        <List spacing={3} styleType="none">
          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 1:
            </Text>{' '}
            Go to the specific listing you want to make private.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 2:
            </Text>{' '}
            Click the More Options button on the right-hand side to access the drawer.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 3:
            </Text>{' '}
            Select{' '}
            <Text as="span" fontWeight="semibold">
              Make this listing private
            </Text>
            .
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 4:
            </Text>{' '}
            A drawer will appear explaining what it means to make a listing private. After reviewing
            the details, click{' '}
            <Text as="span" fontWeight="semibold">
              Proceed
            </Text>
            , and a success message will confirm that your listing is now private.
          </ListItem>
        </List>

        <Text as="p" marginTop={'30px'}>
          A privatized listing is hidden from public view and not visible to potential buyers.
          However, you can still share exclusive offers directly with selected parties. Existing
          subscribers who have already invested in the project will retain access to the listing
          through their portfolio section.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="inspect" ref={inspectRef}>
        <Text className="content_head">Manage Inspection Availability</Text>
        <Text as="p" marginTop={'30px'}>
          Easily manage your inspection settings by enabling or disabling inspections. This allows
          you to control whether potential buyers or agents can schedule visits for your listing.
        </Text>

        <List spacing={'1px'} styleType="none">
          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 1:
            </Text>{' '}
            Go to the specific listing you want to set inspection settings for.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 2:
            </Text>{' '}
            Click the More Options button on the right-hand side to access the drawer.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 3:
            </Text>{' '}
            Select{' '}
            <Text as="span" fontWeight="semibold">
              Inspection settings
            </Text>
            .
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 4:
            </Text>{' '}
            Manage your inspection settings by turning inspections on or off. This determines
            whether potential buyers or agents can schedule visits for your listing or not. You can
            also set your preferred time zone to ensure inspection times display accurately for all
            users.
          </ListItem>
        </List>

        <Text as="p" marginTop={'30px'}>
          A privatized listing is hidden from public view and not visible to potential buyers.
          However, you can still share exclusive offers directly with selected parties. Existing
          subscribers who have already invested in the project will retain access to the listing
          through their portfolio section.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="packet" ref={packetRef}>
        <Text className="content_head">Manage Property Documents — Internal Packet</Text>
        <Text as="p" marginTop={'30px'}>
          Upload, manage, and access any file tied to your property—all within a single, organized
          packet. From contracts and disclosures to inspection reports, everything stays safe,
          accessible, and easy to find.
        </Text>

        <List spacing={'1px'} styleType="none" mt={'30px'}>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 1:
            </Text>{' '}
            Go to the specific listing you want to upload a private document for.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 2:
            </Text>{' '}
            Click the More Options button on the right-hand side to access the drawer.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 3:
            </Text>{' '}
            Select{' '}
            <Text as="span" fontWeight="semibold">
              Internal packet
            </Text>
            .
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">
              Step 4:
            </Text>{' '}
            Get started and upload your document.
          </ListItem>
        </List>

        <Text as="p" marginTop={'30px'}>
          A privatized listing is hidden from public view and not visible to potential buyers.
          However, you can still share exclusive offers directly with selected parties. Existing
          subscribers who have already invested in the project will retain access to the listing
          through their portfolio section.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
    </BlogLayout>
  );
};
