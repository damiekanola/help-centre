import { Box, Center, Divider, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import comment from '../../assets/icons/comment-icon.svg';
import comment_white from '../../assets/icons/comment-icon-white.svg';
import veerge_support from '../../assets/icons/veerge_support.svg';
import veerge_support_white from '../../assets/icons/veerge_support-white.svg';

const QuestionsAndReplies = ({ questions, white }) => {
  const colors = ['#FF9103', '#1D6169', '#4545FE']
  return (
    <Box pt="30px" id="questions">
      <Box border={white ? '0.3px solid #2E2E32' : '0.3px solid #CBCBCB'} bg={white ? '#0D0D0D' : '#F9F9F9'} borderRadius={'5px'}>
        <Flex align='center' gap='10px' px='15px' py='20px'>
          {white ? <Image src={comment_white} /> : <Image src={comment} />}
          <Text fontSize={'16px'}>Questions and replies</Text>
        </Flex>
        <Divider w='full' />
        {questions.map(question => (
          <Box px='15px' py='20px'>
            <Flex gap='10px' align={'center'}>
              {question?.image ? (
                <Image w='40px' h='40px' borderRadius={'full'} src={question?.image} />
              ) : (
                <Center color={'white'} bg={colors[0]} borderRadius={'full'} w='40px' h='40px'>
                  {question?.name[0]}
                </Center>
              )}
              <VStack align={'stretch'} w='70%' spacing={'2px'}>
                <Text color={white ? '#FFF' : '#1C1D2C'} fontSize={'16px'} fontFamily='euclid-semibold'>
                  {question?.name}
                </Text>
                <Text fontFamily={'euclid-light'} color={white ? '#FFF' : '#000'} fontSize={'12px'} fontWeight={300} noOfLines={1}>
                  {question?.date}
                </Text>
              </VStack>
            </Flex>
            <Text fontFamily={'euclid'} mt='17px' fontSize={'12px'} color={white ? '#FFF' : '#191919'}>{question?.content}</Text>
            <Box
              mt='22px'
              p={'9.469px 7.575px 0px 13.256px'}
              bg={white ? '#171717' : '#F5F5F5'} borderRadius={white && ' 7.575px'}
            >
              {question?.replies?.map(reply => (
                <>
                  <Box mt='16px'>
                    <Flex gap='10px' align={'center'}>
                      {white ? (
                        <Center borderRadius={'full'} bg='#fff' w='38px' h='38px'>
                          <Image w='30px' h='30px' borderRadius={'full'} src={veerge_support_white} />
                        </Center>
                      ) : (
                        <Center borderRadius={'full'} bg='#000' w='38px' h='38px'>
                          <Image w='30px' h='30px' borderRadius={'full'} src={veerge_support} />
                        </Center>
                      )}
                      <VStack align={'stretch'} w='70%' spacing={'2px'}>
                        <Text color={white ? '#FFF' : '#1C1D2C'} fontSize={'16px'} fontFamily='euclid-semibold'>
                          Veerge Support
                        </Text>
                        <Text color={white ? '#FFF' : '#000'} fontSize={'12px'} fontFamily={'euclid-light'} noOfLines={1}>
                          {question?.date}
                        </Text>
                      </VStack>
                    </Flex>
                  </Box>
                  <Text fontFamily={'euclid'} mt='17px' fontSize={'12px'} color={white ? '#FFF' : '#191919'}>{reply}</Text>
                </>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box >
  )
}

export default QuestionsAndReplies