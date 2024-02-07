import { Center, Flex, Image, Box, OrderedList, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';
import Helpful from '../../components/Faq/Helpful';
import fractional_ownership from '../../assets/images/blog/fractional_ownership.png';
import { useNavigate } from 'react-router-dom';


const Understanding_fraction = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();

  return (
    <Box p='0'>
      <Flex direction={'row'} align={'stretch'} py='0' gap='70px' pr='78px' pl='150px' mt='150px' w='full' bg={'#C8B9E2'} maxH={'100vh'} h={'500px'} position={'relative'}>
        <Center
          onClick={() => navigate("/blog")}
          position={'absolute'} top='20px'
          cursor={'pointer'} left='78px'
          h='50px' w='50px' borderRadius={'full'}
          color='#191919' bg='#fff'
        >
          <SlArrowLeft fontSize={'20px'} />
        </Center>

        <Image
          h='full' w='468px'
          src={fractional_ownership}
          bgPosition={'center'} bgSize={'cover'}
        />

        <Flex h='full' direction={'column'} align={'stretch'} justify={'space-between'} w='full'>
          <Box />
          <Box>
            <Text fontWeight={500} color='#191919' w='full' alignSelf={'center'} fontSize='36px'>
              Understanding Fractional Real Estate
            </Text>
            <Text mt='45px' fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
              December 16, 2022
            </Text>
          </Box>
          <Flex w='full' justify={'space-between'} align={'center'} pb='10px'>
            <Text fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
              11  mins read
            </Text>
            <Flex align={'center'} gap='4px'>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrFacebook style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrTwitter style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <CiInstagram style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrLinkedin style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box px={'78px'}>

        {/* <Box shadow={'md'} p='32px 20px' w='256px' h='193px' position={'absolute'} top='-100px' bg='white'>
          <Text mb='20px' fontWeight={500} fontSize={'20px'}>Table of Content</Text>
        </Box> */}
        <Box w={'95%'}
          maxW={{base: '587px', xl: '40%'}}
          minW={{base: '0px', xl: '40%'}}
          mx="auto" mt='58px' pb='70px' fontWeight={200} fontSize='16px'>
          <Box>
            <Text fontWeight={500} fontSize={'36px'} color='#000'>
              OVERVIEW
            </Text>
            <Text mt='30px'>
              The investment market for real estate is vast, but historically, it has been dominated by a closed network of firms and organizations capable of handling large, illiquid investments. However, the tides are changing, and the future of real estate looks more promising and engaging than ever before. In the past, the real estate market faced challenges due to transactional friction and a lack of transparency. But with the advent of the digital age, there have been significant improvements in information flow and transaction processes. We have taken some initial steps towards digitization, but there is still immense potential for growth in the industry.
            </Text>
            <Text mt='30px'>
              Enter the game-changer: digital securitization of real estate properties, also known as "<b>Fractionalisation</b>." This exciting concept not only unlocks previously inaccessible investment opportunities for individuals and organizations but also paves the way for lower fees and costs typically associated with real estate transactions.
            </Text>
            <Text mt='30px'>
              Picture this: a developer, armed with the power of Veerge, launches a development project like never before. Instead of the traditional model with a small stake and multiple sources of funding, the developer can now divide the property holding into a staggering number of pieces – say, 100,000 fractions. These fractions are then made available for investors to purchase and own. Each fractional owner gains a unique stake in the property development, holding ownership rights to a specific fraction, such as 1/100,000th of the entire project. As the project progresses, investors have two enticing options. They can hold onto their fractions until the project reaches completion, at which point they can exchange their fractions for ownership of a unit in the building. Alternatively, if they see their fractions as purely financial investments, they can sell them to other investors through a marketplace. As the project nears completion and its future cash flow becomes less risky, the value of the fractions is expected to increase, providing attractive opportunities for profit.
            </Text>
            <Text mt='30px'>
              The beauty of technology-driven fractionalisation is its ability to eliminate delays, high costs, and middlemen that typically burden real estate transactions. With smart contracts as the backbone, the entire process can be automated, and payments can be executed instantly. These smart contracts act as self-executing agreements that write, authenticate, and audit transactions in real-time. All parties involved have access to clear instructions and dependencies, ensuring that payments are only executed when conditions are met. This heightened transparency reduces disputes and potential fraud, fostering a trustworthy and secure environment for all investors. The true magic of this technological leap is that transactions are no longer bound by business hours or holiday cutoff times – they happen 24/7. Additionally, confirmations take only minutes, adding speed and efficiency to the investment process.
            </Text>
            <Text mt='30px'>
              Imagine a world where real estate investment becomes more inclusive, efficient, and liquid. Thanks to fractionalisation and a cutting-edge technology like Veerge, this future is closer than ever. Embrace the transformative power of fractional ownership and ride the wave of a more engaging and accessible real estate market. The possibilities are boundless, and the time to seize them is now. Welcome to the future of real estate investment!
            </Text>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  )
}

export default Understanding_fraction