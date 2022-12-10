import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import React, { useState } from "react";
import addprop from "../../assets/images/addprop.png";
import alloc from "../../assets/images/alloc.png";
import publish_rec from "../../assets/images/publish_rec.png";
import "./Verified.css";
import { SlArrowRight } from "react-icons/sl";
export const Verified = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState("");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="verified">
      <div class="rightsidenav">
        <Text className="article_text">In this article</Text>
        <ul className={style}>
          <li onClick={handleClick}>
            <a href="#verified">Verified, What Next?</a>
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
          <Link to="fisrt_time_setup">First time setup</Link>
        </Flex>

        <Flex columnGap="20px">
          <Image src={file} h="18px" w="14px" />
          <Link to="">Topic 5</Link>
        </Flex>
        <Flex columnGap="20px">
          <Image src={file} h="18px" w="14px" /> <Link to="">Subtopic 2</Link>
        </Flex>
      </div>
      <Text className="head_">VERIFIED, WHAT NEXT?</Text>
      <Text className="publish">Published: November 23, 2022</Text>
      <Box>
        <Text className="content_head">
          MY ACCOUNT HAS BEEN VERIFIED WHAT NEXT?
        </Text>
        <Text className="content">
          Once your Veerge account has been verified you will get an email that
          it has been verified. This is where you start migrating your business
          processes to Veerge.
        </Text>
        <Image src={addprop} mt="30px" mx="auto" />
      </Box>
      <Box marginTop="50px">
        <Text className="content_head">STEP 1</Text>
        <Text className="content" mt="15px">
          <b>Add your properties</b>
        </Text>
        <Text className="content" mt="10px">
          Why make a property development Veerge account without any property?
          Adding properties should be one of the first things you do because
          your property portfolio determines the look and feel of your website.
          In your new Veerge account, go to{" "}
          <a href="/" style={{ color: "#4545fe" }}>
            New listings
          </a>{" "}
          to list a property.
        </Text>
      </Box>
      <Box marginTop="50px">
        <Text className="content_head">STEP 2</Text>
        <Text className="content" mt="15px">
          <b>Create allocations for your property</b>
        </Text>
        <Text className="content" mt="10px">
          Once you have added listings successfully, the next thing you want to
          do is assign a unique identifier (alphanumeric identifier) to every
          property you have created, to make it easier to locate a particular
          apartment, building, or land. In simpler terms; let’s say you have an
          apartment complex named ABC with 30 units of apartments, the labelling
          of these apartments could go as this (Flat 1, Flat 2, Flat 3......Flat
          30 or A1, A2......A30).{" "}
        </Text>
        <Text className="content">
          Click{" "}
          <a href="/" style={{ color: "#4545fe" }}>
            here
          </a>{" "}
          to learn how to create allocations for your listings.
        </Text>

        <Image src={alloc} mt="30px" mx="auto" />
      </Box>
      <Box marginTop="50px">
        <Text className="content_head">STEP 3</Text>
        <Text className="content" mt="15px">
          <b>Archiving units</b>
        </Text>
        <Text className="content" mt="10px">
          We are aware of the fact that a number of times, not all
          buildings/unit in a listing are for sale. This could be because it’s a
          joint venture or you just want to sell some at a later date, that is
          why this feature is important. To be clearer; let say you have a joint
          venture contract with an investment company to develop an apartment
          complex of 100 units. In this JV contract, let’s assume you are
          supposed to have 60 units and the investment company owns 40 units.
          Separating the 60 units from the 40 units will be the smartest thing
          to do. This is because anyone can purchase it on your website and it
          would lead to complications because it wasn’t supposed to be sold.
          Another popular use case is when some units of the property have been
          sold before migrating your business processes to Veerge, using the
          same case study above; Lets still assume 40 units belong to the JV
          partner and 60 is yours, however you have sold 10. In this case you
          will have to archive 50 and not 40 because 50 units are off the
          market.
        </Text>
        <Text className="content" mt="25px">
          Click{" "}
          <a href="/" style={{ color: "#4545fe", textDecoration: "underline" }}>
            {" "}
            here
          </a>{" "}
          to learn how to archive units.
        </Text>
      </Box>
      <Box marginTop="50px">
        <Text className="content_head">STEP 4</Text>
        <Text className="content" mt="15px">
          <b>Publish an online portal</b>
        </Text>
        <Text className="content" mt="10px">
          This is where you build your online store experience. This is the
          interface between your listings and the buyers. It acts as the control
          centre for your entire business, controlling everything from inventory
          to marketing, giving you all the tools you need to sell online and
          provide customer support. Potential buyers can create an account on
          the store, so they have real-time information on your properties.
          Realtors and agents can also sign up on your store, subject to your
          approval, so they can sell properties and get commissions after the
          sale.
        </Text>
        <Text className="content" mt="25px">
          Click{" "}
          <a href="/" style={{ color: "#4545fe", textDecoration: "underline" }}>
            here
          </a>{" "}
          to learn how to publish an online store
        </Text>
        <Image src={publish_rec} mt="30px" mx="auto" />
      </Box>
      <Box marginTop="50px">
        <Text className="content_head">STEP 5</Text>
        <Text className="content" mt="15px">
          <b>Create an existing client account</b>
        </Text>
        <Text className="content" mt="10px">
          If you aren’t new to property development, you’d have an existing
          customer base of clients you have sold properties to in the past. This
          is where you set up their accounts and migrate their data to your new
          CRM tool. Once their account has been set up they get an automated
          email to complete the sign-up. After signing up, they can see their
          past purchases or in other cases an existing payment plan. For
          existing payment plans, they get automatic reminders when their
          payment plan is due and they can also add their bank accounts to their
          portal for direct debit when their payment plan is due. 1. Best
          practices for a successful client data migration process. 2. Why is it
          important to create existing clients account on Veerge.
          <ol style={{ liststyleType: "decimal", paddingLeft: "15px" }}>
            <li>
              <a href="/" style={{ color: "#4545fe" }}>
                Best practices for a successful client data migration process.{" "}
              </a>
            </li>
            <li>
              <a href="/" style={{ color: "#4545fe" }}>
                Why is it important to create existing clients account on
                Veerge.
              </a>
            </li>
          </ol>
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
                What is KYC automation
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
                What is myxellia technology
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
                Where is veerge available
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
