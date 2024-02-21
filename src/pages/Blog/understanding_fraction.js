import {Center, Flex, Image, Box, OrderedList, Text, useBreakpointValue} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrFacebook, GrLinkedin, GrTwitter} from 'react-icons/gr';
import Helpful from '../../components/Faq/Helpful';
import fractional_ownership from '../../assets/images/blog/fractional_ownership.png';
import {useNavigate} from 'react-router-dom';
import {FaChevronLeft, FaFacebook} from 'react-icons/fa6';

const Understanding_fraction = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const shareText = useBreakpointValue({base: 'Share this article', md: '11 mins read'});
  return (
    <Box p="0">
      <Flex
        direction={{base: 'column-reverse', md: 'row'}}
        align={'stretch'}
        py="0"
        gap={{md: '70px'}}
        pr={{md: '78px'}}
        pl={{md: '150px'}}
        mt={{md: '150px'}}
        w="full"
        bg={{md: '#C8B9E2'}}
        maxH={{md: '100vh'}}
        h={{md: '500px'}}
        position={'relative'}
        overflowY={'hidden'}
        justifyContent={'center'}
      >
        <Center
          onClick={() => navigate('/blog')}
          position={'absolute'}
          top="20px"
          cursor={'pointer'}
          left="78px"
          h="50px"
          w="50px"
          borderRadius={'full'}
          color="#191919"
          bg="#fff"
        >
          <FaChevronLeft fontSize={'16px'} />
        </Center>

        <Image
          h={{base: '300px', md: 'full'}}
          w={{base: 'full', md: '468px'}}
          src={fractional_ownership}
          bgPosition={'center'}
          bgSize={'cover'}
        />

        <Flex
          h="full"
          direction={'column'}
          align={'stretch'}
          justify={'space-between'}
          w="full"
          mt={{base: '5rem', md: 0}}
          padding={{base: '1rem 2rem', lg: 0}}
          gap={{base: 6, md: 0}}
          color={{base: '#fffff !important', md: '#191919 !important'}}
        >
          <Box />
          <Box
            display={{base: 'flex', md: 'block'}}
            flexDirection={'column'}
            gap={{base: 6, md: 0}}
          >
            <Text
              fontWeight={500}
              w="full"
              alignSelf={'center'}
              fontSize="36px"
              lineHeight={{base: '40px', md: 'normal'}}
            >
              Understanding Fractional Real Estate
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text mt={{md: '15px'}} fontWeight={400} alignSelf={'center'} fontSize="14px">
                December 16, 2022
              </Text>
              <Text fontWeight={400} fontSize="14px" display={{md: 'none'}}>
                11 mins read
              </Text>
            </Flex>
          </Box>
          <Flex
            w="full"
            justify={'space-between'}
            align={{md: 'center'}}
            pb="10px"
            direction={{base: 'column', md: 'row'}}
          >
            <Text fontWeight={{md: 400}} alignSelf={{md: 'center'}} fontSize="14px">
              {shareText}
            </Text>
            <Flex align={'center'} gap="4px">
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <FaFacebook style={{borderRadius: '10000px'}} color="#000" size={17} />
              </Center>
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <GrTwitter style={{borderRadius: '10000px'}} color="#000" size={17} />
              </Center>
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <CiInstagram style={{borderRadius: '10000px'}} color="#000" size={17} />
              </Center>
              <Center cursor={'pointer'} bg="#FFF" h="28px" w="28px" borderRadius={'full'}>
                <GrLinkedin style={{borderRadius: '10000px'}} color="#000" size={17} />
              </Center>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box
        display={{base: 'flex', md: 'block'}}
        flexDirection={'column'}
        gap={{base: 6, md: 0}}
        px={{base: '20px', md: '80px'}}
      >
        <Box
          m={{base: '10px auto', md: '58px auto'}}
          pb={{base: '10px', md: '70px'}}
          fontWeight={200}
          fontSize="16px"
          w={{base: '100%', md: '40%', '2xl': '35%'}}
        >
          <Box>
            <Text fontWeight={500} fontSize={'36px'}>
              OVERVIEW
            </Text>
            <Text mt="30px">
              The real estate investment landscape, once dominated by a select few with access to
              hefty capital and opaque dealings, is now undergoing a dramatic transformation. Today,
              the future of real estate is not just promising; it's brimming with excitement and
              possibilities.{' '}
            </Text>
            <Text mt="30px">
              In the past, the real estate market grappled with hurdles like cumbersome transactions
              and a lack of transparency. However, the digital era has ushered in a wave of change,
              revolutionizing how information flows and transactions are conducted. While we've made
              strides in digitization, the industry is ripe for further innovation and growth.{' '}
            </Text>
            <Text mt="30px">
              Enter the game-changer: digital securitization, also known as "Fractionalisation."
              This groundbreaking concept doesn't just open doors to previously untapped investment
              avenues for both individuals and organizations. It also ushers in an era of reduced
              fees and costs associated with real estate transactions.
            </Text>
            <Text mt="30px">
              Imagine this scenario: A property developer, armed with the cutting-edge capabilities
              of Veerge, embarks on a development project like never before. Gone are the days of
              relying on a handful of backers with limited stakes. Now, the developer can slice the
              property holding into an unprecedented number of pieces – let's say, 100,000
              fractions. These fractions become available for investors to purchase and own,
              granting each fractional owner a unique stake in the development.
            </Text>
            <Text mt="30px">
              As the project unfolds, investors are presented with tantalizing options. They can
              either hold onto their fractions until the project is complete, exchanging them for
              ownership of a unit in the building. Alternatively, for those viewing their fractions
              as financial assets, they can trade them on a marketplace. As the project nears
              fruition and its cash flow becomes more predictable, the value of these fractions is
              poised to soar, offering lucrative opportunities for profit.
            </Text>
            <Text mt="30px">
              With smart contracts as the backbone, the entire process can be automated, and
              payments can be executed instantly. These smart contracts act as self-executing
              agreements that write, authenticate, and audit transactions in real-time. All parties
              involved have access to clear instructions and dependencies, ensuring that payments
              are only executed when conditions are met. This heightened transparency reduces
              disputes and potential fraud, fostering a trustworthy and secure environment for all
              investors. The true magic of this technological leap is that transactions are no
              longer bound by business hours or holiday cutoff times – they happen 24/7.
              Additionally, confirmations take only minutes, adding speed and efficiency to the
              investment process.
            </Text>
            <Text mt="30px">
              Imagine a world where real estate investment becomes more inclusive, efficient, and
              liquid. Thanks to fractionalisation and a cutting-edge technology like Veerge, this
              future is closer than ever. Embrace the transformative power of fractional ownership
              and ride the wave of a more engaging and accessible real estate market. The
              possibilities are boundless, and the time to seize them is now. Welcome to the future
              of real estate investment!
            </Text>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  );
};

export default Understanding_fraction;
