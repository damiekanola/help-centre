import React, {useRef} from 'react';
import {Box, Text, Image, List, ListItem} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/change_info.jpg';
import step1 from '../../../assets/images/change-listing/1.png';
import step2 from '../../../assets/images/change-listing/2.png';
import step3 from '../../../assets/images/change-listing/3.png';
import step4 from '../../../assets/images/change-listing/4.png';
import step11 from '../../../assets/images/change-listing/modify1.png';
import step12 from '../../../assets/images/change-listing/modify2.png';
import step13 from '../../../assets/images/change-listing/modify3.png';
import step14 from '../../../assets/images/change-listing/modify4.png';
import step21 from '../../../assets/images/change-listing/edit1.png';
import step22 from '../../../assets/images/change-listing/edit2.png';
import step23 from '../../../assets/images/change-listing/edit3.png';
import step24 from '../../../assets/images/change-listing/edit4.png';
import step25 from '../../../assets/images/change-listing/edit5.png';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';

import {listingsData} from '../../../constant/pages';

export const Changelisting = () => {
  const introRef = useRef(null);
  const editRef = useRef(null);
  const modifyRef = useRef(null);
  const paymentRef = useRef(null);
  const unitpriceRef = useRef(null);
  const unitquantityRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const editCheck = useIsInViewport(editRef);
  const modifyCheck = useIsInViewport(modifyRef);
  const paymentCheck = useIsInViewport(paymentRef);
  const unitpriceCheck = useIsInViewport(unitpriceRef);
  const unitquantityCheck = useIsInViewport(unitquantityRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'How to change listing information'},
    {check: editCheck, id: 'edit', title: 'Edit listing information'},
    {check: modifyCheck, id: 'modify', title: 'Modify unit information'},
    {check: unitpriceCheck, id: 'unitprice', title: 'Modify unit price'},
    {check: unitquantityCheck, id: 'unitquantity', title: 'Modify unit quantity'},
    {check: paymentCheck, id: 'payment', title: 'Editing payment plan'},
  ];

  const articleMeta = {
    title: 'Changing Listing Information',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    readTime: '3 minute read',
    image: protectedImg,
  };

  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={listingsData}
    >
      <Box id="how_to" ref={introRef}>
        <Text className="content_head">How to change listing information</Text>
        <Text as="p" marginTop={'30px'}>
          Development projects often require adjustments over time. Prices, payment terms, unit
          quantities, and even project scales may undergo changes. Alongside, documentation and
          images might also need updates. To effect any modification to a listing, follow these
          steps:
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="edit" ref={editRef}>
        <Text className="content_head">Edit listing information</Text>
        <Text as="p" marginTop={'30px'}>
          To modify your listing's details, follow these steps:
        </Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>
            Start by heading to the <b>"Listings"</b> section and locate the listing you want to
            update.
          </Text>
          <Image src={step1} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Click on <b>"More Options"</b> on the top right corner, then select{' '}
            <b>"Edit Listing"</b> on the drawer.
          </Text>
          <Image src={step2} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            Within this interface, you have the freedom to adjust various fundamental aspects of the
            listing. These include essentials like the listing name, location, projected delivery
            date, project brochure, listed amenities, images, and description.
          </Text>
          <Image src={step3} my={'30px'} w={'full'} />
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
            You may choose to update the available amenities by selecting them and then clicking
            <b>“Proceed”</b>. Alternatively, you can click on the <b>“Skip”</b> button to bypass
            this step, or
            <b>“Clear All”</b> to remove all selected amenities. In all cases, your listing
            information will be successfully updated to reflect your changes.
          </Text>
          <Image src={step4} my={'30px'} w={'full'} />
          <Text>
            By following these steps, you can easily tailor your listing information to match any
            adjustments or developments related to your project. Your listing will instantly reflect
            the latest and most accurate information, ensuring that potential clients receive the
            current details they need.
          </Text>
        </Box>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="modify" ref={modifyRef}>
        <Text className="content_head">Modifying unit information</Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>Choose the listing you wish to modify and navigate to it.</Text>
          <Image src={step11} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Scroll down and select the specific unit you want to adjust within the listing.
          </Text>
          <Image src={step12} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            Within this interface, you have the freedom to adjust various fundamental aspects of the
            listing. These include essentials like the listing name, location, projected delivery
            date, project brochure, listed amenities, images, and description.
          </Text>
          <Image src={step13} my={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Within the editing interface, you can alter unit information like the number of units,
            the unit title, unit size, unit description, and even update the images if necessary.
            For changes in quantity, please note that adjustments will require corresponding updates
            to the allocation information.
          </Text>
          <Image src={step14} my={'30px'} w={'full'} />
        </Box>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="unitprice" ref={unitpriceRef}>
        <Text className="content_head">How to modify unit price</Text>

        <List spacing={'2px'} styleType="none" mt={'30px'}>
          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 1:
              </Text>{' '}
              Choose the listing you wish to modify and navigate to it.
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 2:
              </Text>{' '}
              Select the specific unit you want to adjust within the listing.
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 3:
              </Text>{' '}
              At the top-right corner of the unit page, click on the “More Options“ button to access
              the drawer and choose "Modify Unit Price."
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 4:
              </Text>{' '}
              To modify the unit price, edit the price field and update the purchase agreement
              accordingly. Be mindful that if a price adjustment is made, it could potentially
              impact users with pending transactions related to that specific price. You'll need to
              decide whether to continue with the new price or honour the old price for ongoing
              transactions until their expiration dates. If your project involves payment plans,
              remember that updating prices here will only affect outright purchases. If changes to
              payment plan prices are required, a separate process is needed to ensure that the
              modifications are reflected accurately.
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 5:
              </Text>{' '}
              After making your desired adjustments, ensure that you complete the process to save
              your changes by clicking “Proceed”.
            </Text>
          </ListItem>
        </List>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>
      <Box id="unitquantity" ref={unitquantityRef}>
        <Text className="content_head">How to modify unit quantity</Text>

        <List spacing={'2px'} styleType="none" mt={'40px'}>
          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 1:
              </Text>{' '}
              Choose the listing you wish to modify and navigate to it.
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 2:
              </Text>{' '}
              Select the specific unit you want to adjust within the listing.
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 3:
              </Text>{' '}
              At the top-right corner of the unit page, click on the “More Options“ button to access
              the drawer and choose "Modify Unit Quantity."
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 4:
              </Text>{' '}
              Modify the unit quantity to your preferred amount.
            </Text>
            <Text fontStyle="italic" mt={1}>
              Note: You can either increase or decrease the quantity.
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              <Text as="span" fontWeight="600" color="#000000EB">
                STEP 5:
              </Text>{' '}
              After adjusting your unit quantity, you’ll be directed to this page where you can
              either add to or remove from your existing allocations, depending on how you modified
              the unit quantity. Upload images that clearly show the layout or structure of the
              units — you can add up to 5 images.
            </Text>
          </ListItem>
        </List>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} my={'40px'}></Box>
      </Box>

      <Box id="payment" ref={paymentRef}>
        <Text className="content_head">Editing payment plan</Text>

        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 1
          </Text>
          <Text>Start by navigating to the units section of your listing.</Text>
          <Image src={step21} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 2
          </Text>
          <Text>
            Once within the units page, scroll down to locate the section that pertains to payment
            plans.
          </Text>
          <Image src={step22} mt={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 3
          </Text>
          <Text>
            While it's not possible to directly delete a payment plan, you have the option to make
            it private by clicking the button labeled “Make Private”. This means that new buyers
            won't have access to that specific payment structure. After making it private, you can
            proceed to create a new payment plan structure.
          </Text>
          <Image src={step23} my={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 4
          </Text>
          <Text>
            Click on “Create new plan” to craft the new payment plan to reflect the desired changes
            or updates. Ensure that it aligns with the adjustments you intend to make.
          </Text>
          <Image src={step24} my={'30px'} w={'full'} />
        </Box>
        <Box my={'30px'}>
          <Text fontWeight={'600'} color={'#000000EB'}>
            STEP 5
          </Text>
          <Text>
            After creating the new payment plan structure, save your changes by clicking{' '}
            <b>“Proceed”</b>
            to implement the updated payment arrangement.
          </Text>
          <Image src={step25} my={'30px'} w={'full'} />
          <Text>
            By following these steps, you can effectively edit payment plans associated with your
            units. Remember that while you can't delete a payment plan, making it private and
            creating a new one provides you with the flexibility to adjust payment structures
            according to your requirements.
          </Text>
        </Box>
      </Box>
    </BlogLayout>
  );
};
