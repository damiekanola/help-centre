import {
  Box,
  Text,
  Flex,
  Image,
  useToast,
  Show,
  VStack,
  OrderedList,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import {Link, use, useSearchParams} from 'react-router-dom';
import file from '../../../assets/icons/file.png';
import React, {useRef, useState} from 'react';
import RightNav from '../../../components/Listings/RightNav';
import create1 from '../../../assets/images/create-listing/create-listing-1.png';
import create2 from '../../../assets/images/create-listing/create-listing-2.png';
import create3 from '../../../assets/images/create-listing/create-listing-3.png';
import create4 from '../../../assets/images/create-listing/create-listing-4.png';
import create5 from '../../../assets/images/create-listing/create-listing-5.png';
import LeftNav from '../../../components/Leftsidenav/Leftsidenav';
import QuestionsAndReplies from '../../../components/Faq/QuestionsAndReplies';
import Helpful from '../../../components/Faq/Helpful';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import Blocker from '../../../components/blocker';

const Createlisting = () => {
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const toView = true;
  // searchParams.get('isrestricted') === 'true'

  const overviewRef = useRef(null);
  const what_you_needRef = useRef(null);
  const stepsRef = useRef(null);
  const questionsRef = useRef(null);

  const overviewCheck = useIsInViewport(overviewRef);
  const what_you_needCheck = useIsInViewport(what_you_needRef);
  const stepsCheck = useIsInViewport(stepsRef);
  const questionsCheck = useIsInViewport(questionsRef);

  const articleContent = [
    {check: overviewCheck, id: 'overview', title: 'Overview'},
    {check: what_you_needCheck, id: 'what_you_need', title: 'What you need to know'},
    {check: stepsCheck, id: 'steps', title: 'Steps'},
    {check: questionsCheck, id: 'questions', title: 'Questions & Replies'},
  ];

  const questions = [
    {
      name: 'Manuel G.',
      date: 'Jun 07, 2023',
      content:
        "I reduced the quantity of the unit because we didn't want to have everything on the application.",
      replies: [
        "Hi Manuel, it's important to approach this differently. If you wish to control the units visible on the application, the best practice is to archive the specific quantity of units you want to exclude. For example, if your development project has 100 units and you prefer not to display 30 of them, you should archive those 30 units. This approach is more transparent for potential buyers. By archiving units, you ensure that those not for immediate sale won't mislead potential buyers who might expect a different total quantity available for purchase. This way, you can maintain a clear and accurate representation of your project's offerings on the application. If you need further guidance, feel free to reach out for assistance.",
      ],
    },
  ];

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <Box className="main">
      <RightNav />
      <Box>
        <Text className="head_">HOW TO CREATE A LISTING</Text>
        <Text className="publish">Published: February 18, 2023</Text>
        <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
        <Box id="overview" ref={overviewRef}>
          <Text className="content_head">CREATING A MULTI-FAMILY OR A GATED COMMUNITY LISTING</Text>
          <Text className="content" lineHeight={'25px'}>
            <Text as="p" marginTop="20px">
              Let's delve into the captivating world of a development project named{' '}
              <b>"Barrio Logan,”</b> comprising an impressive array of 51 units. Among these are 10
              units of 1-bedroom flats, 5 units of 1-bedroom lofts, 30 units of 2-bedroom flats, 5
              units of 3-bedroom residences, and a prestigious penthouse, with the threshold offer
              beginning at an impressive 450 million.
            </Text>
            <Text as="p" marginTop="20px">
              This remarkable undertaking is nestled in the heart of Kofo Abayomi, Victoria Island,
              Lagos, radiating luxury and allure.
            </Text>
            <Text as="p" marginTop="20px">
              Now, let's navigate the intricate web of pricing, where the vision of owning a piece
              of <b>"Barrio Logan"</b> comes to life:
            </Text>
          </Text>
          <Text className="" mt="30px">
            <OrderedList>
              <ListItem>
                <Text fontWeight={500} mt="20px">
                  1-Bedroom Flat:
                </Text>
                <UnorderedList>
                  <ListItem fontWeight={200}>Outright Price: 65 million</ListItem>
                  <ListItem mt="20px" fontWeight={200}>
                    3-Month Payment Plan:
                  </ListItem>
                  <UnorderedList>
                    <ListItem fontWeight={200}>Initial Deposit: 25 million</ListItem>
                    <ListItem fontWeight={200}>
                      Followed by 15 million every month for 3 months
                    </ListItem>
                    <ListItem fontWeight={200}>Total Payment: 70 million</ListItem>
                  </UnorderedList>
                  <ListItem mt="20px" fontWeight={200}>
                    6-Month Payment Plan:
                  </ListItem>
                  <UnorderedList>
                    <ListItem fontWeight={200}>Initial Deposit: 25 million</ListItem>
                    <ListItem fontWeight={200}>Followed by 24 million every 3 months</ListItem>
                    <ListItem fontWeight={200}>Total Payment: 73 million</ListItem>
                  </UnorderedList>
                </UnorderedList>
              </ListItem>

              <ListItem>
                <Text fontWeight={500} mt="20px">
                  1-Bedroom Loft:
                </Text>
                <UnorderedList>
                  <ListItem fontWeight={200}>Outright Price: 75 million</ListItem>
                  <ListItem mt="20px" fontWeight={200}>
                    3-Month Payment Plan:
                  </ListItem>
                  <UnorderedList>
                    <ListItem fontWeight={200}>Initial Deposit: 35 million</ListItem>
                    <ListItem fontWeight={200}>
                      Spread the remaining payment within 3 months
                    </ListItem>
                    <ListItem fontWeight={200}>Total Price: 80 million</ListItem>
                  </UnorderedList>
                </UnorderedList>
              </ListItem>

              <ListItem>
                <Text fontWeight={500} mt="20px">
                  2-Bedroom Flat:
                </Text>
                <UnorderedList>
                  <ListItem fontWeight={200}>Outright Price: 100 million</ListItem>
                  <ListItem mt="20px" fontWeight={200}>
                    12-month (1-Year) Payment Plan:
                  </ListItem>
                  <UnorderedList>
                    <ListItem fontWeight={200}>Initial Deposit: 25 million</ListItem>
                    <ListItem fontWeight={200}>15 million after 3 months</ListItem>
                    <ListItem fontWeight={200}>10 million after 2 months</ListItem>
                    <ListItem fontWeight={200}>30 million after 4 months</ListItem>
                    <ListItem fontWeight={200}>40 million after 3 months</ListItem>
                    <ListItem fontWeight={200}>Total Price: 110 million</ListItem>
                  </UnorderedList>
                </UnorderedList>
              </ListItem>

              <ListItem>
                <Text fontWeight={500} mt="20px">
                  3-Bedroom:
                </Text>
                <UnorderedList>
                  <ListItem fontWeight={200}>Outright Price: 120 million</ListItem>
                  <ListItem mt="20px" fontWeight={200}>
                    3-Month Payment Plan:
                  </ListItem>
                  <UnorderedList>
                    <ListItem fontWeight={200}>Initial Payment: 60 million</ListItem>
                    <ListItem fontWeight={200}>Payment spread over 3 months, no interest</ListItem>
                  </UnorderedList>
                </UnorderedList>
              </ListItem>

              <ListItem fontWeight={200} mt="20px">
                As for the pinnacle of grandeur—the penthouse—a veil of mystery shrouds the price,
                creating an air of anticipation. The development company invites offers from
                discerning individuals, fostering an atmosphere of exclusivity and negotiation.
              </ListItem>
            </OrderedList>
          </Text>
        </Box>

        <Box display={toView ? 'block' : 'none'}>
          <Box pt="30px" id="what_you_need" ref={what_you_needRef}>
            <Text className="content_head">WHAT YOU NEED TO KNOW</Text>
            <Text className="content" mt="20px">
              <Text as="p">
                To navigate the workings on Veerge, let's embark on a journey of clarity. It's
                important to note that this process is the same for estates and residential gated
                communities.
              </Text>
              <Text as="p" marginTop="20px">
                For the <b>one-bedroom flat,</b> the 3-month or 6-month payment plans, these are
                called <b>Quick payment plans</b>. This is because you'll be making the same payment
                regularly over a set time.
              </Text>
              <Text as="p" marginTop="20px">
                Moving to the <b>1-bedroom loft,</b> the 3-month payment plan is a bit more flexible
                but still falls under the <b>Quick payment plan</b> category. It gives you some
                leeway in payment timing.
              </Text>
              <Text as="p" marginTop="20px">
                The <b>2-bedroom flat</b> takes a different approach. Its payment plan doesn't
                follow the same pattern, so we call it a <b>Custom Payment Plan</b>. Payments happen
                at different times and amounts, tailored to the situation.
              </Text>
              <Text as="p" marginTop="20px">
                Now, onto the <b>3-bedroom</b>-it's still in the Quick Payment Plan category. This
                keeps things simple and efficient.
              </Text>
              <Text as="p" marginTop="20px">
                But the penthouse stands apart. It doesn't fit neatly into any category. Instead,
                it's open to offers, and you can customize the payment plan based on what works best
                for different buyers.
              </Text>
            </Text>
          </Box>

          <Box pt="30px" id="steps" ref={stepsRef}>
            <Text className="content_head">HOW TO GET STARTED</Text>
            <Text className="content_head">STEP 1</Text>
            <Text className="content">
              <Text as="p">
                In the listing overview section, you'll need to provide the following details:
              </Text>

              <OrderedList>
                <ListItem mt="10px">
                  <b>Listing Name:</b> This is the name of the property, in this case, "Barrio
                  Logan."
                </ListItem>
                <ListItem mt="10px">
                  <b>Select Land Title:</b> Choose the land title type, such as "C of O"
                  (Certificate of Occupancy).
                </ListItem>
                <ListItem mt="10px">
                  <b>Select Property Type:</b> Indicate the type of property, like "Apartment
                  Complex," "Estate," or "Residential Community."
                </ListItem>
                <ListItem mt="10px">
                  <b>Land Size (sqm):</b> Specify the size of the land in square meters.
                </ListItem>
                <ListItem mt="10px">
                  <b>Country:</b> Select the country where the property is being developed, in this
                  case, "Nigeria."
                </ListItem>
                <ListItem mt="10px">
                  <b>Construction Status:</b> Choose the current construction status, for example,
                  "Pre construction."
                </ListItem>
                <ListItem mt="10px">
                  <b>Start Date and End Date:</b> Fill in the estimated start and end dates of the
                  development.
                </ListItem>
                <ListItem mt="10px">
                  <b>Address:</b> Provide the full address of the property.
                </ListItem>
                <ListItem mt="10px">
                  <b>Location Landmark:</b> Identify a prominent landmark near the property's
                  location, such as "Victoria Island, Lagos."
                </ListItem>
                <ListItem mt="10px">
                  <b>Longitude and Latitude:</b> Retrieve these coordinates from{' '}
                  <a href="https://www.latlong.net" target="_blank">
                    <Text color="#4545FE" as="span">
                      https://www.latlong.net
                    </Text>
                  </a>
                  .
                </ListItem>
                <ListItem mt="10px">
                  <b>Description of the Property:</b> Summarize the property in 1,200 characters or
                  less, highlighting its key features and selling points.
                </ListItem>
                <ListItem mt="10px">
                  <b>YouTube Link (Optional):</b> If available, you can add a YouTube video link
                  showcasing the property.
                </ListItem>
                <ListItem mt="10px">
                  <b>Project Brochure:</b> Upload the project brochure containing detailed
                  information about the property.
                </ListItem>
                <ListItem mt="10px">
                  <b>Upload Images:</b> Provide up to 10 images of the property, showcasing its
                  various aspects and features.
                </ListItem>
              </OrderedList>

              <Image src={create1} mt="30px" mx="auto" w="full" />
            </Text>

            <Text className="content_head" pt="30px">
              STEP 2
            </Text>
            <Text className="content">
              <Text as="p">
                This is the part where you fill units information. In this case the units are 1
                bedroom flat, one bedroom loft, 2-bedroom flat, 3 bedroom and the pent house.
              </Text>

              <Box>
                <Box mt="20px" fontWeight={500}>
                  <Text fontSize={'16px'}>STEP 2 (i)</Text>
                  <Text>Lets begin with the 1 bedroom flat. We will fill the:</Text>
                </Box>

                <OrderedList>
                  <ListItem mt="10px">
                    <b>Unit Title:</b> Fill in "1 Bedroom Flat."
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Size (sqm):</b> Input the size of the unit in square meters.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Number of Bedrooms:</b> Indicate the number of bedrooms (1 bedroom).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Quantity:</b> Enter the total number of units (10 units).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Price:</b> Enter the outright unit price (65 million) and ensure the
                    "Price will be displayed" box is checked.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Purchase Agreement:</b> Attach the purchase agreement specific to this
                    unit.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Unit Images:</b> Provide images showcasing this unit.
                  </ListItem>
                </OrderedList>

                <UnorderedList>
                  <ListItem>
                    <Text fontWeight={500} mt="20px">
                      Next, proceed to the payment plan:
                    </Text>
                    <OrderedList>
                      <ListItem>Select "Add Payment Plan."</ListItem>
                      <ListItem>Choose "Quick Payment Plan."</ListItem>
                    </OrderedList>
                  </ListItem>
                  <ListItem>
                    <Text fontWeight={500} mt="20px">
                      For the 3-month payment plan:
                    </Text>
                    <OrderedList>
                      <ListItem>Set the duration as 3 months.</ListItem>
                      <ListItem>Initial deposit: 25 million.</ListItem>
                      <ListItem>Instalment payment: 15 million.</ListItem>
                      <ListItem>Payment frequency: Monthly.</ListItem>
                      <ListItem>
                        Upload the purchase agreement for the 3-month payment plan.
                      </ListItem>
                      <ListItem>
                        The purchase price will be automatically calculated and should match 70
                        million.
                      </ListItem>
                    </OrderedList>
                  </ListItem>
                  <ListItem>
                    <Text fontWeight={500} mt="20px">
                      For the 6-month payment plan:
                    </Text>
                    <OrderedList>
                      <ListItem>Select "Add Plan."</ListItem>
                      <ListItem>Set the duration as 6 months.</ListItem>
                      <ListItem>Initial deposit: 25 million.</ListItem>
                      <ListItem>Instalment payment: 24 million.</ListItem>
                      <ListItem>Payment frequency: Quarterly.</ListItem>
                      <ListItem>
                        Upload the purchase agreement for the 6-month payment plan.
                      </ListItem>
                    </OrderedList>
                  </ListItem>
                </UnorderedList>
              </Box>

              <Image src={create2} mt="30px" mx="auto" w="full" />

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  STEP 2 (ii)
                </Text>

                <Text as="p" mt="20px">
                  We will then add another Unit by clicking on the Add unit button
                </Text>
                <Text as="p" mt="20px">
                  This is the one bedroom loft with a flexible payment plan.
                </Text>

                <OrderedList mt="20px">
                  <ListItem mt="10px">
                    <b>Unit Title:</b> Enter "1 Bedroom Loft."
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Size (sqm):</b> Specify the unit size.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Number of Bedrooms:</b> Indicate the bedroom count (1 bedroom).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Quantity:</b> Fill in the quantity (5 units).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Price:</b> Enter the unit price (75 million) and ensure the "Price will
                    be displayed" box is checked.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Purchase Agreement:</b> Attach the purchase agreement for this unit.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Unit Images:</b> Provide images highlighting this unit.
                  </ListItem>
                </OrderedList>

                <Text fontWeight={500} mt="20px">
                  For the payment plan:
                </Text>
                <OrderedList>
                  <ListItem>Select "Add Payment Plan."</ListItem>
                  <ListItem>Choose "Quick Payment Plan."</ListItem>
                </OrderedList>

                <Text fontWeight={500} mt="20px">
                  For the 3-month flexible payment plan:
                </Text>
                <OrderedList>
                  <ListItem>Set the duration as 3 months.</ListItem>
                  <ListItem>Initial deposit: 35 million.</ListItem>
                  <ListItem>Payment frequency: Flexible.</ListItem>
                  <ListItem>
                    Upload the purchase agreement for the 3-month flexible payment plan.
                  </ListItem>
                  <ListItem>The purchase price will be 80 million.</ListItem>
                </OrderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  STEP 2 (iii)
                </Text>

                <Text as="p" mt="20px">
                  There are still 3 more units left so we will add another Unit by clicking on the
                  Add unit button.
                </Text>
                <Text as="p" mt="20px">
                  This will be the 2 bedroom flat with a flexible payment plan.
                </Text>

                <OrderedList mt="20px">
                  <ListItem mt="10px">
                    <b>Unit Title:</b> Enter "2 Bedroom Flat."
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Size (sqm):</b> Specify the unit size.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Number of Bedrooms:</b> Indicate the bedroom count (2 bedroom).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Quantity:</b> Fill in the quantity (30 units).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Price:</b> Enter the unit price (100 million) and ensure the "Price will
                    be displayed" box is checked.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Purchase Agreement:</b> Attach the purchase agreement for this unit.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Unit Images:</b> Provide images showcasing this unit.
                  </ListItem>
                </OrderedList>

                <Text fontWeight={500} mt="20px">
                  For the payment plan:
                </Text>
                <OrderedList>
                  <ListItem>Select "Add Payment Plan."</ListItem>
                  <ListItem>Choose "Custom Payment Plan."</ListItem>
                </OrderedList>

                <Text fontWeight={500} mt="20px">
                  For the 12-month payment plan:
                </Text>
                <OrderedList>
                  <ListItem>Set the duration as 12 months.</ListItem>
                  <ListItem>Initial deposit: 25 million.</ListItem>
                  <ListItem>Add instalment: 15 million after 3 months.</ListItem>
                  <ListItem>Add instalment: 10 million after 2 months.</ListItem>
                  <ListItem>Add instalment: 30 million after 4 months.</ListItem>
                  <ListItem>Add instalment: 40 million after 3 months.</ListItem>
                  <ListItem>Upload the purchase agreement for this unit.</ListItem>
                </OrderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  STEP 2 (iv)
                </Text>

                <Text as="p" mt="20px">
                  This will be the 3 bedroom with a flexible payment plan.
                </Text>

                <OrderedList mt="20px">
                  <ListItem mt="10px">
                    <b>Unit Title:</b> Enter "3 Bedroom Flat."
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Size (sqm):</b> Specify the unit size.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Number of Bedrooms:</b> Indicate the bedroom count (3 bedroom).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Quantity:</b> Fill in the quantity (5 units).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Price:</b> Enter the unit price (100 million) and ensure the "Price will
                    be displayed" box is checked.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Purchase Agreement:</b> Attach the purchase agreement for this unit.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Unit Images:</b> Provide images showcasing this unit.
                  </ListItem>
                </OrderedList>

                <Text mt="20px" fontWeight={500}>
                  For the payment plan:
                </Text>
                <OrderedList>
                  <ListItem>Select "Add Payment Plan."</ListItem>
                  <ListItem>Choose "Quick Payment Plan."</ListItem>
                </OrderedList>

                <Text mt="20px" fontWeight={500}>
                  For the 3-month flexible payment plan:
                </Text>
                <OrderedList>
                  <ListItem>Set the duration as 3 months.</ListItem>
                  <ListItem>Initial deposit: 60 million.</ListItem>
                  <ListItem>Payment frequency: Flexible.</ListItem>
                  <ListItem>The purchase price will be 120 million.</ListItem>
                  <ListItem>
                    Upload the purchase agreement for the 3-month flexible payment plan.
                  </ListItem>
                </OrderedList>
              </Box>

              <Box mt="20px">
                <Text fontWeight={500} fontSize={'16px'}>
                  STEP 2 (v)
                </Text>

                <Text as="p" mt="20px">
                  This will be the prestigious penthouse with a no-interest payment plan.
                </Text>

                <OrderedList mt="20px">
                  <ListItem mt="10px">
                    <b>Unit Title:</b> Enter "Penthouse."
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Size (sqm):</b> Specify the unit size.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Size (sqm):</b> Specify the unit size.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Number of Bedrooms:</b> Indicate the bedroom count (4 bedrooms).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Quantity:</b> Fill in the quantity (1 unit).
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Unit Price:</b> Enter the unit price (450 million) and uncheck the "Price
                    will be displayed" box.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Purchase Agreement:</b> Attach the purchase agreement for this unit.
                  </ListItem>
                  <ListItem mt="10px">
                    <b>Upload Unit Images:</b> Provide images showcasing this unit.
                  </ListItem>
                </OrderedList>

                <Text mt="20px">
                  After this, select "Proceed," which will guide you to a new page.
                </Text>
              </Box>
              <Image src={create3} mt="30px" mx="auto" w="full" />
            </Text>

            <Text pt="30px" className="content_head">
              STEP 3
            </Text>
            <Text className="content" mt="20px">
              <Text as="p">
                Now, let's proceed to include all the amenities of your development project. It's a
                straightforward process:
              </Text>
              <OrderedList>
                <ListItem>
                  Select All Amenities: We will Simply click on each amenity that applies to the
                  project.
                </ListItem>
              </OrderedList>
              <Image src={create4} mt="30px" mx="auto" w="full" />
            </Text>

            <Text className="content_head" pt="30px">
              STEP 4
            </Text>
            <Text className="content" mt="20px">
              <Text as="p">
                On this page, you'll find a comprehensive summary of all the steps you've completed
                thus far. However, there are a couple more crucial tasks left: adding contact
                persons for the project and specifying the commissions for both the internal sales
                team and registered external agents.
              </Text>
              <OrderedList>
                <ListItem>
                  <b>Contact Persons:</b> Navigate to the "Contact Person" section and select the
                  relevant individuals from your teams.
                </ListItem>
                <ListItem>
                  <b>Commissions:</b> Move on to the "Commission" section and input the respective
                  percentages for both internal sales team and external registered agents. If no
                  commission is applicable, simply enter zero.
                </ListItem>
              </OrderedList>

              <Image src={create5} mt="30px" mx="auto" w="full" />

              <Text as="p">
                Once you've accomplished these steps, you're ready to take the final step:
                publishing the listing publicly. Publishing it publicly means that it will become
                visible on the application for users to see. However, if you prefer not to have it
                displayed, you can choose to publish it privately.
              </Text>

              <Text as="p" mt="20px">
                At this juncture, the listing is now live and active.
              </Text>

              <Text as="p" mt="20px">
                The subsequent step will involve creating allocations specific to this listing.
              </Text>

              <Link to="/listings/create_unit">
                <Text mt="20px" cursor={'pointer'} color="#4545FE">
                  How to create an allocation.
                </Text>
              </Link>
            </Text>
          </Box>

          <Box ref={questionsRef}>
            <QuestionsAndReplies questions={questions} />
          </Box>
          <Helpful />
        </Box>
      </Box>
      {!toView && <Blocker />}
    </Box>
  );
};

export default Createlisting;
