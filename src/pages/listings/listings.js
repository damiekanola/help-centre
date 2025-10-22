import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image, Link} from '@chakra-ui/react';
// import protectedImg from '../../assets/images/home/account_approved.jpg';
import protectedImg from '../../assets/images/home/listingsss.jpg';
import listingimg from '../../assets/images/home/listingpage.png';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';
import {gettingStarteddata} from '../../constant/pages';

export const Listings = () => {
  const [searchParams] = useSearchParams();
  const toView = true;

  const introRef = useRef(null);
  const understandingRef = useRef(null);
  const liveRef = useRef(null);
  const storesRef = useRef(null);
  const protectedRef = useRef(null);
  const allocationsRef = useRef(null);
  const archivingRef = useRef(null);
  const inspectionsRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const understandingCheck = useIsInViewport(understandingRef);
  const liveCheck = useIsInViewport(liveRef);
  const storesCheck = useIsInViewport(storesRef);
  const protectedCheck = useIsInViewport(protectedRef);
  const allocationsCheck = useIsInViewport(allocationsRef);
  const archivingCheck = useIsInViewport(archivingRef);
  const inspectionsCheck = useIsInViewport(inspectionsRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'What is a listing?'},
    {check: understandingCheck, id: 'typeoflisting', title: 'The two types of listing'},
    {check: liveCheck, id: 'difference', title: 'Difference between a unit and a listing?'},
    {check: storesCheck, id: 'stores', title: 'What you need to know about payment plans'},
    {check: protectedCheck, id: 'protected', title: 'What you need to know about closing costs'},
    {check: allocationsCheck, id: 'allocations', title: 'What you need to know about allocations'},
    {
      check: archivingCheck,
      id: 'archiving',
      title: 'When some units aren’t for sale (Archiving Units)',
    },
    {check: inspectionsCheck, id: 'inspections', title: 'What you need to know about inspections'},
  ];

  const articleMeta = {
    title: 'Listings',
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
      otherresources={gettingStarteddata}
    >
      <Box id="listing?" ref={introRef}>
        <Text className="content_head">What is a listing?</Text>
        <Text as="p" marginTop={'30px'}>
          A listing is a detailed profile of a development project that highlights key information
          for potential buyers or investors. It includes the property’s location, size, features,
          amenities, pricing, and contact information. The primary goal is to provide a clear and
          engaging overview that aligns with the audience’s needs and goals. In simple terms,
          creating a listing means adding your development projects to the platform to market them
          effectively.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={understandingRef} id="typeoflisting">
        <Text className="content_head">The two types of listing</Text>
        <Text as="p" marginTop="40px">
          Some listings are <b>standalone listings</b>, meaning they don’t contain units, they
          represent a single property, such as a detached house, which stands independently with no
          shared walls or units.
        </Text>
        <Text as="p">
          <b>Example</b>: A detached house, which stands independently with no shared walls or
          units.
        </Text>
        <Text mt={'20px'}>
          Other listings, however, <b>consist of multiple units</b>, each being a self-contained
          property within a larger structure.
        </Text>
        <Text as="p">
          <b>Example</b>: A residential building with several apartments or units that share common
          amenities and spaces.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={liveRef} id="difference">
        <Text className="content_head">Difference between a unit and a listing?</Text>
        <Text as="p" marginTop="40px">
          Understanding the difference between a "unit" and a "listing" is key here:
        </Text>

        <UnorderedList my={'20px'}>
          <ListItem>
            <b>Listing:</b> A broad representation of a property available for sale, rent, or
            investment. It may include multiple units, such as in multifamily apartments or estates,
            and acts as an umbrella for these configurations.
          </ListItem>
          <ListItem>
            <b>Unit:</b> An individual, self-contained property within a listing, such as an
            apartment in a complex or a house in an estate.
          </ListItem>
        </UnorderedList>
        <Text as="p" marginTop="20px">
          <b>For example</b>, an apartment complex as a listing may consist of multiple units, each
          representing a specific living space. However, a single-family home can simultaneously be
          a unit and a standalone listing.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={storesRef} id="paymentplans">
        <Text className="content_head">What you need to know about payment plans</Text>
        <Text as="p" marginTop="40px">
          A payment plan is an agreement between a buyer and a seller that allows the buyer to pay
          for a property over time instead of paying the full amount at once. It makes property
          ownership more flexible and easier to manage.
        </Text>
        <Text as="p" fontWeight={'700'} mt={'30px'}>
          Quick Payment Plan
        </Text>
        <Text as="p">
          With a Quick Payment Plan, the buyer pays a deposit first and then spreads the remaining
          balance over a set period. <br />
          For example, if a property costs ₦100 million, the seller might allow the buyer to pay:
        </Text>
        <UnorderedList>
          <ListItem>₦20 million as an initial deposit,</ListItem>
          <ListItem>then spread the remaining ₦80 million over one year.</ListItem>
        </UnorderedList>
        <Text as="p">The instalments could be:</Text>
        <UnorderedList>
          <ListItem>₦20 million as an initial deposit,</ListItem>
          <ListItem>then spread the remaining ₦80 million over one year.</ListItem>
        </UnorderedList>
        <Text as="p" mt={'20px'}>
          All Quick Payment Plans involve fixed instalment amounts paid regularly (weekly, monthly,
          or quarterly).
        </Text>

        <Text mt={'20px'}>
          However, in some cases, the buyer may choose to pay at their own pace within the agreed
          one-year period, as long as the total amount is fully paid before the deadline.
        </Text>

        <Text as="p" fontWeight={'700'} mt={'30px'}>
          Custom Payment Plan
        </Text>
        <Text as="p">
          A Custom Payment Plan is more flexible and personalized. The payment schedule is designed
          specifically for the buyer, with different amounts due at different times. <br />
          For example, for a property worth ₦100 million, the plan might be:
        </Text>
        <UnorderedList>
          <ListItem>₦20 million as an initial deposit,</ListItem>
          <ListItem>₦30 million two months later,</ListItem>
          <ListItem>₦25 million five months later,</ListItem>
          <ListItem>₦20 million ten months later,</ListItem>
          <ListItem>₦5 million fourteen months later.</ListItem>
        </UnorderedList>
        <Text as="p" mt={'20px'}>
          Unlike the Quick Payment Plan, the payment amounts and dates here are not equal, and the
          buyer must follow this exact schedule as agreed upon in the payment terms.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box id="closingcosts" ref={protectedRef}>
        <Text className="content_head">What you need to know about closing costs</Text>
        <Text className="content" lineHeight={'25px'}>
          <Text as="p" marginTop={'30px'}>
            <b>Closing cost</b> refers to any additional, optional fee added to a property
            transaction. It’s not a mandatory charge, but it can be included when necessary to cover
            extra expenses such as documentation, processing, or post-purchase services.
          </Text>
          <Text as="p" marginTop={'30px'}>
            If used, the closing cost will include both a{' '}
            <b>title (to specify what the fee is for) and an amount.</b>
          </Text>
          <Text as="p" marginTop={'30px'}>
            You can also <b>add additional closing costs</b> when necessary. This feature is used to
            request extra funds after the property purchase has been completed or while a payment
            plan is still active , for instance, to cover newly incurred fees, adjustments, or
            post-purchase administrative expenses.
          </Text>
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box id="allocations" ref={allocationsRef}>
        <Text className="content_head">What you need to know about allocations</Text>
        <Text as="p" marginTop={'30px'}>
          Allocation is an identifier assigned to each listing, making it easier to locate specific
          properties in your portfolio. This applies to all types of properties, including
          semi-detached, apartments, lands, and all other property types.
        </Text>
        <Text as="p" marginTop={'30px'}>
          For example, imagine a <b>30-unit apartment complex</b> named ABC. Each apartment could be
          identified as <b>“Flat 1,” “Flat 2,” “Flat 3,”</b> and so on up to <b>“Flat 30.”</b>{' '}
          Alternatively, you might label them <b>“Apartment 1,” “Apartment 2,”</b> all the way
          through <b>“Apartment 30.”</b> They are two types of allocation you should be aware of:
        </Text>
        <Text as="p" marginTop={'30px'} fontWeight={'700'}>
          1. Smart Allocation
        </Text>
        <Text as="p">
          With Smart Allocation, buyers can select their preferred units in real time via a building
          allocation layout on their mobile or web platform, once they have reached a milestone set
          by the development company. This process is similar to selecting seats on an airplane when
          purchasing a ticket. Buyers cannot select units that have already been taken or marked as
          unavailable by the development company.
        </Text>
        <Text as="p" marginTop={'30px'} fontWeight={'700'}>
          2. Manual Allocation
        </Text>
        <Text as="p">
          Under Manual Allocation, buyers do not choose their own units. Instead, the development
          company assigns units on the buyer’s behalf, offering a more traditional approach to
          property allocation.'
        </Text>

        <Text mt={'20px'}>
          Use this{' '}
          <Link color={'#4545FECC'} textDecoration={'underline'}>
            guide
          </Link>{' '}
          to learn how to create allocations for a unit or listing.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box id="archiving" ref={archivingRef}>
        <Text className="content_head">When some units aren’t for sale (Archiving Units)</Text>
        <Text as="p" marginTop={'30px'}>
          Sometimes, not every unit in a listing is available for sale, whether due to joint
          ventures or strategic decisions.
        </Text>
        <Text as="p" marginTop={'30px'}>
          For example, suppose an investment company partners with you to develop a 100-unit
          apartment complex. You own 60 units, while the investment company owns 40. By separating
          your 60 units from their 40, you prevent accidental sales of units that aren’t yours to
          sell.
        </Text>
        <Text as="p" marginTop={'30px'}>
          Another scenario is when you've already sold some units before migrating to Veerge.
          Revisiting the example above: if 10 of your 60 units are sold, you’re left with 50
          marketable units. In Veerge, you would archive those 10 sold units to ensure they aren’t
          unintentionally listed for sale.
        </Text>
        <Text as="p" marginTop={'30px'}>
          This is why flexibility is essential.
        </Text>

        <Text mt={'20px'}>
          For detailed instructions on archiving units, please follow this
          <Link color={'#4545FECC'} textDecoration={'underline'}>
            link
          </Link>{' '}
          .
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box id="inspections" ref={inspectionsRef}>
        <Text className="content_head">What you need to know about inspections</Text>
        <Text as="p" marginTop={'30px'}>
          Property inspection has evolved from a routine task into a cornerstone of modern real
          estate. While many developers offer basic scheduling tools, this system takes it
          further—infusing intelligence and innovation to set a new industry standard.
        </Text>
        <Text fontWeight={'700'} mt={'20px'}>
          Post-Inspection Feedback
        </Text>
        <Image src={listingimg} w={'100%'} my={'30px'} />

        <Text as="p" marginTop={'30px'}>
          A standout feature is the post-inspection feedback mechanism. Much like Uber requests
          feedback after a ride, this system prompts visitors with:
          <br />“<b>Tell us about your experience on-site yesterday.</b>”This creates a
          comprehensive record of everyone who visits your property—physically or virtually—while
          capturing their impressions in real time. If expectations aren’t met, visitors can easily
          share their concerns, establishing a direct and immediate communication channel.
          <br />
          But this system does more than collect feedback—it transforms it into{' '}
          <b>actionable intelligence</b>. By analysing recurring complaints, requests, or trends,
          the platform identifies gaps in your offerings and uncovers emerging market demands. This
          enables you to refine your strategies and proactively address potential issues before they
          escalate.
          <br />
          It also <b>ties feedback insights to behavioral data</b>. For example, if a buyer leaves
          negative feedback and then hesitates on a payment, the system connects these
          insights—offering a deeper understanding of potential roadblocks in their decision-making
          process.
          <br />
          With all insights seamlessly accessible across your organization, this system drives
          <b>informed decision-making, operational efficiency, and continuous improvement.</b>Far
          more than a typical feature, this inspection system is a paradigm shift—intelligent,
          predictive, and strategically empowering—ensuring your real estate business stays ahead in
          a rapidly evolving market.
        </Text>
      </Box>
    </BlogLayout>
  );
};
