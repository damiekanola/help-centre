import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image} from '@chakra-ui/react';
import protectedImg from '../../assets/images/home/overview.jpg';
import check from '../../assets/images/home/check.png';
import engage from '../../assets/images/home/engage.png';
import trust from '../../assets/images/home/trust.png';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';
import {trendingData} from '../../constant/pages';

export const OverviewofMyxellia = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const engageRef = useRef(null);
  const trustRef = useRef(null);
  const intelligenceRef = useRef(null);
  const conclusionRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const engageCheck = useIsInViewport(engageRef);
  const trustCheck = useIsInViewport(trustRef);
  const intelligenceCheck = useIsInViewport(intelligenceRef);
  const conclusionCheck = useIsInViewport(conclusionRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: engageCheck, id: 'engage', title: 'System of Engagement'},
    {check: trustCheck, id: 'trust', title: 'System of Trust'},
    {check: intelligenceCheck, id: 'intelligence', title: 'System of Intelligence'},
    {check: conclusionCheck, id: 'conclusion', title: 'Conclusion'},
  ];

  const articleMeta = {
    title: 'Overview of Myxellia',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
    readTime: '3 minute read',
  };

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={trendingData}
    >
      <Box id="intro" ref={introRef}>
        <Text className="content" lineHeight={'25px'} color={'#000000CC'}>
          <Text as="p" marginTop={'30px'}>
            Myxellia is a forward-thinking technology infrastructure designed to help real estate
            businesses thrive, exceed client expectations, and adapt to the ever-shifting digital
            landscape. By combining user-friendly applications, data-driven intelligence, and
            built-in trust mechanisms, Myxellia empowers property development companies to deliver
            exceptional customer experiences, make well-informed decisions, and drive sustainable
            growth.
          </Text>
          <Text as="p" marginTop="20px">
            Through a transparent, efficient, and secure platform, Myxellia reduces friction in
            every aspect of real estate—from managing client relationships to buying, selling, or
            creating real estate assets. It is a cost-effective, user-focused, and scalable solution
            that simplifies operations and ensures real estate transactions are as seamless,
            borderless, and programmable as any other online activity.
          </Text>
          <Text as="p" my={'20px'}>
            At its core, Myxellia links together interconnected apps and services that give
            businesses crucial tools for day-to-day operations. From personalized customer journeys
            to advanced data analytics, Myxellia is built to strengthen client relationships,
            respond to critical questions, and illuminate opportunities for strategic improvement.
            Its value is delivered across three main pillars:
          </Text>
        </Text>

        <OrderedList fontWeight={'700'} pl={'10px'}>
          <ListItem>System of Engagement</ListItem>
          <ListItem>System of Trust</ListItem>
          <ListItem>System of Intelligence</ListItem>
        </OrderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={engageRef} id="engage">
        <Text className="content_head">System of engagement</Text>
        <Text as="p" marginTop="40px" color={'#000000CC'}>
          In a crowded market, simply hoping to meet customer expectations is no longer
          sufficient—success depends on intentionally crafted experiences. To remain relevant,
          businesses need to understand how customers perceive and interact with their brand.
          Myxellia’s engagement interface offers a fast, no-code way to create a unified digital
          touchpoint for real estate customers.
        </Text>
        <Text fontWeight={'700'} mt={'20px'} color={'#000000CC'}>
          Highlights include:
        </Text>
        <UnorderedList color={'#000000CC'}>
          <ListItem mb={'5px'}>
            <b>Streamlined Onboarding:</b> Quickly set up apps that automate Know Your Customer
            (KYC) processes in minutes.
          </ListItem>
          <ListItem mb={'5px'}>
            <b>All-in-One Customer Journey:</b> Manage payments, transactions, and property-related
            documentation, while allowing buyers to schedule inspections and explore local
            amenities.
          </ListItem>
          <ListItem mb={'5px'}>
            <b>Global Reach:</b> Accept over 135 currencies in more than 60 countries, operating
            around the clock without the need to establish separate local entities.
          </ListItem>
          <ListItem>
            <b>Personalized Experience:</b> Offer multiple purchase options—outright, installments,
            or co-ownership—while keeping clients engaged with real-time updates and online
            collaboration.
          </ListItem>
        </UnorderedList>

        <Image src={engage} mt="30px" mx="auto" w="full" />
        <Text as="p" marginTop="20px" color={'#000000CC'}>
          By narrowing the gap between traditional practices and modern expectations, this seamless
          engagement layer becomes a powerful driver of business expansion, placing the customer at
          the heart of operations and ensuring a premium user experience.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={trustRef} id="trust">
        <Text className="content_head">System of trust</Text>
        <Text as="p" marginTop="40px" color={'#000000CC'}>
          Modern real estate operations demand a move away from cumbersome spreadsheets, paperwork,
          and reactive workflows. Myxellia addresses this need by providing a proactive, automated
          approach that not only records every transaction within its engagement system but also
          places these transactions on a secure, trusted platform.
        </Text>
        <Text fontWeight={'700'} mt={'20px'} color={'#000000CC'}>
          Highlights include:
        </Text>
        <UnorderedList color={'#000000CC'}>
          <ListItem mb={'5px'}>
            <b>Automated Bookkeeping:</b> Myxellia’s AI-powered data entry eliminates manual
            processes, generating entries for payments as soon as they occur, and sending instant
            notifications to all involved parties.
          </ListItem>
          <ListItem mb={'5px'}>
            <b>Transparent Record-Keeping:</b> All transaction data is recorded and stored in real
            time, offering immediate access to comprehensive purchase histories—even for clients
            logging in for the first time.
          </ListItem>
          <ListItem mb={'5px'}>
            <b>24/7 Transaction Processing:</b> Payments can be confirmed within minutes,
            drastically reducing bottlenecks and human error.
          </ListItem>
          <ListItem>
            <b>Smart Contracts:</b> These self-executing contracts can automatically grant property
            access once payments are complete, or trigger a sale listing in case of default,
            ensuring seamless and secure transactions.
          </ListItem>
        </UnorderedList>

        <Image src={trust} my="40px" mx="auto" w="full" />
        <Text as="p" marginTop="20px" color={'#000000CC'}>
          With these tools, Myxellia not only minimizes the need for manual tasks but also delivers
          accuracy, real-time tracking, and secure data management, making it simpler for businesses
          and clients to conduct real estate transactions with confidence.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={intelligenceRef} id="intelligence">
        <Text className="content_head">System of intelligence</Text>
        <Text as="p" marginTop="40px" color={'#000000CC'}>
          Thriving in the real estate sector requires an in-depth understanding of clients and
          evolving market conditions. Myxellia’s advanced analytics harness artificial intelligence
          to process vast amounts of internal and external data, generating predictive insights and
          identifying significant trends.
        </Text>
        <Text fontWeight={'700'} mt={'20px'} color={'#000000CC'}>
          Highlights include:
        </Text>
        <UnorderedList color={'#000000CC'}>
          <ListItem mb={'5px'}>
            <b>Customer Insights:</b> Myxellia’s analytics engine uncovers what clients are likely
            to buy, when they might buy, and what influences those decisions, enabling more targeted
            offerings.
          </ListItem>
          <ListItem mb={'5px'}>
            <b>Tailored Marketing:</b> By pinpointing who might be ready for a second property or
            analyzing factors affecting loyalty, businesses can prioritize outreach and refine
            messaging.
          </ListItem>
          <ListItem>
            <b>Personalized Experiences:</b> Individualized buyer journeys can be created at scale,
            cultivating long-lasting relationships and building trust through relevant, timely
            engagement.
          </ListItem>
        </UnorderedList>

        <Text as="p" marginTop="20px" color={'#000000CC'}>
          This data-driven perspective transforms guesswork into strategy, equipping real estate
          companies with the power to better understand their clients, personalize service, and
          boost sales.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={conclusionRef} id="conclusion">
        <Text className="content_head">Conclusion</Text>
        <Text as="p" marginTop="40px" color={'#000000CC'}>
          As client expectations evolve, the real estate industry must adapt by embracing digital,
          structured, and automated processes to deliver an outstanding, end-to-end experience.
          Myxellia offers a complete solution tailored to the modern property development business.
        </Text>

        <Box bgColor={'#FFF7ED'} p={'32px'} my={'20px'} borderRadius={'8px'}>
          <Text fontWeight={'600'} fontSize={'18px'} mb={'15px'}>
            Key Takeaways
          </Text>
          <UnorderedList color={'#000000CC'}>
            <ListItem mb={'10px'}>Automated customer segmentation and content creation</ListItem>
            <ListItem mb={'10px'}>Real-Time, Data-Informed Decision Making</ListItem>
            <ListItem mb={'10px'}>Efficient Marketing and Reduced Overheads</ListItem>
            <ListItem>
              Transparent Asset Tracking and Contract Management via Smart Contracts
            </ListItem>
          </UnorderedList>
        </Box>

        <Text as="p" marginTop="20px" color={'#000000CC'}>
          By prioritizing customer needs, aligning teams with the right technology, and planning for
          growth, Myxellia empowers businesses to capture new opportunities, close more deals, and
          remain at the forefront of an ever-competitive market. For any real estate company looking
          to excel in the twenty-first century, Myxellia provides the digital backbone to thrive—now
          and for the future.
        </Text>
        <Image src={check} mt="30px" mx="auto" w="full" />
      </Box>
    </BlogLayout>
  );
};
