import React, {useRef} from 'react';
import {Box, Text, Image, Flex, useToast} from '@chakra-ui/react';
import changeListing1 from '../../../assets/images/change-listing/change-listing-1.png';
import changeListing2 from '../../../assets/images/change-listing/change-listing-2.png';
import changeListing3 from '../../../assets/images/change-listing/change-listing-3.png';
import changeListing4 from '../../../assets/images/change-listing/change-listing-4.png';
import modifyUnit1 from '../../../assets/images/change-listing/modify-unit-1.png';
import modifyUnit2 from '../../../assets/images/change-listing/modify-unit-2.png';
import modifyUnit3 from '../../../assets/images/change-listing/modify-unit-3.png';
import modifyUnit4 from '../../../assets/images/change-listing/modify-unit-4.png';
import modifyUnit5 from '../../../assets/images/change-listing/modify-unit-5.png';
import modifyUnit6 from '../../../assets/images/change-listing/modify-unit-6.png';
import editPaymentPlan1 from '../../../assets/images/change-listing/edit-payment-plan-1.png';
import editPaymentPlan2 from '../../../assets/images/change-listing/edit-payment-plan-2.png';
import editPaymentPlan3 from '../../../assets/images/change-listing/edit-payment-plan-3.png';
import editPaymentPlan4 from '../../../assets/images/change-listing/edit-payment-plan-4.png';
import editPaymentPlan5 from '../../../assets/images/change-listing/edit-payment-plan-5.png';
import QuestionsAndReplies from '../../../components/Faq/QuestionsAndReplies';
import RightNav from '../../../components/Listings/RightNav';
import LeftNav from '../../../components/Leftsidenav/Leftsidenav';
import Helpful from '../../../components/Faq/Helpful';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import HideUnsubscribed from '../../../hoc/Hidefull';

const Changelisting = () => {
  const toast = useToast();

  const how_toRef = useRef(null);
  const questionsRef = useRef(null);

  const how_toCheck = useIsInViewport(how_toRef);
  const questionsCheck = useIsInViewport(questionsRef);

  const articleContent = [
    {check: how_toCheck, id: 'how_to', title: 'How to change a listing information '},
    {check: questionsCheck, id: 'questions', title: 'Questions & Replies'},
  ];

  const questions = [
    {
      name: 'Ahmed A.',
      date: 'Jun 25, 2023',
      content:
        'Prior to editing, the price was showing on the application, but now it no longer shows.',
      replies: [
        "Hello Ahmed, it seems you might have accidentally turned off the toggle button that displays the price. To fix this, go to the listing, select the desired unit, and simply turn the toggle button back on next to the name of the unit. If you need further assistance, don't hesitate to reach out.",
      ],
    },
    {
      name: 'Asim R.',
      date: 'Jun 30, 2023',
      content: 'How is the expiration date determined?',
      replies: [
        "Hello Asim, the expiration date varies based on the context. For general offers, the expiration is typically set to 24 hours. In the case of co-ownership, the expiration date is determined by the host of the co-ownership who sets it. Additionally, when you send a private offer, the expiration date is based on what you specify. However, as a default, offers typically expire after 24 hours. If you have any specific scenarios or questions, please don't hesitate to ask.",
      ],
    },
  ];

  const relatedContent = [
    {link: '/intro_to_veerge', text: 'Intro to Veerge'},
    {link: '/blog/understanding_fraction', text: 'Understanding Fractional Real estate '},
    {link: '/blog/veerge_data', text: 'Veerge & Data analytics'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      <RightNav />
      <Text className="head_">HOW TO CHANGE A LISTING INFORMATION</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Box id="how_to" ref={how_toRef}>
        <Text className="content" lineHeight={'25px'} mt="40px">
          <Text as="p">
            Development projects often require adjustments over time. Prices, payment terms, unit
            quantities, and even project scales may undergo changes. Alongside, documentation and
            images might also need updates. To effect any modification to a listing, follow these
            steps:
          </Text>
          <Text className="content_head">Adjusting Listing Information</Text>

          <Text as="p">
            If you need to modify your listing's details, follow these straightforward steps:
          </Text>
        </Text>

        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content" mt="20px">
            Start by heading to the <b>"Listings"</b> section.
          </Text>

          <Image src={changeListing1} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="30px">
            STEP 2
          </Text>
          <Text className="content" mt="20px">
            Locate the listing you want to update, then click on the top right corner select the
            drop down and click <b>"Edit."</b>
          </Text>

          <Image src={changeListing2} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 3
          </Text>
          <Text className="content" mt="20px">
            Within this interface, you have the freedom to adjust various fundamental aspects of the
            listing. These include essentials like the listing's name, location, projected delivery
            date, project brochure, listed amenities, images, and description.
          </Text>
          <Image src={changeListing3} mt="30px" mx="auto" w="full" />
        </Box>
        <Box>
          <Text className="content_head" mt="40px">
            STEP 4
          </Text>
          <Text className="content" mt="20px">
            After making your desired changes, click the <b>"Update"</b> button. This will save and
            apply your modifications to the listing.
          </Text>

          <Image src={changeListing4} mt="30px" mx="auto" w="full" />

          <Text className="content" mt="20px">
            <Text as="p">
              By following these steps, you can easily tailor your listing's information to match
              any adjustments or developments related to your project. Your listing will reflect the
              latest and most accurate information, ensuring that potential clients receive the
              current details they need.
            </Text>
          </Text>
        </Box>

        <Text className="content_head">Modifying Unit Information and Prices</Text>

        <Text className="content">
          <Text as="p">
            If you need to make changes to unit information, such as quantity or price, follow these
            specific steps:
          </Text>
        </Text>

        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">Choose the listing you wish to modify and navigate to it.</Text>

          <Image src={modifyUnit1} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 2</Text>
          <Text className="content">
            Select the specific unit you want to adjust within the listing.
          </Text>

          <Image src={modifyUnit2} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 3</Text>
          <Text className="content">
            At the top-right corner of the unit's page, click on the dropdown menu and choose{' '}
            <b>"Edit Listing."</b>
          </Text>

          <Image src={modifyUnit3} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 4</Text>
          <Text className="content">
            Within the editing interface, you can alter unit information like Number of Units,
            Outright price, and even update outright documents if necessary. For changes in
            quantity, please note that adjustments will require corresponding updates to the
            allocation information.
          </Text>

          <Image src={modifyUnit4} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 5</Text>
          <Text className="content">
            To modify the unit price, edit the price field accordingly. Be mindful that if a price
            adjustment is made, it could potentially impact users with pending transactions related
            to that specific price. You'll need to decide whether to continue with the new price or
            honor the old price for ongoing transactions until their expiration date. If your
            project involves payment plans, remember that updating prices here will only affect
            outright purchases. If changes to payment plan prices are required, a separate process
            is needed to ensure that modifications are reflected accurately.
          </Text>

          <Image src={modifyUnit5} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 6</Text>
          <Text className="content">
            After making your desired adjustments, ensure that you complete the process to save your
            changes.
          </Text>

          <Image src={modifyUnit6} mt="30px" mx="auto" w="full" />
          <Text className="content" mt="20px">
            Remember, meticulous attention to detail during the modification process is vital,
            especially when altering unit quantities or prices. This way, you can ensure that your
            listing reflects the most current and accurate information, aligning with your project's
            evolving dynamics.
          </Text>
        </Box>

        <Text className="content_head">EDITING PAYMENT PLAN</Text>

        <Text className="content">
          <Text as="p">
            If you need to edit a payment plan for a unit, the process involves a few
            straightforward steps:
          </Text>
        </Text>

        <Box>
          <Text className="content_head">STEP 1</Text>
          <Text className="content">Start by navigating to the units section of your listing.</Text>

          <Image src={editPaymentPlan1} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 2</Text>
          <Text className="content">
            Once within the units page, scroll down to locate the section that pertains to payment
            plans.
          </Text>

          <Image src={editPaymentPlan2} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 3</Text>
          <Text className="content">
            While it's not possible to directly delete a payment plan, you have the option to make
            it private. This means that new buyers won't have access to that specific payment
            structure. After making it private, you can proceed to create a new payment plan
            structure.
          </Text>

          <Image src={editPaymentPlan3} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 4</Text>
          <Text className="content">
            Click on <b>“Add payment plan”</b> to craft the new payment plan to reflect the desired
            changes or updates. Ensure that it aligns with the adjustments you intend to make.
          </Text>

          <Image src={editPaymentPlan4} mt="30px" mx="auto" w="full" />
        </Box>

        <Box>
          <Text className="content_head">STEP 5</Text>
          <Text className="content">
            After creating the new payment plan structure, save your changes to implement the
            updated payment arrangement.
          </Text>

          <Image src={editPaymentPlan5} mt="30px" mx="auto" w="full" />
          <Text className="content" mt="20px">
            By following these steps, you can effectively edit payment plans associated with your
            units. Remember that while you can't delete a payment plan, making it private and
            creating a new one provides you with the flexibility to adjust payment structures
            according to your requirements.
          </Text>
        </Box>
      </Box>

      <Box id="questions" ref={questionsRef}>
        <QuestionsAndReplies questions={questions} />
      </Box>
      <Helpful />
    </div>
  );
};

export default HideUnsubscribed(Changelisting);
