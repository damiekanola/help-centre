import {
  Box,
  Text,
  Image,
  Hide,
  Flex,
  Show,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import React from 'react';

import down_caret from '../../assets/icons/down-caret.svg';
import table_icon from '../../assets/icons/table-icon.svg';

export const Leftsidenav = ({articleContent}) => {
  return (
    <Box
      position={{base: 'sticky', lg: 'sticky'}}
      top={{base: '160px', lg: '180px'}}
      w={{base: '100%', lg: '23%'}}
      left="0"
      minW={'300px'}
      bg="#FFFFFF"
      borderRadius={'16px'}
      zIndex={2}
    >
      {/* <Menu boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}>
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
              my={'10px'}
              display={{base: 'none', lg: 'none'}}
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
                    bg={content.check ? '#FF0' : '#A4A486'}
                  />
                  <Text
                    maxW={'80%'}
                    mt="-5px"
                    ml="20px"
                    fontSize={'14px'}
                    flex={'1'}
                    fontWeight={content.check ? 500 : 400}
                    color={content.check ? '#FF0 !important' : '#DDD'}
                  >
                    <a href={`#${content.id}`}>{content?.title}</a>
                  </Text>
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu> */}
      <Box
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
        h="fit-content"
        maxH="70vh"
        overflowY={'scroll'}
        padding={{base: '14px 16px', lg: '25px 20px'}}
        borderRadius={'16px'}
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
        <Show above="md">
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Flex gap={'8px'} alignItems={'center'}>
              <Image src={table_icon} w={'40px'} h={'40px'} />
              <Text className="article_text" color="#1B1B1B !important">
                Table of Contents
              </Text>
            </Flex>
            <Image src={down_caret} w={'24px'} h={'24px'} display={{base: 'block', md: 'none'}} />
          </Flex>

          <Flex mt="20px" direction={'column'} align={'stretch'}>
            {articleContent.map((content, i) => (
              <Flex key={i} cursor={'pointer'} pb="25px" justify="flex-start" align="flex-start">
                <Text
                  pb={'10px'}
                  w={'100%'}
                  mt="-5px"
                  fontSize={'14px'}
                  borderBottom={'1px solid #1B1B1B29'}
                  fontWeight={content.check ? 500 : 400}
                  color={content.check ? '#1B1B1B !important' : '#616161'}
                >
                  <a href={`#${content.id}`}>{content?.title}</a>
                </Text>
              </Flex>
            ))}
          </Flex>
        </Show>
        <Hide above="md">
          <Accordion allowToggle>
            <AccordionItem border="none">
              <AccordionButton
                p={0}
                _hover={{bg: 'transparent'}}
                _expanded={{bg: 'transparent'}}
                justifyContent="space-between"
              >
                <Flex align="center" gap="10px" w="100%" justify="space-between">
                  <Flex align={'center'} gap={'10px'}>
                    <Image src={table_icon} w="38px" h="38px" />

                    <Text className="article_text" color="#1B1B1B !important">
                      Table of Contents
                    </Text>
                  </Flex>
                  <AccordionIcon />
                </Flex>
              </AccordionButton>

              <AccordionPanel py={4}>
                {articleContent.map((content, i) => (
                  <Flex
                    key={i}
                    cursor={'pointer'}
                    pb="25px"
                    justify="flex-start"
                    align="flex-start"
                  >
                    <Text
                      pb={'10px'}
                      w={'100%'}
                      mt="-5px"
                      fontSize={'14px'}
                      borderBottom={'1px solid #1B1B1B29'}
                      fontWeight={content.check ? 500 : 400}
                      color={content.check ? '#1B1B1B !important' : '#616161'}
                    >
                      <a href={`#${content.id}`}>{content?.title}</a>
                    </Text>
                  </Flex>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Hide>
      </Box>
    </Box>
  );
};

export default Leftsidenav;
