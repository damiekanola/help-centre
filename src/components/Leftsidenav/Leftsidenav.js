import {
  Box,
  Show,
  Text,
  VStack,
  Image,
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import file from '../../assets/icons/file.png';
import down_arrow from '../../assets/icons/down_arrow.svg';

const sample = [
  {link: '/first_time_setup', text: 'First time setup'},
  {link: '/approved_what_next', text: 'Approved, what next?'},
  {link: '/terms', text: 'Terms of service'},
];
export const Leftsidenav = ({articleContent, relatedContent}) => {
  return (
    <Box
      position={{base: 'sticky', lg: 'fixed'}}
      top={{base: '100px', lg: '149px'}}
      w={{base: '100%', lg: '23%'}}
      left="0"
      minW={'300px'}
      bg="#232425"
    >
      <Menu
        // bg="#232425"
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
      >
        {({isOpen}) => (
          <>
            <MenuButton
              padding={'20px'}
              isActive={isOpen}
              className="article_text"
              color="white !important"
              fontSize={'16px'}
              borderRadius={'5px'}
              border={'1px solid var(--Stroke-dark-2, #323338)'}
              width={'100%'}
              bg="#232425"
              textAlign={'left'}
              mt={'10px'}
              display={{base: 'block', lg: 'none'}}
              rightIcon={
                <Image
                  src={down_arrow.src}
                  alt="Down"
                  style={isOpen ? {rotate: '180deg', transition: '.3s'} : {transition: '.3s'}}
                />
              }
            >
              {isOpen ? 'Table Of Content' : 'In This Article'}
            </MenuButton>
            <MenuList
              bg="#232425"
              borderRadius={'5px'}
              border={'1px solid var(--Stroke-dark-2, #323338)'}
              // minWidth={'100% !important'}
              display={{base: 'block', lg: 'none'}}
              position={'absolute'}
              left={'0px'}
              right={'0px'}
            >
              {articleContent.map((content, i) => (
                <MenuItem key={i} bg="#232425" width={'100%'}>
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
                    flex={'1'}
                    fontWeight={content.check ? 500 : 400}
                    // color={content.check ? '#4545FE' : '#606060'}
                    color={content.check ? '#FF0 !important' : '#DDD'}
                  >
                    <a href={`#${content.id}`}>{content?.title}</a>
                  </Text>
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
      <Box
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
        h="fit-content"
        maxH="70vh"
        overflowY={'scroll'}
        display={{base: 'none', lg: 'block'}}
        // px="30px"
        // pb="50px"
        // pt={'82px'}
        padding={{base: '14px 16px', lg: '82px 30px 50px'}}
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
        <Text className="article_text" color="white !important">
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
                color={content.check ? '#FF0 !important' : '#DDD'}
              >
                <a href={`#${content.id}`}>{content?.title}</a>
              </Text>
            </Flex>
          ))}
        </Flex>

        {relatedContent ? (
          <Box display={{base: 'none', lg: 'block'}}>
            <Text className="article_text" mt="40px" color="white !important">
              Related Content
            </Text>
            <VStack mt="20px" spacing={'23px'} align="stretch">
              {relatedContent.map(content => (
                <Flex columnGap="16px" align={'center'}>
                  <Image src={file} w="14px" h="18px" />
                  <Link to={content.link}>
                    <Text fontSize={'14px'} color="#DDD">
                      {content.text}
                    </Text>
                  </Link>
                </Flex>
              ))}
            </VStack>
          </Box>
        ) : null}
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Leftsidenav;
