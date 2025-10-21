import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/unit_allocation.jpg';
import step21 from '../../../assets/images/firsttimesetup/manual1.png';
import step22 from '../../../assets/images/firsttimesetup/manual2.png';
import step23 from '../../../assets/images/firsttimesetup/manual3.png';
import step24 from '../../../assets/images/firsttimesetup/manual4.png';
import step25 from '../../../assets/images/firsttimesetup/manual5.png';
import step26 from '../../../assets/images/firsttimesetup/manual6.png';
import step11 from '../../../assets/images/firsttimesetup/csv1.png';
import step12 from '../../../assets/images/firsttimesetup/csv2.png';
import step13 from '../../../assets/images/firsttimesetup/csv3.png';
import step14 from '../../../assets/images/firsttimesetup/csv4.png';
import step15 from '../../../assets/images/firsttimesetup/csv5.png';
import step16 from '../../../assets/images/firsttimesetup/csv6.png';
import {listingsData} from '../../../constant/pages';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';

export const CreateAllocatrions = () => {
  const [searchParams] = useSearchParams();
  const toView = true;
  const introRef = useRef(null);
  const csvRef = useRef(null);
  const manualRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const csvCheck = useIsInViewport(csvRef);
  const manualCheck = useIsInViewport(manualRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'How to create unit allocations'},
    {check: csvCheck, id: 'csv', title: 'Create unit allocations using a CSV file'},
    {check: manualCheck, id: 'manual', title: 'Create unit allocations manually'},
  ];

  const articleMeta = {
    title: 'How to create Allocations',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
  };

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
     otherresources={listingsData}
    >
      <Box id="intro" ref={introRef}>
        <Text className="content_head">How to create unit allocations</Text>
        <Text as="p" marginTop={'30px'}>
          n this section, we’ll walk you through creating an allocation—think of it like a house or
          apartment number for each property, giving every unit a unique identifier so it’s easy to
          spot in your listing. Unit allocations can be created either by uploading a CSV file or by
          adding them manually. We’ll explore both methods in this article.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="csv" ref={csvRef}>
        <Text className="content_head">Create unit allocations using a CSV file</Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            Begin by choosing the listing and the specific unit you wish to allocate. For instance,
            let's take the example of the 2 bedroom apartment.
          </Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Once you've selected the unit, click the <b>"Create"</b> button on the Unit Allocation
            section.
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            Next, pick the <b>"Smart Allocation"</b> option for this unit.
          </Text>
          <Image src={step13} my={'30px'} w={'full'} />
          <Text>
            After making your desired changes, click the <b>"Proceed"</b> button. This will save and
            apply your modifications to the listing.
          </Text>
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Select the appropriate milestone that corresponds with the allocation process. This
            milestone defines the stage at which allocation becomes available, often linked to
            project progress. In this case we will choose 70% (i.e once subscribers have made 70% of
            payment, they are eligible for allocation).
          </Text>
          <Image src={step14} my={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 5
          </Text>
          <Text>
            Download the provided template and begin filling it out from row two, as the first row
            contains column titles that should not be modified. Ensure that the number of unit
            allocations entered matches the total available unit quantity.When you’re done, save the
            file in CSV format and upload it here.There’ll an information message confirming the
            status of your upload.
          </Text>
          <Image src={step15} my={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 6
          </Text>
          <Text>
            After successfully uploading the CSV file, the page will refresh, and you’ll be able to
            manage your created allocations — including viewing, editing, or updating them as
            needed.
          </Text>
          <Image src={step16} my={'30px'} w={'full'} />
        </Box>
      </Box>

      <Box id="manual" ref={manualRef}>
        <Text className="content_head">Create unit allocations manually</Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            Begin by choosing the listing and the specific unit you wish to allocate. For instance,
            let's take the example of the 2 bedroom apartment.
          </Text>
          <Image src={step21} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Once you've selected the unit, click the "Create" button on the Unit Allocation section.
          </Text>
          <Image src={step22} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>Next, pick the "Smart Allocation" option for this unit.</Text>
          <Image src={step23} my={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Select the appropriate milestone that corresponds with the allocation process. This
            milestone defines the stage at which allocation becomes available, often linked to
            project progress. In this case we will choose 70% (i.e once subscribers have made 70% of
            payment, they are eligible for allocation).
          </Text>
          <Image src={step24} my={'30px'} w={'full'} />
        </Box>
      </Box>
      <Box my={'30px'}>
        <Text fontWeight={'600'} color={'#000000EB'}>
          STEP 5
        </Text>
        <Text>
          Provide images that offer a comprehensive breakdown of the building's layout or structure
          (You can upload up to 5 images). You'll encounter an input field equivalent to the
          quantity of units available. Fill in the necessary details for each unit within the
          selected type, in this case it will be “ 01, 02, 03 , 04, 05, 06, 07 & 08.
        </Text>
        <Image src={step25} my={'30px'} w={'full'} />
      </Box>
      <Box my={'30px'}>
        <Text fontWeight={'600'} color={'#000000EB'}>
          STEP 6
        </Text>
        <Text>
          Proceed through the allocation setup, reviewing the details you've inputted. Once you're
          satisfied, finalize the process by clicking “Publish”, and your allocation setup for the 2
          bedroom apartment is complete.
        </Text>
        <Image src={step26} my={'30px'} w={'full'} />
      </Box>
    </BlogLayout>
  );
};
