import {Box, Text, Image, useToast, OrderedList, ListItem} from '@chakra-ui/react';
import React, {useRef} from 'react';
import addprop from '../../assets/images/addprop.png';
import alloc from '../../assets/images/alloc.png';
import allo2 from '../../assets/images/allo2.png';
import LeftNav from '../../components/Leftsidenav/Leftsidenav';
import aminat from '../../assets/images/aminat.png';
import daniel from '../../assets/images/daniel.svg';
import QuestionsAndReplies from '../../components/Faq/QuestionsAndReplies';
import Helpful from '../../components/Faq/Helpful';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {Link} from 'react-router-dom';

const Approved = () => {
  const toast = useToast();

  const approvedRef = useRef(null);
  const businessRef = useRef(null);
  const migrationRef = useRef(null);
  const questionsRef = useRef(null);

  const approvedCheck = useIsInViewport(approvedRef);
  const businessCheck = useIsInViewport(businessRef);
  const migrationCheck = useIsInViewport(migrationRef);
  const questionsCheck = useIsInViewport(questionsRef);

  const articleContent = [
    {check: approvedCheck, id: 'approved', title: 'Approved, What Next??'},
    {
      check: businessCheck,
      id: 'business',
      title: 'Business Migration Process',
    },
    {check: migrationCheck, id: 'migration', title: 'Data Migration Process'},
    {check: questionsCheck, id: 'questions', title: 'Questions & Replies'},
  ];

  const questions = [
    {
      image: daniel,
      name: 'Daniel G.',
      date: 'Jun 20, 2023',
      content:
        'I invited team members before creating development projects, I hope I didnt disrupt anything? We have about 20 developments project (Past + Present). So,I did that to split between the invited team members, can that still work?',
      replies: [
        `Hello Daniel,
        Your initiative, is a valid approach, and it can indeed be effective. However, it's essential to ensure that each team member has the necessary permissions to create listings. To confirm this, please navigate to the "Manage Roles" section, where you can verify their access levels and adjust them accordingly. This way, you'll be able to maintain a smooth workflow and make the most of your 20
        development projects, both past and present.`,
      ],
    },
    {
      image: aminat,
      name: 'Aminat A.',
      date: 'May 06, 2023',
      content:
        'What happens if I create an application and migrate my client base before adding listings?',
      replies: [
        `Hello, 
        It's crucial to adhere to the following sequence of steps. If you migrate your client base before adding development projects, you won't be able to associate the properties that your clients purchased prior to the migration with Veerge. 
        Consequently, when your clients sign up, their property portfolios will appear empty. To rectify this issue, I recommend scheduling an appointment with our support team for assistance in resolving this matter.`,
      ],
    },
  ];

  const relatedContent = [
    {link: '/intro_to_veerge', text: 'Intro to Veerge'},
    {link: '/veerge_plus', text: 'Veerge Plus'},
    {link: '/how_protected', text: 'How are you protected'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <Text className="head_">APPROVED, WHAT NEXT?</Text>
      <Text className="publish">Published: January 06, 2023</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Box id="approved" ref={approvedRef}>
        <Text className="content_head">MY ACCOUNT HAS BEEN APPROVED WHAT NEXT?</Text>
        <Text className="content">
          <Text as="p" marginTop="20px">
            Upon successful verification of your Veerge account, you will receive an email
            confirming the verification status.
          </Text>
          <Text as="p" marginTop="20px">
            The subsequent step involves choosing a subscription tier that aligns with your specific
            preferences. Should you require guidance during this selection process, please don't
            hesitate to reach out to our support team for assistance.
          </Text>
          <Text as="p" marginTop="20px" fontWeight={500}>
            Please be aware that your subscription charges are automatically deducted from your
            wallet at each billing cycle.
          </Text>
          <Text as="p" marginTop="20px">
            Once you have chosen your subscription, the following step entails initiating the
            migration of your business processes to the Veerge platform.
          </Text>
        </Text>
      </Box>

      <Box id="business" ref={businessRef}>
        <Text className="content_head">BUSINESS MIGRATION PROCESSES</Text>
        <Text className="content">
          <Text as="p" marginTop="20px">
            Business migration to Veerge refers to the process of transitioning your services from
            traditional on-premises infrastructure or legacy systems to the cloud-based solution{' '}
          </Text>
          <Text as="p" marginTop="20px">
            The subsequent step involves choosing a subscription tier that aligns with your specific
            preferences. Should you require guidance during this selection process, please don't
            hesitate to reach out to our support team for assistance.
          </Text>
          <Text as="p" marginTop="20px" fontWeight={500}>
            Here are the key steps and considerations involved:
          </Text>
          <Text as="p" marginTop="20px">
            <OrderedList>
              <ListItem marginTop="20px">
                <Text as="span" fontWeight={500}>
                  Assessment and Planning:
                </Text>{' '}
                Understand the current software landscape of the business, including the
                applications and services being used, their functionalities, and any integrations.
                Identify the goals of the migration, such as reducing IT overhead, improving
                scalability, or enhancing user experience.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as="span" fontWeight={500}>
                  Testing:
                </Text>{' '}
                Thoroughly test Veerge and its applications and their integrations to identify and
                resolve any issues before the full migration.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as="span" fontWeight={500}>
                  Pilot Phase:
                </Text>{' '}
                Consider conducting a pilot phase where a smaller group of users can test in a
                controlled environment. This helps to uncover any potential problems and gather
                feedback for improvements.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as="span" fontWeight={500}>
                  Data Migration:
                </Text>{' '}
                Plan the migration of data from legacy systems to Veerge. This involves transferring
                existing data and ensuring data integrity and security during the process.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as="span" fontWeight={500}>
                  Customization and Configuration:
                </Text>{' '}
                Customize Veerge to align with your business processes and requirements. Configure
                settings, user permissions, and any integrations with other systems.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as="span" fontWeight={500}>
                  Training and Change Management:
                </Text>{' '}
                Train employees to use Veerge, and make sure they know the benefits of the switch.
                Address any concerns they may have during the transition.
              </ListItem>
              <ListItem marginTop="20px">
                <Text as="span" fontWeight={500}>
                  Rollout and Monitoring:
                </Text>{' '}
                Once all tests are successful, start introducing the applications to everyone in the
                organization, step by step. Keep an eye on how well they're working, how users are
                finding them, and if any issues come up after the move.
              </ListItem>
            </OrderedList>
          </Text>
          <Text as="p" marginTop="20px">
            Migrating to Veerge brings many benefits: it cuts down on IT costs, makes it easier to
            grow as needed, lets you access everything online, and ensures you're always using the
            newest version without having to update manually.
          </Text>
        </Text>
      </Box>

      <Box id="migration" ref={migrationRef}>
        <Text className="content_head">DATA MIGRATION</Text>
        <Box>
          <Text fontWeight={500} mt="15px">
            <b>1. Property Portfolio Migration</b>
          </Text>
          <Image src={addprop} mt="30px" mx="auto" />
          <Text className="content">
            <Text as="p" marginTop="20px">
              You've got a brand new Veerge account, a blank canvas of potential. Your very first
              brushstroke should be the addition of your remarkable property projects. It's not just
              essential; it's the heartbeat of your account's success. And where do you start?
              Simple – the "New Listings" section. This is your podium, your stage to spotlight all
              the transformative development projects you've brought to life – past and present.
            </Text>
            <Text as="p" marginTop="20px">
              Each listing should be more than just a description. It's a testament to your
              innovation and dedication. With meticulous attention, infuse every project description
              with life. And when it comes to visuals, go big! Those high-quality pictures aren't
              just images; they're windows into your creativity. They're the vibrant hues that make
              your projects leap off the screen.
            </Text>
            <Text as="p" marginTop="20px">
              Remember, every listing isn't just a checkbox to complete – it's your story, your
              journey, and your statement. It's the essence of what you've accomplished and the
              promise of what's yet to come. So, when you fill out those project details, put your
              passion into every word and your vision into every pixel.
            </Text>
            <Text as="p" marginTop="20px">
              In the end, it's not just about creating a Veerge account; it's about crafting an
              experience. An experience that entices investors, partners, and enthusiasts alike to
              join you on your property development odyssey. So, let your listings shine bright –
              they're not just listings; they're your symphony of success.
            </Text>
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt="20px">
            <b>2. Create your application</b>
          </Text>
          <Image src={alloc} mt="30px" mx="auto" />
          <Text className="content">
            <Text as="p" marginTop="20px">
              Once you've smoothly integrated all your development projects, the next crucial step
              is to create your digital hub – an online space that seamlessly connects your business
              with potential and existing clients. We call this the "convergence point" – a virtual
              meeting place where your efforts meet the dreams of those interested in your
              offerings. This space covers the entire journey of a buyer's path to owning a home.
            </Text>
            <Text as="p" marginTop="20px">
              In this digital sanctuary, buyers have the power to shape their journey. They can
              easily schedule property inspections to get real-life experiences beyond the screen.
              The real-time property availability feature ensures transparency and timeliness,
              giving them a snapshot of options. Plus, enabling initial deposit payments in{' '}
              <b>74 countries and 154 currencies</b> makes the process easy.
            </Text>
            <Text as="p" marginTop="20px">
              Their journey is supported by tools that offer control. They can track payments,
              manage balances, and even customize payment plans, all with ease. And with a
              centralized hub for purchase documents and files, everything they need is organized
              and accessible. But there's more! Realtors and agents can also join your platform with
              your approval, allowing them to sell properties and earn commissions on successful
              transactions.
            </Text>
            <Text as="p" marginTop="20px">
              In summary, you're not just creating an online experience – you're building a symphony
              of empowerment that connects aspirations and makes dreams possible. It's a dynamic
              convergence where growth, interaction, and success have no limits. Welcome to the
              nexus of innovation, where technology meets human ambition.
            </Text>
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt="20px">
            <b>3. Migrate your client base</b>
          </Text>

          <Image src={allo2} mt="30px" mx="auto" />
          <Text className="content">
            <Text as="p" marginTop="20px">
              If you're already immersed in property development, chances are you have a loyal
              client base – individuals whose information you've diligently collected over time.
              Now, it's time to strategically transition them to your new CRM tool. It's not just
              about moving data; it's about strengthening your relationship with them.
            </Text>
            <Text as="p" marginTop="20px">
              As their accounts take shape, an automated email invites them to complete their
              inclusion journey. Once done, they gain access to a comprehensive view of their
              property purchase history. For those with existing payment plans, automated reminders
              ensure they never miss a payment deadline. They also have the option to link their
              bank accounts for direct debit, making transactions seamless. But the real power lies
              in customization. Clients can tailor their journey, and all their important documents
              are accessible from anywhere in the world.
            </Text>
            <Text as="p" marginTop="20px">
              In essence, you're not just migrating data; you're enhancing experiences. You're
              building a bridge between their past and your present, giving them control,
              convenience, efficiency, autonomy, and global accessibility.
            </Text>
          </Text>
        </Box>

        <Box marginTop="50px">
          <Text fontWeight={500} mt="20px">
            <b>4. Invite team members</b>
          </Text>
          <Text className="content">
            <Text as="p" marginTop="20px">
              Bring together your entire team – from directors and sales personnel to marketing
              experts. Precision is crucial: ensure each person is assigned a role that aligns
              perfectly with their responsibilities. And if you need a role that isn't predefined,{' '}
              <a href="/veerge_plus" target="_blank">
                <Text color="#4545FE" as="span">
                  {' '}
                  Veerge Plus subscriber
                </Text>
              </a>{' '}
              have the privilege of customizing roles with support from our team.
            </Text>
            <Text as="p" marginTop="20px">
              Roles aren't just titles; they provide access to specific views tailored to each
              person's duties. We've integrated role-based access control into our system, carefully
              designed to address different concerns.
            </Text>
            <Text as="p" marginTop="20px">
              After completing these steps, your Veerge experience is ready to support your property
              development journey fully. If you need any assistance along the way, our dedicated
              support team is here to ensure a seamless and successful experience with Veerge. Your
              success is our priority, and we're committed to guiding you every step of the way.
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

export default Approved;
