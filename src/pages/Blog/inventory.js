import {Center, Flex, Image, Box, OrderedList, Text, useBreakpointValue} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrFacebook, GrLinkedin, GrTwitter} from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import inventory_management from '../../assets/images/blog/inventory_management.png';
import {useNavigate} from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';
import {FaFacebook} from 'react-icons/fa6';

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
  const shareText = useBreakpointValue({base: 'Share this article', md: '5 mins read'});

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
        bg={{md: '#407BFF'}}
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
          src={inventory_management}
          bgPosition={'center'}
          bgSize={'cover'}
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
          color={{base: '#ffffff !important'}}
        >
          <Box />
          <Box
            display={{base: 'flex', md: 'block'}}
            flexDirection={'column'}
            gap={{base: 6, md: 0}}
          >
            <Text
              fontWeight={500}
              w="full"
              alignSelf={'center'}
              fontSize="36px"
              lineHeight={{base: '40px', md: 'normal'}}
            >
              Inventory Management system
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text mt={{md: '15px'}} fontWeight={400} alignSelf={'center'} fontSize="14px">
                April 04, 2023
              </Text>
              <Text fontWeight={400} fontSize="14px" display={{md: 'none'}}>
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
            <Text fontWeight={{md: 400}} alignSelf={{md: 'center'}} fontSize="14px">
              {shareText}
            </Text>
            <Flex align={'center'} gap="4px">
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <FaFacebook style={{borderRadius: '10000px'}} color="#000" size={17} />
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
        px={{base: '20px', md: '80px'}}
      >
        <BlogLeftNav articleContent={articleContent} />
        <Box
          m={{base: '10px auto', md: '58px auto'}}
          pb={{base: '10px', md: '70px'}}
          fontWeight={200}
          fontSize="16px"
          w={{base: '100%', md: '50%', '2xl': '35%'}}
        >
          <Box ref={overviewRef} id="overview">
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
          <Box ref={benefitRef} id="benefit">
            <Text mt="30px" fontWeight={500} fontSize={'36px'}>
              Benefits of this system
            </Text>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                1. Precise Allocation{' '}
              </Text>
              <Text>
                By accurately tracking the availability of each unit type, property development
                companies can ensure that clients are presented with up-to-date and accurate
                options. This minimises the risk of overbooking or overselling and maintains
                customer trust.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                2. Optimized Pricing Strategies{' '}
              </Text>
              <Text>
                This system allows property developers to implement dynamic pricing strategies based
                on demand, availability, and market trends. This ensures that unit types are priced
                competitively, maximizing revenue potential.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                3. Customized Offerings{' '}
              </Text>
              <Text>
                Property developers can use the insights from this system to tailor their offerings
                to match market demand. This level of customization enhances the appeal of the
                development to potential buyers or tenants.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                4. Accurate Sales Forecasting
              </Text>
              <Text>
                With real-time data on unit type availability and sales trends, property development
                companies can create more accurate sales forecasts. This aids in resource planning,
                budgeting, and overall project management.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                5. Customer Satisfaction
              </Text>
              <Text>
                By presenting potential buyers or tenants with accurate and updated information
                about available unit types, property developers enhance customer satisfaction. This
                transparency builds trust and fosters positive relationships.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                6.Project Performance Evaluation
              </Text>
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
