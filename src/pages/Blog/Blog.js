import {Box, Button, Center, Flex, HStack, Image, Stack, Text, Link} from '@chakra-ui/react';
import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import timeIcon from '../../assets/icons/time_icon_2.svg';
import {blogDataRead, blogDataRecent} from '../../constant/blog';
import {handleIconType} from '../../utils/handleIconType';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';
import {IoChevro} from 'react-icons/io5';
import {BlogCard} from './BlogCard';

export const Blog = () => {
  const [showBlogData, setShowBlogData] = useState('most_read');
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  const readScollToRef1 = useRef();
  const readScollToRef2 = useRef();

  const handleMostReadScroll = scrollAmount => {
    const newScrollPosition = scrollPosition1 + scrollAmount;
    setScrollPosition1(newScrollPosition);
    readScollToRef1.current.scrollLeft = newScrollPosition;
  };

  const handleMostRecentScroll = scrollAmount => {
    const newScrollPosition = scrollPosition2 + scrollAmount;
    setScrollPosition2(newScrollPosition);
    readScollToRef2.current.scrollLeft = newScrollPosition;
  };

  return (
    <Box w="full" pt={{base: '100px', md: '160px'}} pb="50px">
      <Text display={{md: 'none'}} fontWeight={'500'} pl={8} fontSize={'36px'} mb="10px">
        Blog
      </Text>
      <Flex
        display={{base: 'flex', md: 'none'}}
        alignItems={'center'}
        justifyContent={'center'}
        py={4}
        gap={4}
      >
        <Button
          onClick={() => setShowBlogData('most_read')}
          color={showBlogData === 'most_read' ? 'black' : '#ff0'}
          bg={showBlogData === 'most_read' ? '#ff0' : 'transparent'}
          border={'1px solid #ff0'}
          fontWeight={showBlogData === 'most_read' ? 500 : 400}
          _hover={{backgroundColor: '#ff0'}}
          _active={{backgroundColor: '#ff0'}}
        >
          Most Read
        </Button>
        <Button
          onClick={() => setShowBlogData('most_recent')}
          color={showBlogData === 'most_recent' ? 'black' : '#ff0'}
          bg={showBlogData === 'most_recent' ? '#ff0' : 'transparent'}
          border={'1px solid #ff0'}
          fontWeight={showBlogData === 'most_recent' ? 500 : 400}
          _hover={{backgroundColor: '#ff0'}}
          _active={{backgroundColor: '#ff0'}}
        >
          Most Recent
        </Button>
      </Flex>
      <Box w={{base: 'full', md: '85%'}} mx="auto">
        <Flex
          borderBottom={'1px solid #606060'}
          w="full"
          px="19px"
          align={'center'}
          justify={'space-between'}
          mb="30px"
          display={{base: 'none', md: 'flex'}}
        >
          {/* <Text fontWeight={'300'} fontSize={'36px'} mb="20px" color="#191919"> */}
          <Text fontWeight={'300'} fontSize={'36px'} mb="20px">
            Most Read
          </Text>
          <HStack spacing={'15px'}>
            <Center
              cursor={'pointer'}
              onClick={() => handleMostReadScroll(-320)}
              h="36px"
              w="36px"
              borderRadius={'full'}
              // color="#191919"
              // border={'2px solid #191919'}
              border={'2px solid #ffffff'}
            >
              <SlArrowLeft fontWeight={700} />
            </Center>
            <Center
              cursor={'pointer'}
              onClick={() => handleMostReadScroll(320)}
              h="36px"
              w="36px"
              borderRadius={'full'}
              // color="#191919"
              // border={'2px solid #191919'}
              border={'2px solid #ffffff'}
            >
              <SlArrowRight fontWeight={700} />
            </Center>
          </HStack>
        </Flex>
        <Stack
          ref={readScollToRef1}
          px="20px"
          gap={{base: '20px', md: '40px'}}
          alignItems={'center'}
          h={{base: 'full', md: '470px'}}
          overflowX={{md: 'scroll'}}
          overflowY={{md: 'hidden'}}
          className="hide_scroll"
          scrollBehavior={'smooth'}
          direction={{base: 'column', md: 'row'}}
          width={{base: 'full'}}
          display={{
            base: showBlogData === 'most_read' ? 'flex' : 'none',
            md: 'flex',
          }}
        >
          {blogDataRead.map((detail, i) => (
            <BlogCard detail={detail} key={i} />
          ))}
        </Stack>
      </Box>
      <Box w={{base: 'full', md: '85%'}} mx="auto" mt={{lg: '44px'}}>
        <Flex
          borderBottom={'1px solid #606060'}
          w="full"
          px="19px"
          align={'center'}
          justify={'space-between'}
          mb="30px"
          display={{base: 'none', md: 'flex'}}
        >
          {/* <Text fontWeight={'300'} fontSize={'36px'} mb="20px" color="#191919"> */}
          <Text fontWeight={'300'} fontSize={'36px'} mb="20px">
            Most Recent
          </Text>
          <HStack spacing={'15px'} color="#fff">
            <Center
              cursor={'pointer'}
              onClick={() => handleMostRecentScroll(-320)}
              h="36px"
              w="36px"
              borderRadius={'full'}
              // color="#191919"
              border={'2px solid #ffffff'}
            >
              <SlArrowLeft fontWeight={700} />
            </Center>
            <Center
              cursor={'pointer'}
              onClick={() => handleMostRecentScroll(320)}
              h="36px"
              w="36px"
              borderRadius={'full'}
              // color="#191919"
              border={'2px solid #ffffff'}
            >
              <SlArrowRight fontWeight={700} />
            </Center>
          </HStack>
        </Flex>
        <Stack
          px="20px"
          gap={{base: '20px', md: '40px'}}
          alignItems={'center'}
          h={{base: 'full', md: '470px'}}
          overflowX={{md: 'scroll'}}
          overflowY={{md: 'hidden'}}
          className="hide_scroll"
          scrollBehavior={'smooth'}
          direction={{base: 'column', md: 'row'}}
          width={{base: 'full'}}
          display={{
            base: showBlogData === 'most_recent' ? 'flex' : 'none',
            md: 'flex',
          }}
        >
          {blogDataRecent.map((detail, i) => (
            <BlogCard detail={detail} key={i} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
