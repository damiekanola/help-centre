import {Box, Text, Image, Flex, Grid, Show, Hide, Link} from '@chakra-ui/react';
import Carousel from '../components/Resources/Carousel';
import veergeIcon from '../assets/icons/veerge-icon.svg';
import articleIcon from '../assets/icons/article-icon.svg';
import facebook from '../assets/icons/facebook.svg';
import x from '../assets/icons/x.svg';
import linkedin from '../assets/icons/linkedin.svg';
import link from '../assets/icons/link.svg';
import LeftNav from '../components/Leftsidenav/Leftsidenav';

export const BlogLayout = ({
  articleMeta,
  articleContent,
  otherresources,
  children,
  toView = true,
}) => {
  return (
    <div className="main">
      <Grid
        bg={'#FAFAFA'}
        pl={'5%'}
        pr={{base: '5%', md: '1%'}}
        templateColumns={{base: '1fr', md: '0.45fr 0.55fr'}}
        gap={'30px'}
        minH="500px"
        maxH="680px"
        // h={{base: '680px', md:'500px'}}
        position="relative"
        overflow="visible"
        alignItems="start"
      >
        <Flex
          pt={'90px'}
          pb={{base: 'px', md: '80px'}}
          h={{base: '100%', md: '100%'}}
          direction="column"
          justifyContent={'space-between'}
        >
          <Flex align={'center'} gap={'10px'} mb={'20px'}>
            <Flex align={'center'} gap={'8px'}>
              <Image w="24px" h="24px" src={articleIcon} />
              <Text color={'#1B1B1B'}>Article</Text>
            </Flex>

            <Text
              color={'#1B1B1BD9'}
              pl={'10px'}
              fontSize={'13px'}
              lineHeight={'13px'}
              borderLeft={'1px solid #1B1B1B66'}
            >
              {articleMeta.readTime || '8 mins read'}
            </Text>
          </Flex>
          <Text
            className="head_"
            mb={{base: '30px', md: 'px'}}
            fontSize={{base: '5vh', md: '5vh', lg: '6vh'}}
          >
            {articleMeta.title}
          </Text>
          <Text
            color={'#1B1B1BD9'}
            fontSize={'11px'}
            mb={{base: '50px', md: '20px'}}
            bgColor={'#FFFFFFE5'}
            w={'fit-content'}
            px={'5px'}
          >
            MYXELLIA GUIDE
          </Text>

          <Box borderTop={'1px solid #1B1B1B29'}>
            <Hide breakpoint="(min-width: 769px)">
              <Flex gap={'15px'} align={'center'} pt={'24px'} lineHeight={'23px'}>
                <Image src={veergeIcon} width={'40px'} height={'40px'} />

                <Box color={'#1B1B1BD9'} fontWeight={'500'}>
                  <Text fontSize={'12px'}>AUTHOR</Text>
                  <Text fontSize={'14px'}>Myxellia Team</Text>
                </Box>
              </Flex>
            </Hide>
            <Flex
              pt={'20px'}
              pb={{base: '0px'}}
              justify={'space-between'}
              lineHeight={'23px'}
              px={'8px'}
            >
              <Show breakpoint="(min-width: 769px)">
                <Flex gap={'16px'} align={'center'}>
                  <Image src={veergeIcon} width={'40px'} height={'40px'} />

                  <Box color={'#1B1B1BD9'} fontWeight={'500'}>
                    <Text fontSize={'12px'}>AUTHOR</Text>
                    <Text fontSize={'14px'}>Myxellia Team</Text>
                  </Box>
                </Flex>
              </Show>
              <Box color={'#1B1B1BD9'} fontWeight={'500'}>
                <Text fontSize={'12px'}>PUBLISHED</Text>
                <Text fontSize={'14px'}>{articleMeta.published}</Text>
              </Box>
              <Box color={'#1B1B1BD9'} fontWeight={'500'}>
                <Text fontSize={'12px'}>LAST UPDATE</Text>
                <Text fontSize={'14px'}>{articleMeta.updated}</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Box
          mt={{base: '', md: '40px'}}
          borderRadius={{base: '0px', md: '10px'}}
          overflow={'hidden'}
          alignSelf="stretch" // 👈 important: don’t stretch grid row
          position="relative"
          top={{base: '0px', md: '20px'}}
          zIndex={1}
          bgImage={`url(${articleMeta.image})`}
          bgSize="cover" // ✅ no stretching
          bgPos="center" // ✅ always centered
          bgRepeat="no-repeat"
          minH={{base: '200px', md: '100%'}}
        ></Box>
      </Grid>

      <div className="content_space">
        <LeftNav articleContent={articleContent} />

        <Box overflowY={'auto'}>{children}</Box>

        <Flex
          direction={'column'}
          gap={'10px'}
          alignItems={'center'}
          position={{base: 'sticky', lg: 'sticky'}}
          top={{base: '100px', md: '160px', lg: '100px'}}
          pt={'45px'}
        >
          <Text
            transform="rotate(180deg)"
            sx={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }}
            fontSize="13px"
            fontWeight="500"
            color="gray.600"
            letterSpacing="3px"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            display={{base: 'none', md: 'block'}}
          >
            BACK TO TOP
          </Text>
          <Box bgColor={'#624DE3'} h={'80px'} w={'1px'} display={{base: 'none', md: 'block'}}></Box>
          <Flex direction={{base: 'row', md: 'column'}} gap={'10px'}>
            <Link>
              <Image src={linkedin} w="40px" h={'40px'} />
            </Link>
            <Link>
              <Image src={x} w="40px" h={'40px'} />
            </Link>

            <Link w="40px" h={'40px'}>
              <Image src={facebook} />
            </Link>
            <Link w="40px" h={'40px'}>
              <Image src={link} />
            </Link>
          </Flex>
        </Flex>
      </div>

      <Carousel otherresources={otherresources} />
    </div>
  );
};
