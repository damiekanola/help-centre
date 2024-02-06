import {Box, Show, Text, VStack, Image, Flex} from '@chakra-ui/react';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import file from '../../assets/icons/file.png';

const sample = [
  {link: '/first_time_setup', text: 'First time setup'},
  {link: '/approved_what_next', text: 'Approved, what next?'},
  {link: '/terms', text: 'Terms of service'},
];
export const Leftsidenav = ({articleContent, relatedContent }) => {
  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        fontFamily="euclid"
        bg="#232425"
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
        position={'fixed'}
        h="fit-content"
        maxH="70vh"
        overflowY={'scroll'}
        left="0"
        w={'23%'}
        px="30px"
        pb="50px"
        pt={'82px'}
        __css={{
          "&::-webkit-scrollbar": {
            w: "1",
          },
          "&::-webkit-scrollbar-track": {
            w: "6",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10",
            bg: `transparent`,
          },
        }}
      >
        {/* <Box overflowY={'scroll'}> */}
        <Text className="article_text" color="white !important" fontFamily={'euclid-medium'}>
          In this article
        </Text>
        <Flex mt="20px" direction={'column'} align={'stretch'}>
          {articleContent.map((content, i) => (
            <Flex
              key={i}
              cursor={'pointer'}
              // borderLeft={i !== articleContent.length - 1 && '1px solid #C3C4FC'}
              borderLeft={i !== articleContent.length - 1 && '1px solid #A4A486'}
              pb="25px"
              justify="flex-start"
              align="flex-start"
            >
              <Box
                ml="-5px"
                w="10px"
                h="10px"
                borderRadius={'full'}
                // bg={content.check ? '#4545FE' : '#C3C4FC'}
                bg={content.check ? '#FF0' : '#A4A486'}
              />
              <Text
                maxW={'80%'}
                mt="-5px"
                ml="20px"
                fontSize={'14px'}
                fontWeight={content.check ? 500 : 400}
                // color={content.check ? '#4545FE' : '#606060'}
                color={content.check ? '#FF0' : '#DDD'}
              >
                <a href={`#${content.id}`}>{content?.title}</a>
              </Text>
            </Flex>
          ))}
        </Flex>

        {relatedContent ? (
          <>
          <Text
          className="article_text"
          mt="40px"
          color="white !important"
          fontFamily={'euclid-medium'}
        >
          Related Content
        </Text>
        <VStack fontFamily="euclid" mt="20px" spacing={'23px'} align="stretch">
          {relatedContent.map(content => (
            <Flex columnGap="16px" align={'center'}>
              <Image src={file} w="14px" h="18px" />
              <Link to={content.link}>
                <Text fontSize={'14px'} color="#DDD" fontFamily={'euclid'}>
                  {content.text}
                </Text>
              </Link>
            </Flex>
          ))}
        </VStack>
          </>
        ): null}
        {/* </Box> */}
      </Box>
    </Show>
  );
};

export default Leftsidenav;
