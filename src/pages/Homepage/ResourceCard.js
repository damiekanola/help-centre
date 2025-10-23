import {Box, Flex, HStack, Image, Text, Button, Container} from '@chakra-ui/react';
import timeIcon from '../../assets/icons/time_icon.svg';
import articleIcon from '../../assets/icons/article-icon.svg';
import readIcon from '../../assets/icons/read_icon.svg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {handleTagType} from '../../utils/handleTags';

export const ResourceCard = ({detail}) => {
  return (
    <Link to={detail.path || ''}>
      <Box
        // h='343px'
        h={{base: '390px', md: '452px'}}
        maxH={'452px'}
        borderRadius={'12px'}
        shadow={'md'}
        as={motion.div}
        mx={'auto'}
        w={{base: '270px', md: '416px'}}
        // minW={'270px'}
        // maxW={'416px'}
        cursor={'pointer'}
        bgColor={'#ffffff'}
      >
        <Box
          borderTopRightRadius={'12px'}
          borderTopLeftRadius={'12px'}
          w="full"
          bgImage={detail.img}
          bgPosition={'center'}
          bgSize={'cover'}
          minH={'157px'}
          h={{base: '40%', md: '48%'}}
          p="14px"
          border={'0px'}
        ></Box>

        <Flex
          h={{base: '60%', md: '52%'}}
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
              <Text
                color={'#1B1B1BD9'}
                pl={'9px'}
                fontSize={'13px'}
                borderLeft={'1px solid #1B1B1B66'}
                lineHeight={'13px'}
              >
                {detail.readTime}
              </Text>
            </Flex>
            <Text
              mt="8px"
              fontSize={'22px'}
              letterSpacing={'-5%'}
              lineHeight={'1.2'}
              fontWeight={500}
              color={detail.color}
            >
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
