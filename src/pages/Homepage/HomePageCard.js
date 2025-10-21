import {Box, Flex, HStack, Image, Text, Button, Container} from '@chakra-ui/react';
import timeIcon from '../../assets/icons/time_icon.svg';
import articleIcon from '../../assets/icons/article-icon.svg';
import readIcon from '../../assets/icons/read_icon.svg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {handleTagType} from '../../utils/handleTags';

export const HomePageCard = ({detail}) => {
  return (
    <Link to={detail.path || ''}>
      <Box
        // h='343px'
        h="452px"
        maxH={'911px'}
        borderRadius={'12px'}
        shadow={'md'}
        as={motion.div}
        mx={'auto'}
        w="100%"
        cursor={'pointer'}
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}
        bgColor={'#ffffff'}
      >
        <Box
          borderTopRightRadius={'12px'}
          borderTopLeftRadius={'12px'}
          w="full"
          bgImage={detail.img}
          bgPosition={'center'}
          bgSize={'cover'}
          h="241px"
          p="14px"
          border={'0px'}
        ></Box>

        <Flex
          h="calc(100% - 241px)"
          direction={'column'}
          justifyContent={'space-between'}
          px="24px"
          py="24px"
        >
          <Box>
            <Flex align={'center'} gap={'10px'} mb={'8px'}>
              <Flex align={'center'} gap={'8px'}>
                <Image w="24px" h="24px" src={articleIcon} />
                <Text color={'#1B1B1B'}>Article</Text>
              </Flex>
              <Box h="16px" w="1px" bg="#1B1B1B66" />
              <Text color={'#1B1B1B66'} pl={'8px'}>
                {detail.readTime}
              </Text>
            </Flex>
            <Text mt="8px" fontSize={'22px'} letterSpacing={'-5%'} lineHeight={'1.2'} fontWeight={500} color={detail.color}>
              {detail.title}
            </Text>
          </Box>
          <Button
            alignSelf={'flex-start'}
            bgColor={'#ffffff'}
            border={'2px solid #1B1B1B29'}
            fontSize={'14px'}
            color={'#000000'}
            fontWeight={'400'}
            borderRadius="full"
          >
            Read More
          </Button>
        </Flex>
      </Box>
    </Link>
  );
};
