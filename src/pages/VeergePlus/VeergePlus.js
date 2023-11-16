import React, { useRef } from "react";
import { Box, Text, Image, UnorderedList, ListItem, OrderedList, Flex } from "@chakra-ui/react";
import QuestionsAndReplies from "../../components/Faq/QuestionsAndReplies";
import LeftNav from "../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../components/Faq/Helpful";
import useIsInViewport from "../../utils/useOnScreen/useOnScreen";
// import LeadRightNav from "../../components/Lead/RightNav";
import veergePlus1 from '../../assets/images/veerge_plus1.png';
import infoIcon from '../../assets/icons/info.svg'
import { Link } from "react-router-dom";

export const VeergePlus = () => {
  const personalizeRef = useRef(null);
  const optimizeRef = useRef(null);
  const migrateRef = useRef(null);
  const builtRef = useRef(null);
  const committedRef = useRef(null);
  const channelsRef = useRef(null);
  const pricingRef = useRef(null);
  const gettingRef = useRef(null);

  const personalizeCheck = useIsInViewport(personalizeRef);
  const optimizeCheck = useIsInViewport(optimizeRef);
  const migrateCheck = useIsInViewport(migrateRef);
  const builtCheck = useIsInViewport(builtRef);
  const committedCheck = useIsInViewport(committedRef);
  const channelsCheck = useIsInViewport(channelsRef);
  const pricingCheck = useIsInViewport(pricingRef);
  const gettingCheck = useIsInViewport(gettingRef);


  const articleContent = [
    { check: personalizeCheck, id: 'personalize', title: 'Personalize More, Retain More, Move Fast, Never Stop' },
    { check: optimizeCheck, id: 'optimize', title: 'Optimized For Performance' },
    { check: migrateCheck, id: 'migrate', title: 'Migrate and Launch with Ease' },
    { check: builtCheck, id: 'built', title: 'Built-in Security and Insights' },
    { check: committedCheck, id: 'committed', title: 'Committed  to Support' },
    { check: channelsCheck, id: 'channels', title: 'Channels' },
    { check: pricingCheck, id: 'pricing', title: 'Pricing and Cost Breakdown' },
    { check: gettingCheck, id: 'getting', title: 'Getting Started with Veerge' },
  ]

  const relatedContent = [
    { link: '/blog/new_era', text: 'Veerge the new era of real estate' },
    { link: "/veerge_themes", text: 'Veerge Plus' },
    { link: "/how_protected", text: 'How you are protected' },
    { link: "/blog/why_veerge", text: 'Why Veerge instead of building?' }
  ]

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      {/* <LeadRightNav /> */}
      <Text className="head_">VEERGE PLUS</Text>
      <Text className="publish">Published: Jul 21, 2023</Text>
      <Text className="content" lineHeight={'25px'} mt='50px'>
        <Box mb='30px' id="personalize" ref={personalizeRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            Personalize More, Retain More, Move Fast, Never Stop
          </Text>
          <Text mt='20px' as='p' fontWeight={400}>
            Veerge Plus is the ultimate real estate cloud-based infrastructure designed to help you reach more potential buyers, convert and retain them, and scale your business rapidly.
          </Text>
        </Box>
        <Box mb='30px' id="optimize" ref={optimizeRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            Optimized for Performance
          </Text>
          <Text as='p' fontWeight={400}>
            With Veerge Plus, you can move fast and innovate even faster. Stay ahead of the competition by being the first to market with new features and responding to shifting trends in real time. Veerge Plus provides you with an entire ecosystem of apps and services that support your growth.
          </Text>
        </Box>
        <Box mb='30px' id="migrate" ref={migrateRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            Migrate and Launch with Ease
          </Text>
          <Text as='p' fontWeight={400}>
            Launching your application store on Veerge is a breeze. The platform is customizable and user-friendly, allowing you to migrate and launch your app quickly. Ship new campaigns, channels, customizations, and experiments at a rapid pace, and iterate daily to stay ahead. Automate repetitive and high-performing workflows across your systems and create tailored solutions for your business through the specialized app and partner ecosystem.
          </Text>
        </Box>
        <Box mb='30px' id="built" ref={builtRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            Built-In Security and Insights
          </Text>
          <Text as='p' fontWeight={400}>
            Veerge Plus prioritizes security, compliance, data encryption, fraud protection, and bot protection. Rest assured that your business and customer data will always be secure. Gain holistic data and insights with detailed reporting across all channels, empowering you to make data-driven decisions. Additionally, enjoy an impressive average uptime of 99.98% across channels.
          </Text>
        </Box>
        <Box mb='30px' id="committed" ref={committedRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            Committed to Support
          </Text>
          <Text as='p' fontWeight={400}>
            We believe in providing exceptional support to our users.
            <UnorderedList>
              <ListItem>
                Enjoy 24/7 priority technical support via phone, email, or live chat. Our dedicated support team is always ready to assist you.
              </ListItem>
              <ListItem>
                Gain valuable platform knowledge and industry insights while also staying updated with the latest trends and strategies.
              </ListItem>
              <ListItem>
                Experience personalized migration, launch, and account management support at no extra cost. We'll guide you every step of the way.
              </ListItem>
              <ListItem>
                Customize your platform further with over 100 certified apps and tailor Veerge Plus to suit your specific business requirements.
              </ListItem>
            </UnorderedList>
          </Text>
        </Box>

        <Box mb='30px' id="channels" ref={channelsRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            Channels
          </Text>
          <Text as='p' fontWeight={400}>
            Veerge offers multiple channels to enhance your real estate business:
            <OrderedList>
              <ListItem mt='30px'>
                <b>Veerge Portal:</b> A user-friendly web portal where you can manage all your business operations. It provides a comprehensive overview of your revenue, an advanced inventory management system, and a leads management system. The Veerge Portal serves as the infrastructure to balance day-to-day business activities with long-term business strategies.
              </ListItem>
              <ListItem mt='30px'>
                <b>Agent Portal:</b> A dedicated platform designed specifically for agents. It allows them to track leads, manage client interactions, and streamline their real estate operations. Additionally, agents can use the Agent Portal to track commissions earned.
              </ListItem>
              <ListItem mt='30px'>
                <b>Mobile App:</b> Veerge's mobile app acts as a bridge between your offerings and your customers' expectations. It serves as a convergence point where buyers and offerings seamlessly coexist. The mobile app provides a personalized experience tailored to each buyer's unique needs throughout their home ownership journey.
              </ListItem>
            </OrderedList>
          </Text>
          <Image mt='50px' src={veergePlus1} w='full' />
          <Link to='/'>
            <Text mt='20px' cursor={'pointer'} color='#4545FE'>Click here to read more</Text>
          </Link>
        </Box>

        <Box mb='50px' id="pricing" ref={pricingRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            Pricing and Cost Breakdown
          </Text>
          <Text as='p' fontWeight={400}>
            Veerge offers various pricing options to cater to different business needs and budgets. Here's a breakdown of the costs:

            <OrderedList mt='30px'>
              <ListItem>
                <Text><b>Mobile App Theme and Integration Cost: </b></Text>
                <Text>
                  This cost covers the theme of the mobile app and its integration. The total cost is <b>$7,200.</b>00, which is a one-time fee. However, Veerge provides discounts for payment plans. You can avail a 5% discount by making two payments, or a 10% discount for an upfront payment. If paid monthly, the cost will be $600 per month for a year.
                </Text>
              </ListItem>
            </OrderedList>

            <Flex gap='8px' my='20px' w='full' borderRadius={'10px'} bg='#D9D9D9' p='15px'>
              <Image src={infoIcon} />
              <Text>
                Theme fee is a one time payment,
              </Text>
            </Flex>
            <Link to='/'>
              <Text color='#4545FE' cursor={'pointer'}>Click here to read more on themes</Text>
            </Link>
            <Text mt='30px'><b>1. Subscription:</b></Text>
            <UnorderedList pl='10px'>
              <ListItem>
                <b>Tier 1:</b> The basic subscription tier costs <b>$750.00</b>. It provides all the necessary technical resources to support your real estate business operations. This tier includes ongoing support, updates for the Veerge Portal and Agent Portal, and 24/7 technical assistance to ensure smooth functioning.
              </ListItem>
              <ListItem mt='20px'>
                <b>Tier 2:</b> Priced at <b> $900.</b>00, Tier 2 includes everything in Tier 1, along with updates for the licensed mobile app theme. Whenever a new feature or design enhancement is released for the mobile app, it is immediately integrated. Tier 2 also offers load balancers, multi-region architecture, autoscaling, fully dedicated support, and insights for expansion opportunities. It supports unlimited staff accounts without additional costs.
                <Text mt='20px'>
                  Note: Tier 1 already covers updates and new features for the Veerge Portal and Agent Portal, while Tier 2 covers updates specifically for the licensed mobile app theme.
                </Text>
              </ListItem>
              <ListItem mt='20px'>
                <b>Tier 3:</b> Priced at <b>$1,100.00</b>, Tier 3 includes everything in Tier 2, along with advanced functionalities to meet complex business requirements. This tier is suitable for property developers with a high quantity of inventory who aim to expand their business.
              </ListItem>
            </UnorderedList>
          </Text>

          <Flex w='full' borderRadius={'10px'} bg='#D9D9D9' p='15px' my='20px' gap='8px' align={'flex-start'}>
            <Image src={infoIcon} />
            <Box>
              <Text>
                All prices mentioned are exclusive of VAT. Veerge provides discounts on subscription fees based on the payment term. Enjoy a 10% discount when paying upfront for one year and a 5% discount for a six-month payment term. However, if you opt for monthly payments of both subscription fees and the theme licensing fee, the costs are as follows:
              </Text>
              <UnorderedList mt='30px'>
                <ListItem>
                  <b>TIER 1:</b> $1,350.00 ($750.00 + $600.00)
                </ListItem>
                <ListItem>
                  <b>TIER 2:</b> $1,500.00 ($900.00 + $600.00)
                </ListItem>
                <ListItem>
                  <b>TIER 3:</b> $1,700.00 ($1,100.00 + $600.00)
                </ListItem>
              </UnorderedList>
              <Text mt='30px'>
                Please note that the theme fee is a one-time payment. The additional <b>$600</b>.00 mentioned above represents the monthly payment for spreading the fee across a year, allowing flexibility for those who prefer to pay in installments rather than upfront.
              </Text>
            </Box>
          </Flex>

          <Text mt='30px'>
            If you're uncertain about which pricing plan to choose, you can schedule a meeting with Veerge support. They will assist you in transforming your business and finding the perfect plan. Remember, you can always upgrade your plan when needed.
          </Text>
        </Box>


        <Box mb='30px' id="getting" ref={gettingRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            Getting started with Veerge
          </Text>
          <Text as='p' fontWeight={400}>
            Getting started with Veerge is simple and straightforward. Follow these steps to begin your journey:
            <OrderedList>
              <ListItem mt='30px'>
                <Text><b>Sign up for a Free Trial: </b></Text>
                <Text>
                  Visit <a href='https://veerge.myxellia.io'><Text color='#4545FE' cursor={'pointer'}>veerge.myxellia.io</Text></a> and register for a free trial. This will grant you access to the platform, enabling you to test the application, make design decisions, and explore its features. It's an opportunity to familiarize yourself with Veerge before committing to an active monthly plan.
                </Text>
              </ListItem>
              <ListItem mt='30px'>
                <Text><b>Select a Plan: </b></Text>
                <Text>
                  Before starting the free trial, choose a plan that aligns with your business requirements and goals. This step ensures a seamless transition from the trial period to an ongoing subscription. Pick the plan that suits your needs and fits your budget to continue using Veerge after the trial ends.
                </Text>
              </ListItem>
              <ListItem mt='30px'>
                <Text><b>Approval and Trial Access: </b></Text>
                <Text>
                  Once your account is approved, you'll gain access to your free trial period. During this time, you'll receive a TestFlight link for Apple users and an internal test link for Android users. These links enable you to experience Veerge on your preferred device, ensuring a smooth and tailored user experience.
                </Text>
              </ListItem>
              <ListItem mt='30px'>
                <Text><b>Enjoy the Free Trial: </b></Text>
                <Text>
                  Make the most of your free trial by diving into the Veerge platform. Explore its capabilities, customize your experience, and take advantage of its powerful features. The trial period allows you to shape and fine-tune your real estate infrastructure. Rest assured that there are no subscription fees during this phase, providing you with an opportunity to evaluate Veerge without any financial commitment.
                </Text>
              </ListItem>
              <ListItem mt='30px'>
                <Text><b>Theme Licensing Fee: </b></Text>
                <Text>
                  Should you decide to go live with Veerge, you'll be required to make a payment for the licensing fee of the mobile app theme. This fee guarantees that your mobile application will have an appealing and functional design, enhancing the overall user experience.
                </Text>
              </ListItem>
              <ListItem mt='30px'>
                <Text><b>Payment and Go-Live: </b></Text>
                <Text>
                  When you're ready to launch your real estate operations with Veerge, proceed with the payment to go live. This step enables you to actively use Veerge and leverage its capabilities to grow your business effectively.
                </Text>
              </ListItem>
            </OrderedList>
          </Text>
          <Text mt='30px'>
            Throughout your transformation journey, Veerge is committed to supporting you. Enjoy the seamless experience, personalized features, and exceptional support provided by Veerge as you embark on this new chapter.
          </Text>
        </Box>


      </Text>
      <Helpful />
    </div>
  );
};
