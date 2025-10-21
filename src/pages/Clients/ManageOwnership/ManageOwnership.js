import React, {useRef} from 'react';
import {Box, Text, Image} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/manage-ownership.jpg';
import step1 from '../../../assets/images/client/step1.png';
import step2 from '../../../assets/images/client/step2.png';
import step3 from '../../../assets/images/client/step3.png';
import step4 from '../../../assets/images/client/step4.png';
import step5 from '../../../assets/images/client/step5.png';
import step11 from '../../../assets/images/client/step11.png';
import step12 from '../../../assets/images/client/step12.png';
import step13 from '../../../assets/images/client/step13.png';
import step14 from '../../../assets/images/client/step14.png';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import { clientsData } from '../../../constant/pages';

export const ManageOwnership = () => {

  const introRef = useRef(null);
  const removeRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const removeCheck = useIsInViewport(removeRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Managing Ownership'},
    {check: removeCheck, id: 'remove', title: 'How to remove from archive'},
  ];

  const articleMeta = {
    title: 'Manage Ownership of Properties',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
  };

 

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
     otherresources={clientsData}
    >
      <Box id="how_to" ref={introRef}>
        <Text className="content_head">Manage Ownership of Properties</Text>
        <Text as="p" marginTop={'30px'}>
          Define who owns, co-owns, or manages each property and unit. Assign, transfer, or share
          access easily to keep user’s portfolio organized and transparent.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="remove" ref={removeRef}>
        <Text className="content_head">How to Assign a Property to a User</Text>
        <Text as="p" marginTop={'30px'}>
          A step-by-step guide
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            Navigate to the Users section, view the profile of the User you want to assign a
            property to
          </Text>
          <Image src={step1} mt={'30px'} w={'full'} />
        </Box>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Click the “More Options” button on the right-hand side to access the drawer and select
            Assign property
          </Text>
          <Image src={step2} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3(i)
          </Text>
          <Text>
            Select the listing and the particular unit of the listing you want to assign. Input all
            other required fields and proceed.
          </Text>
          <Image src={step3} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3(ii)
          </Text>
          <Text>
            If allocations have already been created for the selected listing or unit, a dropdown
            will appear for you to select an allocation (this step is optional). You can also assign
            unit allocations directly from this section. Input all other required fields and
            proceed. If no allocation has been created, the unit allocation will be assigned through
            a different process. View this article to understand Unit Allocation better.
          </Text>
          <Image src={step4} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            You’ve successfully assigned the property to the user! You can now manage all
            transactions related to this property.
          </Text>
          <Image src={step5} mt={'30px'} w={'full'} />
        </Box>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="remove" ref={removeRef}>
        <Text className="content_head">How to Assign a Unit to a User</Text>
        <Text as="p" marginTop={'30px'}>
          A step-by-step guide
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            On the user’s profile, click View Transactions for the listing linked to the unit you
            want to assign.
          </Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
           Click on the “option icon” button on the drawer and select Assign Unit from the options
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
           Select the particular unit you’ll like to assign and proceed.
          </Text>
          <Image src={step13} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Confirm the details from your selections and proceed.
          </Text>
          <Image src={step14} mt={'30px'} w={'full'} />
        </Box>
       
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="remove" ref={removeRef}>
        <Text className="content_head">How to Assign a Unit to a User</Text>
        <Text as="p" marginTop={'30px'}>
          A step-by-step guide
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            On the user’s profile, click View Transactions for the listing linked to the unit you
            want to assign.
          </Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
           Click on the “option icon” button on the drawer and select Assign Unit from the options
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
           Select the particular unit you’ll like to assign and proceed.
          </Text>
          <Image src={step13} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Confirm the details from your selections and proceed.
          </Text>
          <Image src={step14} mt={'30px'} w={'full'} />
        </Box>
       
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
    </BlogLayout>
  );
};
