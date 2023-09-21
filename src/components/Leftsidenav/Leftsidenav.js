import { Box, Show, Text, VStack, Image, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import file from "../../assets/icons/file.png";

const sample = [
  { link: '/fisrt_time_setup', text: 'First time setup' },
  { link: "/approved_whats_next", text: 'Approved, what next?' },
  { link: "/terms", text: 'Terms of service' }
]
export const Leftsidenav = ({ articleContent, relatedContent = sample }) => {

  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        bg='#F9FAFB'
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
        position={'fixed'} h='70vh'
        overflowY={'scroll'} left='0'
        w='100%' maxW={'282px'} pl='40px'
        pb='50px'
        __css={{
          '&::-webkit-scrollbar': {
            w: '1',
          },
          '&::-webkit-scrollbar-track': {
            w: '6',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10',
            bg: `transparent`,
          },
        }}
      >
        {/* <Box overflowY={'scroll'}> */}
        <Text className="article_text">In this article</Text>
        <Flex mt='20px' direction={'column'} align={'stretch'}>
          {articleContent.map((content, i) => (
            <Flex
              key={i} cursor={'pointer'}
              borderLeft={i !== articleContent.length - 1 && '1px solid #C3C4FC'}
              pb='25px' justify='flex-start' align='flex-start'>
              <Box ml='-5px' w='10px' h='10px' borderRadius={'full'} bg={content.check ? '#4545FE' : '#C3C4FC'} />
              <Text
                maxW={'80%'}
                mt='-5px'
                ml='20px'
                fontSize={'14px'}
                fontWeight={content.check ? 500 : 400}
                color={content.check ? '#4545FE' : '#191919'}
              >
                <a href={`#${content.id}`}>
                  {content?.title}
                </a>
              </Text>
            </Flex>
          ))}
        </Flex>

        <Text className="article_text" mt="40px">
          Related Content
        </Text>
        <VStack mt='20px' spacing={'17px'} align='stretch'>
          {relatedContent.map(content => (
            <Flex columnGap="20px">
              <Image src={file} />
              <Link to={content.link}>{content.text}</Link>
            </Flex>
          ))}
        </VStack>
        {/* </Box> */}
      </Box>
    </Show>
  )
}

export default Leftsidenav