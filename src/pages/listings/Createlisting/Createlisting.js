import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList, Image} from '@chakra-ui/react';
import protectedImg from '../../../assets/images/home/listings.jpg';
import useIsInViewport from '../../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../../layouts/BlogLayout';
import {useSearchParams} from 'react-router-dom';
import {Card} from '../../../components/Faq/Card';
import {listingsData} from '../../../constant/pages';

const Createlisting = () => {
  const [searchParams] = useSearchParams();
  const toView = true;

  const usecaseRef = useRef(null);
  const needtoknowRef = useRef(null);
  const guideRef = useRef(null);

  const usecaseCheck = useIsInViewport(usecaseRef);
  const needtoknowCheck = useIsInViewport(needtoknowRef);
  const guideCheck = useIsInViewport(needtoknowRef);

  const articleContent = [
    {
      check: usecaseCheck,
      id: 'usecase',
      title: 'Use case: Creating a multi-family listing or a gated community listing',
    },
    {check: needtoknowCheck, id: 'needtoknow', title: 'What you need to know'},
    {check: guideCheck, id: 'guide', title: 'A step-by-step guide'},
  ];

  const articleMeta = {
    title: 'How to create a Listing',
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
      <Box id="usecase" ref={usecaseRef}>
        <Text className="content" lineHeight={'25px'}>
          <Text className="content_head">
            Use case: Creating a multi-family listing or a gated community listing
          </Text>
          <Text as="p" marginTop={'30px'}>
            Welcome to <b>"Barrio Logan"</b> a remarkable development project featuring{' '}
            <b>51 luxurious residential units </b>located in the vibrant heart of{' '}
            <b>Downtown Dubai</b>.
          </Text>
        </Text>
        <Text fontWeight={'700'} mt={'20px'}>
          Unit Composition:
        </Text>
        <UnorderedList>
          <ListItem>10 units: 1-Bedroom Flats</ListItem>
          <ListItem>5 units: 1-Bedroom Lofts</ListItem>
          <ListItem>30 units: 2-Bedroom Flats</ListItem>
          <ListItem>5 units: 3-Bedroom Residences</ListItem>
          <ListItem>
            1 Exclusive Penthouse (Price upon request, starting from AED 4,500,000)
          </ListItem>
        </UnorderedList>

        <Text fontWeight={'700'} mt={'20px'}>
          Pricing and Payment Plans (Prices in Thousands):
        </Text>
        <Text fontWeight={'700'}>
          <b>1-Bedroom Flat:</b>
        </Text>
        <UnorderedList pl={'10px'}>
          <ListItem>
            <b>Outright Price:</b> AED 650,000
          </ListItem>
          <ListItem>
            <b>3-Month Payment Plan:</b>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <b>Initial Deposit:</b> AED 250,000
            </ListItem>
            <ListItem>
              <b>Monthly Payment:</b> AED 150,000 for 3 months
            </ListItem>
            <ListItem>
              <b>Total:</b> AED 700,000
            </ListItem>
          </UnorderedList>
        </UnorderedList>

        <UnorderedList pl={'10px'} mt={'20px'}>
          <ListItem>
            <b>6-Month Payment Plan</b>:
          </ListItem>
          <UnorderedList>
            <ListItem>
              <b>Initial Deposit</b>: AED 250,000
            </ListItem>
            <ListItem>
              <b>Payment every 3 months</b>: AED 240,000
            </ListItem>
            <ListItem>
              <b>Total:</b> AED 730,000
            </ListItem>
          </UnorderedList>
        </UnorderedList>

        <Text fontWeight={'700'} mt={'20px'}>
          1-Bedroom Loft:
        </Text>
        <UnorderedList pl={'10px'}>
          <ListItem>
            <b>Outright Price</b>: AED 750,000
          </ListItem>
          <ListItem>
            <b>3-Month Payment Plan:</b>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <b>Initial Deposit: </b>AED 350,000
            </ListItem>
            <ListItem>Remaining amount distributed over 3 months</ListItem>
            <ListItem>Total: AED 800,000</ListItem>
          </UnorderedList>
        </UnorderedList>

        <Text fontWeight={'700'} mt={'20px'}>
          2-Bedroom Flat:
        </Text>
        <UnorderedList pl={'10px'}>
          <ListItem>
            <b>Outright Price</b>: AED 1,000,000
          </ListItem>
          <ListItem>
            <b>12-Month Payment Plan:</b>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <b>Initial Deposit: </b>AED 250,000
            </ListItem>
            <ListItem>
              <b>After 3 months</b>: AED 150,000
            </ListItem>
            <ListItem>
              <b>After 2 more months</b>: AED 100,000
            </ListItem>
            <ListItem>
              <b>After 4 more months</b>: AED 300,000
            </ListItem>
            <ListItem>
              <b>Final payment after 3 months:</b> AED 400,000
            </ListItem>
            <ListItem>
              <b>Total:</b> AED 1,100,000
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </Box>

      <Box id="needtoknow" ref={needtoknowRef}>
        <Text className="content_head" mt={'30px'}>
          What you need to know
        </Text>
        <Text as="p" marginTop={'30px'}>
          To navigate the workings, let's embark on a journey of clarity. It's important to note
          that this process is the same for estates and residential gated communities.
        </Text>

        <Box my="30px">
          <UnorderedList spacing="2px">
            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  1-Bedroom Flat (3-month or 6-month payment plan):
                </Text>{' '}
                These are called Quick Payment Plans because the same payment is made regularly over
                a set timeframe.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  1-Bedroom Loft (3-month payment plan):
                </Text>{' '}
                Still under the Quick Payment Plan category, but slightly more flexible in timing.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  2-Bedroom Flat (12-month plan):
                </Text>{' '}
                This is a Custom Payment Plan, with different amounts paid at various times,
                tailoring the schedule to your needs.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  3-Bedroom Residence (3-month plan):
                </Text>{' '}
                Falls under the Quick Payment Plan category for simplicity and efficiency.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Penthouse:
                </Text>{' '}
                Stands apart. With no predefined plan, it’s open to offers and individualized
                negotiation, allowing buyers to customize a payment timeline that suits them best.
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>

      <Box ref={guideRef} id="guide">
        <Text className="content_head">A step-by-step guide</Text>
        <Box my="30px">
          <Text fontWeight={'700'}>STEP 1</Text>
          <Text>
            In the listing overview section, you'll need to provide the following details:
          </Text>
          <OrderedList spacing={'2px'} my={'20px'} pl={'25px'}>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Select Property Type:
                </Text>{' '}
                Indicate the type of property, like "Apartment Complex," "Estate," or "Residential
                Community."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Listing Name:
                </Text>{' '}
                This is the name of the property, in this case, "Barrio Logan."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Select Land Title:
                </Text>{' '}
                Enter the land title type, such as "Freehold".
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Land Size:
                </Text>{' '}
                Enter the size of the land.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Construction Status:
                </Text>{' '}
                Choose the current construction status, for example, "Pre construction."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Start Date and End Date:
                </Text>{' '}
                Fill in the estimated start and end dates of the development.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Address:
                </Text>{' '}
                Provide the full address of the property.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Location Landmark:
                </Text>{' '}
                Identify a prominent landmark near the property's location, such as "Victoria
                Island, Lagos."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Longitude and Latitude:
                </Text>{' '}
                Retrieve the coordinates from{' '}
                <Text
                  as="a"
                  href="https://www.latlong.net"
                  color="blue.500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  latlong.net
                </Text>
                .
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Description of the Property:
                </Text>{' '}
                Summarize the property in 1,200 characters or less, highlighting its key features
                and selling points.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  YouTube Link (Optional):
                </Text>{' '}
                If available, you can add a YouTube video link showcasing the property.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Project Brochure:
                </Text>{' '}
                Upload the project brochure containing detailed information about the property.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Listing Description:
                </Text>{' '}
                Describe your listing as best as you can.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Images:
                </Text>{' '}
                Provide up to 10 images of the property — each should be less than 10MB — showcasing
                its various aspects and features.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
        <Box my="30px">
          <Text fontWeight={'700'}>STEP 2</Text>
          <Text>
            Now, let's proceed to include all the amenities of your development project. We will
            Simply click on each amenity that applies to the project.
          </Text>
        </Box>
        <Box my="30px">
          <Text fontWeight={'700'}>STEP 3</Text>
          <Text>
            In the listing overview section, you'll need to provide the following details:
          </Text>
        </Box>
        <Box my="30px">
          <Text fontWeight={'700'}>STEP 3(i)</Text>
          <Text>Lets begin with the 1 bedroom flat. We will fill the:</Text>
          <OrderedList spacing={'2px'} my={'20px'} pl={'25px'}>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Title:
                </Text>{' '}
                Fill in "1 Bedroom Flat."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Size (sqm):
                </Text>{' '}
                Input the size of the unit in square meters.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Number of Bedrooms:
                </Text>{' '}
                Indicate the number of bedrooms (1 bedroom).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Quantity:
                </Text>{' '}
                Enter the total number of units (10 units).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Price:
                </Text>{' '}
                Enter the outright unit price (65 million) and ensure the "Price will be displayed"
                box is checked.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Purchase Agreement:
                </Text>{' '}
                Attach the purchase agreement specific to this unit.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  YouTube URL (Optional):
                </Text>{' '}
                Provide a YouTube video link showcasing this specific unit, if available.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Description:
                </Text>{' '}
                Describe the unit as best as you can.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Unit Images:
                </Text>{' '}
                Provide images showcasing this unit.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
        <Box my="30px">
          <Text fontWeight="700">STEP 3(ii)</Text>

          <Text mt="10px">
            We will then add another Unit by clicking on the <b>Create new unit</b> button on the
            overview page before publishing.
          </Text>

          <Text mt="10px">This is the one bedroom loft with a flexible payment plan.</Text>

          <OrderedList spacing="2px" my="20px" pl={'25px'}>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Title:
                </Text>{' '}
                Enter "1 Bedroom Loft."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Size (sqm):
                </Text>{' '}
                Specify the unit size.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Number of Bedrooms:
                </Text>{' '}
                Indicate the bedroom count (1 bedroom).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Quantity:
                </Text>{' '}
                Fill in the quantity (5 units).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Price:
                </Text>{' '}
                Enter the unit price (75 million) and ensure the "Price will be displayed" box is
                checked.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Purchase Agreement:
                </Text>{' '}
                Attach the purchase agreement for this unit.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  YouTube URL (Optional):
                </Text>{' '}
                Provide a YouTube video link showcasing this specific unit, if available.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Description:
                </Text>{' '}
                Describe the unit as best as you can.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Unit Images:
                </Text>{' '}
                Provide images showcasing this unit.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
        <Box my="30px">
          <Text fontWeight="700">STEP 3(iii)</Text>

          <Text mt="10px">
            There are still 3 more units left, so we will add another Unit by clicking on the{' '}
            <b>Create new unit</b> button on the overview page before publishing.
          </Text>

          <Text mt="10px">This will be the 2 bedroom flat with a flexible payment plan.</Text>

          <OrderedList spacing="2px" my="20px" pl={'25px'}>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Title:
                </Text>{' '}
                Enter "2 Bedroom Flat."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Size (sqm):
                </Text>{' '}
                Specify the unit size.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Number of Bedrooms:
                </Text>{' '}
                Indicate the bedroom count (2 bedroom).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Quantity:
                </Text>{' '}
                Fill in the quantity (30 units).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Price:
                </Text>{' '}
                Enter the unit price (100 million) and ensure the "Price will be displayed" box is
                checked.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Purchase Agreement:
                </Text>{' '}
                Attach the purchase agreement for this unit.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  YouTube URL (Optional):
                </Text>{' '}
                Provide a YouTube video link showcasing this specific unit, if available.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Description:
                </Text>{' '}
                Describe the unit as best as you can.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Unit Images:
                </Text>{' '}
                Provide images showcasing this unit.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
        <Box my="30px">
          <Text fontWeight="700">STEP 3(iv)</Text>

          <Text mt="10px">This will be the 3 bedroom flat with a flexible payment plan.</Text>

          <OrderedList spacing="2px" my="20px" pl={'25px'}>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Title:
                </Text>{' '}
                Enter "3 Bedroom Flat."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Size (sqm):
                </Text>{' '}
                Specify the unit size.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Number of Bedrooms:
                </Text>{' '}
                Indicate the bedroom count (3 bedroom).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Quantity:
                </Text>{' '}
                Fill in the quantity (5 units).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Price:
                </Text>{' '}
                Enter the unit price (100 million) and ensure the "Price will be displayed" box is
                checked.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Purchase Agreement:
                </Text>{' '}
                Attach the purchase agreement for this unit.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  YouTube URL (Optional):
                </Text>{' '}
                Provide a YouTube video link showcasing this specific unit, if available.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Description:
                </Text>{' '}
                Describe the unit as best as you can.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Unit Images:
                </Text>{' '}
                Provide images showcasing this unit.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
        <Box my="30px">
          <Text fontWeight="700">STEP 3(v)</Text>

          <Text mt="10px">
            This will be the prestigious penthouse with a no-interest payment plan.
          </Text>

          <OrderedList spacing="2px" my="20px" pl={'25px'}>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Title:
                </Text>{' '}
                Enter "Penthouse."
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Size (sqm):
                </Text>{' '}
                Specify the unit size.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Number of Bedrooms:
                </Text>{' '}
                Indicate the bedroom count (4 bedrooms).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Quantity:
                </Text>{' '}
                Fill in the quantity (1 unit).
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Price:
                </Text>{' '}
                Enter the unit price (450 million) and uncheck the "Price will be displayed" box.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Purchase Agreement:
                </Text>{' '}
                Attach the purchase agreement for this unit.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  YouTube URL (Optional):
                </Text>{' '}
                Provide a YouTube video link showcasing this specific unit, if available.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Unit Description:
                </Text>{' '}
                Describe the unit as best as you can.
              </Text>
            </ListItem>

            <ListItem>
              <Text>
                <Text as="span" fontWeight="600" color="#000000EB">
                  Upload Unit Images:
                </Text>{' '}
                Provide images showcasing this unit.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
        <Box my="30px">
          <Text fontWeight="700">STEP 4</Text>

          <Text mt="10px">
            You'll see a comprehensive summary of all the steps you've completed thus far. Click
            <b>"Publish</b>" to make the listing go live.
          </Text>
        </Box>

        <Card
          heading={'Onboarding Kit'}
          title={'Migrate with confidence'}
          desc={
            'Our step-by-step migration guide helps you securely transfer your clients to Myxellia in no time.'
          }
          action={'Get Started'}
        />
        <Text mt="10px">
          If you are migrating from an existing system and already have clients subscribed to this
          listing, the next step is to Migrate your clients so they remain connected to the new
          listing.
        </Text>
      </Box>
    </BlogLayout>
  );
};

export default Createlisting;
