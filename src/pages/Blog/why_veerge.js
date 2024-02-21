import {
  Center,
  Flex,
  Image,
  Box,
  Text,
  OrderedList,
  ListItem,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, {useEffect, useRef} from 'react';
import {SlArrowLeft} from 'react-icons/sl';
import {CiInstagram} from 'react-icons/ci';
import {GrFacebook, GrLinkedin, GrTwitter} from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import why_veerge from '../../assets/images/blog/why_veerge.png';
import {Link, useNavigate} from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';
import {FaChevronLeft, FaFacebook} from 'react-icons/fa6';

const Why_veerge = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const why_veergeRef = useRef(null);
  const ourMissionRef = useRef(null);
  const ourValueRef = useRef(null);
  const ourCultureRef = useRef(null);

  const why_veergeCheck = useIsInViewport(why_veergeRef);
  const ourMissionCheck = useIsInViewport(ourMissionRef);
  const ourValueCheck = useIsInViewport(ourValueRef);
  const ourCultureCheck = useIsInViewport(ourCultureRef);

  const articleContent = [
    {check: why_veergeCheck, id: 'why_veerge', title: 'Why Veerge'},
    {check: ourMissionCheck, id: 'our_mission', title: 'Our Mission'},
    {check: ourValueCheck, id: 'our_value', title: 'Our Value'},
    {check: ourCultureCheck, id: 'our_culture', title: 'Our Culture'},
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
        bg={{md: '#F5E4D0'}}
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
          src={why_veerge}
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
              Why Veerge instead of Building
            </Text>
            <Text
              mt="15px"
              fontWeight={400}
              w="80%"
              alignSelf={'center'}
              fontSize="14px"
              display={{base: 'none', md: 'block'}}
            >
              We operate at the forefront of technology, leveraging cutting-edge techniques
            </Text>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text mt={{md: '15px'}} fontWeight={400} alignSelf={'center'} fontSize="14px">
                February 27, 2023
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
          <Box ref={why_veergeRef} id="why_veerge">
            <Text fontWeight={500} fontSize={'36px'}>
              WHY VEERGE?
            </Text>

            <Text>
              Veerge is undoubtedly the optimal choice for any property development company at this
              time, as it stands unrivaled by any alternative solution. Existing alternatives are
              not specifically tailored for real estate businesses, and when compared, Veerge
              consistently outshines them. The only viable alternative would be to assemble a team
              and build a solution from scratch or outsource the project to an IT company. However,
              this approach would involve numerous iterations and tackling challenging questions.
            </Text>
            <Text mt="30px">
              For any property development company, Veerge offers the most resourceful option. It is
              a fully developed solution that perfectly caters to your present demands, with a
              feature-rich infrastructure that surpasses the needs of any other development company.
              By choosing Veerge, you can avoid making a significant investment and gain a platform
              that is at least two years ahead of any competing company's starting point.
              Furthermore, we are committed to continuously enhancing our offerings with the promise
              of 'More Than You Consume,' as we take bold, not timid, bets.
            </Text>
            <Text mt="30px">
              Our measure of success revolves around the value we create for development companies
              in the long term. We firmly believe that this value directly extends and solidifies
              our market leadership position, enhancing our economic model. We gauge success based
              on the growth of development companies partnering with us, reflected in their customer
              and revenue growth, frequency of repeat purchases, and establishment of an enduring
              franchise.
            </Text>
            <Text mt="30px">
              Veerge is the result of a talented, smart, and hard-working team. We have high
              standards in our hiring process, and we acknowledge that working here isn't easy.
              Nonetheless, we are passionately building something of great importance to our
              customers, worth sharing with future generations. We are fortunate to have dedicated
              employees whose sacrifices and passion contribute to the success of Veerge.
            </Text>
            <Text mt="30px">
              Our expertise spans across real estate, finance, and technology, but we remain humble,
              knowing there is always more to learn. We maintain a constant sense of urgency and
              vigilance in all our endeavors. At Veerge, our model centers around offering low
              prices and fast delivery, and we are confident that these aspects will remain stable
              over time. We believe customers will continue to prioritize these qualities over the
              next decade, making it our objective to earn trust rather than optimize short-term
              profit. We believe that delivering consistent value will yield greater profits in the
              long run.
            </Text>
            <Text mt="30px">
              We operate at the forefront of technology, leveraging cutting-edge techniques such as
              random forests, naïve Bayesian estimators, RESTful services, gossip protocols,
              eventual consistency, data sharding (Yes! sharding) , anti-entropy, Byzantine quorum,
              erasure coding, vector clocks, and more. Our architects and engineers push the
              boundaries of computer science research, often pioneering new approaches to tackle
              novel challenges. We are constantly innovating, and you may witness the launch of our
              smart payment plan, which has the potential to become the new buzzword in the real
              estate space due to its ability to accelerate cash flow and incentivize all parties
              involved. Veerge's technology is implemented primarily as services, encapsulating data
              and offering hardened interfaces to access functionality.
            </Text>
            <Text mt="30px">
              This service-oriented architecture (SOA) enables services to evolve independently,
              reducing side effects and fostering seamless integration within our technology.
              Veerge's technology comprises nearly 100 software services that work in harmony to
              provide functionalities like recommendations, fulfilment, and inventory tracking. For
              example, constructing a personalized detail page for a user on Matador seamlessly
              interacts with 200 to 300 services, resulting in a highly tailored experience for the
              customer.We do not sell software; rather, we embark on a collaborative journey with
              your company to navigate the future of technology. Currently, we have an all-star
              team, and it would be an absolute pleasure to serve you.
            </Text>
          </Box>
          <Box ref={ourMissionRef} mt="30px" id="our_mission">
            <Text fontWeight={500} fontSize={'36px'}>
              Our Mission
            </Text>
            <Text>
              Our mission is to democratize real estate for all, driving our actions every day. We
              create services that are inclusive and accessible to everyone. Striking a delicate
              balance between profitability and social consciousness is our commitment.
            </Text>
            <Text mt="30px">
              By making real estate accessible to a wider audience, we aim to break down barriers
              and empower individuals from all walks of life to participate in this important
              sector. We believe that everyone should have the opportunity to benefit from the
              advantages and potential wealth that real estate can offer
            </Text>
            <Text mt="30px">
              In line with our mission, we are dedicated to developing services that cater to the
              diverse needs of our users. Whether it's simplifying the investment process, providing
              educational resources, or fostering transparency and trust, our goal is to ensure that
              our services are available and beneficial to everyone.
            </Text>
            <Text mt="30px">
              While we are driven by the pursuit of profitability, we firmly believe that businesses
              should also be socially conscious. Our commitment to social responsibility motivates
              us to consider the broader impact of our actions. We strive to create positive change
              and contribute to the betterment of society while maintaining financial
              sustainability.
            </Text>
            <Text mt="30px">
              By aligning profitability with social consciousness, we aim to demonstrate that
              business success and societal well-being are not mutually exclusive. Our dedication to
              this balance is at the core of our values, guiding our decisions and actions as we
              work towards our mission of democratizing real estate for all.
            </Text>
          </Box>
          <Box ref={ourValueRef} mt="30px" id="our_value">
            <Text fontWeight={500} fontSize={'36px'}>
              Our Values
            </Text>
            <Text mt="30px">
              These are the most important values in achieving our mission and vision:
            </Text>

            <OrderedList mt="30px">
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>Safety First:</Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    The reliability of our platform takes precedence over all else, so that we can
                    be there for our customers when they need us the most.
                  </ListItem>
                  <ListItem>
                    We relentlessly protect our customers' security and privacy, and we only share
                    with our counterparties what they need to fulfill our customers' financial
                    needs, nothing more.
                  </ListItem>
                  <ListItem>
                    We build safeguards and provide education so that our customers are in the best
                    position to succeed.
                  </ListItem>
                  <ListItem>
                    We have high-quality, timely customer support, and when things aren't right, we
                    fix them.
                  </ListItem>
                  <ListItem>
                    We work closely with regulators and lawmakers to protect our customers and the
                    broader system.
                  </ListItem>
                  <ListItem>
                    We speak simply, plainly, and truthfully, even if it's not what others want to
                    hear.
                  </ListItem>
                  <ListItem>
                    We hold ourselves and our colleagues to the highest ethical standards.
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>Participation is Power:</Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    We aim to give everyone access to the real estate system, regardless of their
                    background or bank account balance. That's why we have a product that was
                    designed from the ground up for small accounts.
                  </ListItem>
                  <ListItem>
                    We reflect the world around us and we elevate and embrace all voices. We foster
                    an environment where everyone feels included and empowered.
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>Radical Customer Focus:</Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    We exist to make our customers happy. From the early days, we have prioritized
                    getting direct customer feedback on what we were building. Talking to our
                    customers forms the kernel of the product development process we have today.
                  </ListItem>
                  <ListItem>
                    We listen with empathy, ask questions, and critically evaluate our work by how
                    valuable our customers find it.
                  </ListItem>
                  <ListItem>
                    We never stop asking how we can make our product better, and we never settle for
                    "good enough."
                  </ListItem>
                  <ListItem>
                    We listen to our colleagues, and we start from a place of believing they are
                    capable and well-intentioned.
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>First Principles Thinking:</Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    We make bold bets and challenge the status quo. Our foundation is in art,
                    science, and pure mathematics, and we have a deep appreciation for the
                    scientific process.
                  </ListItem>
                  <ListItem>
                    We develop hypotheses and design experiments to test them. We reduce complex
                    problems to their constituent bits.
                  </ListItem>
                  <ListItem>
                    We debate vigorously and change our minds when confronted with the right
                    evidence.
                  </ListItem>
                  <ListItem>
                    We bravely do what's right, even when it's scary and hasn't been done before.
                  </ListItem>
                  <ListItem>
                    We treat our company like a product and aim to get better every single day.
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
          </Box>
          <Box ref={ourCultureRef} mt="30px" id="our_culture">
            <Text fontWeight={500} fontSize={'36px'}>
              Our Culture
            </Text>
            <Text mt="30px">
              <b>We believe that any success at Myxellia comes from two things:</b> our people and
              our culture. We believe that brilliant people operating in a great culture will
              produce the best outcome.
            </Text>

            <OrderedList mt="30px">
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>Never Settle:</Text>
                <Text fontSize={'14px'}>
                  We constantly push, rethink, and rework to get 10x further from where we are now.
                  We aren't afraid to be ambitious, and we're always looking for the next big thing
                </Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    <b>Shoot for the moon:</b> Relentlessly push to become number one. Look for ways
                    to disrupt, scale, and reinvent. Come up with ideas that are new, better, and
                    unique. Be creative - iterate, simplify, move beyond the traditional way.
                    Connect the dots from different areas, industries, and products. Vigorously set
                    ambitious, bold, and rational goals to guide your way.
                  </ListItem>
                  <ListItem>
                    <b>Push the envelope:</b> Constantly change your lens. Challenge solutions from
                    all angles to deliver the best. Run toward critique to advance it even further.
                    Recognize and celebrate those who challenge the status quo for the better. Pull
                    at every thread. Don't just meet the ask; go above and beyond when solving a
                    problem and never leave loose ends.
                  </ListItem>
                  <ListItem>
                    <b>Jump in with both feet:</b> Enjoy the challenge, celebrate achievements, and
                    have fun. Show initiative, inspire others. Enjoy taking on stretch assignments
                    even if they're outside of your core responsibilities. Share optimism and
                    confidence. Remain positive and energized when facing adversity.
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>Dream Team:</Text>
                <Text fontSize={'14px'}>
                  We believe the key to winning is building diverse, lean teams of brilliant
                  go-getters who break down barriers.
                </Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    <b>Elite athletes only:</b> We don't settle for players who are just good. We
                    are like a professional sports team. We hire, develop, retain elite athletes and
                    place them in the right spots to win. We always choose to be a smaller team of
                    brilliant people rather than a larger team with some average players in it.
                  </ListItem>
                  <ListItem>
                    <b>Ship, shipmates, self:</b> Work together - it's the only way the company can
                    move forward. Forge a shared vision. Support each other individually and
                    professionally, across teams and departments. Even if it's not in your KPIs or
                    goals. Be inclusive, approachable, and interested in your colleagues' work,
                    especially if they need your help or expertise.
                  </ListItem>
                  <ListItem>
                    <b>Be radically honest, direct, and respectful:</b> Feedback should be
                    necessary, clear, direct, and professional. Always say what needs to be said.
                    Build on the feedback you receive. Step up, speak up, encourage others to do the
                    same. Be respectful at all times. Find the best tone of voice, time, and
                    situation to provide feedback.
                  </ListItem>
                  <ListItem>
                    <b>Never compromise on talent:</b> Make hiring decisions thoughtfully. Take the
                    time to find the perfect fit. The quality and diversity of our talent define our
                    successes. Provide mentoring, coaching, opportunities, and support to help your
                    team thrive. Award the best. Act on underperformance promptly. Monitor it, sort
                    it, and remedy it.
                  </ListItem>
                  <ListItem>
                    <b>Lead by doing:</b> Roll up your sleeves and get into the weeds of the work.
                    Get to know the nitty-gritty, ins-and-outs of your team to help guide everyone
                    to success. Enable others to achieve their goals - celebrate when they've done
                    well and give credit where credit is due. Accept responsibility when things go
                    wrong. Work quickly to make things right.
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>Think Deeper:</Text>
                <Text fontSize={'14px'}>
                  We believe logic, reason, and common sense prevail over everything else in
                  decision-making. We dive deep until we get to atoms. If we don't know something,
                  we bet, collect the data, and reiterate
                </Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    <b>Start with "WHY?":</b> Think before executing - articulate your problem,
                    probe into it. Is it a real problem? Challenge others to do the same. Seek data
                    to support decision-making. If data is not available, be transparent that you're
                    making an instinctual recommendation. Dive deep into the root cause. Solve from
                    the first principles. Question experience, data, and assumptions. Always ask,
                    "Is that true?" and "Why?". Constantly challenge your analysis, sense-check,
                    look from every angle, and be prepared to revisit the proposed solution or
                    initial problem.
                  </ListItem>
                  <ListItem>
                    <b>Never lose 'North':</b> Always think beyond the task at hand, keeping the
                    bigger picture in mind. Think several steps ahead. (e.g., Will our solution
                    create more problems? What will the next problem be once we solve this one?).
                    Look for ways to create scalable frameworks and tools to increase the impact.
                    Avoid 'analysis paralysis' so that we move toward solutions. Focus on the
                    outcome and continue checking your compass along the way (i.e., Are we still
                    going in the right direction?). If not, take courage to start from scratch.
                  </ListItem>
                  <ListItem>
                    <b>Be open-minded - listen, probe, adjust:</b> Invite criticism and alternative
                    views to tackle problems better. Constantly challenge assumptions in your
                    thinking. Do not follow any previously agreed-upon approach blindly. Take turns
                    speaking and listening. Consider all feedback regardless of the person's title.
                    There is no place for politics in Myxellia. Think through your recommendation,
                    don't say "yes" or "no" too quickly.
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>Get it Done:</Text>
                <Text fontSize={'14px'}>
                  We believe that ideas are great, but execution is everything. That's why respect
                  at Myxellia comes from sweat and stretch.
                </Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    <b>Commit and execute:</b> Bring a can-do attitude at all times. Keep calm when
                    facing challenging work. Unblock roadblocks. Break walls. Persevere until the
                    project is finished. Completion is a must. And then iterate. Deliver on
                    commitments, instill trust in your go-getter attitude.
                  </ListItem>
                  <ListItem>
                    <b>Act like an owner:</b> Own your work and the tasks required end-to-end. Look
                    for answers and solutions, not excuses. Assume full responsibility and
                    accountability beyond your role or over expectations. Don't wait for guidance,
                    self-direct. It is never "someone else's job or problem."
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem fontWeight={500} fontSize={'16px'} mt="30px">
                <Text>Deliver Wow:</Text>
                <Text fontSize={'14px'}>
                  We believe that everything we do should solve our customers' needs. To create awe
                  and inspire, we pay attention to every single detail.
                </Text>
                <UnorderedList fontWeight={400} fontSize={'14px'}>
                  <ListItem>
                    <b>Put customers first:</b> Put yourself in the shoes of the customer (external
                    or internal) and understand how they are using the product or process, be
                    curious. Focus on and think through every single detail. Don't ship anything
                    unless it's ready, fully-baked, tested, and reviewed.
                  </ListItem>
                  <ListItem>
                    <b>Keep it simple: </b> Simplify everything - minimize any friction for the
                    customer. Save time for your customers, your manager, and your stakeholders.
                    Make decisions on what to build and what to kill. Use language everyone can
                    easily understand. Extract the essence. Lead with the most important
                    information. Bottom line up front.
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
          </Box>
          <Text mt="70px" color="#ff0">
            <Link to="/blog/a_letter">Read a letter from our CEO</Link>
          </Text>
          <Helpful noMarginTop />
        </Box>
      </Box>
    </Box>
  );
};

export default Why_veerge;
