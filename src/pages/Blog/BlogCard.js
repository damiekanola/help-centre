import {Box, Flex, HStack, Image, Link, Text} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {handleIconType} from '../../utils/handleIconType';
// import timeIcon from '../../assets/icons/time_icon_2.svg';
import timeIcon from '../../assets/icons/time_icon.svg';
import {handleTagType} from '../../utils/handleTags';

export const BlogCard = ({detail}) => {
  return (
    <Link
      display={{base: 'contents', md: 'flex'}}
      href={detail.path || ''}
      textDecoration={'none'}
      _hover={{textDecoration: 'none'}}
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
        bgColor={'#191919'}
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
          {/* <Text my="10px" fontSize={'20px'} fontWeight={500} color={'#101828'}> */}
          <Text my="10px" fontSize={'20px'} fontWeight={500}>
            {detail.title}
          </Text>
          {/* <Box w="fit-content" bg="#4545FE1A" borderRadius="full" px="8px" py="2px">
            <Text fontSize={'10px'} fontWeight={300} color="#4545FE" mx="auto">
              {detail.readTime}
            </Text>
          </Box> */}
          {handleTagType(detail.readTime)}
        </Box>
      </Box>
    </Link>
  );
};
