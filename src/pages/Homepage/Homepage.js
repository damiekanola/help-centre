import {Box, Flex, Stack, Link, Text} from '@chakra-ui/react';
import {Listings} from '../../components/Sections/Listings';
import {Featured} from '../../components/Sections/Featured';
import {Trending} from '../../components/Sections/Trending';
import {Hero} from '../../components/Header/Hero';
import {Client} from '../../components/Sections/Client';
import StatsSection from '../../components/Header/Stats';

export const Homepage = () => {
  return (
    <Box w="full" bg={'#0d0d0d'}>
      <Box position="relative">
        <Hero />
        <Trending />
      </Box>
      <Featured />
      <Listings />
      <Client />
      <StatsSection />
      <Box
        as="footer"
        bgColor={'#000000'}
        color="#FFFFFF"
        p={{base: '40px 20px 20px', md: '70px 60px 20px'}}
      >
        <Flex justifyContent="space-between" mb={'20px'} direction={{base: 'column', md: 'row'}}>
          <Flex
            justifyContent="space-between"
            flex={'1'}
            direction={{base: 'column', md: 'row'}}
            gap={'40px'}
          >
            <Stack direction="column" spacing={4} color="#FFFFFF">
              <Text fontWeight="600">Services & Solutions</Text>
              <Stack direction="column" spacing={2} opacity="0.65">
                <Link href="#" _hover={{textDecoration: 'underline'}}>
                  Our Offerings
                </Link>
                <Link href="#" _hover={{textDecoration: 'underline'}}>
                  Payment
                </Link>
                <Link href="#" _hover={{textDecoration: 'underline'}}>
                  Explore Themes
                </Link>
                <Link href="#" _hover={{textDecoration: 'underline'}}>
                  Manage Your Business
                </Link>
                <Link href="#" _hover={{textDecoration: 'underline'}}>
                  Partner’s Program
                </Link>
                <Link href="#" _hover={{textDecoration: 'underline'}}>
                  Schedule a Demo
                </Link>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={4} color="#FFFFFF">
              <Text fontWeight="600">Legal</Text>
              <Stack direction="column" spacing={2} opacity="0.65">
                <Link href="#" _hover={{textDecoration: 'underline'}}>
                  Terms of Use
                </Link>
                <Link href="#" _hover={{textDecoration: 'underline'}}>
                  Privacy Policy
                </Link>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex="1" justify={{base: 'flex-start', md: 'flex-end'}} align="flex-start">
            <Box>
              <Text opacity="0.65">Hello@myxellia.io</Text>
            </Box>
          </Flex>
        </Flex>

        <Text color={'#A3A3A3'}>Copyright © 2024 Myxellia Inc. All rights reserved.</Text>
      </Box>
    </Box>
  );
};
