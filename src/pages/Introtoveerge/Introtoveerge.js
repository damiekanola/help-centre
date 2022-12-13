import { Box, Text, Flex, Image, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import React, { useState } from "react";
import "./Introtoveerge.css";
import { SlArrowRight } from "react-icons/sl";
export const Introtoveerge = () => {
  const toast = useToast();
  const [style, setStyle] = useState("navigation_");
  const [isActive, setIsActive] = useState(" ");
  const handleClick = () => {
    console.log("you just clicked me");
    setStyle("bluenav");
    isActive() ? setIsActive("active") : setIsActive(" ");
  };

  return (
    <div className="main" id="veerge">
      <div class="rightsidenav">
        <Text className="article_text">In this article</Text>
        <ul className={style}>
          <li onClick={handleClick}>
            <a href="#veerge"> What is Veerge</a>
          </li>
          <li onClick={handleClick}>
            <a href="#engagement">System of engagement</a>
          </li>
          <li onClick={handleClick}>
            <a href="#intelligence">System of Intelligence</a>
          </li>
          <li onClick={handleClick}>
            <a href="#trust">System of Trust</a>
          </li>
          <li onClick={handleClick}>
            <a href="#conclusion">Conclusion</a>
          </li>
          <li onClick={handleClick}>
            <a href="#faq"> FAQs</a>
          </li>
        </ul>
        <Text className="article_text" mt="60px">
          Related Content
        </Text>
        <Flex columnGap="20px">
          <Image src={file} />
          <Link to="fisrt_time_setup">First time setup</Link>
        </Flex>

        <Flex columnGap="20px">
          <Image src={file} /> <Link to="">Topic 5</Link>
        </Flex>
        <Flex columnGap="20px">
          <Image src={file} /> <Link to="">Subtopic 2</Link>
        </Flex>
      </div>
      <Text className="head_">INTRO TO VEERGE</Text>
      <Text className="publish">Published: November 23, 2022</Text>
      <Box>
        <Text className="content_head" id="veerge">
          WHAT IS VEERGE?
        </Text>
        <Text className="content">
          Veerge is an SAAS built on the myxellia technology which we believe
          will redefine how the traditional Real Estate industry operates. It is
          an ever-evolving tech infrastructure of interconnected apps and
          services, built to make real estate stakeholders achieve extraordinary
          things and navigate the future of technology. Property development
          companies can configure it using pre-built apps, and tools, with
          capabilities that fit their operations to meet their business needs
          quickly. It offers a transparent, more efficient, and secure way by
          significantly reducing the friction involved in the buying, selling
          and creation of the Asset class. It is also empowered to cope with
          increasing workloads in a cost-effective, easy-to-use, sustainable,
          and secure way, making investing in real estate assets as simple,
          borderless, and programmable as the rest of the internet.
          <Text marginTop="20px">
            Values are delivered in three core areas:{" "}
            <a
              href="#engagement"
              style={{ color: "#8486f2", textDecoration: "underline" }}
            >
              system of engagement,
            </a>
            <a
              href="#intelligence"
              style={{ color: "#8486f2", textDecoration: "underline" }}
            >
              system of intelligence,
            </a>
            <a
              href="#trust"
              style={{ color: "#8486f2", textDecoration: "underline" }}
            >
              system of trust.
            </a>
          </Text>
        </Text>
      </Box>
      <Box pt="140px" id="engagement">
        <Text className="content_head">SYSTEM OF ENGAGEMENT</Text>
        <Text className="content">
          This is the interface between users and the business, it's powerful
          because it controls the end-user interactions. It’s an operating model
          that will breathe life into the business with its transformational
          customer experience which keeps the customer at the centre of the
          process. It enables Real estate businesses to launch their portal,
          display the properties they have for sale and easily onboard customers
          with KYC automation, in minutes(with clicks, not code). The gold
          standard in the experience is that it supports the house buyer's
          end-to-end experience. This is from customers creating accounts,
          logging on, browsing through opportunities, searching for a house
          online, identifying local schools and amenities, scheduling
          inspections, making enquiries, and sharing properties with family and
          friends. once a home has been selected, the buyout option includes
          outright payment, payment plan or even owning the property with family
          and friends with a smart contract. It is designed to power any
          business across the globe. Which makes the business a global business
          from day one. Customers around the world can access the portal, and
          payments can be accepted from customers in 60+ countries and 135+
          currencies, 24 hours a day, every day of the week without needing to
          establish local entities. This is valuable because the business
          controls end-user engagement and reaches users wherever they are.
          Perhaps the most strategic advantage of this is that it coexists with
          the database. This system of engagement bridges the gap between what
          traditional businesses have to offer and what customers have grown to
          expect.
        </Text>
      </Box>
      <Box pt="80px" id="intelligence">
        <Text className="content_head">SYSTEM OF INTELLIGENCE</Text>
        <Text className="content">
          <Text className="content" mb="20px">
            <b>AI+ Your business =Endless possibilities.</b>
          </Text>
          Veerge’s incredible line-up of fully customizable solutions is perfect
          for any Real estate company. This system of intelligence has 2 sweet
          spots; Customer 360, and analytics.
          <Text className="content" mt="20px">
            <b>Let’s dive in a little bit more</b>
          </Text>
          <Text className="content" mt="20px">
            One of the main reasons that businesses fail to beat their
            competition is that they don’t understand their customers. Veerge
            uses cutting-edge analytics technology which examines raw
            unstructured data where hundreds of streams of internal and external
            data can be sliced and diced to deliver insights to help conclude,
            make predictions, finds trends or answer questions. Ponder for a
            moment how much Facebook knows about your life, and how it uses that
            knowledge to give you relevant recommendations. This perfectly
            demonstrates what Veerge. It helps to gain a full understanding of
            customers, analyze, and forecast seasonal clients' behaviour and
            increase their loyalty.
          </Text>
          <Text className="content" mt="20px">
            It answers questions like; what are their preferences? what and when
            are they looking forward to buying? What makes them tick? why are
            they buying and selling? how do they prefer to buy? why do they
            switch and what are they buying next? This enables the understanding
            of customers at an individual level and prediction of customers’
            next move and the factors that lead them into recommending
            businesses. When a business knows more about its clients, it can
            build smartly to suit their needs and serve them better. It also can
            show who is most likely to buy again, what’s influencing their
            loyalty what keeps them coming back again and again, the likelihood
            to respond to different offers and how to prioritize based on a
            variety of factors.
          </Text>
          <Text className="content" mt="20px">
            {" "}
            Analyzing Customer data helps understand the target audience and
            keep a track record of the customer’s choices and preferences which
            can be of great use to the business to make more efficient
            decisions. It also works well in luxury homes where customers aren’t
            searching in a specific area but looking for properties
            characterized by high-end features. These buyers can be targeted
            directly by providing potential homes suited to meet their tastes,
            preferences, and expectations. This enables the development and
            designing of properties ideal for a specific market segment or
            location. It eliminates guesswork and blind projection from the
            process, resulting in more solid investments and returns.
          </Text>
          <Text className="content" mt="20px">
            {" "}
            Why does this matter? We know that relevance wins in retail and
            right now, potential home buyers are drowning in a sea of irrelevant
            choices and will only engage with what is relevant to their
            interests and needs. Getting focused insights into what they find
            most appealing is one of the key uses of Veerge. With so many
            companies competing for attention, companies that can provide
            personalized experiences have a distinct competitive advantage. We
            must walk in consumers’ shoes to truly understand their needs.
            Building a personalized customer journey for a buyer is quite hard.
            And if you are a mid-size or large business, you need to personalize
            this journey for 2,000 or 10,000 different buyers, you’ll have no
            choice but to use automation.
          </Text>
          <Text className="content" mt="20px">
            Veerge is specially designed to capture every minute detail of the
            transaction with the clients. The objective of implementing this
            software in an organization is that it builds trust.
          </Text>
          <Text className="content" mt="20px">
            Other use cases:
          </Text>
          <ol style={{ listStyleType: "decimal", marginLeft: "15px" }}>
            <li>
              <a
                href="/"
                style={{ color: "#8486f2", textDecoration: "underline" }}
              >
                {" "}
                Real estate Fractionalisation
              </a>
            </li>
            <li>
              <a
                href="/"
                style={{ color: "#8486f2", textDecoration: "underline" }}
              >
                {" "}
                Smart Payment plan
              </a>
            </li>
          </ol>
        </Text>
      </Box>
      <Box pt="80px" id="trust">
        <Text className="content_head">SYSTEM OF TRUST</Text>
        <Text className="content">
          In this era of cloud computing and on-demand data, there isn’t much
          room left for using manual entry spreadsheets. Nonetheless, real
          estate businesses traditionally operate under a reactive model often
          involving manual processes and paper-based records which is slow and
          cumbersome. Veerge on the other hand saves time and resources because
          it is proactive, digital and automated.
          <Text className="content" mt="20px">
            Let’s take a look at how the conventional process of making payment
            for property works:
          </Text>
          <Text className="content" mt="20px">
            <b>
              A customer makes a payment---{">"}Then sends payment document—
              {">"}
              when received, it's saved and arranged in a folder---&gt;Then you
              input details of the document into the accounting system-à
              Reconcile/create bookkeeping entry.
            </b>
          </Text>
          <Text className="content" mt="20px">
            This leaves room for duplicity. With veerge, a better approach that
            even eliminates the menial task is used:
          </Text>
          <Text className="content" mt="20px">
            <b>
              The customer makes payment-&gt; Ai powered data entry--à
              Bookkeeping entry is created.{" "}
            </b>
          </Text>
          <Text className="content" mt="20px">
            This new system of trust doesn’t require a third party to perform
            the task of validating the transaction. It can be seen as a ledger
            of facts because it’s much more available, and far more easily
            documented and managed. Transactions are processed 24/7, with no
            business hour or holiday cut-off times and transactions are also
            confirmable in a matter of minutes.{" "}
          </Text>
          <Text className="content" mt="20px">
            It also significantly helps to reduce imbalances and inefficiencies
            by providing a digital and automated way to track assets by ensuring
            the right information is available to all parties involved when they
            need them. All parties involved have the most up-to-date information
            and transparent view of their assets, which would make it much
            easier to track, manage, reduce the risk of errors or fraud and
            budget accordingly to help them stay ahead of the curve.{" "}
          </Text>
          <Text className="content" mt="20px">
            The holy grail of this feature is the smart contract. It is an
            autonomous computer program code that facilitates, executes and
            enforces the negotiation and performance of a certain contract
            (agreement) when certain conditions are met. This entire process
            happens automatically and can substitute or complement legal
            contracts. For example, a smart contract could be used to
            automatically release all permissions to a customer when they have
            completed their payment plan or gotten to a certain milestone of
            their payment plan and also automatically terminate a contract after
            certain defaults and immediately list on the marketplace.
          </Text>
        </Text>
      </Box>
      <Box pt="80px" id="conclusion">
        <Text className="content_head">CONCLUSION</Text>
        <Text className="content">
          The future of real estate is through digital, structured and automated
          channels, which is what will make it possible to deliver a consistent
          end-to-end omnichannel customer experience. With this businesses can
          easily adapt to changing customer expectations with everything they
          need to power the business, and align teams and technology around what
          matters most—the customer. This peerless automated solution helps in
          planning strategies, segmenting customers by certain values, creating
          content and listing, tracking customer behaviours while reducing
          marketing costs and making smarter decisions. These are decisions
          based on data, not assumptions or gut feeling. Revenue can now be
          increased by focusing on sales while giving you information on the
          hottest prospects which will help to close more deals. Veerge holds
          the promise of being what our industry needs to move our business
          practices into the twenty-first century.
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
            <Flex direction="row" columnGap="33px" pl="30px" mt="22px">
              <SlArrowRight style={{ color: "#5d5fef" }} />
              <a href="/fisrt_time_setup" style={{ color: "#5d5fef" }}>
                How do i set up my account for the first time?
              </a>
            </Flex>
          </Box>
          <Box minH="64px" borderBottom="0.3px solid #000000">
            <Flex direction="row" columnGap="33px" pl="30px" mt="22px">
              <SlArrowRight style={{ color: "#5d5fef" }} />
              <a href="/Verified_whats_next" style={{ color: "#5d5fef" }}>
                My account has been verified, what next?
              </a>
            </Flex>
          </Box>
          <Box minH="64px">
            <Flex direction="row" columnGap="33px" pl="30px" mt="22px">
              <SlArrowRight style={{ color: "#5d5fef" }} />{" "}
              <a href="/users_experience" style={{ color: "#5d5fef" }}>
                What’s the user end-to-end experience like?
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
