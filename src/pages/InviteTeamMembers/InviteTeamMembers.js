import React, { useRef } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import inviteTeam1 from '../../assets/images/invite/invite_team_members-1.png';
import inviteTeam2 from '../../assets/images/invite/invite_team_members-2.png';
import inviteTeam3 from '../../assets/images/invite/invite_team_members-3.png';
import inviteTeam4 from '../../assets/images/invite/invite_team_members-4.png';
import inviteTeam5 from '../../assets/images/invite/invite_team_members-5.png';
import QuestionsAndReplies from "../../components/Faq/QuestionsAndReplies";
import LeftNav from "../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../components/Faq/Helpful";
import useIsInViewport from "../../utils/useOnScreen/useOnScreen";
import LeadRightNav from "../../components/Lead/RightNav";

export const InviteTeamMembers = () => {

  const inviteRef = useRef(null);
  const stepsRef = useRef(null);
  const questionsRef = useRef(null);

  const inviteCheck = useIsInViewport(inviteRef);
  const stepsCheck = useIsInViewport(stepsRef);
  const questionsCheck = useIsInViewport(questionsRef);


  const articleContent = [
    { check: inviteCheck, id: 'invite', title: 'Invite Team Members' },
    { check: stepsCheck, id: 'steps', title: 'Steps' },
    { check: questionsCheck, id: 'questions', title: 'Questions & Replies' },
  ]

  const questions = [
    {
      name: 'Khamil F.',
      date: 'Jun 07, 2023',
      content: "Hello, I have a situation where a client made a payment outside the application. Is there a method to record this payment within the application?",
      replies: [
        `Hi David,
        Absolutely. Here's what you can do: Head to the 'Pending Offer' section, and
        you'll find the respective account number. Proceed to initiate a transfer to this
        account. As soon as the transaction is complete, the updates will seamlessly reflect on both ends, ensuring accurate records. If you require any further assistance with this process, don't hesitate to reach out to our support team.
        We're here to help`
      ]
    }
  ]



  return (
    <div className="main">
      <LeftNav articleContent={articleContent} />
      {/* <LeadRightNav /> */}
      <Text className="head_">INVITE TEAM MEMBERS</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box id="invite" ref={inviteRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text as='p' fontWeight={500}>
            As businesses increasingly embrace Veerge for their operational needs,
            managing user access and permissions emerges as a paramount concern
            for security and collaboration.
          </Text>
          <Text as='p' marginTop="20px">
            Veerge indeed offers a blend of convenience, scalability, and cost-effectiveness, yet it also brings potential security vulnerabilities if not wielded with care. Within the Veerge ecosystem, diverse users hailing from various departments and hierarchies demand access to a spectrum of applications and data. Skillful administration of these users and their access privileges is a linchpin against unauthorized entry, ensuring that personnel hold just the right level of access pertinent to their roles. This is where the Teams feature comes to the forefront, supported by a robust framework known as Role-Based Access Control (RBAC).
          </Text>
          <Text as='p' marginTop="20px" fontWeight={500} letterSpacing={'1.92px'}>
            RBAC orchestrates access rights and permissions based on users'
            designated roles within an organization.
          </Text>
          <Text as='p' marginTop="20px">
            Each role is harmonized with explicit tasks, responsibilities, and gradations of access. Through RBAC implementation, administrators can adeptly dictate who can access specific data, thereby safeguarding that users exclusively interact with resources pertinent to their roles. This framework not only fortifies security but also
            simplifies user management while untangling the intricacies of permission
            assignments
          </Text>
          <Text as='p' marginTop={'20px'} fontWeight={500}>
            How to Invite Team Members:
          </Text>
        </Text>
      </Box>
      <Box id="steps" ref={stepsRef}>
        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">
            Navigate to the "Settings" section and select "Teams."
          </Text>

          <Image src={inviteTeam1} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="30px">
            STEP 2
          </Text>
          <Text className="content">
            Before extending invitations, explore "Manage Roles" to assess the array of available roles. Verify that the access controls align with your organisation's requisites. If adjustments are needed, reach out to our support team.
          </Text>

          <Image src={inviteTeam2} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content">
            If the roles conform to your needs, proceed to "Invite Team  Members."
          </Text>
          <Image src={inviteTeam3} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 4
          </Text>
          <Text className="content">
            Input the team member's email address and select the designated role. Subsequently, click on "Send Invitations."
          </Text>

          <Image src={inviteTeam4} mt="30px" mx="auto" w='full' />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 5
          </Text>
          <Text className="content">
            Instruct the recipient to check their email and follow the ensuing steps to join the team.
          </Text>

          <Image src={inviteTeam5} mt="30px" mx="auto" w='full' />
          <Text className="content">
            This streamlined procedure empowers organizations to harness the full potential of Veerge's collaborative capabilities while fortifying data security and enhancing operational efficacy.
          </Text>
        </Box>

      </Box>

      <Box id='questions' ref={questionsRef}>
        <QuestionsAndReplies questions={questions} />
      </Box>

      <Helpful />
    </div>
  );
};
