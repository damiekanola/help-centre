import { Center, Flex, Image, Box, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import React, { useRef } from 'react';
import veergeNDdata from '../../assets/images/blog/veerge&data.png';
import { SlArrowLeft } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import { useNavigate } from 'react-router-dom';


const Veerge_data = () => {
  const navigate = useNavigate()
  const a_ticketRef = useRef(null)
  const perksRef = useRef(null)
  const why_veergeRef = useRef(null)
  const conclusionRef = useRef(null)

  const a_ticketCheck = useIsInViewport(a_ticketRef);
  const perksCheck = useIsInViewport(perksRef)
  const why_veergeCheck = useIsInViewport(why_veergeRef)
  const conclusionCheck = useIsInViewport(conclusionRef)


  const articleContent = [
    { check: a_ticketCheck, id: 'how_to', title: 'Overview' },
    { check: perksCheck, id: 'perks', title: 'Machine Learning, Deep Learning & AI' },
    { check: why_veergeCheck, id: 'perks', title: 'Why Veerge Matters' },
    { check: conclusionCheck, id: 'perks', title: 'Conculusion' },
  ]



  return (
    <Box p='0'>
      <Flex direction={'row'} align={'stretch'} py='0' gap='70px' pr='78px' pl='150px' mt='150px' w='full' bg={'#1D6169'} maxH={'100vh'} h={'500px'} position={'relative'}>
        <Center
          onClick={() => navigate(-1)}
          position={'absolute'} top='20px'
          cursor={'pointer'} left='78px'
          h='50px' w='50px' borderRadius={'full'}
          color='#191919' bg='#fff'
        >
          <SlArrowLeft fontSize={'20px'} />
        </Center>

        <Image
          h='full' w='468px'
          src={veergeNDdata}
          bgPosition={'center'} bgSize={'cover'}
        />

        <Flex h='full' direction={'column'} align={'stretch'} justify={'space-between'} w='full'>

          <Box />
          <Box>
            <Text fontWeight={600} color='#FFF' w='full' alignSelf={'center'} fontSize='36px'>
              Veerge & Data Analytics
            </Text>
            <Text mt='45px' fontWeight={500} color='#FFF' alignSelf={'center'} fontSize='14px'>
              July 20, 2023
            </Text>
          </Box>
          <Flex w='full' justify={'space-between'} align={'center'} pb='10px'>
            <Text fontWeight={500} color='#FFF' alignSelf={'center'} fontSize='14px'>
              5 mins read
            </Text>
            <Flex align={'center'} gap='4px'>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrFacebook style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrTwitter style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <CiInstagram style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrLinkedin style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box px={'78px'} position={'relative'}>

        <Box
          bg='#F9FAFB'
          boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
          position={'absolute'}
          overflowY={'scroll'} top='-100px'
          w='100%' h='fit-content' maxW={'256px'}
          p='32px 20px'
          __css={{
            '&::-webkit-scrollbar': {
              w: '1',
            },
            '&::-webkit-scrollbar-track': {
              w: '6',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '10',
              bg: `transparent`,
            },
          }}
        >
          {/* <Box overflowY={'scroll'}> */}
          <Text mb='20px' className="article_text">Table of Content</Text>
          <Flex direction={'column'} align={'stretch'}>
            {articleContent.map((content, i) => (
              <Flex
                w='full' my='6px'
                key={i} cursor={'pointer'}
                justify='space-between' align='flex-start'>
                <Box w='5px' h='5px' borderRadius={'full'} bg={content.check ? '#4545FE' : '#606060'} />
                <Text
                  w={'90%'}
                  mt='-5px'
                  fontSize={'14px'}
                  fontWeight={content.check ? 500 : 400}
                  color={content.check ? '#4545FE' : '#191919'}
                >
                  <a href={`#${content.id}`}>
                    {content?.title}
                  </a>
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        {/* <Box shadow={'md'} p='32px 20px' w='256px' h='193px' position={'absolute'} top='-100px' bg='white'>
          <Text mb='20px' fontWeight={500} fontSize={'20px'}>Table of Content</Text>
        </Box> */}
        <Box w={'75%'} ml='auto' mt='58px' pb='70px'>
          <Box ref={a_ticketRef}>
            <Text fontWeight={600} fontSize={'36px'}>
              OVERVIEW
            </Text>
            <Text mt='30px'>
              Data analytics, in one form or another, has been an integral part of business practices throughout history. Even in ancient times, merchants would keenly observe customer buying habits and attempt to predict product demand based on their experiences and observations. This early form of data analytics laid the foundation for the sophisticated methods used today.
            </Text>
            <Text mt='30px'>
              However, it was during the 20th century that data analytics truly transformed with the advent of computational technology. The ability to handle data accurately and process large amounts of information became possible with the introduction of computers. These machines evolved from simple adding devices to more complex computing systems, enabling businesses to analyze data on a scale previously unimaginable.
            </Text>
            <Text mt='30px'>
              Presently, advanced analytic tools have taken data analysis to new heights. They can collect and analyze data from diverse sources, including demographic information, purchase history, support interactions, and individual preferences. By automatically capturing and evaluating this data, businesses gain valuable insights presented in a refined and easy-to-digest manner.
            </Text>
            <Text mt='30px'>
              Beyond traditional data analytics, the emergence of Artificial Intelligence (AI) has revolutionized the field. AI-enhanced analytics goes beyond merely presenting data; it interprets the meaning behind the data and offers actionable insights for businesses. By harnessing the power of AI, organizations can anticipate customer needs, identify opportunities, and proactively address support issues before they arise. Additionally, AI enables the creation of personalized, predictive one-on-one customer journeys tailored to individual clients.
            </Text>
            <Text mt='30px'>
              To be effective, modern AI relies on two crucial concepts: machine learning and deep learning. Machine learning enables AI systems to learn from data patterns and make decisions without explicit programming. Deep learning, a subset of machine learning, utilizes neural networks to process vast amounts of data and recognize complex patterns, thus enabling AI systems to continually improve and refine their predictions and conclusions.
            </Text>
            <Text mt='30px'>
              As AI continues to advance, it holds the potential to become an integral part of businesses, regardless of their size. By leveraging AI-powered analytics, organizations can gain a competitive edge, better understand their customers, and make data-driven decisions that drive success.
            </Text>
          </Box>
          <Box mt='20px' ref={perksRef}>
            <Text fontWeight={600} fontSize={'36px'}>
              MACHINE LEARNING, DEEP LEARNING & AI
            </Text>
            <Text mt='20px'>
              To understand the fundamental concepts driving modern business AI, it's essential to recognize that deep learning is a subset of machine learning. Machine learning is the concept of machines progressively enhancing their intelligence by assimilating information over time. This principle forms the core of nearly all AI theories because it is more practical to teach machines to learn from data incrementally rather than preprogramming all relevant information from the outset. By employing machine learning, AI can identify patterns in structured data, enabling applications like predictive recommendations commonly found on e-commerce sites and streaming services.
            </Text>
            <Text mt='20px'>
              Natural Language Processing (NLP) is a branch of AI that focuses on recognizing and understanding language, including its various uses and grammar rules, by identifying patterns within vast datasets. It finds practical applications in sentiment analysis of text, which helps businesses understand how customers perceive their brand and products.
            </Text>
            <Text mt='20px'>
              Deep learning, as the name implies, delves even further into the realm of AI capabilities. It relies on complex mathematical algorithms that grant AI the ability to learn without explicitly providing all the relevant data beforehand. Deep learning-capable AIs can be deployed in domains with limited or no human supervision and can independently learn tasks from scratch.
            </Text>
            <Text mt='20px'>
              The efficacy of deep learning heavily relies on having access to a broad and diverse pool of information. Fortunately, in today's age of constant digital communication, obtaining vast amounts of data is no longer a significant obstacle, especially in the business context.
            </Text>
          </Box>
          <Box mt='20px' ref={why_veergeRef}>
            <Text fontWeight={600} fontSize={'36px'}>
              WHY VEERGE MATTERS
            </Text>
            <Text mt='20px'>
              In the dynamic world of real estate, the value placed on risk-taking is undeniable. However, this endorsement of risk doesn't translate to property developers plunging headfirst into every uncertain opportunity. Instead, it advocates for the adoption of data-driven strategies to guide well-informed decisions. Being 'data-driven' involves a systematic approach to business choices, rooted in insights gleaned from thorough data analysis. This method empowers businesses to explore new markets, enhance customer service, augment revenue, streamline operations, and more. By grounding decisions in concrete evidence, enterprises can craft meticulous plans to achieve their objectives, ultimately bolstering their bottom line.
            </Text>
            <Text mt='20px'>
              Data-driven decisions are bolstered by empirical data, enabling business leaders to make informed choices rather than relying solely on intuition. While intuition remains valuable, data-driven leaders prioritize tangible data when making pivotal decisions.
            </Text>
            <Text mt='20px'>
              Did you know that data-driven enterprises are 20 times more likely to acquire new clients and six times more likely to retain them? These remarkable statistics underscore the pivotal role data plays in achieving business success, particularly within systems like Veerge.
            </Text>
            <Text mt='20px'>
              Veerge presents a comprehensive suite of reporting and analytics tools meticulously designed to help property development companies unravel the complexities of their data, take actionable steps, and share insights with pertinent stakeholders. These reporting tools seamlessly harmonize, facilitating effective data analysis and decision-making.
            </Text>
            <Text mt='20px'>
              Veerge transcends conventional business intelligence by seamlessly incorporating statistical modeling and supervised machine learning. This advanced approach not only scrutinizes historical data but also forecasts future outcomes. Furthermore, Veerge offers recommendations to refine predictions through predictive and prescriptive analysis.
            </Text>
            <Text mt='20px'>
              By wholeheartedly embracing Veerge's potent data analytics capabilities, property developers can harness the full potential of data-driven decision-making. This empowers them to optimize their operations and position themselves for success in a fiercely competitive real estate landscape.
            </Text>
            <Text mt='20px'>
              Insights Unveiled by Veerge:
            </Text>


            <Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Customer Demographics
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    What is the age distribution of customers?
                  </ListItem>
                  <ListItem>
                    Where is the majority of the customer base located?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box mt='20px'>
                <Text fontWeight={600} fontSize={'16px'}>
                  Property Sales
                </Text>
                <UnorderedList pl='10px'>
                  <ListItem>
                    How many properties have been sold?
                  </ListItem>
                  <ListItem>
                    Which properties have generated the highest sales volume?
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>

          </Box>
          <Box mt='30px' ref={conclusionRef}>
            <Text>
              In conclusion, the power of data-driven decision-making in the real estate industry cannot be overstated. By harnessing the capabilities of Veerge, property development companies can navigate the complexities of the market with precision and confidence. The insights generated by Veerge touch every aspect of the real estate business, from sales and customer demographics to market trends and profitability analysis. This wealth of information empowers property developers to make strategic choices that drive growth, enhance customer satisfaction, and ultimately, maximize their bottom line. The transformative potential of data-driven decision-making extends beyond immediate gains. It enables businesses to adapt to changing market conditions, anticipate customer needs, and proactively address challenges. By fostering a culture of data-driven decision-making, companies can position themselves as industry leaders, capable of thriving in a competitive landscape.
              In a world where information is abundant, data-driven businesses have a distinct advantage. They are not merely reactive; they are proactive, leveraging data as their compass to navigate the ever-evolving real estate terrain. As a result, they can make more accurate predictions, optimize their operations, and create lasting value for their customers and stakeholders. As we move forward, it is clear that the real estate industry's future lies in the hands of those who embrace the data-driven revolution. By embracing tools like Veerge and continuously refining their analytical capabilities, property developers can unlock the full potential of their data, paving the way for sustained success and innovation in this dynamic field.
            </Text>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  )
}

export default Veerge_data