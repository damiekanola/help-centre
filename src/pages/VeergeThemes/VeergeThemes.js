import React, { useRef } from "react";
import { Box, Text, Image, UnorderedList, ListItem, OrderedList, Flex } from "@chakra-ui/react";
import QuestionsAndReplies from "../../components/Faq/QuestionsAndReplies";
import LeftNav from "../../components/Leftsidenav/Leftsidenav";
import Helpful from "../../components/Faq/Helpful";
import useIsInViewport from "../../utils/useOnScreen/useOnScreen";
// import LeadRightNav from "../../components/Lead/RightNav";
import veergePlus1 from '../../assets/images/veerge_plus1.png';
import infoIcon from '../../assets/icons/info.svg'
import { Link } from "react-router-dom";

export const VeergeThemes = () => {

  const veerge_themeRef = useRef(null);

  const veerge_themeCheck = useIsInViewport(veerge_themeRef);

  const articleContent = [
    { check: veerge_themeCheck, id: 'veerge_theme', title: 'Veerge Theme' },
  ]

  const relatedContent = [
    { link: '/into_to_veerge', text: 'Veerge the new era of real estate' },
    { link: "/", text: 'Veerge Theme' },
    { link: "/", text: 'How you are protected' },
    { link: "/", text: 'Why Veerge instead of building?' }
  ]

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      {/* <LeadRightNav /> */}
      <Text className="head_">VEERGE THEME</Text>
      <Text className="publish">Published: November 10, 2022</Text>
      <Text className="content" lineHeight={'25px'} mt='50px'>
        <Box mb='30px' id="veerge_theme" ref={veerge_themeRef}>
          <Text mt='30px' as='p' fontWeight={400}>
            On Veerge, a theme refers to the overall design and layout of your application. It encompasses the appearance and functionality of your application, including the user interface, navigation, color scheme, typography, and more. Themes offer the flexibility to customize the look and feel of your Veerge application without the need for advanced app development or coding skills.
          </Text>
          <Text mt='30px' as='p' fontWeight={400}>
            When developing an application on Veerge, you have the option to choose from both free and paid themes. The paid theme is automatically generated based on your existing website layout. Veerge leverages embedded tools and frameworks to assist in generating UI prototypes and wireframes, but some level of human involvement and customization is usually required to ensure it meets your expectations.
          </Text>
          <Text mt='30px' as='p' fontWeight={400}>
            It's recommended to schedule a meeting with Veerge support to discuss your business needs, thoughtful design decisions, user experience considerations, and specific application requirements and goals. Automated generation may not accurately capture these nuances without human intervention.
          </Text>
          <Text mt='30px' as='p' fontWeight={400}>
            Once you've approved a theme, you can preview how it will appear in your application before integrating it with APIs. This allows you to experiment, make adjustments, and ensure it aligns with your vision.
          </Text>
          <Text mt='30px' as='p' fontWeight={400}>
            For updating and switching themes, you can modify your theme at any time to take advantage of new features, bug fixes, or updates released by Veerge. If you decide to switch to a different theme, you can contact Veerge support for assistance. However, it's important to note that changing themes may require reconfiguring certain settings and redoing specific customizations.
          </Text>
          <Text mt='30px' as='p' fontWeight={400}>
            Please keep in mind that the availability of ongoing updates and support for themes on Veerge may vary depending on your subscription tier. Typically, Tier 2 and Tier 3 subscriptions offer continued updates for themes, including new mobile features and support. However, Tier 1 may have limited access to free updates and support.
          </Text>
          <Text mt='30px' as='p' fontWeight={400}>
            In summary, Veerge themes provide a convenient way to create visually appealing and functional applications without the need for extensive coding knowledge. They empower you to establish a unique and professional user experience for your application.
          </Text>
        </Box>
      </Text>
      <Helpful />
    </div>
  );
};
