import {Center, Flex, Image, Box, OrderedList, Text} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrFacebook, GrLinkedin, GrTwitter} from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import inventory_management from '../../assets/images/blog/inventory_management.png';
import {useNavigate} from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';

const Inventory = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const overviewRef = useRef(null);
  const benefitRef = useRef(null);

  const overviewCheck = useIsInViewport(overviewRef);
  const benefitCheck = useIsInViewport(benefitRef);

  const articleContent = [
    {check: overviewCheck, id: 'overview', title: 'Overview'},
    {check: benefitCheck, id: 'benefit', title: 'Benefits of this system'},
  ];

  return (
    <Box p="0">
      <Flex
        direction={'row'}
        align={'stretch'}
        py="0"
        gap="70px"
        pr="78px"
        pl="150px"
        mt="150px"
        w="full"
        bg={'#407BFF'}
        maxH={'100vh'}
        h={'500px'}
        position={'relative'}
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
          h="full"
          w="468px"
          src={inventory_management}
          bgPosition={'center'}
          bgSize={'cover'}
        />
        <Flex h="full" direction={'column'} align={'stretch'} justify={'space-between'} w="full">
          <Box />
          <Box>
            <Text fontWeight={500} color='#FFF' w='full' alignSelf={'center'} fontSize='36px'>
              Inventory Management system
            </Text>
            <Text mt="45px" fontWeight={500} color="#FFF" alignSelf={'center'} fontSize="14px">
              April 04, 2023
            </Text>
          </Box>
          <Flex w="full" justify={'space-between'} align={'center'} pb="10px">
            <Text fontWeight={500} color="#FFF" alignSelf={'center'} fontSize="14px">
              5 mins read
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
      <Box px={'78px'}>
        <BlogLeftNav articleContent={articleContent} />
        <Box w={'95%'}
          maxW={{base: '587px', xl: '40%'}}
          minW={{base: '0px', xl: '40%'}}
          mx="auto" mt='58px' pb='70px' fontWeight={200} fontSize='16px'>
          <Box ref={overviewRef} id='overview'>
            <Text>
              Inventory management serves as the bedrock of efficient operations across all business
              sectors, including property development firms. Within the dynamic realm of property
              development, characterized by its multifaceted and ever-evolving nature, success
              hinges on astute management of various factors from initial design and meticulous
              planning to the intricate facets of marketing and eventual sales. Amidst this
              complexity lies a pivotal element that can significantly impact the success of a
              property development venture – the proficient management of unit types.
            </Text>
            <Text mt="30px">
              Leading property development entities often contend with the challenge of overselling,
              a dilemma stemming from diverse factors. This challenge underscores the imperative for
              a strategic intervention tailored to address the intricacies of unit inventory
              management. Veerge's inventory management system serves as the digital backbone for
              property developers, effectively overseeing and regulating the availability,
              allocation, and sales of different unit types. Tailored to meet the unique
              requirements of the industry, this system offers a suite of benefits that contribute
              to streamlined operations and favorable outcomes.
            </Text>
          </Box>
          <Box ref={benefitRef} id='benefit'>
            <Text mt='30px' fontWeight={500} fontSize={'36px'} color='#000'>
              Benefits of this system
            </Text>
            <Box mt='30px'>
              <Text fontWeight={500} fontSize={'20px'} color='#000'>1. Precise Allocation </Text>
              <Text>
                By accurately tracking the availability of each unit type, property development
                companies can ensure that clients are presented with up-to-date and accurate
                options. This minimises the risk of overbooking or overselling and maintains
                customer trust.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={500} fontSize={'20px'} color='#000'>2. Optimized Pricing Strategies </Text>
              <Text>
                This system allows property developers to implement dynamic pricing strategies based
                on demand, availability, and market trends. This ensures that unit types are priced
                competitively, maximizing revenue potential.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={500} fontSize={'20px'} color='#000'>3. Customized Offerings </Text>
              <Text>
                Property developers can use the insights from this system to tailor their offerings
                to match market demand. This level of customization enhances the appeal of the
                development to potential buyers or tenants.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={500} fontSize={'20px'} color='#000'>4. Accurate Sales Forecasting</Text>
              <Text>
                With real-time data on unit type availability and sales trends, property development
                companies can create more accurate sales forecasts. This aids in resource planning,
                budgeting, and overall project management.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={500} fontSize={'20px'} color='#000'>5. Customer Satisfaction</Text>
              <Text>
                By presenting potential buyers or tenants with accurate and updated information
                about available unit types, property developers enhance customer satisfaction. This
                transparency builds trust and fosters positive relationships.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={500} fontSize={'20px'} color='#000'>6.Project Performance Evaluation</Text>
              <Text>
                The inventory management system provides a clear picture of the popularity of
                different unit types. This information is invaluable for evaluating the success of
                different projects and guiding future development decisions.
              </Text>
            </Box>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  );
};

export default Inventory;
