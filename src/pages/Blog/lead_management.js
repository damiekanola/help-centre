import {Center, Flex, Image, Box, OrderedList, Text, useBreakpointValue} from '@chakra-ui/react';
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
  const shareText = useBreakpointValue({base: 'Share this article', md: '5 mins read'});

  const articleContent = [
    {check: overviewCheck, id: 'overview', title: 'Overview'},
    {check: benefitCheck, id: 'benefit', title: 'Benefits of this system'},
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
        bg={{md: '#1EA490'}}
        maxH={{md: '100vh'}}
        h={{md: '500px'}}
        position={'relative'}
        overflowY={'hidden'}
        justifyContent={'center'}
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
        <Image
          h={{base: '300px', md: 'full'}}
          w={{base: 'full', md: '468px'}}
          src={lead_management}
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
              alignSelf={'center'}
              fontSize="36px"
              color={{base: '#191919 !important', md: 'white !important'}}
              lineHeight={{base: '40px', md: 'normal'}}
            >
              Leads management system
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text
                mt={{md: '15px'}}
                fontWeight={500}
                alignSelf={'center'}
                fontSize="14px"
                color={{base: '#3D3D3D !important', md: 'white !important'}}
              >
                July 20, 2022
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
          w={'95%'}
          maxW={{base: '587px', xl: '40%'}}
          minW={{base: '0px', xl: '40%'}}
          mx="auto"
          mt={{md: '58px'}}
          pb="70px"
          fontWeight={200}
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
            <Text mt="30px" fontWeight={500} fontSize={'20px'} color="#000">
              Enter the star of the show: a scalable lead management system.
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
                the treasure chest of unified customer data. The result? Crafting top tier digital
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
