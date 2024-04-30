import React, {useRef} from 'react';
import {Box, Text, Image} from '@chakra-ui/react';
import homeOwner1 from '../../../assets/images/homeOwners/home-owners-packet-1.png';
import homeOwner2 from '../../../assets/images/homeOwners/home-owners-packet-2.png';
// import homeOwner3 from '../../../assets/images/homeOwners/home-owners-packet-3.png';
import homeOwner3_1 from '../../../assets/images/homeOwners/home-owners-packet-3-1.png';
import homeOwner3_2 from '../../../assets/images/homeOwners/home-owners-packet-3-2.png';
import homeOwner4 from '../../../assets/images/homeOwners/home-owners-packet-4.png';
import QuestionsAndReplies from '../../../components/Faq/QuestionsAndReplies';
import LeftNav from '../../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../../components/Faq/Helpful';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import LeadRightNav from '../../../components/Lead/RightNav';
import HideLeadUnsubscribed from '../../../hoc/HidefullLead';

const HomeOwnersPacket = () => {
  const how_toRef = useRef(null);
  const stepsRef = useRef(null);
  const questionsRef = useRef(null);

  const how_toCheck = useIsInViewport(how_toRef);
  const stepsCheck = useIsInViewport(stepsRef);
  const questionsCheck = useIsInViewport(questionsRef);

  const articleContent = [
    {check: how_toCheck, id: 'how_to', title: 'Home owner’s Packet'},
    {check: stepsCheck, id: 'steps', title: 'Steps'},
    {check: questionsCheck, id: 'questions', title: 'Questions & Replies'},
  ];

  const questions = [
    {
      name: 'Sharon J.',
      date: 'Jun 24, 2023',
      content:
        'How do we ensure that both parties have access to a document once a new buyer signs it? Especially when they need to access it on the go?',
      replies: [
        `Hi Sharon,\n
        When a buyer signs a document, the process is straightforward. The buyer should access the "Homeowner's Packet" section within their application and proceed to upload the document. Once uploaded, the document will be accessible in the "Sent" tab from the buyer's side, ensuring their convenience. Simultaneously, you will find the same document available in the "Received" tab
        on your end, enabling easy access for both parties, even while on the move.`,
      ],
    },
  ];

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <LeadRightNav />
      <Text className="head_">HOME OWNER’S PACKET</Text>
      <Text className="publish">Published: March 26, 2023</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Box id="how_to" ref={how_toRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text as="p" marginTop={'30px'}>
            A <b>"homeowner's packet"</b> is a comprehensive collection of documents and essential
            information offered to new homeowners upon purchasing a property. When you embark on the
            journey of purchasing a property, you can anticipate receiving a set of vital documents
            throughout the process. The exact nature of these documents can vary based on your
            geographical location and the specific characteristics of the property being acquired.
          </Text>
          <Text as="p" marginTop="20px">
            However, in general, the homeowner's packet encompasses.
          </Text>
        </Text>
      </Box>
      <Box id="steps" ref={stepsRef}>
        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Purchase Agreement</li>
          </Text>
          <Text className="content">
            The cornerstone of the homeowner's packet, the purchase agreement is the contract that
            solidifies the transaction between the buyer (you) and the seller. This agreement
            meticulously outlines the terms and conditions of the sale, encompassing crucial
            elements such as the purchase price, property description, earnest money deposit,
            contingencies, and closing date.
          </Text>
        </Box>
        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Title Deed</li>
          </Text>
          <Text className="content">
            Also known as the deed of sale or property deed, this pivotal document officially
            transfers the property's legal ownership from the seller to you, the buyer. It furnishes
            pertinent details about the property itself, the identities of both the buyer and the
            seller, as well as any encumbrances or liens that may exist on the property.
          </Text>
        </Box>
        <Box>
          <Text fontWeight={500} mt="40px">
            <li style={{fontWeight: '700'}}>Title Search Report</li>
          </Text>
          <Text className="content">
            The title search report stands as a verification of the property's legal ownership. This
            document provides insight into any prevailing liens, mortgages, easements, or
            encumbrances that might impact the property's title.
          </Text>
          <Text className="content" mt="20px">
            A meticulously detailed map that delineates the precise boundaries, dimensions, and
            physical attributes of the property. The property survey serves as a tool to identify
            and mitigate any potential disputes or encroachments related to property boundaries.
          </Text>
        </Box>

        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Property Tax Records</li>
          </Text>
          <Text className="content">
            These records serve to elucidate the property's tax assessment details, encompassing
            elements such as the assessed value and any pertinent property taxes that apply.
          </Text>
        </Box>

        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Closing Disclosure (CD) or Settlement Statement</li>
          </Text>
          <Text className="content">
            A comprehensive breakdown of the costs associated with the property purchase. This
            document elucidates elements such as the loan amount, interest rate, closing costs, and
            additional fees.
          </Text>
        </Box>

        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Home inspection report</li>
          </Text>
          <Text className="content">
            If a home inspection was conducted, this report will comprehensively detail the
            property's condition and highlight any issues identified during the inspection.
          </Text>
        </Box>

        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Warranty information</li>
          </Text>
          <Text className="content">
            Pertaining to warranties covering the property or its appliances, this section provides
            you with insights into the warranties' terms and conditions.
          </Text>
        </Box>

        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Architectural Guideline</li>
          </Text>
          <Text className="content">
            Should the community possess specific regulations governing property aesthetics,
            landscaping, renovations, or exterior alterations, these guidelines will be included.
          </Text>
        </Box>
        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Insurance Information</li>
          </Text>
          <Text className="content">
            Essential details regarding mandatory homeowners' insurance, as well as any
            supplementary policies required for the area (e.g., flood insurance).
          </Text>
        </Box>

        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Maintenance and Repair Information</li>
          </Text>
          <Text className="content">
            Guidelines that outline property maintenance protocols and offer guidance on addressing
            routine repairs and maintenance tasks.
          </Text>
        </Box>

        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Local Services and Emergency Contacts</li>
          </Text>
          <Text className="content">
            This section furnishes crucial contacts for local emergency services, educational
            institutions, medical facilities, and other indispensable services.
          </Text>
        </Box>

        <Box>
          <Text fontWeight={500} mt="20px">
            <li style={{fontWeight: '700'}}>Emergency Procedures</li>
          </Text>
          <Text className="content">
            Clear and concise instructions to navigate emergency situations, encompassing guidance
            for natural disasters or community-related incidents.
          </Text>
          <Text className="content" mt="20px">
            Within the Veerge application, the homeowner's packet section includes the default
            document, the purchase agreement, which the buyer accepted during the property purchase
            process.
          </Text>
          <Text className="content" mt="20px">
            To upload additional documents to this packet, follow these steps:
          </Text>
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 1
          </Text>
          <Text className="content">
            Navigate to the users section and select the specific user you intend to share the
            document with.
          </Text>

          <Image src={homeOwner1} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 2
          </Text>
          <Text className="content">
            Click on the “View details” button to enter the user’s full profile.
          </Text>

          <Image src={homeOwner2} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content">
            Click on the “<b>View transactions</b>” button of the chosen property, and then proceed
            to the upper right corner and click the “<b>More options</b>” menu button."
          </Text>

          <Image src={homeOwner3_1} mt="30px" mx="auto" w="full" />
          <Image src={homeOwner3_2} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head" mt="40px">
            STEP 4
          </Text>
          <Text className="content">
            Choose the "<b>Home owner's Packet</b>" option, and then proceed to upload the PDF
            document.
          </Text>

          <Image src={homeOwner4} mt="30px" mx="auto" w="full" />
        </Box>
      </Box>

      <Box id="questions" ref={questionsRef}>
        <QuestionsAndReplies questions={questions} />
      </Box>

      <Helpful />
    </div>
  );
};

export default HideLeadUnsubscribed(HomeOwnersPacket);
