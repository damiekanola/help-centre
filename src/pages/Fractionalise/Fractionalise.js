import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image} from '@chakra-ui/react';
import protectedImg from '../../assets/images/home/fractionalise.jpg';
import step1 from '../../assets/images/blog/1.png';
import step2 from '../../assets/images/blog/2.png';
import step3 from '../../assets/images/blog/3.png';
import step4 from '../../assets/images/blog/4.png';
import step5 from '../../assets/images/blog/5.png';
import step6 from '../../assets/images/blog/6.png';
import step7 from '../../assets/images/blog/7.png';
import step8 from '../../assets/images/blog/8.png';
import step9 from '../../assets/images/blog/9.png';
import step10 from '../../assets/images/blog/10.png';
import {listingsData} from '../../constant/pages';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';

export const Fractionalise = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);

  const introCheck = useIsInViewport(introRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'How to fractionalise a property'},
  ];

  const articleMeta = {
    title: 'Fractionalising an Asset',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
  };

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={listingsData}
    >
      <Box id="how_to" ref={introRef}>
        <Text className="content_head">How to fractionalise a property</Text>
        <Text as="p" marginTop={'30px'}>
          Let's explore the process of fractionalizing a unit into smaller segments, catering to
          individuals with lower purchasing power.
        </Text>
        <Text as="p" marginTop="20px">
          Click here to learn more about fractional Real Estate
        </Text>
        <Text as="p" my={'20px'}>
          Consider the scenario where you decide to fractionalize a 4-bedroom apartment and offer
          each fraction at 2,000,000.00 Naira. These are the steps to follow.
        </Text>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>Begin by going to the specific listing.</Text>
          <Image src={step1} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>Locate the particular unit you intend to fractionalize.</Text>
          <Image src={step2} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            Click the <b>“More Options”</b> button on the right-hand side to access the drawer.{' '}
          </Text>
          <Image src={step3} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Scroll through the options and select <b>"Fractionalise."</b> This will prompt a modal
            to appear.
          </Text>
          <Image src={step4} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 5
          </Text>
          <Text>
            On the modal, input the number of fractions you wish to make per unit. The price per
            fraction is automatically calculated based on the outright purchase price of the unit.
            Since you are fractionalizing only one unit, set the quantity to one then click
            <b>“Update”.</b>
          </Text>
          <Image src={step5} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 6
          </Text>
          <Text>
            {' '}
            Next, move on to the strategy section. Choose between the two available strategies:{' '}
            <b>"Buy to Flip"</b> or <b>"Buy to Hold"</b>
          </Text>
          <Image src={step6} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 7
          </Text>
          <Text>
            For the deal structure, select <b>"Equity."</b> This choice indicates that all
            fractional owners hold ownership stakes. Given that this is a <b>"Buy to Flip"</b>{' '}
            strategy, dividends are unlikely.
          </Text>
          <Image src={step7} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 8
          </Text>
          <Text>
            Proceed to upload the investor packet, ensuring that all relevant information is
            included.
          </Text>
          <Image src={step8} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 9
          </Text>
          <Text>
            List the stakeholders involved. In this instance, stakeholder names might include Legal
            <b>Partner - Frezlars, Financial Partner - Sterling Bank,</b> and potentially other
            parties such as <b>Asset Management or Insurance Companies</b>. When all the relevant
            information has been provided, click the <b>“Proceed”</b> button
          </Text>
          <Image src={step9} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 10
          </Text>
          <Text>
            Complete the process by reviewing the fractional summary, ensuring that all details are
            accurate and aligned with your intentions then click on <b>“proceed”</b>
          </Text>
          <Image src={step10} mt={'30px'} w={'full'} />
        </Box>
      </Box>
    </BlogLayout>
  );
};
