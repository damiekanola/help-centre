import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import listing1 from "../../assets/images/listing1.png";
import listing2 from "../../assets/images/listing2.png";
import listing3 from "../../assets/images/listing3.png";
import listing4 from "../../assets/images/listing4.png";
import listing5 from "../../assets/images/listing5.png";
import listing6 from "../../assets/images/listing6.png";
import { BsExclamationCircle } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";

export const Createlisting = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="listing">
      <Show breakpoint="(min-width: 769px)">
        <div class="rightsidenav">
          <Text className="article_text">In this article</Text>
          <ul className={style}>
            <li onClick={handleClick}>
              <a href="#listing">How to create a listing</a>
            </li>
            <li onClick={handleClick}>
              <a href="#faq"> FAQs</a>
            </li>
          </ul>
          <Text className="article_text" mt="60px">
            Related Content
          </Text>
          <Flex columnGap="20px">
            <Image src={file} h="18px" w="14px" />
            <Link to="/">Intro to Veerge</Link>
          </Flex>

          <Flex columnGap="20px">
            <Image src={file} h="18px" w="14px" />
            <Link to="fractional_real_estate">
              Understanding Fractional Real estate
            </Link>
          </Flex>
          <Flex columnGap="20px">
            <Image src={file} h="18px" w="14px" />
            <Link to="veerge_and_data">Veerge & Data analytics</Link>
          </Flex>
        </div>
      </Show>
      <Text className="head_">HOW TO CREATE A LISTING</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content_head">STEP 1</Text>

        <Text>
          Click on the new listing button on the top part of your screen.
        </Text>
        <Image src={listing1} mt="30px" mx="auto" />
      </Box>

      <Box>
        <Text className="content_head" mt="40px">
          STEP 2
        </Text>
        <Text className="content">
          Fill in the following information
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              Listing name (E.g Beverly hills Estate, Victoria Apartment complex
              etc){" "}
            </li>
            <li>Select land Title (C of O) </li>
            <li>Land size in (sqm) </li>
            <li>Select the country where the property is being developed </li>
            <li>
              Select the construction status (How far have you gone with the
              construction?){" "}
            </li>
            <li>If prompted, fill in the start date and end date </li>
            <li>Address of the property </li>
            <li>Location landmark (An example is Ikeja GRA, Lagos) </li>
            <li>
              Longitude and latitude (You can find it on
              https://www.latlong.net){" "}
            </li>
            <li>Select property type </li>
            <li>
              Description of the property (This shouldn’t be more than 500
              characters)
            </li>
            <li>Add the youtube link of your listing</li>
            <li>
              Upload images of the property (It shouldn’t be more than 10)
            </li>
          </ul>
        </Text>
        <Image src={listing2} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 3(i)
        </Text>
        <Flex
          direction="row"
          columnGap="8px"
          maxW="624px"
          minH="68px"
          bg="#d9d9d9"
          borderRadius="10px"
          pt="10px"
          pl="15px"
        >
          <BsExclamationCircle style={{ width: "40px", height: "40px" }} />
          <Text>
            This is only applicable for properties that have subtypes (e.g
            commercial, estate/Gated community, apartment complexes or parcel of
            land)
          </Text>
        </Flex>
        <Text className="content" mt="21px">
          Fill in the following information:
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              Unit title (E.g Luxury penthouse, 3 bedroom flat, 1 bedroom loft
              etc)
            </li>
            <li>Unit Price (Select the currency and input amount)</li>
            <li>Number of bedrooms (If prompted) </li>
            <li>
              Unit Quantity (How many of this unit type exist in the property)
            </li>
            <li>Unit size (in sqm) </li>
            <li>Upload images</li>{" "}
          </ul>
        </Text>
        <Text className="content" mt="21px">
          <b>
            N.B if you want potential buyers to enquire before getting an offer,
            you can check the “Don’t display price” box.
          </b>
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 3(ii)
        </Text>
        <Flex
          direction="row"
          columnGap="8px"
          maxW="624px"
          minH="68px"
          bg="#d9d9d9"
          borderRadius="10px"
          pt="10px"
          pl="15px"
        >
          <BsExclamationCircle style={{ width: "40px", height: "40px" }} />
          <Text>
            This is only applicable for properties that don’t have subtype (e.g
            Single family homes, a duplex, a portion of land etc)
          </Text>
        </Flex>
        <Text className="content" mt="21px">
          Fill in the following information:
          <ul style={{ paddingLeft: "20px" }}>
            <li>Number of bedrooms</li>
            <li>unit size (in sqm) </li>
            <li>Unit price </li>
          </ul>
        </Text>
        <Text className="content" mt="21px">
          <b>
            N.B if you want potential buyers to enquire before getting an offer,
            you can check the “Don’t display price” box.
          </b>
        </Text>
      </Box>

      <Box>
        <Text className="content_head" mt="40px">
          STEP 4(i)
        </Text>
        <Text className="content">
          Let’s look at this case study; You have a property for sale with
          payment plan options, and it goes as thus. “Pay 20% now and a certain
          percentage weekly, monthly, quarterly or annually”. The manual payment
          plan is the best feature for this use case.
          <ul style={{ paddingLeft: "20px", marginTop: "21px" }}>
            <li>First, you have to select the duration </li>
            <li>Input initial deposit </li>
            <li>
              Select payment frequency (There are options like weekly, monthly,
              quarterly, annually or flexible){" "}
            </li>
          </ul>
        </Text>
        <Text className="content" mt="21px">
          <b>
            N.B Flexible means they can make payments of any amount, anytime and
            wouldn’t be in default as long as it’s within the payment plan
            period.
          </b>
          <ul style={{ paddingLeft: "20px", marginTop: "21px" }}>
            <li>Fill in the instalment payment </li>
            <li>
              You can add another payment plan if you want more. E.g when the
              first payment plan you created was a 3-month payment plan and you
              want to also create a 6-month payment plan.{" "}
            </li>
          </ul>
        </Text>
      </Box>

      <Box>
        <Text className="content_head" mt="40px">
          STEP 4(ii)
        </Text>
        <Text className="content">
          Let’s look at this case study; You have a property for sale with
          payment plan options, and it goes as thus. “Pay 20% initial deposit
          and 30% after 4 months, 15 % 2 months after the second payment, and
          35% as the last payment”. A custom payment plan works perfectly for
          this
          <ul style={{ paddingLeft: "20px", marginTop: "21px" }}>
            <li>First, you have to select the duration </li>
            <li>Input initial deposit </li>
            <li>input the next payment </li>
            <li>select the due period (After 3 months) </li>
            <li>You can add another instalment till it’s completed </li>
            <li>
              You can add another payment plan if you want more e.g the first
              payment plan you created was a 6-month payment plan and you want
              to also create a 9-month payment plan
            </li>
          </ul>
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 5
        </Text>
        <Text className="content">
          This is the point where closing costs are added (i.e. Development
          levy, legal fees etc)
          <ul style={{ paddingLeft: "20px" }}>
            <li>Fill in the title of the fee and input the amount </li>
            <li>You can also add more fees </li>
          </ul>
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 6
        </Text>
        <Text className="content">
          This is where you upload documents and contracts associated with the
          property. It could be brochure, payment plan document (If prompted),
          and outright document{" "}
        </Text>
        <Text className="content" mt="21px">
          <b>
            N.B This is the document potential buyers will see during the
            purchase of the property{" "}
          </b>
        </Text>
        <Image src={listing3} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 7
        </Text>
        <Text className="content">
          This is where you select amenities, does the property have a pool? a
          cinema? a spa etc., (Select every amenity the property has)
        </Text>
        <Image src={listing4} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 8
        </Text>
        <Text className="content">
          Select the contact person (This is the person you want them to call
          for enquiries or questions related to the listings)
        </Text>
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 9
        </Text>
        <Text className="content">
          This is where you enable commission on sales i.e. when an agent sells,
          what commission will the agent earn for selling, (This could either be
          manual or Smart.
        </Text>
        <Flex
          direction="row"
          columnGap="8px"
          maxW="624px"
          minH="68px"
          bg="#d9d9d9"
          borderRadius="10px"
          pt="10px"
          pl="15px"
          mt="21px"
        >
          <BsExclamationCircle style={{ width: "40px", height: "40px" }} />
          <Text>
            Manual means the development company does the settlement manually,
            while smart means the commission process is automated.
          </Text>
        </Flex>

        <Image src={listing5} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 10
        </Text>
        <Text className="content">
          This is where the listing gets published, clients can either publish
          on the Online webstore or make it a private listing. A private listing
          is a listing that people can only view when they use the invitation
          link.
        </Text>
        <Text className="content" mt="21px">
          <b>This is what the listing looks like on the webstore</b>
        </Text>
        <Image src={listing6} mt="30px" mx="auto" />
      </Box>
      <Box marginTop="50px" id="faq">
        <Text className="content_head">FAQs</Text>
        <Flex
          maxW="621px"
          minH="192px"
          borderRadius="5px"
          border="0.3px solid #000000"
          direction="column"
        >
          <Box minH="64px" borderBottom="0.3px solid #000000">
            <Flex
              direction="row"
              columnGap="33px"
              pl="30px"
              mt="22px"
              alignItems="center"
            >
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/create_unit" style={{ color: "#5d5fef" }}>
                How do I create allocations
              </a>
            </Flex>
          </Box>
          <Box minH="64px" borderBottom="0.3px solid #000000">
            <Flex
              direction="row"
              columnGap="33px"
              pl="30px"
              mt="22px"
              alignItems="center"
            >
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />
              <a href="/delist" style={{ color: "#5d5fef" }}>
                How to delist a listing from online store
              </a>
            </Flex>
          </Box>
          <Box minH="64px">
            <Flex
              direction="row"
              columnGap="33px"
              pl="30px"
              mt="22px"
              alignItems="center"
            >
              {" "}
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/archive_unit" style={{ color: "#5d5fef" }}>
                How to archive a unit
              </a>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box marginTop="70px">
        <Text className="content_head">Was this helpful?</Text>
        <Flex direction="row">
          <Text
            borderRight="1px solid #5d5fef"
            color="#5d5fef"
            pr="8px"
            cursor="pointer"
            onClick={() =>
              toast({
                position: "bottom-center",
                isClosable: true,
                render: () => (
                  <Box color="white" p={3} bg="#000000">
                    Thank you for your feedback.
                  </Box>
                ),
              })
            }
          >
            Yes
          </Text>{" "}
          <Text
            color="#5d5fef"
            pl="8px"
            cursor="pointer"
            onClick={() =>
              toast({
                position: "bottom-center",
                isClosable: true,
                render: () => (
                  <Box color="white" p={3} bg="#000000">
                    Thank you for your feedback.
                  </Box>
                ),
              })
            }
          >
            No
          </Text>
        </Flex>
      </Box>
    </div>
  );
};
