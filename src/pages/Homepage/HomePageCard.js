import {Box, Flex, HStack, Image, Text} from '@chakra-ui/react';
import timeIcon from '../../assets/icons/time_icon.svg';
import readIcon from '../../assets/icons/read_icon.svg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {handleTagType} from '../../utils/handleTags';

export const HomePageCard = ({detail}) => {
  return (
    <Link to={detail.path || ''}>
      <Box
        // h='343px'
        maxH={'911px'}
        borderRadius={'16px'}
        shadow={'md'}
        as={motion.div}
        mx={'auto'}
        w="100%"
        cursor={'pointer'}
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}
        bgColor={'#191919'}
      >
        <Box
          borderTopRightRadius={'16px'}
          borderTopLeftRadius={'16px'}
          w="full"
          bgImage={detail.img}
          bgPosition={'center'}
          bgSize={'cover'}
          h="272.2px"
          p="14px"
          bgColor={'#191919'}
        >
          {/* <Text fontSize={'10px'} color={detail.color}>SAAS</Text> */}
          <Text mt="8px" fontSize={'20px'} fontWeight={500} color={detail.color}>
            {detail.title}
          </Text>
        </Box>
        <Box px="16px" py="12px">
          {handleTagType(detail.tag)}
          <HStack spacing={'8px'} align={'center'} mt="10px" fontSize={'10px'}>
            <Flex
              align={'center'}
              gap={'4px'}
              py="2px"
              px="8px"
              borderRadius={'4px'}
              border="1px solid #232425"
            >
              <Image w="12px" h="12px" src={readIcon} />
              <Text>{detail.readTime}</Text>
            </Flex>
            <Flex
              align={'center'}
              gap={'4px'}
              py="2px"
              px="8px"
              borderRadius={'4px'}
              border="1px solid #232425"
            >
              <Image w="12px" h="12px" src={timeIcon} />
              <Text>{detail.datePosted}</Text>
            </Flex>
          </HStack>
        </Box>
      </Box>
    </Link>
  );
};
