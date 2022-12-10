import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import asset1 from "../../assets/images/asset1.png";
import asset2 from "../../assets/images/asset2.png";
import asset3 from "../../assets/images/asset3.png";
import asset4 from "../../assets/images/asset4.png";
import asset5 from "../../assets/images/asset5.png";
import { SlArrowRight } from "react-icons/sl";

export const Fractionasset = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="asset">
      <div class="rightsidenav">
        <Text className="article_text">In this article</Text>
        <ul className={style}>
          <li onClick={handleClick}>
            <a href="#asset">How to fractionalise an asset</a>
          </li>
          <li onClick={handleClick}>
            <a href="#frac"> How users buy fractions</a>
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
          <Link to="">Intro to Veerge</Link>
        </Flex>

        <Flex columnGap="20px">
          <Image src={file} h="18px" w="14px" />
          <Link to="">Understanding Fractional Real estate </Link>
        </Flex>
        <Flex columnGap="20px">
          <Image src={file} h="18px" w="14px" />{" "}
          <Link to="">Veerge & Data analytics</Link>
        </Flex>
      </div>
      <Text className="head_">HOW TO FRACTIONALISE AN ASSET</Text>
      <Text className="publish">Published: November 24, 2022</Text>
      <Box>
        <Text className="content_head">STEP 1</Text>

        <Text>
          Go to the listings information page and select the unit you intend to
          fractionalize
        </Text>
      </Box>

      <Box>
        <Text className="content_head" mt="40px">
          STEP 2
        </Text>
        <Text className="content">
          Click on the top right button beside transactions and select
          fractionalise.
        </Text>
        <Image src={asset1} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 3
        </Text>
        <Text className="content">
          Then select the number of units you want to fractionalise.
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              {" "}
              Input price per fraction (The price you want to sell a fraction
              for).
            </li>
            <li> The first thing you do here is;</li>
          </ul>
        </Text>
        <Text className="content" mt="30px">
          <b>
            i.e Let’s say the apartment complex has ten 2-bedrooms and you
            intend to fractionalise three 2-bedrooms and sell at N10,000 per
            fraction. The price per fraction will be N10,000 and the number of
            units will be three. The total number of fractions will be
            automatically filled once you have filled the first fields.
          </b>
        </Text>
        <Image src={asset2} mt="20px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 4
        </Text>
        <Text className="content">
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              Strategy is the first selection to be made here, there is
              buy-to-flip and buy to hold
            </li>
          </ul>
        </Text>
        <Box
          maxW="624px"
          minH="99px"
          bg="#D9D9D9"
          borderRadius="10px"
          pl="20px"
          mt="15px"
          pt="10px"
        >
          <Text className="content">
            If you have created unit numbering or unit allocations, you will be
            prompted to select the units you want to remove from archive.
            Kindly, check the boxes and proceed
          </Text>
        </Box>
        <Text className="content" mt="20px">
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              Holding period is the next field to be filled (How long do you
              want the asset to be held for?)
            </li>
            <li> Capital structure is the next selection to be made</li>
          </ul>
        </Text>
        <Box
          maxW="624px"
          minH="99px"
          bg="#D9D9D9"
          borderRadius="10px"
          pl="20px"
          mt="20px"
        >
          <Text className="content" pt="15px">
            Equity is the most selected, it’s quite easy for potential buyers to
            understand, if it’s going to be a mix of debt and equity or
            mezzanine,{" "}
            <a href="/" style={{ color: "#4545fe" }}>
              kindly contact support
            </a>
          </Text>
        </Box>
        <Text className="content" mt="21px">
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              If you want the asset to be insured by the veerge’s insurance
              partner (Allianz insurance), kindly check the box and you will
              receive a message from Allianz
            </li>
            <li>
              {" "}
              If it’s an asset that will cashflow, kindly enable dividend
            </li>
          </ul>
        </Text>
        <Image src={asset3} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 5
        </Text>
        <Text className="content">
          If you enable dividends, there are more fields to fill;
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li> fill in the name of the property management company</li>
            <li>
              {" "}
              What’s the dividend payout type (Will the dividend be paid weekly,
              monthly, quarterly or annually)
            </li>
            <li> Dividend commencement date</li>
            <li> Upload the investor’s packet</li>
          </ul>
        </Text>
        <Image src={asset4} mt="30px" mx="auto" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 6
        </Text>
        <Text className="content">
          The last step where you add partners involved
        </Text>
        <Text className="content" mt="20px">
          An example is an asset management company or trustee management
          company that will be holding the deed or title documents when the
          project has been fully sold.
        </Text>
        <Text className="content" mt="20px">
          There are other exclusive use cases you might have to contact support
          for. An example is if you want to give access to an asset management
          company or the project has to be insured with a separate insurance
          company and you want funds to be disbursed automatically to the
          insurance company, you might need to contact support for this.
          Whatever your use case is, veerge has you covered.
        </Text>
      </Box>
      <Text className="head_" mt="100px" id="frac">
        HOW USERS BUY FRACTIONS
      </Text>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 1
        </Text>
        <Text className="content">Users login to their account</Text>
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 2
        </Text>
        <Text className="content">
          If the project is fractionalized, users will see fractionalized tag on
          the listing’s summary on the dashboard
        </Text>
        <Image src={asset5} mt="30px" mx="auto" w="100%" />
      </Box>
      <Box>
        <Text className="content_head" mt="40px">
          STEP 3
        </Text>
        <Text className="content">
          The user will click on buy fractions and inputs the the quantity of
          fractions to be purchased
        </Text>
        <Text className="content" mt="20px">
          <b>
            Schedule a demo call for an explainer of how to automate dividend
            payment and liquidate an asset
          </b>
        </Text>
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
              <a href="/" style={{ color: "#5d5fef" }}>
                How do i fractionalise a unit
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
              <a href="/" style={{ color: "#5d5fef" }}>
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
              <a href="/" style={{ color: "#5d5fef" }}>
                How to create an online store
              </a>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box marginTop="70px" textAlign="right">
        <Text className="content_head">Was this helpful?</Text>
        <Flex direction="row" justifyContent="flex-end" maxW="451px">
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
