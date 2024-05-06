import {
  Center,
  Flex,
  Image,
  Box,
  Text,
  OrderedList,
  ListItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import new_era from '../../assets/images/blog/new_era.png';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrLinkedin, GrTwitter} from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import {useNavigate} from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';
import {FaChevronLeft, FaFacebook} from 'react-icons/fa6';

const New_era = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const idea_forRef = useRef(null);
  const what_isRef = useRef(null);
  const how_doesRef = useRef(null);

  const idea_forCheck = useIsInViewport(idea_forRef);
  const what_isCheck = useIsInViewport(what_isRef);
  const how_doesCheck = useIsInViewport(how_doesRef);

  const articleContent = [
    {check: idea_forCheck, id: 'idea_for', title: 'Idea for innovation'},
    {check: what_isCheck, id: 'what_is', title: 'What is Veerge?'},
    {
      check: how_doesCheck,
      id: 'how_does',
      title: 'How does Veerge deliver those values effectively',
    },
  ];
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
        bg={{md: '#F7E9D8'}}
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
          h="full"
          w="468px"
          src={new_era}
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
              The New Era of Real Estate
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text mt={{md: '15px'}} fontWeight={400} alignSelf={'center'} fontSize="14px">
                March 7, 2023
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
        gap={{base: 8, md: 0}}
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
          <Box ref={idea_forRef} id="idea_for">
            <Text>
              A few years back, we embarked on a bold journey, brimming with excitement and
              anticipation, as we ventured into the realm of IT business solutions. Little did we
              anticipate the whirlwind of challenges and victories that awaited us along the way.
              Yet, looking back, we wouldn't trade this exhilarating adventure for anything else in
              the world.
            </Text>

            <Text mt="30px">
              Our path took an unexpected turn when a prominent property development company sought
              our expertise to revolutionize their operations. They were searching for more than
              just technological solutions; they wanted a partner who could elevate their business
              to new heights. And so, we embraced the challenge with open arms, recognizing that the
              heart of their success lay in two fundamental pillars: efficiency and revenue. When it
              comes to driving revenue, we understand that sales are not merely transactions; they
              are the culmination of personalized experiences and exceeding client expectations.
              Many in the property development sector mistake differentiation for uniqueness in
              construction. However, true differentiation stems from personalized interactions and
              an unwavering commitment to surpassing clients expectations at every turn.
            </Text>

            <Text mt="30px">
              This is the linchpin for fostering loyalty, satisfaction, and generating positive
              word-of-mouth referrals. We refer to it as the “point of difference” because it
              transforms clients into brand ambassadors, it makes client a new part of our marketing
              department.
            </Text>

            <Text mt="30px">
              This raises the question: How do we achieve this paramount objective
            </Text>

            <OrderedList>
              <ListItem>
                How can we effectively personalize the business to make each potential buyer feel
                like the business was tailor-made for them? How do we empathize with buyers and
                understand their desires by putting ourselves in their shoes?
              </ListItem>
              <ListItem>
                What strategies can we implement to enhance the longevity of relationships with
                existing clients, considering that approximately 65% of revenue for most large
                businesses stems from existing clients and word-of-mouth referrals from these
                clients?
              </ListItem>
              <ListItem>
                How can we strike a balance between day-to-day operations and the planning of
                business strategies?
              </ListItem>
              <ListItem>
                How do we determine the perfect timing to introduce offerings that align with
                clients’ desires?
              </ListItem>
              <ListItem>
                How do we evolve with clients' ever-changing needs, ensuring we offer what they
                need, when and how they need it?
              </ListItem>
              <ListItem>
                When is it the right time to explore new revenue streams and expand our customer
                base?
              </ListItem>
              <ListItem>
                How can we forge strong relationships where a buyer’s behavior directly informs our
                sales strategies?
              </ListItem>
            </OrderedList>

            <Text mt="30px">
              The answer to many of these challenges lies in automation. Automation not only
              eliminates human error and reduces inefficiencies but also optimizes business
              processes to unprecedented levels of excellence. It embodies the Japanese philosophy
              of “Kamiwaza”—performing tasks with a godlike finesse. By embracing automation,
              property development companies can achieve a significant competitive edge and elevate
              their operational effectiveness to new heights.
            </Text>

            <Text mt="30px">
              While many software solutions are available on the market, they often lack the
              specificity to meet the unique needs of property development companies. This is
              precisely why we created Veerge—an innovative software designed exclusively for the
              property development sector. Veerge is built with a deep understanding of the
              industry, and property development companies will always remain at the heart of its
              purpose and vision.
            </Text>
          </Box>
          <Box ref={what_isRef} id="what_is">
            <Text mt="30px" fontWeight={500} fontSize={'36px'}>
              What is Veerge?
            </Text>
            <Text mt="30px">
              Veerge is an operating system designed to transform how property development companies
              engage with their clients, positioning them for unprecedented growth. As a cloud-based
              technology infrastructure, Veerge revolutionizes operations by offering a suite of
              fully integrated apps and services. These tools empower companies to achieve
              exceptional outcomes, exceed client expectations, and stay agile in the rapidly
              evolving tech landscape.
            </Text>

            <Text mt="30px">
              A standout feature of Veerge is its transformative user interface. This interface
              provides property developers with deep insights into their clients' preferences and
              needs, enabling them to build stronger relationships, foster loyalty, and make
              strategic, data-driven decisions. Veerge equips businesses with industry best
              practices and innovative tools that enhance operations while simplifying the
              complexities associated with scaling.
            </Text>
          </Box>
          <Box ref={how_doesRef} id="how_does">
            {/* <Text mt="30px" fontWeight={500} fontSize={'36px'}>
              How does Veerge deliver these values effectively?
            </Text> */}
            <Text mt="30px">
              Veerge includes a comprehensive CRM that delivers an exceptional 360-degree customer
              experience, alongside advanced systems for inventory, transaction, and task
              management. However, what truly sets Veerge apart is its innovative web application
              development suite. This suite allows property development companies to effortlessly
              create fully functional web interfaces without writing a single line of code, all
              through a few simple clicks. These web interfaces serve as a dynamic marketplace where
              offerings and clients seamlessly interact daily, each interaction tailored to meet the
              unique needs of each clients— thereby creating a gold-standard experience that
              addresses every facet of the home ownership journey.
            </Text>

            <Text mt="30px">
              This emphasis on personalization stems from the understanding that buyers are not
              homogeneous entities. Each buyer is unique, with specific desires, pain points, and
              aspirations. By adding a personal touch, the business forges deep connections with
              clients, fostering loyalty and trust.
            </Text>

            <Text mt="30px">
              These enhanced user interfaces and experiences play a pivotal role in client
              satisfaction. By proactively delighting clients, a property development company can
              establish a distinguished reputation. Satisfied clients are more likely to remain
              loyal, increase their spending, and contribute to long-term growth. Veerge empowers
              development companies to personalize the buyer’s journey and create a seamless and
              satisfying experience.
            </Text>
            <Text mt="30px">
              Real estate has long been known as an industry resistant to change. However,
              reflecting on the transformative impact of user-friendly interfaces on the banking
              sector provides valuable insights. The advent of the internet and user- friendly
              interfaces revolutionized how we manage our finances. Online banking, now a staple in
              our lives, has significantly altered our interaction with money. The introduction of
              mobile banking has simplified accessing funds to a mere touch, swipe, or tap,
              rendering traditional banking practices like visiting branches or waiting for monthly
              statements obsolete.
            </Text>

            <Text mt="30px">
              Given these advancements in the banking industry, it's time for property development
              companies to embrace a new era. Veerge, with its web application development suite,
              offers a comprehensive platform that addresses every need of property buyers. This
              platform enables buyers to schedule inspections, view real-time property availability,
              make initial deposit payments across various currencies, track payments and balances,
              and customize payment plans. Additionally, all purchase documents and files are
              conveniently stored in one location.
            </Text>

            <Text mt="30px">
              Veerge also introduces revolutionary features such as co-ownership and fractional
              ownership, which are game-changers in the real estate industry. Co- ownership allows
              users to purchase properties collectively with friends and family, making property
              ownership accessible to those with lower purchasing power. This feature leverages the
              network effect, much like the fax machine did, by enabling the first users to promote
              the concept through their personal networks.
            </Text>

            <Text mt="30px">
              Fractional ownership, on the other hand, allows for the purchase of property in
              smaller, more affordable segments. This innovative approach democratizes property
              investment, making it accessible to a broader audience. For example, a property valued
              at $50 million can be divided into 1,000 shares, allowing individuals to invest
              according to their budget and capability. This setup also includes a voting system for
              major decisions, ensuring transparency and participation among co-owners.
            </Text>

            {/* <Text mt="30px">
              Fractional ownership doesn’t alter the traditional property selling process; it
              divides ownership into smaller, more affordable portions. For instance, a property
              valued at 50 million can be divided into 1,000 shares, with each share representing a
              fraction of the property’s value. Individuals can then purchase fractions according to
              their budget and investment capability. Additionally, there is a voting poll for major
              decisions, ensuring participation and transparency among co-owners.
            </Text> */}

            <Text mt="30px">
              These features not only provide greater accessibility and investment options but also
              enhance the cash flow into development companies, maximizing growth potential. With
              90% of fractional buyers likely being first-time real estate investors, a company that
              delivers on value can expect these satisfied clients to become loyal advocates,
              promoting the value creation and contributing to exponential growth.
            </Text>

            {/* <Text mt="30px">
              Consider this: 90% of fractional buyers are likely first-time real estate investors.
              If a business fulfills its promises and delivers on value creation, these satisfied
              customers become ambassadors, spreading positive experiences through word-of-mouth.
              This creates exponential growth potential for the company, as the purchasing power of
              fractional buyers is likely to increase over time. These are just some of the ways
              Veerge’s infrastructure personalizes the buyer’s experience, regardless of where they
              are on their real estate journey, by offering innovative solutions that cater to
              diverse needs and foster long-term relationships.
            </Text> */}

            <Text mt="30px">
              Improving the bottom line involves two fundamental aspects: revenue generation and
              streamlining operations. We have already established how personalization can boost
              revenue. Now, let’s address the issue of fixing business inefficiencies.
              Inefficiencies in business processes can lead to significant financial losses. During
              our tenure as an IT business solution company, we encountered many cases where
              businesses achieved better returns on investment when they were smaller compared to
              when they expanded into larger entities. This prompted the important question: “How do
              you become big but stay small?”
            </Text>

            <Text mt="30px">
              The solution lies in implementing an infrastructure that streamlines and optimizes
              workflows by automating repetitive tasks, eliminating errors, and reducing time
              requirements. By doing so, any property development company can enhance productivity,
              save time, and cut costs. As a business expands, managing revenue can become
              challenging and prone to mistakes. This is where Veerge's revenue recognition solution
              becomes invaluable. It effortlessly provides a comprehensive understanding of all the
              business's revenue, regardless of the source or earning method. Not only does it offer
              insights into who made payments and for which specific property, but it also provides
              visibility into the what’s outstanding. Moreover, the solution enables continuous
              tracking and projection of cash flow, ensuring that businesses stay informed about
              their financial position at all times. With this integrated solution, accurate revenue
              management is ensured, empowering businesses to make well- informed financial
              decisions.
            </Text>

            <Text mt="30px">
              Looking to the future, two types of businesses will thrive: technology businesses and
              technology-enabled businesses. There is no third option. To ensure long-term success,
              development companies must embrace technology. In Africa, Veerge stands as the most
              advanced software available for property development companies. It is years ahead of
              any other option currently on the market. Veerge is designed to guide development
              companies through the future of technology, keeping their businesses ahead of the
              curve. Furthermore, Veerge is easy to deploy and user-friendly, making it accessible
              to everyone within the organization.
            </Text>
            <Text mt="30px">
              By leveraging Veerge's capabilities, development companies can address inefficiencies,
              maximize revenue, and position themselves as leaders in the industry. The future
              belongs to those who embrace technology and use it to their advantage. Veerge is the
              ideal partner to guide development companies on this transformative journey, ensuring
              their sustained success in a rapidly evolving market.
            </Text>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  );
};

export default New_era;
