import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
// import check from '../../assets/svgs/check-circle.svg';
import info from '../../assets/svgs/info-circle-green.svg';

export const UserExperienceDrawer = ({children, ...rest}) => {
  const user_experience = useDisclosure();

  const open_drawer = () => {
    user_experience.onOpen();
  };

  return (
    <>
      <Box onClick={open_drawer} cursor={'pointer'}>
        {/* <ChildComponent {...rest} /> */}
        {children}
      </Box>
      <Drawer isOpen={user_experience?.isOpen} placement="right" onClose={user_experience?.onClose}>
        <DrawerOverlay />
        <DrawerContent
          mt="82px"
          zIndex="1"
          py="22px"
          maxW="400px"
          overflowY={'scroll'}
          color="#fff"
          bg="#101010"
        >
          <DrawerCloseButton />
          <Flex px={'21px'} justify="center" direction="column" gap="10px">
            <Image alt="Icon" h="36px" w="36px" src={info || '/'} />
            <Text
              // color="#191919"
              fontWeight={500}
              fontSize="18px"
            >
              Increasing the longevity of the Relationship with Clients.
            </Text>
          </Flex>
          <Box
            px={'21px'}
            mt="20px"
            pt="20px"
            // color="#3D3D3D"
            fontSize={'14px'}
            // bg="#FBFCFC"
            pb="40px"
            font
          >
            <Text>
              For a property developer armed with a user-facing application, you hold a powerful
              toolkit to extend the lifespan of customer relationships and drive conversions.
            </Text>
            <Text
              my="20px"
              fontWeight={'600'}
              // color="#191919"
            >
              Here's a strategic blueprint:
            </Text>
            <Text mt="20px">
              <b style={{fontWeight: '500'}}>Efficient Lead Capture and Tracking:</b>
              <br />
              Embrace the ability to capture and organize leads originating from various sources,
              such as app inquiries, website sign-ups, and even offline events. Craft detailed lead
              profiles encompassing preferences, budget, location choices, and other pertinent
              information. This invaluable data empowers you to segment and prioritize leads
              effectively.
            </Text>
            <Text mt="20px">
              <b style={{fontWeight: '500'}}>Personalized Communication:</b>
              <br />
              Harness the prowess of push notifications to serve up personalized listings and
              updates to users. For instance, you can alert users of fresh property listings, price
              reductions, or exclusive offers, all tailored to their preferences and search history.
              By categorizing leads into distinct groups (e.g., first-time homebuyers, property
              investors), you can customize push notifications, ensuring that the information you
              deliver remains pertinent.
            </Text>
            <Text mt="20px">
              <b style={{fontWeight: '500'}}>Timely Follow-Ups:</b>
              <br />
              Automate follow-up processes through push notifications and email reminders. Imagine
              sending gentle nudges to leads who've bookmarked properties but haven't taken the next
              step. Keep users in the loop when property-related changes occur, such as price drops
              or shifts in availability. You can also provide timely payment plan reminders.
            </Text>
            <Text mt="20px">
              <b style={{fontWeight: '500'}}>Feedback and Support:</b>
              <br />
              Foster a welcoming environment for user feedback within the app. Utilize this
              invaluable input to continuously enhance the user experience. Swiftly address
              inquiries and concerns, reinforcing your commitment to customer satisfaction. Employ
              push notifications to keep users informed about the availability of customer support
              or to address frequently asked questions.
            </Text>
            <Text mt="20px">
              <b style={{fontWeight: '500'}}>Retention Strategies:</b>
              <br />
              Roll out enduring retention strategies, such as loyalty programs, referral incentives,
              or post-purchase support tailored for property owners. Stay engaged with existing
              customers through push notifications, keeping them updated on property management
              services, maintenance schedules, or enticing investment opportunities within your
              projects.
            </Text>
            <Text mt="20px">
              <b style={{fontWeight: '500'}}>Second Property Interest Tracking:</b>
              <br />
              Leverage this tool to proactively identify when an existing customer might be eyeing a
              second property. Stay informed ahead of discussions, allowing you to be well-prepared
              for their needs and interests. With these strategies in play, you can forge and
              nurture robust relationships with potential property buyers. These approaches keep you
              in the forefront of their minds, deliver valuable content, and offer personalized
              support, ultimately resulting in higher conversion rates and bolstered customer
              loyalty over the long haul.
            </Text>
          </Box>
          {/* </DrawerBody> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};
