import {Box, Text, Flex, Image, useToast, Show, VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import file from '../../assets/icons/file.png';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import './Introtoveerge.css';
import {SlArrowRight} from 'react-icons/sl';
import LeftNav from '../../components/Leftsidenav/Leftsidenav';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';

export const Introtoveerge = () => {
  const toast = useToast();

  const veergeRef = useRef(null);
  const engagementRef = useRef(null);
  const trustRef = useRef(null);
  const intelligenceRef = useRef(null);
  const conclusionRef = useRef(null);

  const veergeCheck = useIsInViewport(veergeRef);
  const engagementCheck = useIsInViewport(engagementRef);
  const trustCheck = useIsInViewport(trustRef);
  const intelligenceCheck = useIsInViewport(intelligenceRef);
  const conclusionCheck = useIsInViewport(conclusionRef);

  const articleContent = [
    {check: veergeCheck, id: 'veerge', title: 'Overview of Veerge?'},
    {check: engagementCheck, id: 'engagement', title: 'System of engagement'},
    {check: trustCheck, id: 'trust', title: 'System of Trust'},
    {check: intelligenceCheck, id: 'intelligence', title: 'System of Intelligence'},
    {check: conclusionCheck, id: 'conclusion', title: 'Conclusion'},
  ];

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <Text className="head_">INTRO TO VEERGE</Text>
      <Text className="publish">Published: November 23, 2022</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <div ref={veergeRef}>
        <Box id="veerge" ref={veergeRef}>
          <Text className="content_head">OVERVIEW OF VEERGE?</Text>
          <Text className="content" lineHeight={'25px'}>
            <Text as="p">
              Veerge is a state-of-the-art and dynamic technology infrastructure that empowers real
              estate businesses to achieve extraordinary success, surpass buyer’s expectations, and
              effectively navigate the ever-evolving technology landscape. With Veerge, property
              development companies can revolutionize their operations by delivering transformative
              customer experiences, leveraging data-driven insights for informed decision-making,
              and driving sales growth to expand their overall business.
            </Text>
            <Text as="p" marginTop="20px">
              Veerge provides a transparent, efficient, and secure solution that significantly
              reduces friction in the processes of managing the clients of property development
              companies and also the buying, selling, and creating real estate assets. It is a
              cost-effective, user-friendly, and sustainable platform that enables businesses to
              handle increasing workloads while simplifying real estate, making them as
              straightforward, borderless, and programmable as other internet activities.
            </Text>
            <Text as="p" marginTop="20px">
              At its core, it is a hub of interconnected apps and services that seamlessly integrate
              with one another, equipping businesses with essential tools to elevate their
              operations. By leveraging its transformative customer experience, businesses can
              develop a deep understanding of their clients on a personal level, thereby
              strengthening relationships and fostering loyalty. Additionally, Veerge empowers
              businesses to find answers to pressing questions, predict future trends, and gain a
              comprehensive understanding of how to improve their approach.
            </Text>

            <Text as="p" marginTop="20px">
              Values are delivered in three core areas: System of engagement, system of intelligence
              & system of trust.
            </Text>
          </Text>
        </Box>
      </div>
      <div ref={engagementRef}>
        <Box pt="30px" id="engagement" ref={engagementRef}>
          <Text className="content_head">SYSTEM OF ENGAGEMENT</Text>
          <Text className="content">
            <Text as="p">
              Meeting and exceeding expectations is not merely a matter of chance but a strategic
              outcome achieved through intentional design. Understanding how customers perceive and
              engage with your business is vital for tailoring your marketing strategies
              effectively. A seamless interaction with your business is facilitated through an
              engagement interface, which serves as the cornerstone for maintaining relevance in
              today's dynamic environment. This interface creates a unified space where offerings
              and buyers coexist harmoniously, with personalization at its core.
            </Text>
            <Text as="p" marginTop="20px">
              Veerge empowers real estate businesses to effortlessly launch such
              interfaces—applications that require no coding—thereby streamlining client onboarding
              with KYC automation within minutes. This interface is a powerful tool that shapes
              end-user interactions and revitalizes the business by offering a transformative
              customer experience. It positions the client at the heart of the process, supporting
              their entire home-buying journey. This includes managing payments and transactions,
              organizing property-related documents, real-time unit allocation, and facilitating the
              exploration of properties, local schools, and amenities online. It also simplifies
              scheduling inspections, making inquiries, and sharing properties with family and
              friends.
            </Text>
            <Text as="p" marginTop="20px">
              The interface provides a premium experience, offering customers a range of purchase
              options such as outright payment, installment plans, or co-ownership with family and
              friends. Designed for global scalability, it enables any real estate business to
              instantly position itself as an international enterprise. Customers worldwide can
              access the portal, which accepts payments in over 60 countries and 135 currencies,
              operating round-the-clock without the need for establishing local entities.
            </Text>
            <Text as="p" marginTop="20px">
              This value proposition narrows the gap between traditional offerings and modern
              customer expectations. The interface integrates seamlessly with the database, giving
              businesses a strategic advantage in managing end-user engagement and interactions. By
              adopting this operating model, businesses can revolutionize their customer experience
              and secure a competitive edge in the marketplace.
            </Text>
          </Text>
        </Box>
      </div>

      <div ref={trustRef}>
        <Box pt="30px" id="trust" ref={trustRef}>
          <Text className="content_head">SYSTEM OF TRUST</Text>
          <Text className="content">
            <Text as="p">
              In today's cloud computing age, where data is available on-demand, traditional
              spreadsheets and manual data entry are becoming outdated. Many real estate businesses
              still operate reactively, utilizing manual processes and paper-based records, leading
              to inefficient and sluggish workflows. Veerge introduces a proactive, digital, and
              automated alternative that not only records every transaction on its engagement system
              but also logs them on a trusted platform, saving significant time and resources.
            </Text>
            <Text as="p" marginTop="20px">
              Consider the traditional property payment process: A client makes a payment through a
              wire transfer, check, or online platform. Following the payment, they send a payment
              document—like an invoice or receipt—to the recipient or other involved parties. This
              document is then manually processed and stored in a specific folder or physical filing
              system for future reference. The details from the document are manually entered into
              an accounting system, a process prone to human error, which can lead to inaccuracies
              and delays, especially during periods of high transaction volume.
            </Text>
            <Text as="p" marginTop="20px">
              Veerge revolutionizes the payment process with its AI-powered data entry system, which
              eliminates the need for manual data entry by automatically generating bookkeeping
              entries when payments are received. As soon as a client makes a payment, the
              transaction is instantly identified, recorded in the revenue management system, and
              factored into the organization’s cash flow projections. Automatic notifications are
              then sent to all relevant parties. Additionally, even if a client has never previously
              used the application built by the property development company, the system logs all
              transactions, enabling them to track their entire purchase history upon their first
              login. Consider a familiar scenario: just as with a bank, where you can deposit money
              over the counter for years and then see all your past transactions as soon as you
              download the mobile app or sign up for online banking, Veerge offers a similar
              experience. This approach not only streamlines the payment process but also minimizes
              errors and ensures the accuracy of transactions.
            </Text>
            <Text as="p" marginTop="20px">
              The system acts as a reliable ledger without the need for third-party validation,
              making transaction data easily accessible, well-documented, and manageable.
              Transactions are processed around the clock, with confirmations possible within
              minutes, providing real-time updates on payment details and outstanding balances.
            </Text>
            <Text as="p" marginTop="20px">
              Veerge’s digital approach extends to inventory management, greatly enhancing
              efficiency and reducing discrepancies. With real-time access to updated information,
              Veerge ensures transparency and facilitates better asset management and risk
              mitigation. This real-time access means that neither agents nor clients need to
              confirm prices or availability via phone; all information is instantly available.
            </Text>
            <Text as="p" marginTop="20px">
              Furthermore, Veerge's smart contract feature is particularly significant. These
              autonomous codes facilitate, execute, and enforce the terms of contracts based on set
              conditions, serving as a supplement or alternative to traditional legal contracts. For
              example, a smart contract in Veerge could automatically grant access to a property
              once a client completes their payment plan or meets certain milestones, or it could
              list a property for sale immediately if a default occurs.
            </Text>
            <Text as="p" marginTop="20px">
              By integrating intelligent data entry, advanced inventory tracking, and smart
              contracts, Veerge creates a trust-based system that boosts efficiency, accuracy,
              transparency, and security in the real estate sector. This system not only streamlines
              processes and reduces manual labor but also offers a more reliable and accessible
              platform for real estate transactions.
            </Text>
          </Text>
        </Box>
      </div>

      <div ref={intelligenceRef}>
        <Box pt="30px" id="intelligence" ref={intelligenceRef}>
          <Text className="content_head">SYSTEM OF INTELLIGENCE</Text>
          <Text className="content">
            <Text as="p">
              A common challenge businesses face in outperforming their competitors is a lack of
              deep customer understanding. Veerge's cutting-edge analytics technology enables
              businesses to harness artificial intelligence to sift through vast amounts of both
              internal and external unstructured data. This process uncovers valuable insights,
              fosters accurate predictions, identifies emerging trends, and addresses critical
              questions. Veerge’s analytics capabilities, similar to those used by platforms like
              Facebook to understand user behavior and deliver personalized content, empower real
              estate businesses to develop a deep understanding of their clients’ preferences,
              behaviors, and purchasing patterns, ultimately enhancing customer loyalty.
            </Text>
            <Text as="p" marginTop="20px">
              By leveraging Veerge's technology, businesses can answer vital questions about what
              clients are likely to purchase, when they are inclined to buy, what drives their
              decisions, and their preferred methods of purchase. This in-depth knowledge allows
              businesses to tailor their services and offerings more precisely to meet individual
              needs. Additionally, Veerge’s analytics can pinpoint clients who are potential buyers
              of second properties, determine their location preferences, understand their desires
              for such properties, and assess factors influencing their loyalty, allowing for
              strategic prioritization based on various criteria.
            </Text>
            <Text as="p" marginTop="20px">
              Analyzing client data further deepens understanding of the target audience, enabling
              businesses to monitor and respond to client preferences and choices dynamically.
              Personalization is crucial to success, and Veerge's advanced analytics solutions
              facilitate the creation of personalized journeys for thousands of buyers. This level
              of customization builds trust and helps businesses forge lasting relationships with
              their customers.
            </Text>
          </Text>
        </Box>
      </div>

      <div ref={conclusionRef}>
        <Box pt="30px" id="conclusion" ref={conclusionRef}>
          <Text className="content_head">CONCLUSION</Text>
          <Text className="content">
            <Text as="p">
              In order to meet changing client expectations and deliver a consistent, end-to-end
              omnichannel customer experience, the future of real estate lies in digital,
              structured, and automated channels. Adopting this approach enables property
              development companies to power their operations with everything needed to prioritise
              the client, align teams and technology, and plan strategies for growth. Veerge offers
              a peerless automated solution that enables businesses to segment customers based on
              specific values, create content and listings, track client behaviour, and reduce
              marketing costs while making smarter decisions. The use of data, rather than
              assumptions or gut feelings, allows for more informed decision-making and an increased
              focus on sales, leading to higher revenue. With Veerge, businesses can identify the
              hottest prospects and close more deals. The benefits of this new approach extend
              beyond sales and marketing, with the ability to provide a more transparent and
              efficient way of tracking assets and managing contracts through the use of smart
              contracts. By leveraging technology to automate tasks and reduce inefficiencies,
              businesses can move toward a more modern, forward-thinking approach and stay ahead of
              the curve. Veerge has the potential to transform the real estate industry and position
              businesses for success in the twenty-first century.
            </Text>
          </Text>
        </Box>
      </div>
    </div>
  );
};
