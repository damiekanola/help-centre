import React, {useRef} from 'react';
import {Box, Text, Image} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/archive.jpg';
import step1 from '../../../assets/images/archive/1.png';
import step2 from '../../../assets/images/archive/2.png';
import step3 from '../../../assets/images/archive/3.png';
import step4 from '../../../assets/images/archive/4.png';
import step5 from '../../../assets/images/archive/5.png';
import step11 from '../../../assets/images/archive/step1.png';
import step12 from '../../../assets/images/archive/step2.png';
import step13 from '../../../assets/images/archive/step3.png';
import step14 from '../../../assets/images/archive/step4.png';

import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';

import {listingsData} from '../../../constant/pages';

export const Archiveunit = () => {
  const introRef = useRef(null);
  const removeRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const removeCheck = useIsInViewport(removeRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'How to archive a unit'},
    {check: removeCheck, id: 'remove', title: 'How to remove from archive'},
  ];

  const articleMeta = {
    title: 'Archiving a Unit',
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
        <Text className="content_head">How to archive a unit</Text>
        <Text as="p" marginTop={'30px'}>
          If you want to reserve specific units for a special purpose, these are the steps to
          follow:
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>Navigate to the relevant listing.</Text>
          <Image src={step1} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>Choose the specific unit you want to reserve from the list.</Text>
          <Image src={step2} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            Click on the <b>“More Options”</b> button at the top-right corner to open the options
            drawer, and then scroll down and select "Archived Units."{' '}
          </Text>
          <Image src={step3} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            In the ensuing window that says add to archive, input the number of units you wish to
            archive. This number must be less than the total units of that specific type.
          </Text>
          <Image src={step4} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 5
          </Text>
          <Text>
            After completing the above steps, click the <b>“Proceed”</b> button. If you have already
            created a unit allocation system, an allocation screen will appear, allowing you to
            select the exact units to archive. Once you’re done you can proceed.
          </Text>
          <Image src={step5} mt={'30px'} w={'full'} />
        </Box>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="remove" ref={removeRef}>
        <Text className="content_head">How to remove from archive</Text>
        <Text as="p" marginTop={'30px'}>
          When the time comes to make the units available to the public again, follow these steps:
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            Go to the <b>"Listings"</b> section and locate the relevant unit within the listing.
          </Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Select the specific unit you want to make public again, click on the{' '}
            <b>“More Options”</b>
            button at the top-right corner to open the options drawer, and then scroll down to click
            <b>"Archived Units."</b>
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            An option to <b>"Remove from Archive"</b> will appear. Input the number of units you
            want to restore from archived status then click on the “Proceed” button
          </Text>
          <Image src={step13} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Similar to before, if a unit allocation system exists, an allocation screen will prompt
            you to select the exact units to restore.
          </Text>
          <Image src={step14} my={'30px'} w={'full'} />
          <Text>
            By following these steps, you can seamlessly manage unit availability, whether reserving
            them for future release or restoring them to the public domain. This level of control
            ensures that your property's market exposure aligns with your strategic objectives.
          </Text>
        </Box>
      </Box>
    </BlogLayout>
  );
};
