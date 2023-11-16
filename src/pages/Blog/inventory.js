import { Center, Flex, Image, Box, OrderedList, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import inventory_management from '../../assets/images/blog/inventory_management.png';
import { useNavigate } from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';


const Inventory = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const overviewRef = useRef(null);
  const benefitRef = useRef(null);

  const overviewCheck = useIsInViewport(overviewRef);
  const benefitCheck = useIsInViewport(benefitRef)


  const articleContent = [
    { check: overviewCheck, id: 'overview', title: 'Overview' },
    { check: benefitCheck, id: 'benefit', title: 'Benefits of this system' },
  ]



  return (
    <Box p='0'>
      <Flex direction={'row'} align={'stretch'} py='0' gap='70px' pr='78px' pl='150px' mt='150px' w='full' bg={'#407BFF'} maxH={'100vh'} h={'500px'} position={'relative'}>
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
          src={inventory_management}
          bgPosition={'center'} bgSize={'cover'}
        />

        <Flex h='full' direction={'column'} align={'stretch'} justify={'space-between'} w='full'>

          <Box />
          <Box>
            <Text fontFamily='euclid-semibold' color='#FFF' w='full' alignSelf={'center'} fontSize='36px'>
              Inventory Management system
            </Text>
            <Text mt='45px' fontWeight={500} color='#FFF' alignSelf={'center'} fontSize='14px'>
              April 04, 2023
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
      <Box px={'78px'}>

        <BlogLeftNav articleContent={articleContent} />

        {/* <Box shadow={'md'} p='32px 20px' w='256px' h='193px' position={'absolute'} top='-100px' bg='white'>
          <Text mb='20px' fontWeight={500} fontSize={'20px'}>Table of Content</Text>
        </Box> */}
        <Box w={'75%'} ml='auto' mt='58px' pb='70px' fontFamily='euclid-light' fontSize='16px'>
          <Box ref={overviewRef} id='overview'>
            <Text>
              Inventory management forms the cornerstone of efficient operations in any business, a principle that holds equally true for property development companies. The domain of property development is renowned for its intricate and continually evolving nature. It encompasses a wide spectrum of variables, ranging from initial design and meticulous planning to the finer aspects of marketing and eventual sales. Amidst this complexity, a pivotal factor emerges, one with the potential to profoundly influence the success of a property development enterprise – the adept management of unit types.
            </Text>
            <Text mt='30px'>
              Prominent property development corporations frequently grapple with the challenge of overselling, a predicament stemming from various factors. This issue underscores the need for a strategic intervention that addresses the nuances of unit inventory management. Veerge’s inventory management system, acts as the digital backbone for property developers. This system effectively oversees and controls the availability, allocation, and sales of different unit types. Tailored to the industry's unique requirements, it offers a range of benefits that contribute to streamlined operations and favourable outcomes.
            </Text>
          </Box>
          <Box ref={benefitRef} id='benefit'>
            <Text mt='30px' fontFamily='euclid-semibold' fontSize={'36px'} color='#000'>
              Benefits of this system
            </Text>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>1. Precise Allocation </Text>
              <Text>
                By accurately tracking the availability of each unit type, property development companies can ensure that clients are presented with up-to-date and accurate options. This minimises the risk of overbooking or overselling and maintains customer trust.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>2. Optimized Pricing Strategies </Text>
              <Text>
                This system allows property developers to implement dynamic pricing strategies based on demand, availability, and market trends. This ensures that unit types are priced competitively, maximizing revenue potential.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>3. Customized Offerings </Text>
              <Text>
                Property developers can use the insights from this system to tailor their offerings to match market demand. This level of customization enhances the appeal of the development to potential buyers or tenants.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>4. Accurate Sales Forecasting</Text>
              <Text>
                With real-time data on unit type availability and sales trends, property development companies can create more accurate sales forecasts. This aids in resource planning, budgeting, and overall project management.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>5. Customer Satisfaction</Text>
              <Text>
                By presenting potential buyers or tenants with accurate and updated information about available unit types, property developers enhance customer satisfaction. This transparency builds trust and fosters positive relationships.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>6.Project Performance Evaluation</Text>
              <Text>
                The inventory management system provides a clear picture of the popularity of different unit types. This information is invaluable for evaluating the success of different projects and guiding future development decisions.
              </Text>
            </Box>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  )
}

export default Inventory