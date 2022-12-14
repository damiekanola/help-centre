import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import insight from "../../assets/images/insight.png";
import customer from "../../assets/images/customer_over.png";
import "./data.css";
import { SlArrowRight } from "react-icons/sl";
export const Veergedata = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };
  return (
    <div className="main" id="real">
      <Show breakpoint="(min-width: 769px)">
        <div class="rightsidenav">
          <Text className="article_text">In this article</Text>
          <ul className={style}>
            <li onClick={handleClick}>
              <a href="#real">Overview</a>
            </li>
            <li onClick={handleClick}>
              <a href="#ml">ML, DL & AI </a>
            </li>
            <li onClick={handleClick}>
              <a href="#matters">Why Veerge Matters</a>
            </li>
            <li onClick={handleClick}>
              <a href="#data">Why Data Migration</a>
            </li>
            <li onClick={handleClick}>
              <a href="#faq">FAQs</a>
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
            <Link to="fractional_real_estate">Fractional Real Estate</Link>
          </Flex>
          <Flex columnGap="20px">
            <Image src={file} h="18px" w="14px" />{" "}
            <Link to="users_experience">User’s End-To-End Experience</Link>
          </Flex>
        </div>
      </Show>
      <Text className="head_">VEERGE & DATA ANALYTICS </Text>
      <Text className="publish">Published: November 10, 2022</Text>
      <Box>
        <Text className="content_head">OVERVIEW</Text>
        <Text className="content">
          Data analytics, in one form or another, has been around for nearly as
          long as business itself. Whenever a merchant considered customer
          buying habits and attempt to predict product demand, that was data
          analytics. Of course, the ability to handle data accurately and in
          large amounts only became widely possible with the introduction of
          computational technology during the 20th century. Since that time,
          computers have evolved from simplistic adding machines into something
          much more complex. Today’s advanced analytic tools are capable of
          gathering data from a wide range of relevant sources. Information
          related to demographic data, purchase history, support interactions,
          preferences, and more is automatically captured and evaluated,
          presenting businesses with refined, easy to digest data conclusions.
          Data analytics help organizations better understand relevant
          information. AI takes things a step further. AI-enhanced analytics not
          only details the meaning behind the data; it suggests what should come
          next. Anticipating customer needs and opportunities, resolving support
          issues before they happen, and creating predictive one-on-one journeys
          that are personalized to every individual client, AI has the potential
          to become integral to businesses large and small. That said, in order
          for AI to be effective, it needs to be smart. That’s why modern AI is
          built on two very important concepts: machine learning and deep
          learning.
        </Text>
      </Box>
      <Box pt="150px" id="ml">
        <Text className="content_head">
          MACHINE LEARNING, DEEP LEARNING & AI
        </Text>
        <Text className="content">
          To understand the concepts that drive modern business AI, first
          recognize that one is really just a subset of the other — that is to
          say that deep learning is a type of machine learning. Machine learning
          is essentially what it sounds like — the idea that machines can grow
          their intelligence. This concept is at the heart of nearly all AI
          theory, as it is generally more feasible to teach a machine how to
          assimilate information incrementally than it is to preprogram all
          relevant data into the machine from the beginning. Machine learning
          makes it possible for AI to detect patterns in structured data. A
          well-known example of machine learning is predictive recommendations,
          such as those found on many ecommerce sites and streaming services.
          NLP is AI that recognizes language and its many usage and grammar
          rules by finding patterns within large datasets. it can be used for
          sentiment analysis on text to understand how customers feel about your
          specific brand and products. Deep learning also does what its name
          suggests: it goes deeper. Relying on complex mathematical algorithms,
          deep learning gives AI the ability to learn without being hand fed the
          relevant data. Deep-learning-capable AIs can be positioned in domains
          with little to no human supervision, and can teach themselves tasks
          from the ground up. Deep learning is heavily dependant upon having a
          very broad pool of information from which to draw. Of course, in this
          age of always-connected digital communication, having access to vast
          amounts of data is becoming a non issue, particularly in business.
          Veerge, has taken Real estate AI to new levels. It is a fully
          inclusive, integrated AI for CRM. It gives business organizations the
          power to employ essential machine learning and advanced deep learning
          concepts to all of their processes and data — customer, industry, and
          in house — for unmatched accuracy and cutting-edge automation.
        </Text>
      </Box>
      <Box pt="150px" id="matters">
        <Text className="content_head">WHY VEERGE MATTERS</Text>
        <Text className="content">
          The Real estate world rewards risk-takers, but that doesn't imply
          property developers should take advantage of every risky opportunity.
          They should only take advantage of cue data-driven strategies. The
          term "data-driven" refers to a methodical approach to making business
          decisions based on information gleaned from data, such as to find new
          markets, enhance customer service, increase revenue, enhance
          operations, and more. It enables businesses to make well-informed
          judgments and meticulous plans to achieve their goals. A data-driven
          decision is one that is backed up by hard numbers, allowing business
          executives to make educated choices that have a positive impact on the
          bottom line. As opposed to relying on assumptions, a data-driven
          approach prioritizes concrete evidence when making choices. Business
          leaders who are data-driven may factor in their intuition when making
          decisions, but they operate primarily on the basis of the numbers. Did
          you know that data-driven businesses are 20x more likely to acquire
          new clients and 6x more likely to retain them? Those are strong
          figures to build a case to have your data work for you in systems like
          Veerge. Veerge's collection of reporting and analytics tools is robust
          and works together to help you make sense of your data, take action on
          it, and share what you've learned with other stakeholders. Veerge
          provides a robust set of reporting tools that coordinate with one
          another to help you analyze your data and take appropriate action. In
          order to uncover, surface, and visualize insights in your business
          data, Veerge uses statistical modeling and supervised machine learning
          to supplement existing business intelligence. It forecasts future
          outcomes and offers suggestions for improving the predictions, using
          predictive and prescriptive analysis.
          <Image src={insight} mt="30px" mx="auto" />
          <Image src={customer} mt="30px" mx="auto" />
        </Text>
      </Box>
      <Box pt="150px" id="data">
        <Text className="content_head">WHY MIGRATE DATA TO VEERGE</Text>
        <Text className="content">
          We’ve rounded up the most prominent benefits of migrating your data to
          Veerge:
          <ol style={{ listStyleType: "decimal" }}>
            <li style={{ marginTop: "28px" }}>
              <b>Increased productivity</b>
              <br /> Avoid the fatigue and mistakes of manually entering data.
            </li>
            <li style={{ marginTop: "28px" }}>
              <b>Quality data</b>
              <br /> Veerge lets you view every account, contact, task, event,
              and opportunity related to a lead, giving your firm a lot of
              information before approaching potential clients.
            </li>
            <li style={{ marginTop: "28px" }}>
              <b>Data-backed decision-making</b> <br /> Business choices require
              precise data and Veerge provides a clinical view of data to aid
              decision-making.
            </li>
            <li style={{ marginTop: "28px" }}>
              <b>Workflow automation</b> <br /> Veerge uses automation to
              eliminate repetitive tasks and handle repetitive jobs faster and
              better than humans. Doing so leaves humans with more time to
              interact.
            </li>
            <li style={{ marginTop: "28px" }}>
              <b>Data infrastructure modernization</b>
              <br /> Veerge enhances businesses by extracting the most insights
              out of your data and powering informed decision-making, all within
              a secure, responsive and resilient cloud-based platform.
            </li>
            <li style={{ marginTop: "28px" }}>
              <b>Accessibility</b>
              <br /> Veerge is a cloud product, thus it's accessible anywhere
              with the Internet. Veerge's mobile app lets you keep in touch with
              your business and team 24/7.
            </li>
          </ol>
        </Text>
      </Box>
      <Box marginTop="50px">
        <Text className="content_head">STAGES OF DATA MIGRATION</Text>
        <Text className="content">
          No matter the methods used, each project to move data goes through the
          same key steps:
          <ol style={{ listStyleType: "decimal" }}>
            <li style={{ marginTop: "28px" }}>
              <b>Planning</b> Evaluate existing data elements and craft a
              carefully thought-out execution plan. You can think of planning as
              a four-pronged effort that includes refining the scope, assessing
              source and target systems, setting standards, and setting a
              realistic budget and timeline.
            </li>
            <li style={{ marginTop: "28px" }}>
              <b> Data auditing and profiling</b> Evaluate and clean the data
              you’ll be migrating to detect bottlenecks, resolve issues, and
              address any other concerns that can jeopardize data quality and
              then avoid data duplications and anomalies.
            </li>
            <li style={{ marginTop: "28px" }}>
              <b> Migration</b> This is where the migration actually takes
              place. Simulate executing the migration, detect and resolve any
              issues or gaps, and then execute the actual migration.
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
              <a href="/fractionalize_asset" style={{ color: "#5d5fef" }}>
                How do I fractionalise an asset
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
              <a href="/archive_unit" style={{ color: "#5d5fef" }}>
                How do i archive a unit
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
              <a href="/fractionalize_asset" style={{ color: "#5d5fef" }}>
                How do i send an offer
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
