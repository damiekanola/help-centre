import React, {useRef} from 'react';
import {
  Box,
  Text,
  ListItem,
  OrderedList,
  UnorderedList,
  Link,
  Image,
  VStack,
  Button,
  Flex,
} from '@chakra-ui/react';
import protectedImg from '../../assets/images/home/partner_program.jpg';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../layouts/BlogLayout';
import { useSearchParams } from 'react-router-dom';
import { gettingStarteddata } from '../../constant/pages';

export const PartnerProgram = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const testingRef = useRef(null);
  const howRef = useRef(null);
  const joinRef = useRef(null);
  const benefitsRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const testingCheck = useIsInViewport(testingRef);
  const howCheck = useIsInViewport(howRef);
  const joinCheck = useIsInViewport(joinRef);
  const benefitsCheck = useIsInViewport(benefitsRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: testingCheck, id: 'testing', title: 'Why partner with Myxellia?'},
    {check: howCheck, id: 'how', title: 'How it works'},
    {check: joinCheck, id: 'join', title: 'Who should join?'},
    {check: benefitsCheck, id: 'benefits', title: 'Partner’s benefits at a glance'},
  ];

  const articleMeta = {
    title: 'Myxellia’s Partners Program',
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
     otherresources={gettingStarteddata}
    >
      <Box id="how_to" ref={introRef}>
        <Text className="content_head">
          Expand your reach, earn commission and empower real estate developers
        </Text>
        <Text as="p" marginTop={'30px'}>
          <b>Myxellia </b> is on a mission to take real estate into the digital age—seamlessly,
          globally, and profitably. To do this, we’re inviting real estate professionals, brokers,
          agents, and anyone with direct connections to property development companies to join our
          <b>Partners Program</b>.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box ref={testingRef} id="whypartner">
        <Text className="content_head">Why partner with Myxellia?</Text>
        <OrderedList mt={'20px'} ml={'30px'}>
          <ListItem>
            <b>Global Opportunity:</b> Myxellia’s platform is designed to support real estate
            businesses worldwide. By connecting us with development companies, you’ll help them
            modernize their operations—from digitizing property listings to automating payments and
            contracts.
          </ListItem>
          <ListItem>
            <b> High-Value Commissions:</b> We believe in rewarding our partners generously. Every
            qualified referral that leads to a successful transaction on Myxellia will earn you a
            commission—starting from $1,000 and growing based on deal size.
          </ListItem>
          <ListItem>
            <b> No Hard Selling Required:</b> You don’t have to close the deal yourself. Simply
            introduce potential clients to Myxellia, and we’ll handle the demo calls, technical
            discussions, and onboarding. Once the transaction goes through, you get paid.
          </ListItem>
          <ListItem>
            <b> Solidify Your Network:</b> By recommending a state-of-the-art real estate
            infrastructure, you’ll build credibility with property development companies that trust
            your judgment. You’ll become a valuable resource, offering them a platform that
            streamlines processes and opens new revenue opportunities.
          </ListItem>
        </OrderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box ref={howRef} id="howitworks">
        <Text className="content_head">How it works</Text>
        <OrderedList mt={'20px'} ml={'30px'}>
          <ListItem>
            <Box>
              <Text fontWeight={'700'}>Join the Program</Text>
              <Text>
                Sign up for the Partners Program and receive a unique referral link or code, as well
                as direct access to our partnership team.
              </Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Text fontWeight={'700'}>Identify Prospects</Text>
              <Text>
                Look for property development companies—large or small—that could benefit from
                digitizing or upgrading their real estate operations with Myxellia.
              </Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Text fontWeight={'700'}>Make the Introduction</Text>
              <UnorderedList>
                <ListItem>Use your referral link, or</ListItem>
                <ListItem>
                  Set up a meeting (online or in-person) where our Myxellia representatives can
                  demonstrate the platform.
                </ListItem>
              </UnorderedList>
              <Text>
                We’ll take over from there—providing demos, handling Q&A, and guiding them through
                the onboarding process.
              </Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Text fontWeight={'700'}>Earn Your Commission</Text>
              <Text>
                When your referred company signs up and completes its first transaction, you earn a
                commission—starting at $1,000 and potentially higher, depending on the scope of the
                deal.
              </Text>
            </Box>
          </ListItem>
        </OrderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box ref={joinRef} id="join">
        <Text className="content_head">Who should join?</Text>
        <UnorderedList mt={'20px'}>
          <ListItem>
            <b>Brokers and Agents:</b> With existing networks of developers or builder clients.
          </ListItem>
          <ListItem>
            <b>Real Estate Consultants: </b> Who advise multiple companies looking to modernize
            their infrastructure.
          </ListItem>

          <ListItem>
            <b>Industry Influencers: </b> Individuals with strong business relationships in the
            property sector.
          </ListItem>
          <ListItem>
            <b> Tech Enthusiasts in Real Estate: </b>Anyone who sees the massive potential in
            digitizing property development workflows.
          </ListItem>
        </UnorderedList>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box ref={benefitsRef} id="partnersbenefit">
        <Text className="content_head">Partner’s benefits at a glance</Text>
        <UnorderedList mt={'20px'}>
          <ListItem>
            <b>Dedicated Support: </b> Our team is here to help you convert introductions into
            rewarding business partnerships.
          </ListItem>
          <ListItem>
            <b>Flexible Engagement:</b> You won’t be weighed down by quotas. You can refer leads at
            your own pace.
          </ListItem>

          <ListItem>
            <b>Global Footprint:</b> Myxellia is built for cross-border real estate transactions, so
            you can tap into opportunities beyond your local market.
          </ListItem>
          <ListItem>
            <b>Marketing Resources:</b> Get access to brochures, demos, and presentations to help
            you pitch Myxellia confidently.
          </ListItem>
        </UnorderedList>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      
      <Box ref={benefitsRef} id="partnersbenefit">
        <Text className="content_head">Partner’s benefits at a glance</Text>
        <Text my={'20px'}>
          Ready to be part of Myxellia’s global expansion? Join the Partners Program and open the
          door to recurring commissions while empowering real estate developers with cutting-edge
          technology.
        </Text>
        <Link color={'#4545FE'} textDecoration={'underline'} mt={'20px'}>
          Click here to apply
        </Link>
      </Box>


    </BlogLayout>
  );
};
