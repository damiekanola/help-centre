import { Box, Show, Text, VStack, Image, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import file from "../../assets/icons/file.png";

const LeftNav = ({ articleContent }) => {
  const [active, setActive] = useState("overview");
  const handleClick = (id) => {
    console.log(id);
    // setStyle("bluenav");
    setActive(id)
  };

  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        position={'fixed'} h='65%'
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
            bg: `#333`,
          },
        }}
      >
        {/* <Box overflowY={'scroll'}> */}
        <Text className="article_text">In this article</Text>
        <Flex mt='20px' direction={'column'} align={'stretch'}>
          {articleContent.map((content, i) => (
            <Flex
              key={i} cursor={'pointer'}
              onClick={() => handleClick(content.id)}
              borderLeft={i !== articleContent.length - 1 && '1px solid #C3C4FC'}
              pb='25px' justify='flex-start' align='flex-start'>
              <Box ml='-5px' w='10px' h='10px' borderRadius={'full'} bg={active === content.id ? '#4545FE' : '#C3C4FC'} />
              <Text
                maxW={'80%'}
                mt='-5px'
                ml='20px'
                fontSize={'14px'}
                fontWeight={active === content.id ? 500 : 400}
                color={active === content.id ? '#4545FE' : '#191919'}
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
          <Flex columnGap="20px">
            <Image src={file} />
            <Link to="/fisrt_time_setup">First time setup</Link>
          </Flex>

          <Flex columnGap="20px">
            <Image src={file} /> <Link to="/approved_whats_next">Approved, what next?</Link>
          </Flex>
          <Flex columnGap="20px">
            <Image src={file} /> <Link to="/terms">Terms of service</Link>
          </Flex>
        </VStack>
        {/* </Box> */}
      </Box>
    </Show>
  )
}
