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

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} />
      <AgentRightNav />
      <Text className="head_">Veerge Premier Agent Portal</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box id="overview" ref={overviewRef} className="content" lineHeight={'25px'}>
        <Box>
          <Text fontSize={'24px'} fontWeight={600}>Introducing the Veerge Premier Agent Portal</Text>
          <Text fontSize={'16px'} fontWeight={500}>Your gateway to success in today's dynamic real estate landscape</Text>
        </Box>
        <Text as='p' mt='30px'>
          As a real estate professional, achieving excellence requires cutting-edge tools and resources, and that's precisely what Veerge offers. Let's dive deep into the key functionalities that make Veerge Premier Agent a must-have for data-driven and dream-fulfilling agents.
        </Text>

      </Box>
      <Box id="howAgent" ref={howAgentRef} className="content" lineHeight={'25px'}>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontWeight={700}>Client Management Tools</Text>
          <Text fontSize={'16px'} fontWeight={500}>Empowering personalised experiences </Text>
        </Text>
        <Text as='p' marginTop="30px">
          Veerge Premier Agent understands that each client's home-buying journey is unique. To deliver personalised experiences, the platform provides a treasure trove of data-driven insights and resources. From understanding client preferences to analysing market trends, these powerful tools enable agents to make informed decisions, ensuring they meet and exceed their clients' expectations at every step of the process. By utilising these tailored solutions, agents can forge lasting relationships with their clients, leading to increased referrals and elevated client satisfaction.
        </Text>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontWeight={700}>Request Commission</Text>
          <Text fontSize={'16px'} fontWeight={500}>A Seamless Path to Fair Compensation</Text>
        </Text>
        <Text as='p' marginTop="30px">
          At the core of Veerge Premier Agent's philosophy is the recognition of hard work and dedication put in by agents to close deals. To streamline the payment process and promote transparency, the platform offers a seamless commission request feature. Agents can easily submit their commission requests through the portal, ensuring that their efforts are duly acknowledged, and they receive fair compensation for their achievements. This motivates agents to perform at their best, fostering a thriving and results-driven community within the Veerge network.
        </Text>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontWeight={700}>Track Your Performance</Text>
          <Text fontSize={'16px'} fontWeight={500}>Data-Driven Success Strategies</Text>
        </Text>
        <Text as='p' marginTop="30px">
          In the real estate industry, continuous improvement is the key to staying ahead of the competition. Veerge Premier Agent provides a comprehensive performance tracking tool that delves into valuable insights on key performance indicators (KPIs), conversion rates, and client feedback. Armed with this data, agents gain a comprehensive understanding of their strengths and areas that demand improvement. With these valuable insights, agents can create well-informed strategies to surpass their business goals and solidify their position as top-performing professionals.
        </Text>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontWeight={700}>Streamlined Client Management</Text>
          <Text fontSize={'16px'} fontWeight={500}>Maximising Efficiency and Responsiveness</Text>
        </Text>
        <Text as='p' marginTop="30px">
          In the fast-paced world of real estate, time is of the essence. Veerge Premier Agent Portal streamlines client management through an automated system that intelligently assigns incoming leads to agents based on custom routing rules. This ensures that no lead goes unnoticed, and agents can promptly respond to potential clients, enhancing the chances of converting leads into successful deals. By leveraging this efficient system, agents can build a reputation for responsiveness and reliability, further establishing themselves as trusted advisors.
        </Text>
        <Text as='p' marginTop="30px">
          <Text fontSize={'16px'} fontWeight={700}>Stay on Top of Lead Conversion</Text>
          <Text fontSize={'16px'} fontWeight={500}>Data-Backed lead nurturing</Text>
        </Text>
        <Text as='p' marginTop="30px">
          Understanding lead behaviour and progress is critical for successful lead conversion. Veerge Premier Agent Portal equips agents with valuable insights into current engagements and lead progress in the home-buying journey.  With this comprehensive knowledge, agents can craft personalised and data-backed lead nurturing strategies, cultivating stronger relationships and increasing the likelihood of turning prospects into satisfied homeowners.
        </Text>
        <Text as='p' marginTop="30px">
          Veerge Premier Agent Portal is a transformative platform that propels real estate agents to new heights of success. By harnessing its data-driven insights, streamlined client management, and comprehensive performance tracking, agents can thrive in a competitive market. Embracing the power of Veerge Premier Agent empowers real estate professionals to deliver exceptional client experiences, make confident decisions, and create lasting connections. As they elevate their business to unprecedented levels, agents play a pivotal role in turning dreams into reality for their clients throughout the home-buying journey.
        </Text>
        <Text fontSize={'16px'} fontWeight={500} marginTop="30px">
          Join Veerge Premier Agent Portal and unlock your true potential in the ever-evolving world of real estate.
        </Text>
      </Box>

      <Helpful />
    </div>
  );
};
