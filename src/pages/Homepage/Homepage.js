import { Box, Button, Center, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import data from '../../constant/pages'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { handleTagType } from '../../utils/handleTags';
import readIcon from '../../assets/icons/read_icon.svg'
import timeIcon from '../../assets/icons/time_icon.svg'
import { MdArrowDownward } from 'react-icons/md';

export const Homepage = () => {

  return (
    <Box w='full' pt='200px' pb='50px'>
      <SimpleGrid w='85%' mx='auto' gap='30px' columns={{ base: 1, md: 4 }} justify={'center'} alignItems={'center'}>
        {data.map(detail => (
          <Link to={detail.path || ''}>
            <Box
              maxH={'911px'}
              borderRadius={'16px'}
              shadow={'md'}
              as={motion.div}
              mx={'auto'}
              w='100%'
              cursor={"pointer"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Box
                borderTopRightRadius={'16px'}
                borderTopLeftRadius={'16px'}
                w='full' bgImage={detail.img}
                h='200px' p='14px'
              >
                <Text fontSize={'10px'} color={detail.color}>SAAS</Text>
                <Text mt='8px' fontSize={'20px'} fontWeight={500} color={detail.color}>{detail.title}</Text>
              </Box>
              <Box px='16px' py='12px'>
                {handleTagType(detail.tag)}
                <HStack spacing={'8px'} align={'center'} mt='10px' fontSize={'10px'}>
                  <Flex align={'center'} gap={'4px'} py='2px' px='8px' borderRadius={'4px'} border='1px solid rgba(69, 69, 254, 0.10)'>
                    <Image w='12px' h='12px' src={readIcon} />
                    <Text>{detail.readTime}</Text>
                  </Flex>
                  <Flex align={'center'} gap={'4px'} py='2px' px='8px' borderRadius={'4px'} border='1px solid rgba(69, 69, 254, 0.10)'>
                    <Image w='12px' h='12px' src={timeIcon} />
                    <Text>{detail.datePosted}</Text>
                  </Flex>
                </HStack>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>

      <Center w='full'>
        <Button
          mt='30px' mx='auto' bg='#4545FE1A'
          borderRadius='8px' px='18px' py='9px'
          leftIcon={<MdArrowDownward color='#4545FE' size={25} />}
        >
          <Text fontSize={'18px'} fontWeight={500} color='#4545FE'>Load more</Text>
        </Button>
      </Center>

    </Box>
  )
}

