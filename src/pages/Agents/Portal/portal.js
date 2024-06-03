import React, {useRef} from 'react';
import {Box, Text} from '@chakra-ui/react';
import LeftNav from '../../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../../components/Faq/Helpful';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import AgentRightNav from '../../../components/Agent/RightNav';

export const AgentPortal = () => {
  const overviewRef = useRef(null);

  const overviewCheck = useIsInViewport(overviewRef);

  const articleContent = [
    {check: overviewCheck, id: 'overview', title: 'Overview of realtor portal'},
  ];

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <AgentRightNav />
      <Text className="head_">Veerge Premier Realtor Portal</Text>
      <Text className="publish">Published: November 1, 2022</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Box
        id="overview"
        ref={overviewRef}
        className="content"
        lineHeight={'25px'}
        marginTop={'30px'}
      >
        <Text
          textTransform={'uppercase'}
          fontSize={'24px'}
          fontWeight={600}
          mb="10px"
          lineHeight={'2.1rem'}
        >
          Embark on a Journey of Real Estate Excellence with Veerge Premier Realtor Portal!
        </Text>
        <Text py={4}>
          In today's dynamic real estate landscape, Veerge Premier Realtor Portal emerges as your
          ultimate ally. Tailored for ambitious real estate agents striving for greatness, Veerge is
          your key to unparalleled success. Let's delve into the realm of Veerge Premier Realtor and
          discover the transformative features that set you apart in this ever-evolving arena.
        </Text>
        <Text py={4}>
          At the heart of Veerge Premier Realtor lies a deep appreciation for the dedication and
          hard work of agents in sealing deals. To simplify payment processes and foster
          transparency, Veerge offers a seamless commission request feature. Realtors can
          effortlessly submit their commission requests through the portal, ensuring their efforts
          are duly recognized and fairly compensated. This motivates agents to excel and cultivates
          a vibrant and results-driven community within the Veerge network.
        </Text>
        <Text py={4}>
          In the fast-paced world of real estate, time is precious. The Veerge Premier Realtor
          Portal streamlines client management with an automated system that intelligently assigns
          incoming leads to agents based on customized routing rules. This ensures no lead slips
          through the cracks, enabling agents to promptly engage with potential clients and increase
          the likelihood of converting leads into successful deals. By leveraging this efficient
          system, agents can establish a reputation for responsiveness and reliability, positioning
          themselves as trusted advisors. Veerge Premier Realtor revolutionizes client management by
          blending cutting-edge technology with a human touch, enabling agents to not just meet but
          exceed client expectations, fostering lasting relationships, referrals, and unparalleled
          satisfaction.
        </Text>
        <Text py={4}>
          In the realm of real estate, continuous improvement is paramount for staying ahead of the
          competition. The portal offers a comprehensive performance tracking tool that provides
          invaluable insights into key performance indicators (KPIs), conversion rates, and
          feedback. Armed with these insights, agents can devise informed strategies to surpass
          their business objectives and solidify their status as top-performing professionals.
        </Text>
        <Text py={4}>
          Bid farewell to manual confirmation calls with Veerge! The portal delivers real-time
          updates on listings, eliminating the need for repetitive confirmation calls to the
          development company. Agents always have the most up-to-date information, enhancing
          efficiency and enabling agents to focus more on client engagement and less on
          administrative tasks.
        </Text>
        <Text py={4}>
          The Veerge Premier Realtor Portal is a transformative platform that propels real estate
          agents to new heights of success. Agents can thrive in a competitive market by harnessing
          its data-driven insights, streamlined client management, and comprehensive performance
          tracking. Embracing the power of Veerge Premier Realtor empowers real estate professionals
          to deliver exceptional client experiences, make confident decisions, and forge lasting
          connections. As agents elevate their business to unprecedented levels, they play a pivotal
          role in turning their client's dreams into reality throughout the home-buying journey.
        </Text>
      </Box>
      <Helpful />
    </div>
  );
};
