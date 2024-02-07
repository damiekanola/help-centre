import { Box, Show, Text, VStack, Image, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import file from "../../assets/icons/file.png";

const sample = [
  { link: '/first_time_setup', text: 'First time setup' },
  { link: "/approved_what_next", text: 'Approved, what next?' },
  { link: "/terms", text: 'Terms of service' }
]
export const Rightsidenav = ({ relatedContent = sample }) => {

  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        bg='#232425'
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
        position={'fixed'} h='fit-content' maxH='70vh'
        overflowY={'scroll'} Right='0'
        w={'20%'} px='30px'
        pb='50px'
        right={'4rem'}
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
        <Text className="article_text" mt="40px" >
          Related Content
        </Text>
        <VStack mt='20px' spacing={'23px'} align='stretch'>
          {relatedContent.map(content => (
            <Flex columnGap="16px" align={'center'}>
              <Image src={file} w='14px' h='18px' />
              <Link to={content.link}>
                <Text fontSize={'14px'}>{content.text}</Text>
              </Link>
            </Flex>
          ))}
        </VStack>
        {/* </Box> */}
      </Box>
    </Show>
  )
}

export default Rightsidenav