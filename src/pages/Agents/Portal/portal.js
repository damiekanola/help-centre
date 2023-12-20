import React, { useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import LeftNav from "../../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../../components/Faq/Helpful";
import useIsInViewport from "../../../utils/useOnScreen/useOnScreen";
import AgentRightNav from "../../../components/Agent/RightNav";

export const AgentPortal = () => {

  const overviewRef = useRef(null)
  const howAgentRef = useRef(null)

  const overviewCheck = useIsInViewport(overviewRef);
  const howAgentCheck = useIsInViewport(howAgentRef)


  const articleContent = [
    { check: overviewCheck, id: 'overview', title: 'Overview of agent portal' },
    { check: howAgentCheck, id: 'howAgent', title: 'How Agent portal works' },
  ]

  const relatedContent = [
    { link: '/first_time_setup', text: 'First time setup' },
    { link: "/approved_what_next", text: 'Approved, what next?' },
    { link: "/terms", text: 'Terms of service' },
    { link: "/users_experience", text: 'End-to-End experience' }
  ]

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <AgentRightNav />
      <Text className="head_">Veerge Premier Agent Portal</Text>
      <Text className="publish">Published: November 1, 2022</Text>
      <Box id="overview" ref={overviewRef} className="content" lineHeight={'25px'} marginTop={'30px'}>
        <Text fontSize={'16px'} fontFamily={'euclid-medium'} marginTop={'30px'}>
          Unlock Your Potential with Veerge Premier Agent Portal—The Future of Real Estate Excellence!
        </Text>
        <Text as='p'>
          In an ever-changing real estate market, Veerge Premier Agent Portal stands as your ultimate ally. Designed for real estate agents who seek nothing but the best, Veerge is your ticket to unparalleled success. Dive into the world of Veerge Premier Agent and discover the game-changing features that set you apart in this dynamic arena.
        </Text>
      </Box>
      <Box id="howAgent" ref={howAgentRef} className="content" lineHeight={'25px'}>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontFamily={'euclid-semibold'}>Effortless Commission Requests</Text>
          <Text fontSize={'16px'} fontFamily={'euclid-light'}>
            At the core of Veerge Premier Agent's philosophy is the recognition of the hard work and dedication put in by agents to close deals. To streamline the payment process and promote transparency, Veerge offers a seamless commission request feature. Agents can easily submit their commission requests through the portal, ensuring that their efforts are duly acknowledged and that they receive fair compensation for their achievements. This motivates agents to perform at their best, fostering a thriving and results-driven community within the Veerge network.
          </Text>
        </Text>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontFamily={'euclid-semibold'}>Client Management Revolutionised</Text>
          <Text fontSize={'16px'} fontFamily={'euclid-light'}>
            In the fast-paced world of real estate, time is of the essence. The Veerge Premier Agent Portal streamlines client management through an automated system that intelligently assigns incoming leads to agents based on custom routing rules. This ensures that no lead goes unnoticed, and agents can promptly respond to potential clients, enhancing the chances of converting leads into successful deals. By leveraging this efficient system, agents can build a reputation for responsiveness and reliability, further establishing themselves as trusted advisors.
            Veerge Premier Agent redefines client management by blending state-of-the-art technology with a human touch. With this, Agents will not only meet but exceed client expectations, nurturing relationships that last and spawning referrals and unmatched satisfaction.
          </Text>
        </Text>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontFamily={'euclid-semibold'}>Track Your Performance</Text>
          <Text fontSize={'16px'} fontFamily={'euclid-light'}>
            In the real estate industry, continuous improvement is the key to staying ahead of the competition. The portal provides a comprehensive performance tracking tool that delves into valuable insights on key performance indicators (KPIs), conversion rates, and feedback. With these valuable insights, agents can create well-informed strategies to surpass their business goals and solidify their position as top-performing professionals.
          </Text>
        </Text>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontFamily={'euclid-semibold'}>Real-Time Listings Updates</Text>
          <Text fontSize={'16px'} fontFamily={'euclid-light'}>
            Stay informed with real-time listings updates. End of Manual Confirmation Calls With Veerge, the era of making repetitive confirmation calls to the development company for listings information is over. This portal provides real-time updates on listings, ensuring that agents always have the most current information at their fingertips. This feature enhances your efficiency, allowing agents to focus more on client engagement and less on administrative tasks.
          </Text>
        </Text>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontFamily={'euclid-light'}>
            The Veerge Premier Agent Portal is a transformative platform that propels real estate agents to new heights of success. By harnessing its data-driven insights, streamlined client management, and comprehensive performance tracking, agents can thrive in a competitive market. Embracing the power of Veerge Premier Agent empowers real estate professionals to deliver exceptional client experiences, make confident decisions, and create lasting connections. As they elevate their business to unprecedented levels, agents play a pivotal role in turning dreams into reality for their clients throughout the home-buying journey.
          </Text>
        </Text>
      </Box>

      <Helpful />
    </div>
  );
};
