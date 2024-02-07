import {Center, Flex, Image, Box, OrderedList, Text} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrFacebook, GrLinkedin, GrTwitter} from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import lead_management from '../../assets/images/blog/lead_management.png';
import {useNavigate} from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';

const Lead_management = () => {
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
        bg={'#1EA490'}
        maxH={'100vh'}
        h={'500px'}
        position={'relative'}
        justify={'center'}
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

        <Image h="full" w="468px" src={lead_management} bgPosition={'center'} bgSize={'cover'} />

        <Flex h="full" direction={'column'} align={'stretch'} justify={'space-between'} w="full">
          <Box />
          <Box>
            <Text mb="15px" fontWeight={400} color="#FFF" alignSelf={'center'} fontSize="24px">
              Features
            </Text>
            <Text
              fontFamily="euclid-semibold"
              color="#FFF"
              w="full"
              alignSelf={'center'}
              fontSize="36px"
            >
              Leads management system
            </Text>
            <Text mt="15px" fontWeight={300} color="#FFF" alignSelf={'center'} fontSize="14px">
              Revenue is the lifeblood of your business's success.
            </Text>
            <Text mt="45px" fontWeight={500} color="#FFF" alignSelf={'center'} fontSize="14px">
              By Veerge Team
            </Text>
            <Text mt="15px" fontWeight={500} color="#FFF" alignSelf={'center'} fontSize="14px">
              June 22, 2023
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

        {/* <Box shadow={'md'} p='32px 20px' w='256px' h='193px' position={'absolute'} top='-100px' bg='white'>
          <Text mb='20px' fontWeight={500} fontSize={'20px'}>Table of Content</Text>
        </Box> */}
        <Box
          w={'95%'}
          maxW={{base: '587px', xl: '45%'}}
          minW={{base: '0px', xl: '45%'}}
          mx="auto"
          mt="58px"
          pb="70px"
          fontFamily="euclid-light"
          fontSize="16px"
        >
          <Box ref={overviewRef} id="overview">
            <Text>
              Imagine diving into the fascinating world of leads in property development—it's like
              embarking on a multifaceted adventure. Small property development businesses often
              find themselves grappling with an array of manual methods, scattered spreadsheets, and
              a whirlwind of documents. These tools are meant to safeguard vital customer data and
              choreograph the intricate journey of leads, but here's the twist: they're not only
              vulnerable to occasional human hiccups but can also turn into major speed bumps,
              especially when you're trying to grow beyond your initial customer circle.{' '}
            </Text>
            <Text mt="30px">
              Ah, the trusty spreadsheets—good enough for a few leads, right? But as your leads
              start doing their own version of multiplication, these tools fall short faster than a
              sprinter running a marathon. As your property portfolio blossoms, you need something
              that scales, something that doesn't just manage leads but seamlessly transforms them
              into devoted subscribers.
            </Text>
          </Box>
          <Box ref={benefitRef} id="benefit">
            <Text mt="30px" fontFamily="euclid-semibold" fontSize={'20px'} color="#000">
              Enter the star of the show: a scalable lead management system.{' '}
            </Text>
            <Box mt="30px">
              <Text>
                In the world of property development, lead management is like a carefully
                choreographed dance. It starts with luring in those promising leads (potential
                buyers), followed by a close examination, and finally, the art of turning them into
                cherished customers. Think of it as a well-played symphony of strategic moves.{' '}
              </Text>
            </Box>
            <Box mt="30px">
              <Text>
                Here’s the catch: Only a handful of property development pros have managed to unlock
                the treasure chest of unified customer data. The result? Crafting top tier digital
                experiences becomes a bit like solving a puzzle with missing pieces. This challenge
                often stems from data silos—those sneaky dividers that create gaps between sales,
                marketing, customer service, and the product gang. But lo and behold, Veerge strides
                onto the scene—a revolutionary solution designed to tackle these puzzles head-on.
                Imagine Veerge as your personal maestro, orchestrating your intricate dance with
                both existing and potential customers. It's like a backstage pass to nurturing
                relationships every step of the way. It's more than just a fancy data keeper; it's
                your access point to a goldmine of customer insights.
              </Text>
            </Box>
            <Box mt="30px">
              <Text>
                Veerge doesn’t just wave its magic wand and stop there—it extends its superpowers to
                your customer-facing squads like sales, marketing, and customer service. Here, the
                magic lies in the data symphony. Your CRM takes center stage, making sure that all
                the valuable information stays safe, sound, and primed for action. With Veerge in
                your corner, your team can effortlessly unravel the story behind each customer.
                Armed with this treasure trove of insights, they can add a personal touch when
                sealing deals or giving world-class customer support. In essence, Veerge isn’t just
                a platform; it’s your secret recipe to mastering lead management, enhancing customer
                interactions, and ultimately fuelling the flight of your business growth.
              </Text>
            </Box>
            <Box mt="30px">
              <Text>
                So, there you have it—the epic journey of leads, turned into a tale of innovation
                and success, all thanks to Veerge. Ready to join the adventure?
              </Text>
            </Box>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  );
};

export default Lead_management;
