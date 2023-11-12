import { Center, Flex, Image, Box, Text, OrderedList, ListItem } from '@chakra-ui/react'
import React, { useRef } from 'react';
import new_era from '../../assets/images/blog/new_era.png';
import { SlArrowLeft } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import { useNavigate } from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';


const New_era = () => {
  const navigate = useNavigate()
  const idea_forRef = useRef(null)
  const what_isRef = useRef(null)
  const how_doesRef = useRef(null)

  const idea_forCheck = useIsInViewport(idea_forRef);
  const what_isCheck = useIsInViewport(what_isRef);
  const how_doesCheck = useIsInViewport(how_doesRef);


  const articleContent = [
    { check: idea_forCheck, id: 'idea_for', title: 'Idea for innovation' },
    { check: what_isCheck, id: 'what_is', title: 'What is Veerge?' },
    { check: how_doesCheck, id: 'how_does', title: 'How does Veerge deliver those values effectively' },
  ]



  return (
    <Box p='0'>
      <Flex direction={'row'} align={'stretch'} py='0' gap='70px' pr='78px' pl='150px' mt='150px' w='full' bg={'#F7E9D8'} maxH={'100vh'} h={'500px'} position={'relative'}>
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
          src={new_era}
          bgPosition={'center'} bgSize={'cover'}
        />

        <Flex h='full' direction={'column'} align={'stretch'} justify={'space-between'} w='full'>

          <Box />
          <Box>
            <Text fontFamily='euclid-semibold' color='#191919' w='full' alignSelf={'center'} fontSize='36px'>
              The New Era of Real Estate
            </Text>
            <Text mt='45px' fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
              By Ahmed Ibraheem
            </Text>
            <Text mt='15px' fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
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
      <Box px={'78px'}>

        <BlogLeftNav articleContent={articleContent} />

        {/* <Box shadow={'md'} p='32px 20px' w='256px' h='193px' position={'absolute'} top='-100px' bg='white'>
          <Text mb='20px' fontWeight={500} fontSize={'20px'}>Table of Content</Text>
        </Box> */}
        <Box w={'75%'} ml='auto' mt='58px' pb='70px' fontFamily='euclid-light' fontSize='16px'>
          <Box ref={idea_forRef} id='idea_for'>
            <Text>
              A few years ago, we took a daring leap of faith, embarking on an extraordinary journey to establish our very own IT business solution company. Little did we know that this decision would lead us on a thrilling roller coaster ride, brimming with exhilarating challenges and triumphant moments. But you know what? We wouldn’t trade this adventure for anything else in the world.
            </Text>
            <Text mt='30px'>
              As we ventured forth, we encountered a pivotal business challenge that called upon the inner innovators within us. A property development company urging us to provide technology solutions that would elevate their bottom line.
              Elevating the bottom line rests on two fundamental pillars: The first is identifying business inefficiencies and streamlining operations, and the other is driving revenue. When it comes to revenue generation, one key aspect takes center stage — sales. However, sales are not merely an outcome; they are influenced by controllable input measures that, when injected into a business, yield the desired output of increased sales. In this regard, we strongly believe that personalization and consistently surpassing customer expectations reign supreme.
              When it comes to surpassing customers’ expectations, many Property development companies mistakenly associate it with building something unique and distinct. However, true differentiation resides in personalized experiences and the unwavering commitment to consistently exceed customer expectations. This form of differentiation pertains to the very essence of the business itself, extending beyond the confines of the product.
            </Text>
            <Text mt='30px'>
              Business differentiation holds the key to nurturing loyalty, satisfaction, and generating positive word-of-mouth referrals. We refer to it as the “point of difference” because it transforms the customers into ambassadors of the brand, effectively making them the invaluable marketing department.
            </Text>
            <Text mt='30px'>
              So, the creation of extraordinary customer experiences, one customer at a time, is undeniably crucial for establishing a successful and enduring property development franchise in today’s competitive market. The question then arises: How do we achieve this paramount objective?
            </Text>
            <OrderedList>
              <ListItem>
                How can we effectively personalize the business to make each potential buyer feel like the business was tailor-made for them? How do we empathize with buyers and understand their desires by putting ourselves in their shoes?
              </ListItem>
              <ListItem>
                What strategies can we implement to enhance the longevity of your relationships with existing clients? This is crucial considering that approximately 65% of revenue for most large businesses stems from existing clients and word-of-mouth referrals from these clients.
              </ListItem>
              <ListItem>
                How can we strike a balance between day-to-day operations and planning of business strategies? When customers visit your site or contact the property development company to make enquiries, their preferences often differ from the current offerings. How do we determine the appropriate time to take action and effectively reach out to these customer segments when we finally have offerings that match their preferences?
              </ListItem>
              <ListItem>
                How do we offer a buyer what he needs, when he needs it, how he needs it and now that the needs are ever evolving how do you evolve with these needs?
              </ListItem>
              <ListItem>
                How do you we know when it’s time to take advantage of new revenue streams, explore unique opportunities that maximize an addressable market, and expand the customer base?
              </ListItem>
              <ListItem>
                How can we build a strong relationship with each individual buyer such that the buyer’s behaviour informs what we sell to them and how you sell it to them?
              </ListItem>
            </OrderedList>
            <Text mt='30px'>
              To efficiently and effectively achieve these objectives, Automation emerges as the ultimate solution. Automation has the transformative power to revolutionize the business, eliminating human errors and reducing inefficiencies by optimizing processes. It embodies the philosophy known as “Kamiwaza” in Japanese, representing the way the gods would do it. By wholeheartedly embracing automation, A property development company can gain a significant competitive advantage and streamline business processes to new levels of efficiency and excellence.
            </Text>
            <Text mt='30px'>
              While there are various software options available in the market, these software are not specifically tailored to address the unique needs of property development companies. That’s precisely why we have developed Veerge — a cutting-edge software designed exclusively for property development companies. Property development companies will forever remain the heart & soul of Veerge.
            </Text>
          </Box>
          <Box ref={what_isRef} id='what_is'>
            <Text mt='30px' fontFamily='euclid-semibold' fontSize={'36px'}>
              What is Veerge?
            </Text>
            <Text mt='30px'>
              Veerge is an innovative cloud-based technology infrastructure that revolutionizes the way a property development company operates. It offers a comprehensive suite of fully integrated apps and services designed to empower these businesses with the necessary tools to achieve remarkable outcomes, exceed customer expectations, and navigate the ever-changing landscape of technology.
            </Text>
            <Text mt='30px'>
              One of the key strengths of Veerge lies in its transformative customer experience capabilities. By leveraging Veerge, property development companies can gain profound insights into their customers on a personal level, allowing them to strengthen relationships, foster loyalty, and make informed decisions. With Veerge, one can implement best practices that elevates the business to the next level, while simultaneously reducing the burdens
              associated with running the company at that level.
            </Text>
          </Box>
          <Box ref={how_doesRef} id='how_does'>
            <Text mt='30px' fontFamily='euclid-semibold' fontSize={'36px'}>
              How does Veerge deliver these values effectively?
            </Text>
            <Text mt='30px'>
              Veerge offers a comprehensive CRM that delivers an exceptional customer 360 experience, along with an advanced Inventory Management system, Transaction Management system, Task Management system, and more, seamlessly integrated with each other. However, what truly sets Veerge apart is its innovative web application development suite. With this suite, property development companies can effortlessly create fully functional web application interfaces without writing a single line of code. It’s as simple as a few clicks. But it’s not just any web application interface; it serves as a point of convergence, an all-encompassing marketplace where offerings and buyers coexist seamlessly every day. This coexistence is personalized to meet the unique needs of each buyer, creating a gold-standard experience that caters to every aspect of the home ownership journey.
            </Text>
            <Text mt='30px'>
              The emphasis on personalization is driven by the understanding that buyers are not homogenous entities with identical needs and preferences. Each buyer is unique, with specific desires, pain points, and aspirations. By providing a personal touch, Veerge establishes a deep connection with buyers, fostering loyalty and trust.
            </Text>
            <Text mt='30px'>
              Consistently delivering exceptional service that surpasses buyer expectations creates a memorable experience that leaves a lasting impression. Real estate has long been known as an industry resistant to change. However, if we wonder how transformative user experience is to an industry, we can reflect on the impact user interfaces had on banking. The advent of the internet and user-friendly interfaces revolutionized how we manage our finances. Online banking has become an integral part of our lives, and it’s challenging to imagine a time without it. While the core principles of banking have remained largely unchanged for centuries, the way we interact with our money has undergone a profound shift. The rise of mobile banking has made accessing funds as simple as a touch, swipe, or tap on a device. Visiting a branch, waiting for monthly statements, or relying on passbooks are things of the past. Balances are instantly available, new accounts can be opened with ease, and customers can seek help or connect with experts with just a tap.
            </Text>
            <Text mt='30px'>
              Given this transformation in the banking industry, isn’t it time for property development companies to embrace this new era? Veerge, with its web application development suite, introduces a comprehensive platform that caters to every need of property development company buyers. Buyers can schedule inspections, view real-time property availability, make initial deposit payments (collected in over 74 countries and 154 currencies), track payments and outstanding balances, and even customize payments for their outstanding balance. Furthermore, all their purchase documents and associated files are conveniently stored in one place.
            </Text>
            <Text mt='30px'>
              These enhanced user interfaces and experiences play a pivotal role in customer satisfaction. By proactively delighting customers, a property development company can establish a distinguished reputation. Satisfied buyers are more likely to remain loyal, increase their spending, and contribute to long-term growth. Veerge empowers development companies to personalize the buyer’s journey and create a seamless and satisfying experience.
            </Text>
            <Text mt='30px'>
              Veerge offers some other remarkable features that truly set it apart, co-ownership and fractional ownership are some of them. These features are game-changers in the real estate industry. With co-ownership, users have the ability to invite friends and family to purchase properties together, enabling those with lower purchasing power to participate. It addresses a common scenario where past clients of development companies still want to invest in properties being developed, but their budget may not align with the property’s price due to reduced buying capacity over time. Co-ownership’s brilliance can be likened to the impact of the fax machine. The marketing of the fax machine lives in the fax machine itself. Just like the first person who acquired a fax machine and activated its marketing potential by spreading the word, co-ownership ignites a similar mechanism of expanding opportunities and fostering collaboration among buyers.
            </Text>
            <Text mt='30px'>
              On the other hand, fractional ownership presents a slightly different approach. Development companies can choose to fractionalize certain properties instead of selling them as a whole. This enables individuals who may not know each other to purchase small portions of a property together. This innovative approach breaks down the barrier of high ticket prices and opens doors for more people to invest on their web application and benefit from real estate value appreciation.
            </Text>
            <Text mt='30px'>
              Fractional ownership doesn’t alter the traditional property selling process; it divides ownership into smaller, more affordable portions. For instance, a property valued at 50 million can be divided into 1,000 shares, with each share representing a fraction of the property’s value. Individuals can then purchase fractions according to their budget and investment capability. Additionally, there is a voting poll for major decisions, ensuring participation and transparency among co-owners.
            </Text>
            <Text mt='30px'>
              These features not only benefit users by providing greater accessibility and investment options, but they also significantly enhance the cash flow velocity into development companies, maximizing growth potential. By effectively leveraging fractional real estate, businesses can ensure they capitalize on every opportunity, while their competitors struggle to serve customers who could potentially be theirs.
            </Text>
            <Text mt='30px'>
              Consider this: 90% of fractional buyers are likely first-time real estate investors. If a business fulfills its promises and delivers on value creation, these satisfied customers become ambassadors, spreading positive experiences through word-of-mouth. This creates exponential growth potential for the company, as the purchasing power of fractional buyers is likely to increase over time. These are just some of the ways Veerge’s infrastructure personalizes the buyer’s experience, regardless of where they are on their real estate journey, by offering innovative solutions that cater to diverse needs and foster long-term relationships.
            </Text>
            <Text mt='30px'>
              As mentioned earlier, improving the bottom line involves two fundamental aspects: revenue generation and the identification of inefficiencies to streamline operations. We have already established how personalization can boost revenue. Now, let’s address the issue of fixing business inefficiencies.
              Inefficiencies within business processes can lead to significant financial losses. During our tenure as an IT business solution company, we encountered numerous cases where businesses achieved better returns on investment when they were smaller compared to when they expanded into larger entities. This prompted the important question:
              “How do you become big but stay small?”
            </Text>
            <Text mt='30px'>
              The solution lies in implementing an infrastructure that streamlines and optimizes workflows by automating repetitive tasks, eliminating errors, and reducing time requirements. By doing so, any company can enhance productivity, save time, and cut costs. As a business expands, managing revenue can become challenging and prone to mistakes. This is where Veerge’s revenue recognition solution becomes invaluable. It effortlessly provides a comprehensive understanding of all the business’s revenue, regardless of the source or earning method. Not only does it offer insights into who made payments and for which specific property, but it also provides visibility into the remaining balance. Moreover, the solution enables continuous tracking and projection of cash flow, ensuring that businesses stay informed about their financial position at all times. With this integrated solution, accurate revenue management is ensured, empowering businesses to make well-informed financial decisions.
            </Text>
            <Text mt='30px'>
              Looking towards the future, there are two types of businesses that will thrive: technology businesses and technology-enabled businesses. There is no third option. To ensure long-term success, development companies must embrace technology. In Africa, Veerge stands as the most advanced software available for property development companies. It is years ahead of any other option currently on the market. Veerge is designed to guide development companies through the future of technology, keeping their businesses ahead of the curve. Furthermore, Veerge is easy to deploy and user-friendly, making it accessible to everyone within the organization.
              By leveraging Veerge’s capabilities, development companies can address inefficiencies, maximize revenue, and position themselves as leaders in the industry. The future belongs to those who embrace technology and use it to their advantage. Veerge is the ideal partner to guide development companies on this transformative journey, ensuring their sustained success in a rapidly evolving market.
            </Text>
            <Text mt='30px'>
              One of the key strengths of Veerge lies in its transformative customer experience capabilities. By leveraging Veerge, property development companies can gain profound insights into their customers on a personal level, allowing them to strengthen relationships, foster loyalty, and make informed decisions. With Veerge, one can implement best practices that elevates the business to the next level, while simultaneously reducing the burdens associated with running the company at that level.
            </Text>
            <Text mt='30px'>
              One of the key strengths of Veerge lies in its transformative customer experience capabilities. By leveraging Veerge, property development companies can gain profound insights into their customers on a personal level, allowing them to strengthen relationships, foster loyalty, and make informed decisions. With Veerge, one can implement best practices that elevates the business to the next level, while simultaneously reducing the burdens associated with running the company at that level.
            </Text>
            <Text mt='30px'>
              One of the key strengths of Veerge lies in its transformative customer experience capabilities. By leveraging Veerge, property development companies can gain profound insights into their customers on a personal level, allowing them to strengthen relationships, foster loyalty, and make informed decisions. With Veerge, one can implement best practices that elevates the business to the next level, while simultaneously reducing the burdens associated with running the company at that level.
            </Text>
            <Text mt='30px'>
              One of the key strengths of Veerge lies in its transformative customer experience capabilities. By leveraging Veerge, property development companies can gain profound insights into their customers on a personal level, allowing them to strengthen relationships, foster loyalty, and make informed decisions. With Veerge, one can implement best practices that elevates the business to the next level, while simultaneously reducing the burdens associated with running the company at that level.
            </Text>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  )
}

export default New_era