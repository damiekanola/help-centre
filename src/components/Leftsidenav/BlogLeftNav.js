import { Box, Show, Text, Flex } from '@chakra-ui/react'
import Reac from 'react'
import StickyBox from 'react-sticky-box';

export const BlogLeftNav = ({ articleContent }) => {

  return (
    <Show breakpoint="(min-width: 769px)">
      <StickyBox offsetTop={250} offsetBottom={20}>
        <Box
          bg='#F9FAFB'
          boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
          position={'absolute'}
          overflowY={'scroll'} top='-100px'
          w='100%' h='fit-content' maxW={'256px'}
          p='32px 20px'
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
          <Text mb='20px' className="article_text" color={'black !important'} >Table of Content</Text>
          <Flex direction={'column'} align={'stretch'}>
            {articleContent.map((content, i) => (
              <Flex
                w='full' my='6px'
                key={i} cursor={'pointer'}
                justify='space-between' align='flex-start'>
                <Box w='5px' h='5px' borderRadius={'full'} bg={content.check ? '#4545FE' : '#606060'} />
                <Text
                  w={'90%'}
                  mt='-5px'
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
        </Box>
      </StickyBox>
    </Show>
  )
}

export default BlogLeftNav