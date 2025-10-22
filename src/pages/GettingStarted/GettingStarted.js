import React, {useRef} from 'react';
import {Box, Text, ListItem, UnorderedList, Link, VStack} from '@chakra-ui/react';
import protectedImg from '../../assets/images/home/getting_started.jpg';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';
import {gettingStarteddata} from '../../constant/pages';

export const GettingStarted = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const understandingRef = useRef(null);
  const liveRef = useRef(null);
  const storesRef = useRef(null);
  const protectedRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const understandingCheck = useIsInViewport(understandingRef);
  const liveCheck = useIsInViewport(liveRef);
  const storesCheck = useIsInViewport(storesRef);
  const protectedCheck = useIsInViewport(protectedRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: understandingCheck, id: 'understanding', title: 'Understanding the environment'},
    {check: liveCheck, id: 'live', title: 'The live environment(Production platform)'},
    {check: storesCheck, id: 'stores', title: 'Stores and Templates'},
    {check: protectedCheck, id: 'protected', title: 'How to stay protected'},
  ];

  const articleMeta = {
    title: 'Getting Started: A Simple & Quick One',
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
      otherresources={gettingStarteddata}
    >
      <Box id="how_to" ref={introRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text as="p" marginTop={'30px'}>
            To make the most of Myxellia, it’s crucial to understand a few core concepts—especially
            the two environments, how templates work, and the security measures required to protect
            your account. By mastering these fundamentals, you’ll be well-prepared to leverage
            Myxellia’s capabilities fully.
          </Text>
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box id="steps">
        <Box ref={understandingRef}>
          <Text className="content_head">Understanding the environment</Text>
          <Text as="p" marginTop="40px">
            Myxellia provides two distinct environments—<b>Demo (Staging)</b> and{' '}
            <b>Live (Production)</b>—to help you transition smoothly from testing to day-to-day
            operations.
          </Text>
          <Text fontWeight={'700'} my={'20px'}>
            The Demo Environment (Staging Platform)
          </Text>
          <UnorderedList>
            <ListItem>
              <b>Purpose:</b> This environment is a risk-free playground where your team can explore
              Myxellia’s features without any financial commitment. You can test the tools, see how
              they align with your needs, and gain familiarity with the system before deploying it
              company-wide.
            </ListItem>
            <ListItem>
              <b>Who Can Sign Up:</b> Anyone in your property development company (like a project
              manager, IT personnel, or another team member) can register—it’s free and
              straightforward, and no real transactions take place here.
            </ListItem>
            <ListItem>
              Access Link:{' '}
              <Link
                to="https://tests-veerge.myxellia.io"
                textDecoration={'underline'}
                color={'#4545FE'}
                className="link"
              >
                https://tests-veerge.myxellia.io
              </Link>
            </ListItem>
          </UnorderedList>

          <Text as="p" marginTop="20px">
            In many cases, you may have first learned about Myxellia when someone visited your
            office to demonstrate how it aligns with your business goals. Often, they’ll show you a
            test account because a random person can’t just create an official company account on
            your behalf. They might also provide <b>temporary credentials</b>—valid for 30 to 60
            days—so you can fully explore the platform and decide whether to proceed.
          </Text>
          <Box bgColor={'#FFF7ED'} p={'32px'} my={'20px'} borderRadius={'8px'}>
            <Text fontWeight={'600'} fontSize={'18px'} mb={'15px'}>
              Good to know
            </Text>
            <UnorderedList color={'#000000CC'}>
              <ListItem mb={'10px'}>
                If you decide to adopt Myxellia, your demo account remains available as an internal
                testing ground.
              </ListItem>
              <ListItem mb={'10px'}>
                This space is perfect for onboarding new team members: they can “learn the ropes”
                risk-free before moving to the live platform
              </ListItem>
            </UnorderedList>
          </Box>
          <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
        </Box>

        <Box ref={liveRef}>
          <Text className="content_head">The live environment(Production platform)</Text>
          <Text as="p" marginTop="40px">
            Transitioning from on-premises or legacy systems to a cloud-based platform can be a big
            shift for your team. During the pilot phase and beyond:
          </Text>

          <UnorderedList mt={'20px'}>
            <ListItem>
              <b>Purpose:</b> The Live Environment is where real business transactions take
              place—managing clients, processing payments, and running everyday operations in an
              official capacity.
            </ListItem>
            <ListItem>
              <b>Who Should Register:</b> Typically reserved for C-level executives or authorized
              decision-makers within your organization. This ensures accountability and oversight
              for the platform’s real-world financial activities.
            </ListItem>
            <ListItem>
              <b>24/7 Transaction Processing:</b> Payments can be confirmed within minutes,
              drastically reducing bottlenecks and human error.
            </ListItem>
            <ListItem>
              <b> Access Link:</b>{' '}
              <Link
                to="https://tests-veerge.myxellia.io"
                color={'#4545FE'}
                textDecoration={'underline'}
              >
                https://tests-veerge.myxellia.io
              </Link>
            </ListItem>
          </UnorderedList>
          <Text as="p" marginTop="20px">
            Once you’re confident Myxellia fits your business, you’ll transition from the Demo to
            the Live Environment, where you can securely handle real customers and transactions
            under the correct level of authority.
          </Text>

          <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
        </Box>

        <Box ref={storesRef}>
          <Text className="content_head">Stores and Templates</Text>
          <Text as="p" marginTop="40px">
            Your Store is the public-facing hub where clients can explore your listed properties,
            view their portfolios, make payments, schedule inspections—all in one place.
          </Text>
          <Text fontWeight={'700'} mt={'20px'}>
            Choose a Template That Reflects Your Brand
          </Text>
          <Text>
            Veerge offers multiple Store templates with the same core features but different visual
            layouts. Each template determines how your listings, properties, and client dashboards
            appear, allowing you to tailor the overall look and feel of your Store to match your
            brand identity.
          </Text>

          <Text fontWeight={'700'} mt={'20px'}>
            How to Select or Change Your Store Template:
          </Text>
          <Text>
            <b>Step 1:</b> Click on the menu button on the Navigation bar
          </Text>
          <Text>
            <b>Step 2:</b> Click on Application
          </Text>
          <Text>
            <b>Step 3:</b> Select any template that matches your brand’s identity
          </Text>

          <Box my={'30px'}>
            <Text fontWeight={'700'} mb={'10px'}>
              Examples of store templates:
            </Text>
            <UnorderedList spacing={'10px'}>
              <ListItem
                textDecoration={'underline'}
                color={'#4545FE'}
                pl={'10px'}
                bgColor={'#F4F4F5'}
                w={'fit-content'}
                p={'8px'}
              >
                Terracota-dev.6787878.com
              </ListItem>
              <ListItem
                textDecoration={'underline'}
                color={'#4545FE'}
                pl={'10px'}
                bgColor={'#F4F4F5'}
                w={'fit-content'}
                p={'8px'}
              >
                Suburban-Serenity-dev.6787878.com
              </ListItem>
              <ListItem
                textDecoration={'underline'}
                color={'#4545FE'}
                pl={'10px'}
                bgColor={'#F4F4F5'}
                w={'fit-content'}
                p={'8px'}
              >
                Vintage-Charm-dev.6787878.com
              </ListItem>
              <ListItem
                textDecoration={'underline'}
                color={'#4545FE'}
                pl={'10px'}
                bgColor={'#F4F4F5'}
                w={'fit-content'}
                p={'8px'}
              >
                Nordic-Hygge-dev.6787878.com
              </ListItem>
            </UnorderedList>
          </Box>

          <Box my={'30px'}>
            <UnorderedList spacing={'10px'}>
              <ListItem>
                <b>Cost and Access:</b>
                <UnorderedList ml={'20px'} lineHeight={'1.6'}>
                  <ListItem>
                    <b>Free Testing in Demo:</b> You can deploy and test any template in the Demo
                    Environment at no cost.
                  </ListItem>
                  <ListItem>
                    <b>Billing in Production:</b> Each template carries a one-time fee (which varies
                    by exclusivity and quality). You won’t be charged the moment you deploy it on
                    the Live Environment; the cost will appear on your next billing cycle.
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Box>

          <Text as="p" marginTop="20px">
            <b>Note on Exclusive Templates</b>
            <br />
            Some templates are designed to be exclusive and aren’t widely available. If your
            business values a unique aesthetic that sets you apart, an exclusive template ensures no
            other developer in your region shares the same design.
          </Text>
          <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
        </Box>

        <Box id="how_to" ref={protectedRef}>
          <Text className="content_head">How to stay protected</Text>
          <Text className="content" lineHeight={'25px'}>
            <Text as="p" marginTop={'30px'}>
              Once you’re comfortable navigating Myxellia, it’s essential to establish proper
              security measures:
            </Text>
            <Text fontWeight={'700'} mt={'20px'}>
              1. Never Share Your Password
            </Text>
            <UnorderedList pl={'20px'}>
              <ListItem>
                Myxellia uses role-based access control, allowing you to invite team members and
                assign permissions according to their roles.
              </ListItem>
              <ListItem>
                Sharing your password compromises accountability, as any actions taken under your
                login will be recorded in your name on the audit trail.
              </ListItem>
            </UnorderedList>
            <Text fontWeight={'700'}>2. Enable Two-Factor Authentication (2FA)</Text>
            <UnorderedList pl={'20px'}>
              <ListItem>
                Right after creating your account, set up 2FA to add a second layer of protection.
              </ListItem>
              <ListItem>
                Many crucial operations (like sensitive account changes) require verification
                through an authenticator app, ensuring only authorized users can proceed.
              </ListItem>
            </UnorderedList>
            <Text fontWeight={'700'}>3. Assign Roles Wisely</Text>
            <UnorderedList pl={'20px'}>
              <ListItem>
                Each team member should have only the access they need for their job.
              </ListItem>
              <ListItem>
                This minimizes internal security risks while maintaining clarity over who does what.
              </ListItem>
            </UnorderedList>
          </Text>

          <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
          <Text>
            If you have any questions or run into any issues along the way, refer to our additional
            help center resources or reach out to our support team.
          </Text>
        </Box>
      </Box>
    </BlogLayout>
  );
};
