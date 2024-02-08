import React, {useRef} from 'react';
import {Box, Image, Text} from '@chakra-ui/react';
import LeftNav from '../../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../../components/Faq/Helpful';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import AgentRightNav from '../../../components/Agent/RightNav';
import agent1 from '../../../assets/images/agents/agent1.png';
import agent2 from '../../../assets/images/agents/agent2.png';
import agent3 from '../../../assets/images/agents/agent3.png';
import agent4 from '../../../assets/images/agents/agent4.png';
import agent5 from '../../../assets/images/agents/agent5.png';

export const AgentProcess = () => {
  const agentsRef = useRef(null);
  const referralRef = useRef(null);
  const commissionRef = useRef(null);
  const approvingRef = useRef(null);

  const agentsCheck = useIsInViewport(agentsRef);
  const referralCheck = useIsInViewport(referralRef);
  const commissionCheck = useIsInViewport(commissionRef);
  const approvingCheck = useIsInViewport(approvingRef);

  const articleContent = [
    {check: agentsCheck, id: 'agents', title: 'Agents on Veerge'},
    {check: referralCheck, id: 'referral', title: 'Referral link and users connections'},
    {check: commissionCheck, id: 'commission', title: 'Commission requests and transactions'},
    {check: approvingCheck, id: 'approving', title: 'Approving commissions: A step-by-step guide'},
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
      <Text className="head_">The complete agents process</Text>
      <Text className="publish">Published: November 1, 2022</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Box className="content" lineHeight={'25px'}>
        <Box id="agents" ref={agentsRef}>
          <Text as="p" marginTop="20px">
            In the realm of Veerge , agents typically don't directly access a portal to view
            listings. Instead, they initiate a request for access which is subsequently approved by
            the property development company. When an agent signs up, their access request becomes a
            distinct entry in the "Requests" section. To manage this, navigate to the "Requests"
            area, click on the specific request, review all the provided details, and then proceed
            to either approve or reject the request.
          </Text>
        </Box>
        <Box id="referral" ref={referralRef}>
          <Text as="p" marginTop="20px" fontSize={'16px'} fontWeight={500}>
            Referral Link and User Connections
          </Text>
          <Text as="p">
            Each agent is assigned a unique referral link. The primary purpose of this link is to
            establish a direct connection between the agent and any user who signs up through that
            link. This connection is evident in the user's profile, where you'll find a notation
            indicating that the user was referred by a particular agent.
          </Text>
        </Box>
        <Box id="commission" ref={commissionRef}>
          <Text as="p" marginTop="20px" fontSize={'16px'} fontWeight={500}>
            Commission Requests and Transactions:
          </Text>
          <Text as="p">
            When a user facilitated by a registered agent makes a property purchase, the agent is
            entitled to a commission. To initiate this process, the agent submits a commission
            request. This request also surfaces in the "Requests" section, specifically within the
            "Commission Request" category. You, as the administrator, are presented with the option
            to either approve or reject the commission request.
          </Text>
        </Box>
        <Box id="approving" ref={approvingRef}>
          <Text as="p" marginTop="20px" fontSize={'24px'} letterSpacing={'2.88px;'}>
            Step-by-Step Guide to Approving Commissions
          </Text>
          <Box>
            <Text as="p" marginTop="20px" fontSize={'24px'} fontWeight={500}>
              STEP 1
            </Text>
            <Text as="p" marginTop="20px">
              Initiating the process, you'll begin by clicking on the request and make sure due
              diligence has been done on your end. Then you select the property that corresponds to
              the commission request. This ensures alignment between the transaction and the
              commission.
            </Text>
            <Image marginTop="20px" w="full" h="auto" src={agent1} />
          </Box>
          <Box>
            <Text as="p" marginTop="20px" fontSize={'24px'} fontWeight={500}>
              STEP 2
            </Text>
            <Text as="p" marginTop="20px">
              Once the property is chosen, a new screen emerges, inviting you to input the specific
              commission amount. You also have the option to include any relevant notes that provide
              additional context or clarification.
            </Text>
            <Image marginTop="20px" w="full" h="auto" src={agent2} />
          </Box>
          <Box>
            <Text as="p" marginTop="20px" fontSize={'24px'} fontWeight={500}>
              STEP 3
            </Text>
            <Text as="p" marginTop="20px">
              At this juncture, a noteworthy feature comes into play. A checkbox gives you the
              authority to grant the agent access to the client's transaction records through their
              portal. If you decide to leave the checkbox unchecked, the agent's access will remain
              limited, preserving a higher level of privacy.
            </Text>
            <Image marginTop="20px" w="full" h="auto" src={agent3} />
          </Box>
          <Box>
            <Text as="p" marginTop="20px" fontSize={'24px'} fontWeight={500}>
              STEP 4
            </Text>
            <Text as="p" marginTop="20px">
              With all the necessary information entered, a summary screen materializes. Here, you
              can review the entire commission approval process, ensuring accuracy and completeness
              before finalizing the action.
            </Text>
            <Image marginTop="20px" w="full" h="auto" src={agent4} />
          </Box>
          <Box>
            <Text as="p" marginTop="20px" fontSize={'24px'} fontWeight={500}>
              STEP 5
            </Text>
            <Text as="p" marginTop="20px">
              Notably, the Veerge platform offers an innovative option for future commission
              management. By checking a specific box, you can activate the automation of future
              commissions. These automated commissions are calculated based on a percentage derived
              from the initial commission. This feature proves particularly advantageous when
              dealing with payment plans and extended transactions.
            </Text>
            <Image marginTop="20px" w="full" h="auto" src={agent5} />
          </Box>
        </Box>
      </Box>

      <Helpful />
    </div>
  );
};
