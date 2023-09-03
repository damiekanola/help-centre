import { Box, Center, Divider, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import comment from '../../assets/icons/comment-icon.svg';
import veerge_support from '../../assets/icons/veerge_support.svg';

const QuestionsAndReplies = ({ questions }) => {
  const colors = ['#FF9103', '#1D6169', '#4545FE']
  return (
    <Box pt="30px" id="questions">
      <Box border='0.3px solid #000' borderRadius={'5px'}>
        <Flex align='center' gap='10px' px='15px' py='20px'>
          <Image src={comment} />
          <Text>Questions and replies</Text>
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
              <VStack align={'stretch'} w='70%'>
                <Text color={'#1C1D2C'} fontSize={'16px'} fontWeight={600}>
                  {question?.name}
                </Text>
                <Text color={'#A5A1A1'} fontSize={'12px'} fontWeight={400} noOfLines={1}>
                  {question?.date}
                </Text>
              </VStack>
            </Flex>
            <Text mt='17px' fontSize={'12px'} color={'#191919'}>{question?.content}</Text>
            <Box mt='22px' ml='15px'>
              {question?.replies?.map(reply => (
                <>
                  <Box mt='16px'>
                    <Flex gap='10px' align={'center'}>
                      <Image w='30px' h='30px' borderRadius={'full'} src={veerge_support} />
                      <VStack align={'stretch'} w='70%'>
                        <Text color={'#1C1D2C'} fontSize={'16px'} fontWeight={600}>
                          Veerge Support
                        </Text>
                        <Text color={'#A5A1A1'} fontSize={'12px'} fontWeight={400} noOfLines={1}>
                          Jun 15,2023
                        </Text>
                      </VStack>
                    </Flex>
                  </Box>
                  <Text mt='17px' fontSize={'12px'} color={'#191919'}>{reply}</Text>
                </>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default QuestionsAndReplies