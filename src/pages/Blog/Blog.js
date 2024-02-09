import {Box, Button, Center, Flex, HStack, Image, Stack, Text, Link} from '@chakra-ui/react';
import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import timeIcon from '../../assets/icons/time_icon_2.svg';
import {blogDataRead, blogDataRecent} from '../../constant/blog';
import {handleIconType} from '../../utils/handleIconType';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';

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
      <Text
        display={{md: 'none'}}
        fontWeight={'500'}
        pl={8}
        fontSize={'36px'}
        mb="10px"
        color="#191919"
      >
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
          color={showBlogData === 'most_read' ? 'white' : '#4545FE'}
          bg={showBlogData === 'most_read' ? '#4545FE' : '#F2F4F7'}
          fontWeight={showBlogData === 'most_read' ? 500 : 400}
        >
          Most Read
        </Button>
        <Button
          onClick={() => setShowBlogData('most_recent')}
          color={showBlogData === 'most_recent' ? 'white' : '#4545FE'}
          bg={showBlogData === 'most_recent' ? '#4545FE' : '#F2F4F7'}
          fontWeight={showBlogData === 'most_recent' ? 500 : 400}
        >
          Most Recent
        </Button>
      </Flex>
      <Box w={{base: 'full', md: '85%'}} mx="auto">
        <Flex
          borderBottom={'1px solid #CBCBCB'}
          w="full"
          px="19px"
          align={'center'}
          justify={'space-between'}
          mb="30px"
          display={{base: 'none', md: 'flex'}}
        >
          <Text fontWeight={'300'} fontSize={'36px'} mb="20px" color="#191919">
            Most Read
          </Text>
          <HStack spacing={'15px'}>
            <Center
              cursor={'pointer'}
              onClick={() => handleMostReadScroll(-320)}
              h="36px"
              w="36px"
              borderRadius={'full'}
              color="#191919"
              border={'2px solid #191919'}
            >
              <SlArrowLeft fontWeight={700} />
            </Center>
            <Center
              cursor={'pointer'}
              onClick={() => handleMostReadScroll(320)}
              h="36px"
              w="36px"
              borderRadius={'full'}
              color="#191919"
              border={'2px solid #191919'}
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
          {blogDataRead.map(detail => (
            <Link
              display={{base: 'contents', md: 'flex'}}
              key={detail.path}
              href={detail.path || ''}
            >
              <Box
                h={'432px'}
                borderRadius={'16px'}
                shadow={'md'}
                as={motion.div}
                mx={{lg: 'auto'}}
                w={{base: 'full', md: '272px'}}
                cursor={'pointer'}
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
              >
                <Image
                  borderTopRightRadius={'16px'}
                  borderTopLeftRadius={'16px'}
                  w="full"
                  src={detail.img}
                  h="272.2px"
                  objectFit={'cover'}
                />
                <Box px="16px" py="16px">
                  <HStack spacing={'8px'} align={'center'} fontSize={'10px'}>
                    <Flex
                      align={'center'}
                      gap={'4px'}
                      py="2px"
                      px="8px"
                      borderRadius={'4px'}
                      border="1px solid rgba(69, 69, 254, 0.10)"
                    >
                      {handleIconType(detail.type)}
                      <Text fontSize={'10px'} fontWeight="400">
                        {detail.type}
                      </Text>
                    </Flex>
                    <Flex
                      align={'center'}
                      gap={'4px'}
                      py="2px"
                      px="8px"
                      borderRadius={'4px'}
                      border="1px solid rgba(69, 69, 254, 0.10)"
                    >
                      <Image w="12px" h="12px" src={timeIcon} />
                      <Text fontSize={'10px'} fontWeight="400">
                        {detail.datePosted}
                      </Text>
                    </Flex>
                  </HStack>
                  <Text my="10px" fontSize={'20px'} fontWeight={500} color={'#101828'}>
                    {detail.title}
                  </Text>
                  <Box w="fit-content" bg="#4545FE1A" borderRadius="full" px="8px" py="2px">
                    <Text fontSize={'10px'} fontWeight={300} color="#4545FE" mx="auto">
                      {detail.readTime}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
      <Box w={{base: 'full', md: '85%'}} mx="auto" mt={{lg: '44px'}}>
        <Flex
          borderBottom={'1px solid #CBCBCB'}
          w="full"
          px="19px"
          align={'center'}
          justify={'space-between'}
          mb="30px"
          display={{base: 'none', md: 'flex'}}
        >
          <Text fontWeight={'300'} fontSize={'36px'} mb="20px" color="#191919">
            Most Recent
          </Text>
          <HStack spacing={'15px'}>
            <Center
              cursor={'pointer'}
              onClick={() => handleMostRecentScroll(-320)}
              h="36px"
              w="36px"
              borderRadius={'full'}
              color="#191919"
              border={'2px solid #191919'}
            >
              <SlArrowLeft fontWeight={700} />
            </Center>
            <Center
              cursor={'pointer'}
              onClick={() => handleMostRecentScroll(320)}
              h="36px"
              w="36px"
              borderRadius={'full'}
              color="#191919"
              border={'2px solid #191919'}
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
          {blogDataRecent.map(detail => (
            <Link
              display={{base: 'contents', md: 'flex'}}
              key={detail.path}
              href={detail.path || ''}
            >
              <Box
                h={'432px'}
                borderRadius={'16px'}
                shadow={'md'}
                as={motion.div}
                mx={{lg: 'auto'}}
                w={{base: 'full', md: '272px'}}
                cursor={'pointer'}
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
              >
                <Image
                  borderTopRightRadius={'16px'}
                  borderTopLeftRadius={'16px'}
                  w="full"
                  src={detail.img}
                  h="272.2px"
                  objectFit={'cover'}
                />
                <Box px="16px" py="16px">
                  <HStack spacing={'8px'} align={'center'} fontSize={'10px'}>
                    <Flex
                      align={'center'}
                      gap={'4px'}
                      py="2px"
                      px="8px"
                      borderRadius={'4px'}
                      border="1px solid rgba(69, 69, 254, 0.10)"
                    >
                      {handleIconType(detail.type)}
                      <Text fontSize={'10px'} fontWeight="400">
                        {detail.type}
                      </Text>
                    </Flex>
                    <Flex
                      align={'center'}
                      gap={'4px'}
                      py="2px"
                      px="8px"
                      borderRadius={'4px'}
                      border="1px solid rgba(69, 69, 254, 0.10)"
                    >
                      <Image w="12px" h="12px" src={timeIcon} />
                      <Text fontSize={'10px'} fontWeight="400">
                        {detail.datePosted}
                      </Text>
                    </Flex>
                  </HStack>
                  <Text my="10px" fontSize={'20px'} fontWeight={500} color={'#101828'}>
                    {detail.title}
                  </Text>
                  <Box w="fit-content" bg="#4545FE1A" borderRadius="full" px="8px" py="2px">
                    <Text fontSize={'10px'} fontWeight={300} color="#4545FE" mx="auto">
                      {detail.readTime}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
