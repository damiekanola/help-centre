import {Box, Flex, HStack, Image, Text, Button, Container} from '@chakra-ui/react';
import articleIcon from '../../assets/icons/article-icon.svg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import overview from '../../assets/images/home/overview.jpg';


export const OverviewCard = () => {
  return (
    <Link to={'/overview'}>
      {/* <Flex
        // h='343px'
        mb={'60px'}
        h="416px"
        maxH={'911px'}
        borderRadius={'12px'}
        shadow={'md'}
        as={motion.div}
        mx={'auto'}
        w="100%"
        cursor={'pointer'}
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}
        bgColor={'#DFDFDF'}
        px={{base: '20px', md:"40px"}}
        gap={'40px'}
        direction={{base: 'column', md: 'row'}}
      >
        <Box
          flex={'1'}
          borderTopRightRadius={'12px'}
          borderTopLeftRadius={'12px'}
          w="full"
          bgImage={overview}
          bgPosition={'center'}
          bgSize="131%"
          bgRepeat={'no-repeat'}
          p="14px"
          h={{base: '241px', md: '100%'}}
          border={'0px'}
        ></Box>

        <Flex flex={'1'} direction={'column'} py="24px" justifyContent={'center'}>
          <Box h={'50%'}>
            <Box>
              <Flex align={'center'} gap={'10px'} mb={'8px'}>
                <Flex align={'center'} gap={'8px'}>
                  <Image w="24px" h="24px" src={articleIcon} />
                  <Text color={'#1B1B1B'}>Article</Text>
                </Flex>
                <Box h="16px" w="1px" bg="#1B1B1B66" />
                <Text color={'#1B1B1B66'} pl={'8px'}>
                  8 mins
                </Text>
              </Flex>
              <Text my="10px" fontSize={'20px'} fontWeight={500}>
                Overview of Myxellia
              </Text>
              <Text color={'#000000CC'}>
                Myxellia is a forward-thinking technology infrastructure designed to help real
                estate businesses thrive, exceed client expectations, and adapt to the ever-shifting
                digital landscape. By combining user-friendly applications, data-driven
                intelligence, and built-in trust mechanisms...
              </Text>
            </Box>
            <Button
              alignSelf={'flex-start'}
              bgColor={'inherit'}
              border={'2px solid #1B1B1B29'}
              fontSize={'14px'}
              color={'#000000'}
              fontWeight={'400'}
              borderRadius="full"
              mt={'40px'}
            >
              Read More
            </Button>
          </Box>
        </Flex>
      </Flex> */}
      <Flex
  mb="60px"
  h={{ base: 'auto', md: '416px' }}
  maxH="911px"
  borderRadius="12px"
  shadow="md"
  as={motion.div}
  mx="auto"
  w="100%"
  cursor="pointer"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  bgColor="#DFDFDF"
  px={{ base: '20px', md: '40px' }}
  gap={{ base: '24px', md: '40px' }}
  direction={{ base: 'column', md: 'row' }}
>
  {/* IMAGE SECTION */}
  <Box
    flex="1"
    borderRadius={{ base: '12px', md: '12px 0 0 12px' }}
    w="full"
    bgImage={overview}
    bgPosition="center"
    bgSize={{ base: '120%', md: '131%' }}
    bgRepeat="no-repeat"
    p="14px"
    h={{ base: '220px', md: '100%' }}
    minH={{ base: '220px', md: 'auto' }}
    border="0px"
  />

  {/* TEXT SECTION */}
  <Flex flex="1" direction="column" py="24px" justifyContent="center">
    <Box>
      <Flex align="center" gap="10px" mb="8px" wrap="wrap">
        <Flex align="center" gap="8px">
          <Image w="24px" h="24px" src={articleIcon} alt="Article Icon" />
          <Text color="#1B1B1B">Article</Text>
        </Flex>
        <Box h="16px" w="1px" bg="#1B1B1B66" display={{ base: 'none', sm: 'block' }} />
        <Text color="#1B1B1B66" pl="8px">
          8 mins
        </Text>
      </Flex>

      <Text my="10px" fontSize="20px" fontWeight="500">
        Overview of Myxellia
      </Text>

      <Text
        color="#000000CC"
        noOfLines={{ base: 2, md: 5 }} // ✅ Clamp to 2 lines on small screens, expand on desktop
      >
        Myxellia is a forward-thinking technology infrastructure designed to help real
        estate businesses thrive, exceed client expectations, and adapt to the ever-shifting
        digital landscape. By combining user-friendly applications, data-driven
        intelligence, and built-in trust mechanisms...
      </Text>

      <Button
        alignSelf="flex-start"
        bgColor="inherit"
        border="2px solid #1B1B1B29"
        fontSize="14px"
        color="#000000"
        fontWeight="400"
        borderRadius="full"
        mt="24px"
      >
        Read More
      </Button>
    </Box>
  </Flex>
</Flex>

    </Link>
  );
};
