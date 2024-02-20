import {Center, Flex, Image, Box, OrderedList, Text, useBreakpointValue} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrFacebook, GrLinkedin, GrTwitter} from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import revenue_recognition from '../../assets/images/blog/revenue_recognition.png';
import {useNavigate} from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';
import {FaChevronLeft, FaFacebook} from 'react-icons/fa6';

const Revenue_recognition = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const overviewRef = useRef(null);
  const benefitRef = useRef(null);

  const overviewCheck = useIsInViewport(overviewRef);
  const benefitCheck = useIsInViewport(benefitRef);

  const articleContent = [
    {check: overviewCheck, id: 'overview', title: 'Overview'},
    {check: benefitCheck, id: 'benefit', title: 'Benefits'},
  ];
  const shareText = useBreakpointValue({base: 'Share this article', md: '5 mins read'});

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
          <FaChevronLeft fontSize={'16px'} />
        </Center>

        <Image
          h={{base: '300px', md: 'full'}}
          w={{base: 'full', md: '468px'}}
          src={revenue_recognition}
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
          color={{base: '#ffffff !important', md: '#191919 !important'}}
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
              Revenue recognition solution
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text mt={{md: '15px'}} fontWeight={400} alignSelf={'center'} fontSize="14px">
                July 15, 2023
              </Text>
              <Text fontWeight={400} fontSize="14px" display={{md: 'none'}}>
                5 mins read
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
        <BlogLeftNav articleContent={articleContent} />
        <Box
          m={{base: '10px auto', md: '58px auto'}}
          pb={{base: '10px', md: '70px'}}
          fontWeight={200}
          fontSize="16px"
          w={{base: '100%', md: '40%', '2xl': '35%'}}
        >
          <Box ref={overviewRef} id="overview">
            <Text>
              Let's be frank – revenue is the lifeblood of any business's success. Without it, any
              organization simply cannot thrive. While generating profits can be an arduous task,
              monitoring and managing those earnings can present an even greater challenge. Grasping
              your income and comprehending your financial standing demands effort and a firm grasp
              of a fundamental accounting principle: revenue recognition.
            </Text>
            <Text mt={'30px'}>
              Navigating the intricacies of revenue recognition can undoubtedly become bewildering
              at times. This is where Veerge's innovative revenue recognition solution steps in,
              tailored specifically to empower property development firms in precisely and
              efficiently handling the intricate process of identifying and documenting revenue
              derived from sales or services rendered. Revenue recognition serves as a bedrock
              accounting concept, dictating the timing and methodology for recognizing revenue
              within a company's financial statements. Veerge's revenue recognition solution holds
              pivotal significance due to several compelling factors:
            </Text>
          </Box>
          <Box ref={benefitRef} id="benefit">
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                1. Precise financial reporting{' '}
              </Text>
              <Text>
                Property development ventures often encompass convoluted revenue recognition
                scenarios, involving extended project timelines, diverse revenue streams, and
                multifaceted recognition criteria. An adept system guarantees the accurate
                recognition of revenue, aligning seamlessly with accounting standards. This
                precision fosters trust among stakeholders like investors, regulatory bodies, and
                lending institutions.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                2. Informed decision-making{' '}
              </Text>
              <Text>
                Accurate and timely revenue recognition bestows management with lucid insights into
                project performance and financial robustness. These insights are pivotal for making
                well-informed determinations concerning resource allocation, project expansion, risk
                mitigation, and overarching corporate strategy.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                3. Mitigating risk{' '}
              </Text>
              <Text>
                Property development endeavors typically entail substantial capital investments and
                are exposed to an array of risks, ranging from project delays and cost escalations
                to market fluctuations. A revenue recognition system serves as an early warning
                system, aiding in the proactive identification and management of potential pitfalls.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                4. Investor trust
              </Text>
              <Text>
                Both individual and institutional investors hinge their evaluations of a property
                development entity on dependable financial data. A robust revenue recognition system
                bolsters transparency and credibility, fostering investor confidence and potentially
                attracting heightened investment.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                5. Internal vigilance
              </Text>
              <Text>
                Effective revenue recognition systems often integrate internal controls that thwart
                fraud, inaccuracies, and financial discrepancies. This robust oversight fortifies
                the overall fiscal administration and diminishes the odds of financial
                irregularities.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                6. Auditing and diligence
              </Text>
              <Text>
                Amid external audits or due diligence processes, a well-deployed revenue recognition
                system streamlines the scrutiny of financial records and guarantees auditors or
                potential collaborators swift comprehension of the applied revenue recognition
                methodologies.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                7. Enhanced efficiency
              </Text>
              <Text>
                Manual revenue recognition procedures tend to be laborious and error-prone.
                Implementing an automated solution amplifies efficiency, curbs the necessity for
                manual data inputs and calculations, and allocates resources for more value-centric
                tasks.
              </Text>
            </Box>
            <Box mt="30px">
              <Text fontWeight={500} fontSize={'20px'}>
                8. Forward-looking strategies
              </Text>
              <Text>
                Accurate revenue recognition insights furnish valuable comprehension of revenue
                trends and patterns. This data stands indispensable for long-range strategizing,
                resource allotment, and tactical decision-making.
              </Text>
            </Box>
            <Box mt="30px">
              <Text>
                In summation, the adoption of Veerge's revenue recognition solution is indispensable
                for property development firms aiming to ensure precise financial reporting,
                adherence to accounting benchmarks, sagacious decision-making, risk abatement,
                investor reliance, operational finesse, and the overarching adept management of
                their undertakings and financial landscapes.
              </Text>
            </Box>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  );
};

export default Revenue_recognition;
