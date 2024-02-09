import {
  Center,
  Flex,
  Image,
  Box,
  Text,
  UnorderedList,
  ListItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import veergeNDdata from '../../assets/images/blog/veerge&data.png';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrFacebook, GrLinkedin, GrTwitter} from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import {useNavigate} from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';

const Veerge_data = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const overviewRef = useRef(null);
  const machine_leaningRef = useRef(null);
  const why_veergeRef = useRef(null);
  const conclusionRef = useRef(null);
  const overviewCheck = useIsInViewport(overviewRef);
  const machine_leaningCheck = useIsInViewport(machine_leaningRef);
  const why_veergeCheck = useIsInViewport(why_veergeRef);
  const conclusionCheck = useIsInViewport(conclusionRef);
  const shareText = useBreakpointValue({base: 'Share this article', md: '5 mins read'});

  const articleContent = [
    {check: overviewCheck, id: 'overview', title: 'Overview'},
    {
      check: machine_leaningCheck,
      id: 'machine_leaning',
      title: 'Machine Learning, Deep Learning & AI',
    },
    {check: why_veergeCheck, id: 'why_veerge', title: 'Why Veerge Matters'},
    {check: conclusionCheck, id: 'conclusion', title: 'Conclusion'},
  ];

  return (
    <Box p="0">
      <Flex
        direction={{base: 'column-reverse', md: 'row'}}
        align={'stretch'}
        py="0"
        gap={{md: '70px'}}
        pr={{md: '78px'}}
        pl={{md: '150px'}}
        mt={{md: '150px'}}
        w="full"
        bg={{md: '#1D6169'}}
        maxH={{md: '100vh'}}
        h={{md: '500px'}}
        position={'relative'}
        overflowY={'hidden'}
        justifyContent={'center'}
      >
        <Center
          onClick={() => navigate('/blog')}
          position={'absolute'}
          top="20px"
          cursor={'pointer'}
          left="78px"
          h="50px"
          w="50px"
          borderRadius={'full'}
          color="#191919"
          bg="#fff"
        >
          <SlArrowLeft fontSize={'20px'} />
        </Center>
        <Image
          h={{base: '300px', md: 'full'}}
          w={{base: 'full', md: '468px'}}
          src={veergeNDdata}
          bgPosition={'center'}
          bgSize={'cover'}
          objectFit={'cover'}
          alignSelf={'center'}
          p={{base: 4, md: 0}}
        />
        <Flex
          h="full"
          direction={'column'}
          align={'stretch'}
          justify={'space-between'}
          w="full"
          mt={{base: '5rem', md: 0}}
          padding={{base: '1rem 2rem', lg: 0}}
          gap={{base: 6, md: 0}}
        >
          <Box />
          <Box
            display={{base: 'flex', md: 'block'}}
            flexDirection={'column'}
            color={{base: 'black', md: 'white !important'}}
            gap={{base: 6, md: 0}}
          >
            <Text
              fontWeight={500}
              w="full"
              alignSelf={{md: 'center'}}
              fontSize="36px"
              color={{base: '#191919 !important', md: 'white !important'}}
              lineHeight={{base: '40px', md: 'normal'}}
            >
              Veerge & Data Analytics
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text
                mt={{md: '15px'}}
                fontWeight={500}
                alignSelf={'center'}
                fontSize="14px"
                color={{base: '#3D3D3D !important', md: 'white !important'}}
              >
                August 10, 2023
              </Text>
              <Text
                fontWeight={500}
                fontSize="14px"
                color={'#3D3D3D !important'}
                display={{md: 'none'}}
              >
                5 mins read
              </Text>
            </Flex>
          </Box>
          <Flex
            w="full"
            justify={'space-between'}
            align={{md: 'center'}}
            pb="10px"
            direction={{base: 'column', md: 'row'}}
          >
            <Text
              fontWeight={{md: 500}}
              alignSelf={{md: 'center'}}
              fontSize="14px"
              color={{base: '#3D3D3D !important', md: 'white !important'}}
            >
              {shareText}
            </Text>
            <Flex align={'center'} gap="4px">
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <GrFacebook style={{borderRadius: '10000px'}} color="#000" size={17} />
              </Center>
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <GrTwitter style={{borderRadius: '10000px'}} color="#000" size={17} />
              </Center>
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <CiInstagram style={{borderRadius: '10000px'}} color="#000" size={17} />
              </Center>
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <GrLinkedin style={{borderRadius: '10000px'}} color="#000" size={17} />
              </Center>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box
        display={{base: 'flex', md: 'block'}}
        flexDirection={'column'}
        gap={{base: 8, md: 0}}
       px={'80px'}
      >
        <BlogLeftNav articleContent={articleContent} />
        <Box
          w={{base: '50%', '2xl': '35%'}}
          ml={{base: '25%', '2xl': '20%'}}
          mt={{md: '58px'}}
          pb="70px"
          fontWeight={200}
          fontSize="16px"
        >
          <Box ref={overviewRef} id="overview">
            <Text letterSpacing={'.25em'} fontWeight={500} fontSize={'36px'}>
              OVERVIEW
            </Text>
            <Text mt="30px">
              Data analytics, in one form or another, has been an integral part of business
              practices throughout history. Even in ancient times, merchants would keenly observe
              customer buying habits and attempt to predict product demand based on their
              experiences and observations. This early form of data analytics laid the foundation
              for the sophisticated methods used today.
            </Text>
            <Text mt="30px">
              However, it was during the 20th century that data analytics truly transformed with the
              advent of computational technology. The ability to handle data accurately and process
              large amounts of information became possible with the introduction of computers. These
              machines evolved from simple adding devices to more complex computing systems,
              enabling businesses to analyze data on a scale previously unimaginable.
            </Text>
            <Text mt="30px">
              Presently, advanced analytic tools have taken data analysis to new heights. They can
              collect and analyze data from diverse sources, including demographic information,
              purchase history, support interactions, and individual preferences. By automatically
              capturing and evaluating this data, businesses gain valuable insights presented in a
              refined and easy-to-digest manner.
            </Text>
            <Text mt="30px">
              Beyond traditional data analytics, the emergence of Artificial Intelligence (AI) has
              revolutionized the field. AI-enhanced analytics goes beyond merely presenting data; it
              interprets the meaning behind the data and offers actionable insights for businesses.
              By harnessing the power of AI, organizations can anticipate customer needs, identify
              opportunities, and proactively address support issues before they arise. Additionally,
              AI enables the creation of personalized, predictive one-on-one customer journeys
              tailored to individual clients.
            </Text>
            <Text mt="30px">
              To be effective, modern AI relies on two crucial concepts: machine learning and deep
              learning. Machine learning enables AI systems to learn from data patterns and make
              decisions without explicit programming. Deep learning, a subset of machine learning,
              utilizes neural networks to process vast amounts of data and recognize complex
              patterns, thus enabling AI systems to continually improve and refine their predictions
              and conclusions.
            </Text>
            <Text mt="30px">
              As AI continues to advance, it holds the potential to become an integral part of
              businesses, regardless of their size. By leveraging AI-powered analytics,
              organizations can gain a competitive edge, better understand their customers, and make
              data-driven decisions that drive success.
            </Text>
          </Box>
          <Box mt="20px" ref={machine_leaningRef} id="machine_leaning">
            <Text letterSpacing={'.25em'} fontWeight={500} fontSize={'36px'}>
              MACHINE LEARNING, DEEP LEARNING & AI
            </Text>
            <Text mt="20px">
              To understand the fundamental concepts driving modern business AI, it's essential to
              recognize that deep learning is a subset of machine learning. Machine learning is the
              concept of machines progressively enhancing their intelligence by assimilating
              information over time. This principle forms the core of nearly all AI theories because
              it is more practical to teach machines to learn from data incrementally rather than
              preprogramming all relevant information from the outset. By employing machine
              learning, AI can identify patterns in structured data, enabling applications like
              predictive recommendations commonly found on e-commerce sites and streaming services.
            </Text>

            <Text mt="20px">
              Natural Language Processing (NLP) is a branch of AI that focuses on recognizing and
              understanding language, including its various uses and grammar rules, by identifying
              patterns within vast datasets. It finds practical applications in sentiment analysis
              of text, which helps businesses understand how customers perceive their brand and
              products.
            </Text>

            <Text mt="20px">
              Deep learning, as the name implies, delves even further into the realm of AI
              capabilities. It relies on complex mathematical algorithms that grant AI the ability
              to learn without explicitly providing all the relevant data beforehand. Deep
              learning-capable AIs can be deployed in domains with limited or no human supervision
              and can independently learn tasks from scratch.
            </Text>

            <Text mt="20px">
              The efficacy of deep learning heavily relies on having access to a broad and diverse
              pool of information. Fortunately, in today's age of constant digital communication,
              obtaining vast amounts of data is no longer a significant obstacle, especially in the
              business context.
            </Text>
          </Box>
          <Box mt="20px" ref={why_veergeRef} id="why_veerge">
            <Text letterSpacing={'.25em'} fontWeight={500} fontSize={'36px'}>
              WHY VEERGE MATTERS
            </Text>
            <Text mt="20px">
              In the dynamic world of real estate, the value placed on risk-taking is undeniable.
              However, this endorsement of risk doesn't translate to property developers plunging
              headfirst into every uncertain opportunity. Instead, it advocates for the adoption of
              data-driven strategies to guide well-informed decisions. Being 'data-driven' involves
              a systematic approach to business choices, rooted in insights gleaned from thorough
              data analysis. This method empowers businesses to explore new markets, enhance
              customer service, augment revenue, streamline operations, and more. By grounding
              decisions in concrete evidence, enterprises can craft meticulous plans to achieve
              their objectives, ultimately bolstering their bottom line.
            </Text>
            <Text mt="20px">
              Data-driven decisions are bolstered by empirical data, enabling business leaders to
              make informed choices rather than relying solely on intuition. While intuition remains
              valuable, data-driven leaders prioritize tangible data when making pivotal decisions.
            </Text>
            <Text mt="20px">
              Did you know that data-driven enterprises are 20 times more likely to acquire new
              clients and six times more likely to retain them? These remarkable statistics
              underscore the pivotal role data plays in achieving business success, particularly
              within systems like Veerge.
            </Text>
            <Text mt="20px">
              Veerge presents a comprehensive suite of reporting and analytics tools meticulously
              designed to help property development companies unravel the complexities of their
              data, take actionable steps, and share insights with pertinent stakeholders. These
              reporting tools seamlessly harmonize, facilitating effective data analysis and
              decision-making.
            </Text>
            <Text mt="20px">
              Veerge transcends conventional business intelligence by seamlessly incorporating
              statistical modeling and supervised machine learning. This advanced approach not only
              scrutinizes historical data but also forecasts future outcomes. Furthermore, Veerge
              offers recommendations to refine predictions through predictive and prescriptive
              analysis.
            </Text>
            <Text mt="20px">
              By wholeheartedly embracing Veerge's potent data analytics capabilities, property
              developers can harness the full potential of data-driven decision-making. This
              empowers them to optimize their operations and position themselves for success in a
              fiercely competitive real estate landscape.
            </Text>
            <Text mt="20px">Insights Unveiled by Veerge:</Text>

            <Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many properties have been sold?</ListItem>
                  <ListItem>Which properties have generated the highest sales volume?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Demographics
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What is the age distribution of customers?</ListItem>
                  <ListItem>Where is the majority of the customer base located?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Feedback
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What are customers saying about properties and services?</ListItem>
                  <ListItem>Are there common issues or complaints?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Lead Generation
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many leads are generated each month?</ListItem>
                  <ListItem>
                    Which marketing channels are most effective in generating leads?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Engagement
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How often do customers interact with the application?</ListItem>
                  <ListItem>Which features are most frequently used by customers?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Inventory
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many properties are available for sale?</ListItem>
                  <ListItem>What types of properties are in highest demand?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Sales Funnel Conversion
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What is the conversion rate of leads to actual property sales?
                  </ListItem>
                  <ListItem>Where do potential customers drop off in the sales process?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Retention
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What is the customer churn rate?</ListItem>
                  <ListItem>What are the main reasons for customer attrition?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Sales Performance
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How are sales teams performing in different regions?</ListItem>
                  <ListItem>
                    Which sales representatives have the highest conversion rates?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Pricing
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How do property prices vary across different locations?</ListItem>
                  <ListItem>Are there any pricing trends based on property features?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Lifetime Value
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What is the average customer lifetime value?</ListItem>
                  <ListItem>How does it vary for different customer segments?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Referral Tracking
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many customers were acquired through referrals?</ListItem>
                  <ListItem>Which customers are most likely to refer others?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Market Demand
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What is the overall demand for properties in the market?</ListItem>
                  <ListItem>Are there any seasonal fluctuations in demand?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Inventory Turnover
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How quickly are properties being sold once listed?</ListItem>
                  <ListItem>Which properties have the longest holding periods?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Satisfaction
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How satisfied are customers with their purchase experience?</ListItem>
                  <ListItem>What aspects of the application need improvement?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Support Metrics
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What is the average response time for customer support inquiries?
                  </ListItem>
                  <ListItem>How many issues are resolved on the first contact?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Inspection Data
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many properties pass inspection without issues?</ListItem>
                  <ListItem>What are the common issues found during inspections?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Sales Forecasting
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What is the projected sales revenue for the next quarter/year?
                  </ListItem>
                  <ListItem>Are there any seasonal patterns in sales?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Behaviour Segmentation
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What are the different types of customers using the application?
                  </ListItem>
                  <ListItem>How do their behaviours and preferences differ?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Cash Flow Analysis
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What is the cash flow position of the business?</ListItem>
                  <ListItem>
                    How does cash flow vary during different stages of property development?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Marketing ROI
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Which marketing campaigns provide the highest return on investment?
                  </ListItem>
                  <ListItem>How much revenue is generated per marketing dollar spent?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Appreciation
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How do property values change over time?</ListItem>
                  <ListItem>Which locations experience the highest appreciation rates?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  User Acquisition Cost
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How much does it cost to acquire a new customer?</ListItem>
                  <ListItem>What are the most cost-effective user acquisition channels?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer LTV vs. CAC
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    - Is the customer lifetime value higher than the customer acquisition cost?
                  </ListItem>
                  <ListItem>- What is the payback period for customer acquisition costs?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Regulatory Compliance
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Are all properties and transactions compliant with local regulations?
                  </ListItem>
                  <ListItem>What compliance issues have been identified?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Application Performance
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How responsive is the application under different user loads?</ListItem>
                  <ListItem>Are there any bottlenecks affecting performance?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Loyalty Programs
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How effective are loyalty programs in retaining customers?</ListItem>
                  <ListItem>What rewards or incentives drive the most loyalty?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Market Trends and Insights
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What are the emerging trends in the property market?</ListItem>
                  <ListItem>How can the company capitalize on these trends?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Segmentation for Personalization
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How can the application personalize offers based on customer preferences?
                  </ListItem>
                  <ListItem>Which customer segments respond best to personalized offers?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Application Usability and User Experience
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How do users rate the application's usability and user experience?
                  </ListItem>
                  <ListItem>What improvements can be made to enhance user satisfaction?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Inventory Age Analysis
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How long have properties been in the inventory before sale?</ListItem>
                  <ListItem>Are there any patterns related to unsold inventory?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Sales Channel Effectiveness
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Which sales channels (e.g., online, offline, agents) perform best?
                  </ListItem>
                  <ListItem>How can the company optimize its sales distribution channels?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Journey Mapping
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What are the key touchpoints in the customer journey?</ListItem>
                  <ListItem>
                    How can the company improve customer satisfaction at each stage?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Lead-to-Customer Conversion Time
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How much time does it take from lead generation to closing a sale?
                  </ListItem>
                  <ListItem>Are there any bottlenecks in the conversion process?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Market Segmentation for Expansion
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Which geographical areas show the most potential for expansion?
                  </ListItem>
                  <ListItem>
                    What are the characteristics of the target market in each area?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Lifetime Value by Acquisition Source
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How does the customer lifetime value vary by the source of acquisition?
                  </ListItem>
                  <ListItem>Which acquisition sources bring the most valuable customers?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Payment Delay Analysis
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How often do customers delay instalment payments?</ListItem>
                  <ListItem>Are there any patterns related to payment delays?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property ROI (Return on Investment)
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What is the return on investment for different properties?</ListItem>
                  <ListItem>Which properties have the highest ROI?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Comparative Analysis of Property Features
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What property features are most sought after by customers?</ListItem>
                  <ListItem>
                    How does the demand for different features vary across properties?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Refund Rate
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How often do customers request refunds, and for what reasons?</ListItem>
                  <ListItem>
                    Are there any specific pain points in the customer experience that lead to
                    refunds?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Engagement Metrics
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What is the average time spent by customers on the application?
                  </ListItem>
                  <ListItem>How many customers return for repeat transactions?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Sales Team Efficiency
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many leads does each salesperson convert on average?</ListItem>
                  <ListItem>
                    Are there any sales team members who require additional support or training?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Profitability Analysis by Property Type
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What is the profitability of different property types (e.g., residential,
                    commercial)?
                  </ListItem>
                  <ListItem>
                    Which property types contribute the most to overall revenue and profits?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Referral Sources
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>Where do referred customers primarily come from?</ListItem>
                  <ListItem>Which referral sources are the most effective?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Segmentation by Purchase Frequency
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How often do customers make property purchases?</ListItem>
                  <ListItem>
                    Are there trends in repeat purchases within certain customer segments?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Market Sentiment Analysis
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What is the sentiment of online discussions and reviews about the company's
                    properties?
                  </ListItem>
                  <ListItem>How can sentiment analysis inform marketing strategies?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Rental Property Metrics
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many properties are rented out?</ListItem>
                  <ListItem>What is the average rental income per property?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Lead Source Conversion Rates
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>Which lead sources have the highest conversion rates?</ListItem>
                  <ListItem>
                    How can marketing efforts be optimized for underperforming sources?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Location Analysis
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What are the key factors influencing property location choices
                  </ListItem>
                  <ListItem>How can location data inform future development decisions?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Purchase History
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What properties have individual customers purchased in the past?
                  </ListItem>
                  <ListItem>How can this data be used for personalized recommendations?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Market Segmentation by Property Size
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What sizes of properties are most popular among buyers?</ListItem>
                  <ListItem>Are there trends in property size preferences?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Payment Method Analysis
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What payment methods do customers prefer?</ListItem>
                  <ListItem>Is there demand for additional payment options?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Onboarding Efficiency
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How long does it take for new customers to get fully onboarded?
                  </ListItem>
                  <ListItem>Are there ways to streamline the onboarding process?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Development Cost Breakdown
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What are the major cost components of property development?</ListItem>
                  <ListItem>Where can cost savings be realized?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Satisfaction by Region
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Do customers in different regions have varying satisfaction levels?
                  </ListItem>
                  <ListItem>How can regional strategies be adjusted accordingly?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Market Expansion Feasibility
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What is the potential for expanding operations into new markets?
                  </ListItem>
                  <ListItem>What are the risks associated with expansion?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Purchase Behaviour Over Time
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How does customer behaviour change seasonally or over the years?
                  </ListItem>
                  <ListItem>How can marketing campaigns align with these changes?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Age
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What is the average age of properties in the inventory?</ListItem>
                  <ListItem>How does property age affect pricing and demand?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Portfolio Diversification
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How diversified is the property portfolio in terms of property types and
                    locations?
                  </ListItem>
                  <ListItem>Are there gaps or over-concentration in the portfolio?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Education Engagement
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How many customers engage with educational content on property buying?
                  </ListItem>
                  <ListItem>Does education impact conversion rates?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Resale Data
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How many properties are resold by customers, and at what frequency?
                  </ListItem>
                  <ListItem>What motivates customers to resell properties?</ListItem>
                </UnorderedList>
              </Box>
              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Mobile App Usage Analytics
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many users access the platform through mobile apps?</ListItem>
                  <ListItem>What features are most used on mobile?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Amenities Analysis
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>What amenities in properties are most attractive to buyers?</ListItem>
                  <ListItem>How can amenities be enhanced to boost sales?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Communication Effectiveness
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How effective are email, SMS, or push notifications in engaging customers?
                  </ListItem>
                  <ListItem>Which communication channels have the highest response rates?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Inspection Frequency
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How frequently are properties inspected for maintenance and quality?
                  </ListItem>
                  <ListItem>
                    Are there recommendations for optimizing inspection schedules?
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Segmentation by Property Preferences
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Do customers have specific preferences for property features (e.g., swimming
                    pools, gardens)?
                  </ListItem>
                  <ListItem>How can these preferences be catered to?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Predictive Maintenance Needs
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>Can data predict when a property will require maintenance?</ListItem>
                  <ListItem>How can predictive maintenance reduce costs and downtime?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Purchase Intent Data
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>How many customers express intent to purchase a property?</ListItem>
                  <ListItem>What factors influence their decision-making process?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Exit Surveys
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>Why do customers choose not to complete a purchase?</ListItem>
                  <ListItem>Are there opportunities to address their concerns?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Portfolio Valuation
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What is the current estimated value of the entire property portfolio?
                  </ListItem>
                  <ListItem>How does it compare to the total investment?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Inspection Efficiency
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How efficient are property inspections in terms of time and resources?
                  </ListItem>
                  <ListItem>Are there ways to streamline the process?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Cross-Selling Opportunities
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Are there opportunities to cross-sell additional services or properties to
                    existing customers?
                  </ListItem>
                  <ListItem>What are their unmet needs?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Market Risk Analysis
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    What external factors (e.g., economic conditions, political stability) pose
                    risks to the business?
                  </ListItem>
                  <ListItem>How can these risks be mitigated?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Property Financing Data
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How many customers use financing options, and which types are most popular?
                  </ListItem>
                  <ListItem>What is the default rate on financed properties?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Market Niche Identification
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Are there underserved niches or segments in the property market?
                  </ListItem>
                  <ListItem>How can the company tailor offerings to these niches?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Relationship Building
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    How are long-term customer relationships nurtured and maintained?
                  </ListItem>
                  <ListItem>What strategies are most effective in building trust?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Customer Loyalty Predictive Analytics
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>
                    Can data predict which customers are most likely to become loyal advocates?
                  </ListItem>
                  <ListItem>How can loyalty-building efforts be focused effectively?</ListItem>
                </UnorderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  Predictive Sales Modelling
                </Text>
                <UnorderedList pl="10px">
                  <ListItem>Can data models predict future sales trends and patterns?</ListItem>
                  <ListItem>How can these predictions inform strategic decisions?</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
          <Box mt="30px" ref={conclusionRef} id="conclusion">
            <Text>
              In conclusion, the power of data-driven decision-making in the real estate industry
              cannot be overstated. By harnessing the capabilities of Veerge, property development
              companies can navigate the complexities of the market with precision and confidence.
              The insights generated by Veerge touch every aspect of the real estate business, from
              sales and customer demographics to market trends and profitability analysis. This
              wealth of information empowers property developers to make strategic choices that
              drive growth, enhance customer satisfaction, and ultimately, maximize their bottom
              line. The transformative potential of data-driven decision-making extends beyond
              immediate gains. It enables businesses to adapt to changing market conditions,
              anticipate customer needs, and proactively address challenges. By fostering a culture
              of data-driven decision-making, companies can position themselves as industry leaders,
              capable of thriving in a competitive landscape. In a world where information is
              abundant, data-driven businesses have a distinct advantage. They are not merely
              reactive; they are proactive, leveraging data as their compass to navigate the
              ever-evolving real estate terrain. As a result, they can make more accurate
              predictions, optimize their operations, and create lasting value for their customers
              and stakeholders. As we move forward, it is clear that the real estate industry's
              future lies in the hands of those who embrace the data-driven revolution. By embracing
              tools like Veerge and continuously refining their analytical capabilities, property
              developers can unlock the full potential of their data, paving the way for sustained
              success and innovation in this dynamic field.
            </Text>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  );
};

export default Veerge_data;
