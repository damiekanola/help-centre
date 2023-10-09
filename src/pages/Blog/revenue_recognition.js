import { Center, Flex, Image, Box, OrderedList, Text } from '@chakra-ui/react'
import React, { useRef } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import revenue_recognition from '../../assets/images/blog/revenue_recognition.png';
import { useNavigate } from 'react-router-dom';


const Revenue_recognition = () => {
  const navigate = useNavigate();
  const a_ticketRef = useRef(null);
  const perksRef = useRef(null);

  const a_ticketCheck = useIsInViewport(a_ticketRef);
  const perksCheck = useIsInViewport(perksRef)


  const articleContent = [
    { check: a_ticketCheck, id: 'how_to', title: 'Overview' },
    { check: perksCheck, id: 'perks', title: 'Benefits' },
  ]



  return (
    <Box p='0'>
      <Flex direction={'row'} align={'stretch'} py='0' gap='70px' pr='78px' pl='150px' mt='150px' w='full' bg={'#F4E2CC'} maxH={'100vh'} h={'500px'} position={'relative'}>
        <Center
          onClick={() => navigate(-1)}
          position={'absolute'} top='20px'
          cursor={'pointer'} left='78px'
          h='50px' w='50px' borderRadius={'full'}
          color='#191919' bg='#fff'
        >
          <SlArrowLeft fontSize={'20px'} />
        </Center>

        <Image
          h='full' w='468px'
          src={revenue_recognition}
          bgPosition={'center'} bgSize={'cover'}
        />

        <Flex h='full' direction={'column'} align={'stretch'} justify={'space-between'} w='full'>

          <Box />
          <Box>
            <Text fontWeight={600} color='#191919' w='full' alignSelf={'center'} fontSize='36px'>

              Revenue recognition solution
            </Text>
            <Text mt='45px' fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
              July 20, 2023
            </Text>
          </Box>
          <Flex w='full' justify={'space-between'} align={'center'} pb='10px'>
            <Text fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
              5 mins read
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
      <Box px={'78px'} position={'relative'}>

        <Box
          bg='#F9FAFB'
          boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
          position={'absolute'}
          overflowY={'scroll'} top='-100px'
          w='100%' h='fit-content' maxW={'256px'}
          p='32px 20px'
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
          <Text mb='20px' fontWeight={500} fontSize={'20px'} color='#000'>Table of Content</Text>
          <Flex direction={'column'} align={'stretch'}>
            {articleContent.map((content, i) => (
              <Flex
                w='full' my='10px'
                key={i} cursor={'pointer'}
                justify='space-between' align='flex-start'>
                <Box w='5px' h='5px' borderRadius={'full'} bg={content.check ? '#4545FE' : '#606060'} />
                <Text
                  w={'90%'}
                  mt='-5px'
                  fontSize={'14px'}
                  fontWeight={content.check ? 500 : 400}
                  color={content.check ? '#4545FE' : '#191919'}
                >
                  <a href={`#${content.id}`}>
                    {content?.title}
                  </a>
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        {/* <Box shadow={'md'} p='32px 20px' w='256px' h='193px' position={'absolute'} top='-100px' bg='white'>
          <Text mb='20px' fontWeight={500} fontSize={'20px'}>Table of Content</Text>
        </Box> */}
        <Box w={'75%'} ml='auto' mt='58px' pb='70px'>
          <Box ref={a_ticketRef}>
            <Text>
              Let's be frank – revenue is the lifeblood of your business's success. Without it, your organization simply cannot thrive. While generating profits can be an arduous task, monitoring and managing those earnings can present an even greater challenge. Grasping your income and comprehending your financial standing demands effort and a firm grasp of a fundamental accounting principle: revenue recognition. Navigating the intricacies of revenue recognition can undoubtedly become bewildering at times. This is where Veerge's innovative revenue recognition solution steps in, tailored specifically to empower property development firms in precisely and efficiently handling the intricate process of identifying and documenting revenue derived from sales or services rendered. Revenue recognition serves as a bedrock accounting concept, dictating the timing and methodology for recognizing revenue within a company's financial statements. Veerge's revenue recognition solution holds pivotal significance due to several compelling factors:
            </Text>
          </Box>
          <Box ref={perksRef}>
            <Box mt='30px'>
              <Text fontWeight={600} fontSize={'20px'} color='#000'>1. Precise financial reporting </Text>
              <Text>
                Property development ventures often encompass convoluted revenue recognition scenarios, involving extended project timelines, diverse revenue streams, and multifaceted recognition criteria. An adept system guarantees the accurate recognition of revenue, aligning seamlessly with accounting standards. This precision fosters trust among stakeholders like investors, regulatory bodies, and lending institutions.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={600} fontSize={'20px'} color='#000'>2. Informed decision-making </Text>
              <Text>
                Accurate and timely revenue recognition bestows management with lucid insights into project performance and financial robustness. These insights are pivotal for making well-informed determinations concerning resource allocation, project expansion, risk mitigation, and overarching corporate strategy.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={600} fontSize={'20px'} color='#000'>3. Mitigating risk </Text>
              <Text>
                Property development endeavors typically entail substantial capital investments and are exposed to an array of risks, ranging from project delays and cost escalations to market fluctuations. A revenue recognition system serves as an early warning system, aiding in the proactive identification and management of potential pitfalls.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={600} fontSize={'20px'} color='#000'>4. Investor trust</Text>
              <Text>
                Both individual and institutional investors hinge their evaluations of a property development entity on dependable financial data. A robust revenue recognition system bolsters transparency and credibility, fostering investor confidence and potentially attracting heightened investment.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={600} fontSize={'20px'} color='#000'>5. Internal vigilance</Text>
              <Text>
                Effective revenue recognition systems often integrate internal controls that thwart fraud, inaccuracies, and
                financial discrepancies. This robust oversight fortifies the overall fiscal administration and diminishes the odds of financial irregularities.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={600} fontSize={'20px'} color='#000'>6. Auditing and diligence</Text>
              <Text>
                Amid external audits or due diligence processes, a well-deployed revenue recognition system streamlines the scrutiny of financial records and guarantees auditors or potential collaborators swift comprehension of the applied revenue recognition methodologies.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={600} fontSize={'20px'} color='#000'>7. Enhanced efficiency</Text>
              <Text>
                Manual revenue recognition procedures tend to be laborious and error-prone. Implementing an automated solution amplifies efficiency, curbs the necessity for manual data inputs and calculations, and allocates resources for more value-centric tasks.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={600} fontSize={'20px'} color='#000'>8. Forward-looking strategies</Text>
              <Text>
                Accurate revenue recognition insights furnish valuable comprehension of revenue trends and patterns. This data stands indispensable for long-range strategizing, resource allotment, and tactical decision-making.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                In summation, the adoption of Veerge's revenue recognition solution is indispensable for property development firms aiming to ensure precise financial reporting, adherence to accounting benchmarks, sagacious decision-making, risk abatement, investor reliance, operational finesse, and the overarching adept management of their undertakings and financial landscapes.
              </Text>
            </Box>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  )
}

export default Revenue_recognition