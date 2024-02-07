import {Box, Center, Flex, HStack, Image, Text} from '@chakra-ui/react';
import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import timeIcon from '../../assets/icons/time_icon_2.svg';
import {blogDataRead, blogDataRecent} from '../../constant/blog';
import {handleIconType} from '../../utils/handleIconType';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';

export const Blog = () => {
  // useEffect(() => {
  //   document.title = 'Blog';
  // }, []);
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
    <Box w="full" pt="160px" pb="50px">
      <Box w="85%" mx="auto">
        <Flex
          borderBottom={'1px solid #CBCBCB'}
          w="full"
          px="19px"
          align={'center'}
          justify={'space-between'}
          mb="30px"
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
        <HStack
          ref={readScollToRef1}
          px="20px"
          spacing="45px"
          alignItems={'center'}
          h="470px"
          overflowX={'scroll'}
          overflowY={'hidden'}
          className="hide_scroll"
          scrollBehavior={'smooth'}
        >
          {blogDataRead.map(detail => (
            <Link key={detail.path} to={detail.path || ''}>
              <Box
                h={'432px'}
                borderRadius={'16px'}
                shadow={'md'}
                as={motion.div}
                mx={'auto'}
                w="272px"
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
        </HStack>
      </Box>
      <Box w="85%" mx="auto" mt="44px">
        <Flex
          borderBottom={'1px solid #CBCBCB'}
          w="full"
          px="19px"
          align={'center'}
          justify={'space-between'}
          mb="30px"
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
        <HStack
          ref={readScollToRef2}
          px="20px"
          spacing="45px"
          alignItems={'center'}
          h="470px"
          overflowX={'scroll'}
          overflowY={'hidden'}
          className="hide_scroll"
          scrollBehavior={'smooth'}
        >
          {blogDataRecent.map(detail => (
            <Link key={detail.path} to={detail.path || ''}>
              <Box
                h={'432px'}
                borderRadius={'16px'}
                shadow={'md'}
                as={motion.div}
                mx={'auto'}
                w="272px"
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
        </HStack>
      </Box>
    </Box>
  );
};
