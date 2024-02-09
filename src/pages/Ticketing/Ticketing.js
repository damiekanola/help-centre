import {
  Box,
  Text,
  Image,
  Flex,
  useToast,
  Show,
  VStack,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import React, {useRef, useState} from 'react';
import './Ticketing.css';
import LeftNav from '../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../components/Faq/Helpful';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';

export const Ticketing = () => {
  const overviewRef = useRef(null);
  const perksRef = useRef(null);

  const overviewCheck = useIsInViewport(overviewRef);
  const perksCheck = useIsInViewport(perksRef);

  const articleContent = [
    {check: overviewCheck, id: 'overview', title: 'Overview of Ticketing system'},
    {
      check: perksCheck,
      id: 'perks',
      title: 'Perks of a ticketing system tailored for property development companies',
    },
  ];

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main" id="verified">
      <Text className="head_">Veerge’s ticketing system</Text>
      <Text className="publish">Published: Jun 09, 2023</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Box id="overview" ref={overviewRef}>
        <Text className="content">
          <Text as="p" marginTop="20px">
            A ticketing system serves as an indispensable tool within the realm of property
            development companies. It functions as a central hub for managing various aspects of
            their operations, enabling them to navigate the complexities of property development
            with heightened efficiency and precision. For property development firms that encompass
            a service component, the ticketing system takes on a crucial role in facilitating the
            orchestrated flow of tasks. From addressing customer inquiries about properties to
            resolving issues that may arise during construction or post-construction phases, the
            system ensures that every task is recorded, tracked, and effectively managed.
          </Text>
          <Text as="p" marginTop="20px">
            One of the system's key benefits is its capacity to handle bottlenecks that might emerge
            during the property development lifecycle. Whether it's a delay in obtaining permits, a
            shortage of construction materials, or unexpected challenges during the building
            process, the ticketing system acts as a virtual control center, streamlining
            communication and coordination among various teams and departments. Moreover, as
            property development companies often engage with both external stakeholders (potential
            buyers, investors, regulatory bodies) and internal teams (architects, engineers,
            contractors), the ticketing system proves invaluable in managing interactions across
            these diverse fronts. It captures inquiries from potential buyers seeking information
            about properties, tracks the progress of construction-related tasks, and ensures that
            all parties involved are on the same page.
          </Text>
          <Text as="p" marginTop="20px">
            In the fast-paced environment of property development, the need for effective
            communication and task management is particularly pronounced. The ticketing system
            excels in this regard by providing a structured framework to handle customer inquiries,
            service requests, and project-related tasks. This structured approach prevents important
            matters from falling through the cracks and minimizes the risk of misunderstandings or
            missed deadlines. Without a doubt, the property development landscape can be
            characterized by sudden spikes in activity. For instance, upon the launch of a new
            property offering, a flood of inquiries might pour in. During such periods, the
            ticketing system becomes a critical asset, preventing overwhelming customer support
            teams and ensuring that every inquiry receives proper attention.
          </Text>
          <Text as="p" marginTop="20px">
            While some property development companies might attempt to manage inquiries and tasks
            through email correspondence, this approach often proves inadequate. Emails lack the
            built-in functionalities that a ticketing system offers, such as detailed progress
            tracking, automated task assignment, and seamless collaboration among team members. The
            ticketing system's advanced capabilities significantly enhance the efficiency and
            effectiveness of managing property-related operations.
          </Text>
        </Text>
      </Box>

      <Box id="perks" ref={perksRef}>
        <Text className="content_head">Perks of a Ticketing System</Text>
        <Box>
          <Text fontWeight={500} mt="15px">
            <b>1. Elevates the Customer Experience </b>
          </Text>
          <Text className="content">
            A ticketing system stands as a cornerstone for fortifying customer service and
            augmenting satisfaction. It presents a seamless avenue for customers to seek assistance
            while providing staff with a streamlined channel to deliver efficient and effective
            support.In a realm where swift issue resolution is paramount, a ticketing system shines
            by offering an online self-service portal accessible round the clock. This empowers
            customers to seek help whenever the need arises. The inherent structure of tickets
            ensures that no request is lost or forgotten; each ticket is meticulously tracked,
            capturing crucial information and communication in a centralized repository.
            Consequently, your team is empowered to guide customer concerns to resolution with
            precision. The ability to highlight high priority issues expedites their resolution,
            enabling your team to address critical matters promptly. Additionally, the portal often
            incorporates frequently asked questions (FAQs) and other relevant information,
            empowering customers to troubleshoot common problems independently. By enabling
            customers to swiftly resolve issues on their own, the system not only facilitates their
            tasks but also alleviates the workload of your support staff.
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt="20px">
            <b>2. Amplifies Team Productivity</b>
          </Text>
          <Text className="content">
            For your team, a ticketing system serves as a catalyst for heightened productivity. It
            acts as a comprehensive hub that centralizes all service request activities and
            pertinent information, eliminating the time wasted on searching for crucial data. In
            addition to capturing the initial request, the system meticulously documents every
            subsequent interaction with the customer. Team members can effortlessly catch up on the
            request's history, ensuring a seamless continuity of service. Automation features
            further enhance productivity, automating tasks like routing tickets to the appropriate
            departments based on request nature, generating insightful reports, and issuing timely
            alerts.
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt="20px">
            <b>3.Expedites Issue Resolution </b>
          </Text>

          <Text className="content">
            The ticketing system propels your team towards swifter issue resolution. With its
            built-in tracking mechanisms, requests are consistently monitored, and in cases of
            stagnation, automated email reminders prompt staff to take necessary actions. The
            system's versatility extends to ticket reassignment, allowing allocation to the team
            members best suited to address specific issues. By deftly handling routine
            administrative tasks, your team gains more time to focus on resolving intricate
            problems, leading to a significant reduction in resolution timelines.
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt="20px">
            <b>4. Cost Reduction and Heightened Customer Retention</b>
          </Text>
          <Text className="content">
            A strategic deployment of a ticketing system translates to substantial cost savings
            while simultaneously bolstering customer retention. The system's productivity
            enhancements empower your support team to accomplish more with fewer resources, directly
            impacting operational costs. Moreover, the enhancement of customer experiences, stemming
            from prompt issue resolution and reduced customer frustration, culminates in elevated
            customer satisfaction. This heightened satisfaction naturally forges stronger customer
            loyalty and retention.
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt="20px">
            <b>5. Enhances Project Transparency and Collaboration</b>
          </Text>
          <Text className="content">
            In property development, managing resources efficiently is paramount to project success.
            A ticketing system plays a pivotal role in this aspect by providing a clear overview of
            ongoing tasks, pending requests, and resource availability. This enables development
            companies to allocate resources judiciously, preventing overloading of certain teams
            while optimizing the utilization of specialized skills. Workload distribution becomes
            streamlined, ensuring that teams operate at peak performance levels without undue stress
            or resource bottlenecks. The combined prowess of these tailored perks elevates a
            ticketing system beyond being a mere tool and positions it as a strategic asset for
            property development companies, fostering excellence, collaboration, and streamlined
            operations.
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt="20px">
            <b>6.Efficient Resource Allocation and Workload Management</b>
          </Text>
          <Text className="content">
            In property development, managing resources efficiently is paramount to project success.
            A ticketing system plays a pivotal role in this aspect by providing a clear overview of
            ongoing tasks, pending requests, and resource availability. This enables development
            companies to allocate resources judiciously, preventing overloading of certain teams
            while optimizing the utilization of specialized skills. Workload distribution becomes
            streamlined, ensuring that teams operate at peak performance levels without undue stress
            or resource bottlenecks. The combined prowess of these tailored perks elevates a
            ticketing system beyond being a mere tool and positions it as a strategic asset for
            property development companies, fostering excellence, collaboration, and streamlined
            operations.
          </Text>
        </Box>

        <Helpful />
      </Box>
    </div>
  );
};
