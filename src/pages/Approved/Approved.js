import { Box, Text, Image, useToast, OrderedList, ListItem } from "@chakra-ui/react";
import React, { useRef } from "react";
import addprop from "../../assets/images/addprop.png";
import alloc from "../../assets/images/alloc.png";
import allo2 from "../../assets/images/allo2.png";
import LeftNav from "../../components/Leftsidenav/Leftsidenav";
import aminat from '../../assets/images/aminat.png';
import daniel from '../../assets/images/daniel.svg'
import QuestionsAndReplies from "../../components/Faq/QuestionsAndReplies";
import Helpful from "../../components/Faq/Helpful";
import useIsInViewport from "../../utils/useOnScreen/useOnScreen";
import { Link } from "react-router-dom";

const Approved = () => {
  const toast = useToast();

  const approvedRef = useRef(null)
  const businessRef = useRef(null);
  const migrationRef = useRef(null)
  const questionsRef = useRef(null)

  const approvedCheck = useIsInViewport(approvedRef);
  const businessCheck = useIsInViewport(businessRef);
  const migrationCheck = useIsInViewport(migrationRef)
  const questionsCheck = useIsInViewport(questionsRef)


  const articleContent = [
    { check: approvedCheck, id: 'approved', title: 'Approved, What Next??' },
    { check: businessCheck, id: 'business', title: 'Business Migration Process' },
    { check: migrationCheck, id: 'migration', title: 'Data Migration Process' },
    { check: questionsCheck, id: 'questions', title: 'Questions & Replies' },
  ]

  const questions = [
    {
      image: daniel,
      name: 'Daniel G.',
      date: 'Jun 20, 2023',
      content: "I invited team members before creating development projects, I hope I didnt disrupt anything? We have about 20 developments project (Past + Present). So,I did that to split between the invited team members, can that still work?",
      replies: [
        `Hello Daniel,
        Your initiative, is a valid approach, and it can indeed be effective. However, it's essential to ensure that each team member has the necessary permissions to create listings. To confirm this, please navigate to the "Manage Roles" section, where you can verify their access levels and adjust them accordingly. This way, you'll be able to maintain a smooth workflow and make the most of your 20
        development projects, both past and present.`
      ]
    },
    {
      image: aminat,
      name: 'Aminat A.',
      date: 'May 06, 2023',
      content: "What happens if I create an application and migrate my client base before adding listings?",
      replies: [
        `Hello, 
        It's crucial to adhere to the following sequence of steps. If you migrate your client base before adding development projects, you won't be able to associate the properties that your clients purchased prior to the migration with Veerge. 
        Consequently, when your clients sign up, their property portfolios will appear empty. To rectify this issue, I recommend scheduling an appointment with our support team for assistance in resolving this matter.`
      ]
    },
  ]

  const relatedContent = [
    { link: '/intro_to_veerge', text: 'Intro to veerge' },
    { link: "/veerge_plus", text: 'Veerge Plus' },
    { link: "/how_protected", text: 'How are you protected' },
    { link: "/users_experience", text: 'End-to-End experience' }
  ]


  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Text className="head_">APPROVED, WHAT NEXT?</Text>
      <Text className="publish">Published: January 06, 2023</Text>
      <Box id='approved' ref={approvedRef}>
        <Text className="content_head">
          MY ACCOUNT HAS BEEN APPROVED WHAT NEXT?
        </Text>
        <Text className="content">
          <Text as='p' marginTop="20px">
            Upon successful verification of your Veerge account, you will receive an email confirming the verification status.
          </Text>
          <Text as='p' marginTop="20px">
            The subsequent step involves choosing a subscription tier that aligns with your specific preferences. Should you require guidance during this selection process, please don't hesitate to reach out to our support team for assistance.
          </Text>
          <Text as='p' marginTop="20px" fontFamily='euclid-semibold'>
            Please be aware that your subscription charges are automatically deducted from your wallet at each billing cycle.
          </Text>
          <Text as='p' marginTop="20px">
            Once you have chosen your subscription, the following step entails initiating the migration of your business processes to the Veerge platform.
          </Text>
        </Text>
      </Box>

      <Box id='business' ref={businessRef}>
        <Text className="content_head">
          BUSINESS MIGRATION PROCESSES
        </Text>
        <Text className="content">
          <Text as='p' marginTop="20px">
            Business migration to Veerge refers to the process of transitioning your services from traditional on-premises infrastructure or legacy systems to the cloud-based solution          </Text>
          <Text as='p' marginTop="20px">
            The subsequent step involves choosing a subscription tier that aligns with your specific preferences. Should you require guidance during this selection process, please don't hesitate to reach out to our support team for assistance.
          </Text>
          <Text as='p' marginTop="20px" fontFamily='euclid-semibold'>
            Here are the key steps and considerations involved:
          </Text>
          <Text as='p' marginTop="20px">
            <OrderedList>
              <ListItem marginTop="20px">
                <Text as='span' fontFamily='euclid-semibold'>Assessment and Planning:</Text> Understand the current software landscape of the business, including the applications and services being used, their functionalities, and any integrations. Identify the goals of the migration, such as reducing IT overhead, improving scalability, or enhancing user experience.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as='span' fontFamily='euclid-semibold'>Testing:</Text> Thoroughly test Veerge and its applications and their integrations to identify and resolve any issues before the full migration.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as='span' fontFamily='euclid-semibold'>Pilot Phase:</Text> Consider conducting a pilot phase where a smaller group of users can test the new SaaS setup in a controlled environment. This helps to uncover any potential problems and gather feedback for improvements.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as='span' fontFamily='euclid-semibold'>Data Migration:</Text> Plan the migration of data from legacy systems to Veerge. This involves transferring existing data to the new SaaS solution and ensuring data integrity and security during th
                e process.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as='span' fontFamily='euclid-semibold'>Customization and Configuration:</Text> Customize Veerge to align with your business processes and requirements. Configure settings, user permissions, and any integrations with other systems.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as='span' fontFamily='euclid-semibold'>Training and Change Management:</Text> Provide training to employees on how to use the new SaaS applications effectively. Manage the change by communicating the benefits of the migration and addressing any concerns.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as='span' fontFamily='euclid-semibold'>Rollout and Monitoring:</Text> Once all tests are successful, gradually roll out the SaaS applications to the entire organization. Monitor the performance, user experience, and any potential challenges post-migration.
              </ListItem>
            </OrderedList>
          </Text>
          <Text as='p' marginTop="20px">
            The Benefits of migrating to Veerge include reduced IT infrastructure costs, easier scalability, accessibility from anywhere with an internet connection, and the ability to always use the latest version of the software without needing manual updates."
          </Text>
        </Text>
      </Box>


      <Box id='migration' ref={migrationRef}>
        <Text className="content_head">
          DATA MIGRATION
        </Text>
        <Box>
          <Text fontWeight={500} mt='15px'>
            <b>1. Property Portfolio Migration</b>
          </Text>
          <Image src={addprop} mt="30px" mx="auto" />
          <Text className="content">
            <Text as='p' marginTop="20px">
              you've got a brand new Veerge account, a blank canvas of potential. Your very first brushstroke should be the addition of your remarkable property projects. It's not just essential; it's the heartbeat of your account's success. And where do you start? Simple – the "New Listings" section. This is your podium, your stage to spotlight all the transformative development projects you've brought to life – past and present.
            </Text>
            <Text as='p' marginTop="20px">
              Each listing should be more than just a description. It's a testament to your innovation and dedication. With meticulous attention, infuse every project description with life. And when it comes to visuals, go big! Those high-quality pictures aren't just images; they're windows into your creativity. They're the vibrant hues that make your projects leap off the screen.
            </Text>
            <Text as='p' marginTop="20px">
              Remember, every listing isn't just a checkbox to complete – it's your story, your journey, and your statement. It's the essence of what you've accomplished and the promise of what's yet to come. So, when you fill out those project details, put your passion into every word and your vision into every pixel.
            </Text>
            <Text as='p' marginTop="20px">
              In the end, it's not just about creating a Veerge account; it's about crafting an experience. An experience that entices investors, partners, and enthusiasts alike to join you on your property development odyssey. So, let your listings shine bright – they're not just listings; they're your symphony of success.
            </Text>
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt='20px'>
            <b>2. Create your application</b>
          </Text>
          <Image src={alloc} mt="30px" mx="auto" />
          <Text className="content">
            <Text as='p' marginTop="20px">
              Once you've seamlessly integrated all your development projects, the next imperative step is to craft your digital realm—an experience that seamlessly bridges your business with prospective and existing clients. This is what we refer to as the "convergence point," a virtual crossroads where your endeavors meet the aspirations of those who have or are considering investing in your offerings. This space encapsulates the entire journey of a buyer's path to homeownership.
            </Text>
            <Text as='p' marginTop="20px">
              Within this digital sanctuary, buyers are empowered to shape their journey. They can effortlessly schedule property inspections, gaining firsthand experiences that transcend the confines of the screen. The real-time property availability feature ensures transparency and timeliness, granting them a dynamic snapshot of the options at hand. But that's not all—by enabling initial deposit payments spanning over 74 countries and 154 currencies, you're transforming a potentially cumbersome task into a breeze.
            </Text>
            <Text as='p' marginTop="20px">
              Their journey is meticulously accompanied by tools that facilitate control. From tracking payments to managing outstanding balances, every interaction is poised for simplicity. Even the nuances of payment customization for outstanding balances are at their fingertips, underscoring your commitment to tailored convenience. And the icing on the cake? A centralized hub for all their purchase documents and associated files. No more lost papers or searching through an abyss of emails. It's all right there, harmoniously organized, ready to be accessed at their convenience.
            </Text>
            <Text as='p' marginTop="20px">
              And the icing on the cake? A centralized hub for all their purchase documents and associated files. No more lost papers or searching through an abyss of emails. It's all right there, harmoniously organized, ready to be accessed at their convenience. But wait, there's more! In this immersive landscape, even realtors and agents can stake their claim. With your discerning approval, they can join your platform, a stage for them to sell properties and earn well-deserved commissions upon successful transactions.
            </Text>
            <Text as='p' marginTop="20px">
              In essence, what you're crafting isn't just an online experience—it's a symphony of empowerment, interconnecting aspirations, and facilitating dreams. It's a dynamic convergence where the potential for growth, interaction, and success knows no bounds. Welcome to the nexus of innovation, the intersection of technology and human ambition.
            </Text>
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt='20px'>
            <b>3. Migrate your client base</b>
          </Text>

          <Image src={allo2} mt="30px" mx="auto" />
          <Text className="content">
            <Text as='p' marginTop="20px">
              If you're no stranger to the world of property development, you likely boast an established clientele—individuals to whom you've successfully sold properties in the past, clients whose valuable information you've diligently collected over time. Now, at this juncture, your path leads to the strategic establishment of their accounts within your newfound CRM tool. It's not just migration; it's a meticulous migration that lays the foundation for an even stronger rapport. As their accounts take shape, a virtual inkling awakens—an automated email that invites them to finish their journey of inclusion. Upon completion, they're granted a panoramic view of their property purchase chronicles. And in certain scenarios, a window into their ongoing payment plans.
            </Text>
            <Text as='p' marginTop="20px">
              Within this digital sanctuary, buyers are empowered to shape their journey. They can effortlessly schedule property inspections, gaining firsthand experiences that transcend the confines of the screen. The real-time property availability feature ensures transparency and timeliness, granting them a dynamic snapshot of the options at hand. But that's not all—by enabling initial deposit payments spanning over 74 countries and 154 currencies, you're transforming a potentially cumbersome task into a breeze.
            </Text>
            <Text as='p' marginTop="20px">
              Here's where the magic happens: for those with existing payment plans, a symphony of automated reminders nudge them when payment plans are due for fulfilment. It's convenience at its zenith. And that's not all. The option to seamlessly link their bank accounts for direct debit during payment due dates rests at their fingertips, an offering that transforms transactions into a frictionless dance.
            </Text>
            <Text as='p' marginTop="20px">
              Yet, the pinnacle of empowerment lies in the power of customization. They're not just paying; they're tailoring their journey and all their important documents are accessible no matter where they are in the world.
            </Text>
            <Text as='p' marginTop="20px">
              In essence, you're not just migrating data or ushering them into an application; you're elevating experiences. You're crafting a bridge between their past and your present, empowering them with control, convenience, efficiency, autonomy, and global accessibility.
            </Text>
          </Text>
        </Box>


        <Box marginTop="50px">
          <Text fontWeight={500} mt='20px'>
            <b>4. Invite team members</b>
          </Text>
          <Text className="content">
            <Text as='p' marginTop="20px">
              Gather the whole ensemble – extend invitations to team members spanning every echelon, from directors and sales personnel to marketing experts. Precision is key: ensure you meticulously assign relevant roles to each invitee. And if, by chance, the role you seek isn't within our predefined options, rest assured there's a solution if you are an esteemed
              <a href='https://veerge.myxellia.io/'>
                <Text color='#4545FE' as='span'> Veerge Plus subscriber</Text>
              </a>, you possess the privilege of tailored role customization. A simple liaison with our support team opens the door to this possibility.
            </Text>
            <Text as='p' marginTop="20px">
              Roles aren't just labels; they're gateways to distinct views. Each role unlocks a unique view sculpted to align with their respective responsibilities. We've ingrained role-based access control into our core, meticulously shaping it to cater to the separation of concerns
            </Text>
            <Text as='p' marginTop="20px">
              Having journeyed through these four steps, your Veerge experience is now in full bloom, primed to fuel your property development journey. Should you find yourself in need of any assistance along this path, please don't hesitate to reach out to our dedicated
              <a href='/'><Text color='#4545FE' as='span'> support</Text></a>. We're here to ensure your Journey with Veerge is seamless and successful. Your success is our priority, and our
              <a href='/'><Text color='#4545FE' as='span'> support</Text></a> team is eager to guide you every step of the way.
            </Text>
          </Text>
        </Box>


        <Box ref={questionsRef}>
          <QuestionsAndReplies questions={questions} />
        </Box>

        <Helpful />
      </Box>

    </div>
  );
};

export default Approved