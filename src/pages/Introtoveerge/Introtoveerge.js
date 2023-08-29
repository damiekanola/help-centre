import { Box, Text, Flex, Image, useToast, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import React, { useState } from "react";
import "./Introtoveerge.css";
import { SlArrowRight } from "react-icons/sl";
export const Introtoveerge = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };

  return (
    <div className="main" id="veerge">
      <Show breakpoint="(min-width: 769px)">
        <div class="rightsidenav">
          <Text className="article_text">In this article</Text>
          <ul className={style}>
            <li onClick={handleClick}>
              <a href="#veerge"> What is Veerge</a>
            </li>
            <li onClick={handleClick}>
              <a href="#engagement">System of engagement</a>
            </li>
            <li onClick={handleClick}>
              <a href="#intelligence">System of Intelligence</a>
            </li>
            <li onClick={handleClick}>
              <a href="#trust">System of Trust</a>
            </li>
            <li onClick={handleClick}>
              <a href="#conclusion">Conclusion</a>
            </li>
            <li onClick={handleClick}>
              <a href="#faq"> FAQs</a>
            </li>
          </ul>
          <Text className="article_text" mt="60px">
            Related Content
          </Text>
          <Flex columnGap="20px">
            <Image src={file} />
            <Link to="fisrt_time_setup">First time setup</Link>
          </Flex>

          <Flex columnGap="20px">
            <Image src={file} /> <Link to="">Topic 5</Link>
          </Flex>
          <Flex columnGap="20px">
            <Image src={file} /> <Link to="">Subtopic 2</Link>
          </Flex>
        </div>
      </Show>
      <Text className="head_">INTRO TO VEERGE</Text>
      <Text className="publish">Published: November 23, 2022</Text>
      <Box>
        <Text className="content_head" id="veerge">
          WHAT IS VEERGE?
        </Text>
        <Text className="content" lineHeight={'25px'}>
          <Text as='p'>
            Veerge is a state-of-the-art and dynamic technology infrastructure that empowers real estate businesses to achieve extraordinary success,
            surpass customer expectations, and effectively navigate the ever-evolving technology landscape. With Veerge,
            property development companies can revolutionize their operations by delivering transformative customer experiences,
            leveraging data-driven insights for informed decision-making, and driving sales growth to expand their overall business.
          </Text>
          <Text as='p' marginTop="20px">
            Veerge provides a transparent, efficient, and secure solution that significantly reduces friction in the processes of buying,
            selling, and creating real estate assets. It is a cost-effective, user-friendly,
            and sustainable platform that enables businesses to handle increasing workloads while simplifying real estate investments,
            making them as straightforward, borderless, and programmable as other internet activities.
          </Text>
          <Text as='p' marginTop="20px">
            At its core, Veerge functions as a hub of interconnected apps and services that seamlessly integrate with one another,
            equipping businesses with essential tools to elevate their operations. By leveraging its transformative customer experience,
            businesses can develop a deep understanding of their customers on a personal level, thereby strengthening relationships and fostering loyalty.
            Additionally, Veerge empowers businesses to find answers to pressing questions,
            predict future trends, and gain a comprehensive understanding of how to improve their approach.
          </Text>
        </Text>
      </Box>
      <Box pt="150px" id="engagement">
        <Text className="content_head">SYSTEM OF ENGAGEMENT</Text>
        <Text className="content">
          <Text as='p'>
            Meeting and exceeding expectations is not a random occurrence but a deliberate outcome that requires careful design.
            It is crucial to understand how your buyers perceive and interact with your business, as it plays a pivotal role in your marketing efforts.
            Achieving seamless interaction with your business necessitates the use of an engagement interface.
            This interface is the foundational building block to staying relevant in today’s fast paced world.
            It serves as a singular space where offerings and buyers coexist harmoniously every day, with personalization being a key feature.
            Veerge empowers real estate businesses to establish and launch this interface effortlessly,
            enabling quick customer onboarding through KYC automation in a matter of minutes, with just a few clicks and without the need for coding.
          </Text>
          <Text as='p' marginTop="20px">
            The interface is a potent tool that governs end-user interactions and breathes life into the business through its transformative customer
            experience. It places the customer at the center of the process. The experience it provides supports the homebuyer's entire journey,
            starting from creating accounts and logging on to browsing opportunities, searching for properties online,
            discovering local schools and amenities, scheduling inspections, making inquiries, and even sharing properties with family and friends.
          </Text>
          <Text as='p' marginTop="20px">
            Moreover, the singular space offers a gold standard experience that allows customers to choose from various purchase options,
            such as outright payment, payment plans, or even co-ownership of the property with family and friends.
            It is designed to empower any real estate business worldwide, instantly establishing it as a global enterprise.
            Customers from around the world can access the portal, and payments can be accepted from customers in over
            <Text as='span' fontWeight={600}> 60 countries and 135 currencies, </Text>
            24/7, without the need to establish local entities.
          </Text>
          <Text as='p' marginTop="20px">
            This value proposition bridges the gap between what traditional businesses
            typically offer and what customers have come to expect. The singular space coexists with the database, providing a strategic
            advantage that enables businesses to control end-user engagement and interactions. By adopting this operating model,
            businesses can transform their customer experience and gain a competitive edge in the marketplace.
          </Text>
        </Text>
      </Box>

      <Box pt="150px" id="trust">
        <Text className="content_head">SYSTEM OF TRUST</Text>
        <Text className="content">
          <Text as='p'>
            In the modern era of cloud computing and on-demand data, manual entry spreadsheets are becoming obsolete. However, real estate businesses are still traditionally operating under a reactive model involving manual processes and paper-based records. This results in slow and cumbersome processes. Fortunately, Veerge offers a proactive, digital, and automated solution that records every transaction on the system of engagement and logs it on the trust system, while saving time and resources.
          </Text>
          <Text as='p' marginTop="20px">
            Let's consider how the traditional process of making a payment for a property works: Initially, a customer makes a payment, typically through a chosen payment method such as wire transfer, check, or online payment. Once the payment is made, the customer sends a payment document, such as an invoice or receipt, to the recipient or relevant parties involved. Upon receiving the payment document, it is manually processed by the recipient. The document is saved and organized within a designated folder or physical filing system for future reference. The next step involves manually entering the details from the payment document into the accounting system. The manual data entry process requires an employee to carefully input the relevant information, such as the payment amount, date, payer's details, and purpose of payment, into the accounting system. After the data entry is complete, a bookkeeping entry is reconciled or created, ensuring accurate financial records. However, this traditional process is not without its challenges. It is prone to human error, as manual data entry leaves room for mistakes or typos. Moreover, the process is time-consuming and can result in delays, especially during high-volume transaction.
          </Text>
          <Text as='p' marginTop="20px">
            Veerge's Intelligence-powered data entry system transforms the payment process for real estate transactions. It eliminates the need for manual data entry by automatically creating bookkeeping entries once buyers make payments. Leveraging intelligent algorithms, Veerge streamlines the payment process, reduces the potential for duplicity, and ensures accuracy.
          </Text>
          <Text as='p' marginTop="20px">
            One of the key advantages of Veerge is its system of trust, which doesn't require a third party to validate transactions. Instead, the system acts as a ledger of facts, making transaction information more readily available, easily documented, and managed. Transactions are processed 24/7, without any business hour or holiday cut-off times. Furthermore, transactions can be confirmed within minutes, providing real-time information on who paid, what the payment was for, when the payment was made, and the remaining balance.
          </Text>
          <Text as='p' marginTop="20px">
            Veerge's digital and automated approach to tracking inventory is highly beneficial in reducing imbalances and inefficiencies. By ensuring that all parties involved have access to the most up-to-date information, Veerge facilitates transparency and enables better asset tracking, management, and risk reduction. This comprehensive view of assets also assists in budgeting and planning more effectively.
          </Text>
          <Text as='p' marginTop="20px">
            The smart contract feature within Veerge is particularly noteworthy. Smart contracts are autonomous computer program codes that facilitate, execute, and enforce the negotiation and performance of contracts or agreements based on predefined conditions. They can be used as a substitute or complement to traditional legal contracts. For example, a smart contract in Veerge could automatically grant permissions to a customer upon completing their payment plan or reaching specific milestones. It can also trigger contract termination and immediate listing of the property on the marketplace in the event of defaults.
          </Text>
          <Text as='p' marginTop="20px">
            By leveraging intelligent data entry, comprehensive inventory tracking, and smart contracts, Veerge establishes a system of trust that enhances efficiency, accuracy, transparency, and security within the real estate industry. It streamlines processes, reduces manual work, and provides a more accessible and reliable platform for real estate transactions.
          </Text>
        </Text>
      </Box>

      <Box pt="150px" id="intelligence">
        <Text className="content_head">SYSTEM OF INTELLIGENCE</Text>
        <Text className="content">
          <Text as='p' marginTop='20px' fontWeight={600}>
            AI+ Your business = Limitless possibilities.
          </Text>
          <Text as='p' marginTop='20px'>
            One of the primary reasons businesses struggle to outperform their competition is the lack of understanding their customers. With Veerge's state-of-the-art analytics technology, businesses can harness the power of artificial intelligence to analyze vast amounts of unstructured data, both internal and external. This enables them to gain valuable insights, make accurate predictions, identify emerging trends, and address pressing questions. Veerge's advanced analytics capabilities are akin to those employed by Facebook to comprehend its users and deliver personalized recommendations.
          </Text>
          <Text as='p' marginTop='20px'>
            Veerge's analytics solutions empower businesses to develop a profound understanding of their customers' preferences, behaviors, and buying patterns, ultimately fostering increased customer loyalty. By leveraging Veerge's technology, businesses can address crucial questions such as what clients want to purchase, when they are most likely to make a purchase, the factors driving their purchase decisions, and their preferred buying methods. This in-depth understanding of individual buyer needs allows businesses to tailor their services and offerings to better meet those unique requirements. Moreover, Veerge's analytics capabilities can identify customers who are most likely looking for second properties, determine their location preferences, understand what they desire in a second property, comprehend the factors influencing their loyalty, and prioritize them based on various criteria.
          </Text>
          <Text as='p' marginTop='20px'>
            Analyzing customer data also facilitates a deeper understanding of the target audience and allows businesses to track customers' preferences and choices. This is particularly valuable in the luxury real estate sector, where customers prioritize high-end features over specific locations. With Veerge, businesses can directly target these customers by offering potential homes that align with their tastes and expectations, leading to better investments and higher returns.
          </Text>
          <Text as='p' marginTop='20px'>
            The significance of Veerge's analytics capabilities cannot be overstated. In a landscape where potential homebuyers are inundated with an abundance of irrelevant choices, providing relevant recommendations can set businesses apart from their competitors. Personalization is the key to success, and Veerge's advanced analytics solutions enable businesses to effortlessly create personalized customer journeys for thousands of buyers. This level of personalization fosters trust and helps businesses establish enduring relationships with their customers.
          </Text>
        </Text>
      </Box>

      <Box pt="150px" id="intelligence">
        <Text className="content_head">CONCLUSION</Text>
        <Text className="content">
          <Text as='p' marginTop='20px'>
            In order to meet changing customer expectations and deliver a consistent, end-to-end omnichannel customer experience, the future of real estate lies in digital, structured, and automated channels. Adopting this approach enables businesses to power their operations with everything needed to prioritise the customer, align teams and technology, and plan strategies for growth.
            Veerge offers a peerless automated solution that enables businesses to segment customers based on specific values, create content and listings, track customer behaviour, and reduce marketing costs while making smarter decisions. The use of data, rather than assumptions or gut feelings, allows for more informed decision-making and an increased focus on sales, leading to higher revenue. With Veerge, businesses can identify the hottest prospects and close more deals.
            The benefits of this new approach extend beyond sales and marketing, with the ability to provide a more transparent and efficient way of tracking assets and managing contracts through the use of smart contracts. By leveraging technology to automate tasks and reduce inefficiencies, businesses can move toward a more modern, forward-thinking approach and stay ahead of the curve. Veerge has the potential to transform the real estate industry and position businesses for success in the twenty-first century.
          </Text>
        </Text>
      </Box>
    </div >
  );
};
