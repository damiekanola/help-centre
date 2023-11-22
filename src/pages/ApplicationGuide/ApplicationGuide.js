import React, { useRef } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import LeftNav from "../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../components/Faq/Helpful";
import useIsInViewport from "../../utils/useOnScreen/useOnScreen";
import appGuide1 from '../../assets/images/appGuide/app_guide1.png'
import appGuide2 from '../../assets/images/appGuide/app_guide2.png'
import { Link } from "react-router-dom";

export const ApplicationGuide = () => {

  const the_veergeRef = useRef(null);
  const unleashingRef = useRef(null);
  const enterRef = useRef(null);
  const the_shuwdownRef = useRef(null);
  const makingRef = useRef(null);

  const the_veergeCheck = useIsInViewport(the_veergeRef);
  const unleashingCheck = useIsInViewport(unleashingRef);
  const enterCheck = useIsInViewport(enterRef);
  const the_shuwdownCheck = useIsInViewport(the_shuwdownRef);
  const makingCheck = useIsInViewport(makingRef);


  const articleContent = [
    { check: the_veergeCheck, id: 'the_veerge', title: 'The Veerge Dilemma' },
    { check: unleashingCheck, id: 'unleashing', title: 'Unleashing the power of Basic Application.' },
    { check: enterCheck, id: 'enter', title: 'Enter the realm of custom application' },
    { check: the_shuwdownCheck, id: 'the_shuwdown', title: 'The Showdown: Basic vs. Custom Veerge Applications' },
    { check: makingCheck, id: 'making', title: 'Making the right move' },
  ]

  const relatedContent = [
    { link: '/blog/new_era', text: 'Veerge the new era of real estate' },
    { link: "/veerge_themes", text: 'Veerge Plus' },
    { link: "/how_protected", text: 'How you are protected' },
    { link: "/blog/why_veerge", text: 'Why Veerge instead of building?' },
    { link: "/users_experience", text: 'End-to-End experience' }
  ]

  const cellStyle = { height: '86px', textAlign: 'center', border: '1px solid #919191' }

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Text className="head_">What is the difference between Basic & Custom app ? </Text>
      <Text className="publish">Published: November 10, 2022</Text>
      <Text className="content" lineHeight={'25px'} mt='50px'>
        <Box mb='30px' id='the_veerge' ref={the_veergeRef}>
          <Text fontSize={'24px'} fontFamily='euclid-semibold'>
            The Veerge Dilemma
          </Text>
          <Text mt='20px' as='p' fontWeight={400}>
            In the fast-paced world of real estate, staying ahead of the curve is crucial for
            property development companies of all sizes. In recent times, Veerge has emerged as the go-to application development suite, captivating developers with its user-friendly interface and robust features. But here's the catch - should you settle for a basic Veerge application, or should you dare to dream big with a custom-built solution?
          </Text>
        </Box>
        <Box id='unleashing' ref={unleashingRef}>
          <Box mb='30px'>
            <Text fontSize={'24px'} fontFamily='euclid-semibold'>
              Unleashing the Power of Basic Application
            </Text>
            <Text as='p' mt='20px' fontWeight={400}>
              Picture this - a standard Veerge application that can be up and running in less than
              30 seconds! Sounds like a dream for startups and small development companies with limited resources, right?
            </Text>
            <Text as='p' fontWeight={400}>
              This basic version is the perfect launchpad for those eager to make their mark in the digital landscape. But, let's dive deeper into what it offers:
            </Text>
          </Box>
          <Box mb='30px'>
            <Text fontSize={'16px'} fontWeight={700}>
              • Pre-designed Templates:
            </Text>
            <Text as='p' fontWeight={400}>
              While the basic Veerge application boasts visually appealing templates, they might lack that spark of individuality, as other development companies could be using the same ones. But hey, it's a head start, nonetheless!
            </Text>
          </Box>
          <Box mb='30px'>
            <Text fontSize={'16px'} fontWeight={700}>
              • Limitations of Customization:
            </Text>
            <Text as='p' fontWeight={400}>
              The downside of basic Veerge lies in its restricted level of customization. You may not have complete control over every nook and cranny of your store's appearance and functionality. But sometimes, baby steps can lead to giant leaps!
            </Text>
          </Box>
          <Box mb='30px' >
            <Text fontSize={'16px'} fontWeight={700}>
              • Budget-Friendly Bliss:
            </Text>
            <Text as='p' fontWeight={400}>
              Here's the silver lining - the basic Veerge application is lighter on the pocket. For cash-strapped startups, this could be the ticket to digital success without breaking the bank.
            </Text>
          </Box>
          <Image w='full' h='auto' src={appGuide1} />
        </Box>

        <Box id='enter' ref={enterRef}>
          <Box mb='30px'>
            <Text fontSize={'24px'} fontFamily='euclid-semibold'>
              Enter the Realm of Custom Application
            </Text>
            <Text as='p' fontWeight={400}>
              Now, let's talk about making a bold statement with a custom Veerge application. This bespoke solution is designed to match your unique business requirements and
              ambitions. Brace yourself, because the possibilities are endless:
            </Text>
          </Box>
          <Box mb='30px'>
            <Text fontSize={'16px'} fontWeight={700}>
              • Unparalleled Design and Branding:
            </Text>
            <Text as='p' fontWeight={400}>
              With custom Veerge applications, your store will reflect your brand's personality like never before. Say goodbye to cookie-cutter designs and embrace a visually captivating online presence that's uniquely yours.
            </Text>
          </Box>
          <Box mb='30px'>
            <Text fontSize={'16px'} fontWeight={700}>
              • Endless Customization:
            </Text>
            <Text as='p' fontWeight={400}>
              It's your dream store - why settle for anything less? Tailor every aspect of your Veerge application to your heart's desire. From jaw-dropping listings to the_veerged user experiences, the custom route leaves no stone unturned.
            </Text>
          </Box>
          <Box mb='30px' >
            <Text fontSize={'16px'} fontWeight={700}>
              • Built for Scale and Performance:
            </Text>
            <Text as='p' fontWeight={400}>
              Your success should know no bounds, and neither should your application!
              Custom-built solutions are optimized for performance and scalability, ensuring you can handle the rush of visitors and growth with ease.
            </Text>
          </Box>
          <Box mb='30px' >
            <Text fontSize={'16px'} fontWeight={700}>
              • A Splurge Worth Considering:
            </Text>
            <Text as='p' fontWeight={400}>
              Admittedly, custom Veerge applications come with a higher initial cost, but investing in your vision could be the wisest move you ever make. It's time to bet on your success!
            </Text>
          </Box>
          <Image w='full' h='auto' src={appGuide2} />
        </Box>

        <Box id='the_shuwdown' ref={the_shuwdownRef}>
          <Box mb='30px'>
            <Text fontSize={'24px'} fontFamily='euclid-semibold'>
              The Showdown: Basic vs. Custom Veerge Applications
            </Text>
            <Text as='p' fontWeight={400}>
              Ladies and gentlemen, it's time for the ultimate face-off. Let's compare the two
              contenders.
            </Text>
            <table style={{
              marginTop: '20px',
              border: '1px solid #919191'
            }}>
              <thead >
                <tr>
                  <th style={cellStyle}>Aspect</th>
                  <th style={cellStyle}>Basic Application</th>
                  <th style={cellStyle}>Custom Application</th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td style={cellStyle}>Design and Branding</td>
                  <td style={cellStyle}>Limited customization options</td>
                  <td style={cellStyle}>Unique and branded design</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Features and Functionalities</td>
                  <td style={cellStyle}>Standard features and apps</td>
                  <td style={cellStyle}>Tailored functionalities and integrations</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Time to launch</td>
                  <td style={cellStyle}>Quick setup</td>
                  <td style={cellStyle}>Longer development time</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cost</td>
                  <td style={cellStyle}>Lower initial cost</td>
                  <td style={cellStyle}>Higher initial cost</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Scalability</td>
                  <td style={cellStyle}>Limited Scalability</td>
                  <td style={cellStyle}>Highly scalable and optimized</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Demo</td>
                  <td style={cellStyle}>
                    <Link href='/'><Text color={'#4545FE'} textDecoration={'underline'}>View Demo</Text></Link>
                  </td>
                  <td style={cellStyle}>
                    <Link href='/'><Text color={'#4545FE'} textDecoration={'underline'}>View Demo</Text></Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Box>

        <Box id='making' ref={makingRef}>
          <Box mb='30px'>
            <Text fontSize={'24px'} fontFamily='euclid-semibold'>
              Making the Right Move
            </Text>
            <Text as='p' fontWeight={400}>
              At this point, you might be asking yourself, "Which one should I choose?" The answer lies in your business's unique needs and aspirations.
            </Text>
            <Text as='p' mt='20px' fontWeight={400}>
              The basic Veerge application offers a quick and budget-friendly start, perfect for small companies testing the waters.  However, if you crave a bespoke masterpiece that aligns perfectly with your brand and can withstand the test of time, custom Veerge applications hold the key.
            </Text>
            <Text as='p' mt='20px' fontWeight={400}>
              In the end, it's about envisioning the future you want for your real estate venture. So,
              seize the moment, weigh your options, and make a decision that will set you on the
              path to digital triumph!
            </Text>
          </Box>
        </Box>

      </Text>
      <Helpful />
    </div>
  );
};
