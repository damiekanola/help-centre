import React, {useRef} from 'react';
import {Box, Text} from '@chakra-ui/react';
import LeftNav from '../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../components/Faq/Helpful';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';

export const VeergeThemes = () => {
  const veerge_themeRef = useRef(null);

  const veerge_themeCheck = useIsInViewport(veerge_themeRef);

  const articleContent = [{check: veerge_themeCheck, id: 'veerge_theme', title: 'Veerge Theme'}];

  const relatedContent = [
    {link: '/veerge_plus', text: 'Veerge Plus'},
    {link: '/how_protected', text: 'How you are protected'},
    {link: '/blog/why_veerge', text: 'Why Veerge instead of building?'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      {/* <LeadRightNav /> */}
      <Text className="head_">VEERGE THEMES</Text>
      <Text className="publish">Published: Aug 12, 2023</Text>
      <Text className="content" lineHeight={'25px'} mt="50px">
        <Box mb="30px" id="veerge_theme" ref={veerge_themeRef}>
          <Text mt="30px" as="p" fontWeight={400}>
            On Veerge, a theme plays a pivotal role in defining the visual aesthetics and
            functionality of your application. It's essentially the blueprint that guides the
            overall design and layout, encompassing various elements such as the user interface,
            navigation structure, color palette, typography, and more. With themes, you have the
            flexibility to customize these aspects of your Veerge application according to your
            preferences and branding requirements.{' '}
          </Text>
          <Text mt="30px" as="p" fontWeight={400}>
            One of the standout features of Veerge themes is their user-friendly nature, which
            allows you to personalize your application without the need for advanced app development
            skills or coding knowledge. This means that even if you're not a tech expert, you can
            still create a visually appealing and highly functional application tailored to your
            specific needs.
          </Text>
          <Text mt="30px" as="p" fontWeight={400}>
            However, while themes offer a great deal of customization options, it's important to
            note that the availability of ongoing updates and support for themes may vary depending
            on the specific theme you choose. Therefore, it's advisable to schedule a meeting with
            Veerge support to discuss your business objectives, design preferences, user experience
            considerations, and any specific requirements or goals you may have for your
            application.
          </Text>
          <Text mt="30px" as="p" fontWeight={400}>
            By collaborating with Veerge support, you can ensure that your chosen theme aligns
            seamlessly with your overall vision and objectives. Whether you're aiming for a sleek
            and modern design or a more traditional and elegant aesthetic, the right theme can help
            you achieve your desired look and feel for your application.{' '}
          </Text>
          <Text mt="30px" as="p" fontWeight={400}>
            In summary, Veerge themes offer a convenient and accessible way to create visually
            appealing and functional applications without the need for extensive coding or
            development expertise. By leveraging themes, you can establish a unique and professional
            user experience for your application that reflects your brand identity and resonates
            with your target audience.
          </Text>
        </Box>
      </Text>
      <Helpful />
    </div>
  );
};
