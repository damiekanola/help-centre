import {Box, Show, Text, Flex, Hide, StackDivider, Stack} from '@chakra-ui/react';
import {useState} from 'react';
import StickyBox from 'react-sticky-box';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa6';

export const BlogLeftNav = ({articleContent}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hide below="md">
        <StickyBox offsetTop={250} offsetBottom={20}>
          <Box
            // bg="#F9FAFB"
            bg="#232425"
            boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
            position={'absolute'}
            overflowY={'scroll'}
            top="-100px"
            w="100%"
            h="fit-content"
            maxW={'256px'}
            p="32px 20px"
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
            {/* <Text mb="20px" className="article_text" color={'black !important'}> */}
            <Text mb="20px" className="article_text">
              Table of Content
            </Text>
            <Flex direction={'column'} align={'stretch'}>
              {articleContent.map((content, i) => (
                <Flex
                  w="full"
                  my="6px"
                  key={i}
                  cursor={'pointer'}
                  justify="space-between"
                  align="flex-start"
                >
                  <Box
                    w="5px"
                    h="5px"
                    borderRadius={'full'}
                    // bg={content.check ? '#4545FE' : '#606060'}
                    bg={content.check ? '#FF0' : '#A4A486'}
                  />
                  <Text
                    w={'90%'}
                    mt="-5px"
                    fontSize={'14px'}
                    fontWeight={content.check ? 500 : 400}
                    // color={content.check ? '#4545FE' : '#191919'}
                    color={content.check ? '#FF0 !important' : '#DDD'}
                  >
                    <a href={`#${content.id}`}>{content?.title}</a>
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </StickyBox>
      </Hide>
      <Show below="md">
        <Stack
          width={'full'}
          px={5}
          py={3}
          divider={isOpen && <StackDivider borderColor="#E4E4E4" />}
          border={'1px solid #E4E4E4'}
          borderRadius={'8px'}
        >
          <Flex align={'center'} justify={'space-between'} onClick={() => setIsOpen(!isOpen)}>
            <Text mb={'5px'} className="article_text" fontWeight={500}>
              Table of Content
            </Text>
            {!isOpen ? <FaChevronDown /> : <FaChevronUp />}
          </Flex>
          {isOpen ? (
            <Flex direction={'column'} align={'stretch'} gap={3}>
              {articleContent.map((content, i) => (
                <Flex w="full" gap={2} key={i} cursor={'pointer'} align="center">
                  <Box
                    w="5px"
                    h="5px"
                    borderRadius={'full'}
                    bg={content.check ? '#4545FE' : '#606060'}
                  />
                  <Text
                    fontSize={'14px'}
                    fontWeight={content.check ? 500 : 400}
                    color={content.check ? '#4545FE' : '#191919'}
                  >
                    <a href={`#${content.id}`}>{content?.title}</a>
                  </Text>
                </Flex>
              ))}
            </Flex>
          ) : null}
        </Stack>
      </Show>
    </>
  );
};

export default BlogLeftNav;
