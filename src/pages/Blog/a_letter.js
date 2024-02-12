import {Center, Flex, Image, Box, OrderedList, Text, useBreakpointValue} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrFacebook, GrLinkedin, GrTwitter} from 'react-icons/gr';
import Helpful from '../../components/Faq/Helpful';
import letter_from_CEO from '../../assets/images/blog/letter_from_CEO.png';
import {useNavigate} from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa6';

const A_letter = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const shareText = useBreakpointValue({base: 'Share this article', md: '11 mins read'});
  const dateText = useBreakpointValue({
    base: 'November 20, 2022',
    md: 'Published November 20, 2022',
  });

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
        bg={{md: '#F4E2CC'}}
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
          <SlArrowLeft fontSize={'20px'} />
        </Center>

        <Image
          h={{base: '300px', md: 'full'}}
          w={{base: 'full', md: '468px'}}
          src={letter_from_CEO}
          bgPosition={'center'}
          bgSize={'cover'}
          objectFit={'cover'}
          alignSelf={'center'}
          p={{base: 4, md: 0}}
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
        >
          <Box />
          <Box
            display={{base: 'flex', md: 'block'}}
            flexDirection={'column'}
            gap={{base: 6, md: 0}}
          >
            <Text fontWeight={500} color="#191919" w="full" alignSelf={'center'} fontSize="36px">
              A Letter from the CEO
            </Text>
            <Text
              mt="45px"
              fontWeight={500}
              color="#191919"
              alignSelf={'center'}
              fontSize="14px"
              display={{base: 'none', md: 'block'}}
            >
              By Ahmed Ibraheem
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text
                mt={{md: '15px'}}
                fontWeight={500}
                alignSelf={'center'}
                fontSize="14px"
                color={{base: '#3D3D3D !important', md: 'black !important'}}
              >
                {dateText}
              </Text>
              <Text
                fontWeight={500}
                fontSize="14px"
                color={'#3D3D3D !important'}
                display={{md: 'none'}}
              >
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
            <Text
              fontWeight={{md: 500}}
              alignSelf={{md: 'center'}}
              fontSize="14px"
              color={{base: '#3D3D3D !important', md: 'black !important'}}
            >
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
      <Box px={'78px'}>
        <Box
          w={'95%'}
          maxW={{base: '587px', xl: '40%'}}
          minW={{base: '0px', xl: '40%'}}
          mx="auto"
          mt={{md: '58px'}}
          pb="70px"
          fontWeight={200}
          fontSize="16px"
        >
          <Box>
            <Text>
              As I expressed in the letter when I assumed the position of CEO, "This is not a
              conventional company. We do not intend to become one." In line with that, we also
              emphasized the need to constantly strive for more and pursue important and meaningful
              endeavors with the resources at our disposal. We have always believed that over time,
              companies tend to become complacent, merely making incremental changes.
            </Text>
            <Text mt="20px">
              However, in the technology industry, where revolutionary ideas drive significant
              growth, it is crucial to embrace discomfort in order to stay relevant. While our
              company is currently performing well, we believe we can make it even more transparent,
              ethical, and accountable.
            </Text>
            <Text mt="20px">
              Today, I am filled with various emotions—pride, nostalgia, and a heavy heart. But
              above all, I am overwhelmed with a deep sense of gratitude. For years, I have harbored
              a dream of establishing a unique company, one with the potential to improve lives.
              Therefore, we are embarking on a new venture called Myxellia, and I am truly thrilled
              to lead it as CEO.
            </Text>
            <Text mt="20px">
              It feels like just yesterday when I first walked through the doors of this company as
              the product lead, marking the beginning of a remarkable journey. Not only for me but
              for many of us
            </Text>
            <Text mt="20px">
              Who could have imagined the countless incredible products we have collectively built
              for other companies? Yet, these achievements do not define our true success. Now, we
              are embarking on a journey to revolutionize how millions of people access investment
              in real estate and finance, thereby positively transforming lives and communities
              across the world.
            </Text>
            <Text mt="20px">
              When I reflect on what we stand for, I am reminded of how our mission, values, and
              guiding principles are about to manifest in reality. Many of you know that my
              intention was to establish a company that differentiates itself by striking a balance
              between profitability and social consciousness, compassion and rigor, and love and
              responsibility. We can only achieve this through your creativity, hard work, and the
              love you pour into the company, making it widely embraced and respected.
            </Text>
            <Text mt="20px">
              As we prepare for this rebirth, I humbly urge everyone not to lose sight of what truly
              matters: our fellow partners and our customers. In every weekly leadership meeting and
              daily engineering meetings, we should always imagine two empty chairs in the room—one
              for a partner and one for a customer and when faced with a decision, we ask ourselves
              if the choice would make both of them proud. As a new company, I implore all of us to
              build this tradition and let that answer guide us and i am so confident that these two
              chairs will serve us and the company well.
            </Text>
            <Text mt="20px">
              Please remember that Myxellia will thrive when our products are inclusive and
              accessible to everyone. Let us remain true to our purpose while also fostering
              innovation around it. We must never embrace the status quo. Instead, let us possess
              the curiosity to explore uncharted territories and the courage to push for
              reinvention. Change is inevitable, and the world will become more fragile now that we
              have embarked on this journey but midst the chaos, let us strive to listen with
              empathy, respond with kindness, and perform through the lens of humanity. We must not
              be mere bystanders; rather, we must take responsibility for what we witness and hear.
              No person or company is perfect, so we will learn from mistakes and practice
              forgiveness for ourselves and others. And when we achieve our goals, let us not forget
              that success is most meaningful when shared.
            </Text>
            <Text mt="20px">
              However, success is never a given; it must be earned every day through hard work and
              teamwork. If we strive to be the best version of ourselves and bring out the best in
              others, our dreams will manifest repeatedly, and our mission, values, and guiding
              principles will endure. These values are of utmost importance to everything we do. I
              will continue to lead as a true servant leader as this esteemed company embarks on its
              next chapter.
            </Text>
            <Text mt="20px" fontWeight={500} fontSize={'20px'} color="#000">
              -Ahmed Ibraheem
            </Text>
          </Box>
          <Helpful white />
        </Box>
      </Box>
    </Box>
  );
};

export default A_letter;
