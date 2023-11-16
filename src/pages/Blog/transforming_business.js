import { Center, Flex, Image, Box, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react';
import a_ticketing_system from '../../assets/images/blog/a_ticketing_system.png';
import { SlArrowLeft } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import { useNavigate } from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';


const Transforming_business = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate()
  const a_ticketRef = useRef(null)
  const perksRef = useRef(null)

  const a_ticketCheck = useIsInViewport(a_ticketRef);
  const perksCheck = useIsInViewport(perksRef)


  const articleContent = [
    { check: a_ticketCheck, id: 'a_ticket', title: 'A ticket system serves as an indispensable tool within the realm' },
    { check: perksCheck, id: 'perks', title: 'Perks of a Ticketing System' },
  ]



  return (
    <Box p='0'>
      <Flex direction={'row'} align={'stretch'} py='0' gap='70px' pr='78px' pl='150px' mt='150px' w='full' bg={'#1D6169'} maxH={'100vh'} h={'500px'} position={'relative'}>
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
          src={a_ticketing_system}
          bgPosition={'center'} bgSize={'cover'}
        />

        <Flex h='full' direction={'column'} align={'stretch'} justify={'space-between'} w='full'>

          <Box />
          <Box>
            <Text fontFamily='euclid-semibold' color='#FFF' w='full' alignSelf={'center'} fontSize='36px'>
              Transforming your business with a  Ticketing system
            </Text>
            <Text mt='45px' fontWeight={500} color='#FFF' alignSelf={'center'} fontSize='14px'>
              May 20, 2023
            </Text>
          </Box>
          <Flex w='full' justify={'space-between'} align={'center'} pb='10px'>
            <Text fontWeight={500} color='#FFF' alignSelf={'center'} fontSize='14px'>
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
          <Box ref={a_ticketRef} id='a_ticket'>
            <Text>
              A Ticketing system on veerge is a central hub for managing various aspects of the operations of a development company, enabling them to navigate the complexities with heightened efficiency and precision. For firms that encompass a service component, the ticketing system takes on a crucial role in facilitating the orchestrated flow of tasks. From addressing customer inquiries about properties to resolving issues that may arise during construction or post-construction phases, the system ensures that every task is recorded, tracked, and effectively managed.
            </Text>
            <Text mt='30px'>
              One of the system's key benefits is its capacity to handle bottlenecks that might emerge during the property development lifecycle. Whether it's a delay in obtaining permits, a shortage of construction materials, or unexpected challenges during the building process, the ticketing system acts as a virtual control center, streamlining communication and coordination among various teams and departments. Moreover, as property development companies often engage with both external stakeholders (potential buyers, investors, regulatory bodies) and internal teams (architects, engineers, contractors), the ticketing system proves invaluable in managing interactions across these diverse fronts. It captures inquiries from potential buyers seeking information about properties, tracks the progress of construction-related tasks, and ensures that all parties involved are on the same page.
            </Text>
            <Text mt='30px'>
              In the fast-paced environment, the need for effective communication and task management is particularly pronounced. The ticketing system excels in this regard by providing a structured framework to handle customer inquiries, service requests, and project-related tasks. This structured approach prevents important matters from falling through the cracks and minimizes the risk of misunderstandings or missed deadlines. Without a doubt, the property development landscape can be characterized by sudden spikes in activity. For instance, upon the launch of a new property offering, a flood of inquiries might pour in. During such periods, the ticketing system becomes a critical asset, preventing overwhelming customer support teams and ensuring that every inquiry receives proper attention. While some property development companies might attempt to manage inquiries and tasks through email correspondence, this approach often proves inadequate. Emails lack the built-in functionalities that a ticketing system offers, such as detailed progress tracking, automated task assignment, and seamless collaboration among team members. The ticketing system's advanced capabilities significantly enhance the efficiency and effectiveness of managing property-related operations.
            </Text>
          </Box>
          <Box ref={perksRef} id='perks'>
            <Text mt='30px' fontFamily='euclid-semibold' fontSize={'36px'} color='#000'>
              Perks of a Ticketing System
            </Text>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>1. Elevates the Customer Experience </Text>
              <Text>
                A ticketing system stands as a cornerstone for fortifying customer service and augmenting satisfaction. It presents a seamless avenue for customers to seek assistance while providing your staff with a streamlined channel to deliver
                efficient and effective support. It shines by offering an online self-service portal accessible round the clock. This empowers customers to seek help whenever the need arises. The inherent structure of tickets ensures that no request is lost or forgotten; each ticket is meticulously tracked, capturing crucial information and communication in a centralised repository. Consequently, your team is empowered to guide customer concerns to resolution with precision. The ability to highlight high priority issues expedites their resolution, enabling your team to address critical matters promptly. Additionally, the portal often incorporates frequently asked questions (FAQs) and other relevant information, empowering customers to troubleshoot common problems independently. By enabling customers to swiftly resolve issues on their own, the system not only facilitates their tasks but also alleviates the workload of your support staff.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>2. Amplifies Team Productivity </Text>
              <Text>
                For your team, a ticketing system serves as a catalyst for heightened productivity. It acts as a comprehensive hub that centralizes all service request activities and pertinent information, eliminating the time wasted on searching
                for crucial data. In addition to capturing the initial request, the system meticulously documents every subsequent interaction with the customer. Team members can effortlessly catch up on the request's history, ensuring a
                seamless continuity of service. Automation features further enhance productivity, automating tasks like routing tickets to the appropriate departments based on request nature, generating insightful reports, and issuing timely alerts.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>3. Expedites Issue Resolution </Text>
              <Text>
                The ticketing system propels your team towards swifter issue resolution. With its built-in tracking mechanisms, requests are consistently monitored, and in cases of stagnation, automated email reminders prompt staff to take necessary actions. The system's versatility extends to ticket reassignment, allowing allocation to the team members best suited to address specific issues. By deftly handling routine administrative tasks, your team gains more time to focus on resolving intricate problems, leading to a significant reduction in resolution timelines.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>4. Cost Reduction and Heightened Customer Retention</Text>
              <Text>
                A strategic deployment of a ticketing system translates to substantial cost  savings while simultaneously bolstering customer retention. The system's productivity enhancements empower your support team to accomplish more
                with fewer resources, directly impacting operational costs. Moreover, the enhancement of customer experiences, stemming from prompt issue resolution and reduced customer frustration, culminates in elevated customer
                satisfaction. This heightened satisfaction naturally forges stronger customer loyalty and retention.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>5. Enhances Project Transparency and Collaboration</Text>
              <Text>
                A ticketing system offers an elevated level of project transparency and collaboration among internal teams.Various departments like design, engineering, construction, and sales need to seamlessly communicate and stay updated on project progress. The ticketing system acts as a central hub, allowing team members to track the status of tasks, share vital information, and collaborate in real-time. This transparency fosters a cohesive work environment where all stakeholders are aligned, minimizing miscommunication and enhancing the efficiency of project execution.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontFamily='euclid-semibold' fontSize={'20px'} color='#000'>6. Efficient Resource Allocation and Workload Management</Text>
              <Text>
                In property development, managing resources efficiently is paramount to project success. A ticketing system plays a pivotal role in this aspect by providing a clear overview of ongoing tasks, pending requests, and resource
                availability. This enables development companies to allocate resources judiciously, preventing overloading of certain teams while optimizing the utilization of specialized skills. Workload distribution becomes streamlined,
                ensuring that teams operate at peak performance levels without undue stress or resource bottlenecks. The combined prowess of these tailored perks elevates a ticketing system beyond being a mere tool and positions it as a strategic asset for property development companies, fostering excellence, collaboration, and streamlined operations.
              </Text>
            </Box>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  )
}

export default Transforming_business