import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import hide from '../assets/icons/Hide.svg'

const Blocker = () => {
  return (
    <Box
      maxH='463px' h='75vh' pt='100px'
      pb='30px' w='100%'
      bg='linear-gradient(180deg, rgba(255, 255, 255, 0.80) 0%, #FFF 29.25%)'
      position={'absolute'} bottom={'0px'}
      left='0px'
    >
      <Flex direction={'column'} justify={'space-between'} align={'center'} mx='auto' w='65%' h='full'>
        <Flex direction={'column'} gap='15px' align={'center'}>
          <Image src={hide} />
          <Text textAlign={'center'} fontFamily='euclid-semibold' fontSize={'24px'} color={'#191919'}>Create a Veerge Account to read the full article.</Text>
          <Text textAlign={'center'} fontFamily={'euclid-light'} fontSize={'16px'} color={'#191919'}>This article is available to Veerge subscribers only</Text>
        </Flex>

        <a target='_blank' href='https://veerge.myxellia.io/auth/onboarding'>
          <Button
            _hover={{ bg: 'transparent' }}
            w='400px' h='50px' bg='transparent'
            border='1px solid #000'
            borderRadius={'8px'}
          >Create an account</Button>
        </a>
        <Text
          textAlign={'center'}
          fontFamily={'euclid-light'}
          fontSize={'16px'}
          color={'#191919'}
        >
          Already have an account? <Text
            cursor={'pointer'} as='span'>
            <a target='_blank' href='https://veerge.myxellia.io'> Sign In</a>
          </Text>
        </Text>
      </Flex>
    </Box>
  )
}

export default Blocker