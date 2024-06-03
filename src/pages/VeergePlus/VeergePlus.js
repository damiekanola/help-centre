import React, {useRef} from 'react';
import {Box, Text, Image, UnorderedList, ListItem, OrderedList} from '@chakra-ui/react';
import LeftNav from '../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../components/Faq/Helpful';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
// import LeadRightNav from "../../components/Lead/RightNav";
import veergePlus1 from '../../assets/images/veerge_plus1.png';
import {Link} from 'react-router-dom';
import RightNav from '../../components/Rightsidebar/Rightsidenav';

export const VeergePlus = () => {
  const personalizeRef = useRef(null);
  // const committedRef = useRef(null);
  // const channelsRef = useRef(null);
  const pricingRef = useRef(null);
  const gettingRef = useRef(null);

  const personalizeCheck = useIsInViewport(personalizeRef);
  // const committedCheck = useIsInViewport(committedRef);
  // const channelsCheck = useIsInViewport(channelsRef);
  const pricingCheck = useIsInViewport(pricingRef);
  const gettingCheck = useIsInViewport(gettingRef);

  const articleContent = [
    {
      check: personalizeCheck,
      id: 'personalize',
      title: 'Personalize More, Retain More, Move Fast, Never Stop',
    },
    // {check: committedCheck, id: 'committed', title: 'Committed  to Support'},
    // {check: channelsCheck, id: 'channels', title: 'Channels'},
    {check: pricingCheck, id: 'pricing', title: 'Pricing and Cost Breakdown'},
    {
      check: gettingCheck,
      id: 'getting',
      title: 'Getting Started with Veerge',
    },
  ];

  const relatedContent = [
    {link: '/blog/new_era', text: 'Veerge the new era of real estate'},
    {link: '/veerge_themes', text: 'Veerge Themes'},
    {link: '/how_protected', text: 'How you are protected'},
    {link: '/blog/why_veerge', text: 'Why Veerge instead of building?'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <RightNav relatedContent={relatedContent} />
      <Text className="head_">VEERGE PLUS</Text>
      <Text className="publish">Published: Jul 21, 2023</Text>
      <LeftNav articleContent={articleContent} />
      <Text className="content" lineHeight={'25px'} mt="20px">
        <Box mb="30px" id="personalize" ref={personalizeRef}>
          <Text
            textTransform={'uppercase'}
            fontSize={'24px'}
            fontWeight={600}
            mb="10px"
            lineHeight={'2.1rem'}
          >
            Personalize More, Retain More, Move Fast, Never Stop
          </Text>
          <Text mt="20px" as="p" fontWeight={400}>
            Veerge Plus is the ultimate real estate cloud-based infrastructure designed to help you
            reach more potential buyers, and meet more of your business needs
          </Text>
        </Box>
        <Box
          mb="30px"
          id="what-comes-with-plus"
          // ref={personalizeRef}
        >
          <Text
            textTransform={'uppercase'}
            fontSize={'24px'}
            fontWeight={600}
            mb="10px"
            lineHeight={'2.1rem'}
          >
            What comes with PLUS{' '}
          </Text>
          <Text mt="20px" as="p" fontWeight={400}>
            Plus subscribers can fractionalize real estate, allowing them to divide the ownership of
            a property into smaller, more affordable portions. This enables people with lower
            purchasing power to co-own properties. Through your web or mobile application, friends
            and family can co-own a property based on a sharing ratio. Additionally, Plus
            subscribers typically gain early access to new features before they are made available
            to users with lower subscription tiers.
          </Text>
        </Box>
        {/* <Box mb="30px" id="committed" ref={committedRef}>
          <Text
            textTransform={'uppercase'}
            fontSize={'24px'}
            fontWeight={600}
            mb="10px"
            lineHeight={'2.1rem'}
          >
            Committed to Support
          </Text>
          <Text as="p" fontWeight={400}>
            We believe in providing exceptional support to our users.
            <UnorderedList>
              <ListItem>
                Enjoy 24/7 priority technical support via phone, email, or live chat. Our dedicated
                support team is always ready to assist you.
              </ListItem>
              <ListItem>
                Gain valuable platform knowledge and industry insights while also staying updated
                with the latest trends and strategies.
              </ListItem>
              <ListItem>
                Experience personalized migration, launch, and account management support at no
                extra cost. We'll guide you every step of the way.
              </ListItem>
              <ListItem>
                Customize your platform further with over 100 certified apps and tailor Veerge Plus
                to suit your specific business requirements.
              </ListItem>
            </UnorderedList>
          </Text>
        </Box> */}
        {/* <Box mb="30px" id="channels" ref={channelsRef}>
          <Text
            textTransform={'uppercase'}
            fontSize={'24px'}
            fontWeight={600}
            mb="10px"
            lineHeight={'2.1rem'}
          >
            Channels
          </Text>
          <Text as="p" fontWeight={400}>
            There are multiple channels to enhance your real estate business:
            <OrderedList spacing={30}>
              <ListItem mt={'30px'}>
                <b>Veerge Portal:</b> A user-friendly web portal where you can manage all your
                business operations. It provides a comprehensive overview of your revenue, an
                advanced inventory management system, and a leads management system. The Veerge
                Portal serves as the infrastructure to balance day-to-day business activities with
                long-term business strategies.
              </ListItem>
              <ListItem>
                <b>Realtor Portal:</b> A dedicated platform designed specifically for agents. It
                allows them to track leads, manage client interactions, and streamline their real
                estate operations. Additionally, agents can use the Realtor Portal to track
                commissions earned.
              </ListItem>
              <ListItem>
                <b>Mobile App:</b> Veerge's mobile app acts as a bridge between your offerings and
                your customers' expectations. It serves as a convergence point where buyers and
                offerings seamlessly coexist. The mobile app provides a personalized experience
                tailored to each buyer's unique needs throughout their home ownership journey.
              </ListItem>
              <ListItem>
                <b>Veerge Pro Portal:</b> The exclusive version of Veerge that grants access to
                funds in the audience's wallet before purchases. Unlike the standard version where
                funds are held with partner financial institutions until purchases are made, here,
                access to funds is immediate upon wallet funding.
              </ListItem>
            </OrderedList>
          </Text>
          <Image mt="50px" src={veergePlus1} w="full" />
        </Box> */}

        <Box mb="50px" id="pricing" ref={pricingRef}>
          <Text
            textTransform={'uppercase'}
            fontSize={'24px'}
            fontWeight={600}
            mb="10px"
            lineHeight={'2.1rem'}
          >
            Pricing and Cost Breakdown
          </Text>
          <Text as="p" fontWeight={300}>
            Veerge offers various pricing options to cater to different business needs and budgets.
            Here's a breakdown of the costs:
          </Text>
          <OrderedList listStyleType={'decimal'} mt="30px">
            <ListItem fontWeight={200}>
              <Text fontWeight={600}>One-time Fee:</Text>
              <Text fontWeight={200}>
                Veerge offers various pricing options to cater to different business needs and
                budgets. Here's a breakdown of the costs:
              </Text>
              <UnorderedList>
                <ListItem>
                  Web theme: Starting at <b>$2,000</b>, depending on the theme.
                </ListItem>
                <ListItem>
                  Web app + mobile application: <b>$5,000</b>.
                </ListItem>
                <ListItem>
                  Autopay: Additional <b>$1,000</b>.
                </ListItem>
                <ListItem>
                  Fractional ownership: Additional <b>$3,500</b>.
                </ListItem>
                <ListItem>
                  Co-ownership: Additional <b>$2,500</b>.
                </ListItem>
                <ListItem>
                  Realtors portal: Additional <b>$2,000</b>.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <Link to="/veerge_themes">
              <Text my={5} ml={-5} color="#FF0 !important" cursor={'pointer'}>
                Click here to read more on themes
              </Text>
            </Link>
            <ListItem fontWeight={600}>
              <Text mt="30px">Subscription:</Text>
              <UnorderedList fontWeight={200}>
                <ListItem>
                  The Platinum plan, priced at <b>$350</b> per month, covers everything except
                  fractional ownership. The Plus subscription, priced at <b>$500</b> per month,
                  provides comprehensive coverage for all Veerge features, including fractional
                  ownership. This higher pricing reflects the increased load on our infrastructure
                  due to the expected rise in user base and market penetration enabled by fractional
                  ownership.
                </ListItem>
                <ListItem>
                  The exclusive version of Veerge, tailored for those in pursuit of premium features
                  and top-notch performance, begins at <b>$1,500</b>.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </OrderedList>
          <Text mt="30px">
            If you're uncertain about which pricing plan to choose, you can schedule a meeting with
            Veerge support. They will assist you in transforming your business and finding the
            perfect plan. Remember, you can always upgrade your plan when needed.
          </Text>
        </Box>
        <Box mb="30px" id="getting" ref={gettingRef}>
          <Text
            textTransform={'uppercase'}
            fontSize={'24px'}
            fontWeight={600}
            mb="10px"
            lineHeight={'2.1rem'}
          >
            Getting started with Veerge
          </Text>
          <Text as="p" fontWeight={400}>
            Getting started with Veerge is simple and straightforward. Follow these steps to begin
            your journey:
            <OrderedList spacing={30}>
              <ListItem fontWeight={600} mt="30px">
                <Text>Sign up for a free Trial:</Text>
                <Text fontWeight={200}>
                  Visit{' '}
                  <span>
                    <a
                      style={{
                        color: '#FF0',
                        textDecoration: 'underline',
                      }}
                      href="https://tests-veerge.myxellia.io"
                    >
                      tests-veerge.myxellia.io
                    </a>
                  </span>{' '}
                  and register for a free trial. This will grant you access to the platform,
                  enabling you to test the application, make design decisions, and explore its
                  features. It's an opportunity to familiarize yourself with Veerge before
                  committing to an active monthly plan.
                </Text>
              </ListItem>
              {/* <ListItem fontWeight={600}>
                <Text>Select a Plan:</Text>
                <Text fontWeight={200}>
                  Before starting the free trial, choose a plan that aligns with your business
                  requirements and goals. This step ensures a seamless transition from the trial
                  period to an ongoing subscription. Pick the plan that suits your needs and fits
                  your budget to continue using Veerge after the trial ends.
                </Text>
              </ListItem> */}
              <ListItem fontWeight={600}>
                <Text>Approval and Trial Access:</Text>
                <Text fontWeight={200}>
                  Once your account is approved, you'll gain access to your free trial period.
                  During this time, you'll receive a TestFlight link for Apple users and you can
                  download the apk for Android users. These links enable you to experience the
                  application on your preferred device, ensuring a smooth and tailored user
                  experience.
                </Text>
              </ListItem>
              <ListItem fontWeight={600}>
                <Text>Enjoy the Free Trial: </Text>
                <Text fontWeight={200}>
                  Make the most of your free trial by diving into the platform. Explore its
                  capabilities, customize your experience, and take advantage of its powerful
                  features. The trial period allows you to shape and fine-tune your real estate
                  infrastructure. Rest assured that there are no subscription fees during this
                  phase, providing you with an opportunity to evaluate Veerge without any financial
                  commitment.
                </Text>
              </ListItem>
              <ListItem fontWeight={600}>
                <Text>Theme Licensing Fee: </Text>
                <Text fontWeight={200}>
                  Should you decide to go live, you'll be required to make a payment for the
                  licensing fee of the mobile app theme.
                </Text>
              </ListItem>
              {/* <ListItem fontWeight={600}>
                <Text>Payment and Go-Live: </Text>
                <Text fontWeight={200}>
                  When you're ready to launch your real estate operations with Veerge, proceed with
                  the payment to go live. This step enables you to actively use Veerge and leverage
                  its capabilities to grow your business effectively.
                </Text>
              </ListItem> */}
            </OrderedList>
          </Text>
          <Text mt="30px">
            Throughout your transformation journey, Veerge is committed to supporting you. Enjoy the
            seamless experience, personalized features, and exceptional support provided by Veerge
            as you embark on this new chapter.
          </Text>
        </Box>
      </Text>
      <Helpful />
    </div>
  );
};
