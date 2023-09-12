import React, { useState } from "react";
import { Box, Text, Image, Flex, useToast, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import file from "../../assets/icons/file.png";
import { SlArrowRight } from "react-icons/sl";
export const Fractionalestate = () => {
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
              <a href="#asset"> Asset Management </a>
            </li>
            <li onClick={handleClick}>
              <a href="#old">Old Way of Project Financing</a>
            </li>
            <li onClick={handleClick}>
              <a href="#new"> The New Way</a>
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
            <Link to="veerge_and_data">Veerge & Data analytics</Link>
          </Flex>
          <Flex columnGap="20px">
            <Image src={file} h="18px" w="14px" />{" "}
            <Link to="users_experience">User’s End-To-End Experience</Link>
          </Flex>
        </div>
      </Show>
      <Text className="head_">UNDERSTANDING FRACTIONAL REAL ESTATE </Text>
      <Text className="publish">Published: November 09, 2022</Text>
      <Box>
        <Text className="content_head">OVERVIEW</Text>
        <Text className="content">
          <Text as='p'>
            The investment market for real estate is vast, but historically, it has been dominated by a closed network of firms and organizations capable of handling large, illiquid investments. However, the tides are changing, and the future of real estate looks more promising and engaging than ever before.
          </Text>
          <Text as='p' marginTop='20px'>
            In the past, the real estate market faced challenges due to transactional friction and a lack of transparency. But with the advent of the digital age, there have been significant improvements in information flow and transaction processes. We have taken some initial steps towards digitization, but there is still immense potential for growth in the industry.
          </Text>
          <Text as='p' marginTop='20px'>
            Enter the game-changer: digital securitization of real estate properties, also known as "Fractionalisation." This exciting concept not only unlocks previously inaccessible investment opportunities for individuals and organizations but also paves the way for lower fees and costs typically associated with real estate transactions.
          </Text>
          <Text as='p' marginTop='20px'>
            Picture this: a developer, armed with the power of Veerge, launches a development project like never before. Instead of the traditional model with a small stake and multiple sources of funding, the developer can now divide the property holding into a staggering number of pieces – say, 100,000 fractions. These fractions are then made available for investors to purchase and own.
          </Text>
          <Text as='p' marginTop='20px'>
            Each fractional owner gains a unique stake in the property development, holding ownership rights to a specific fraction, such as 1/100,000th of the entire project. As the project progresses, investors have two enticing options. They can hold onto their fractions until the project reaches completion, at which point they can exchange their fractions for ownership of a unit in the building. Alternatively, if they see their fractions as purely financial investments, they can sell them to other investors through a marketplace. As the project nears completion and its future cash flow becomes less risky, the value of the fractions is expected to increase, providing attractive opportunities for profit.
          </Text>
          <Text as='p' marginTop='20px'>
            The beauty of technology-driven fractionalisation is its ability to eliminate delays, high costs, and middlemen that typically burden real estate transactions. With smart contracts as the backbone, the entire process can be automated, and payments can be executed instantly. These smart contracts act as self-executing agreements that write, authenticate, and audit transactions in real-time. All parties involved have access to clear instructions and dependencies, ensuring that payments are only executed when conditions are met. This heightened transparency reduces disputes and potential fraud, fostering a trustworthy and secure environment for all investors.
          </Text>
          <Text as='p' marginTop='20px'>
            Furthermore, the benefits of fractionalisation become even more profound when viewed across cities, states, and countries. By establishing a common language for real estate property registration and securitization, and providing mechanisms for digital purchases, the cumbersome overhead and specialized knowledge required to participate in real estate transactions worldwide are significantly reduced.
          </Text>
          <Text as='p' marginTop='20px'>
            The true magic of this technological leap is that transactions are no longer bound by business hours or holiday cutoff times – they happen 24/7. Additionally, confirmations take only minutes, adding speed and efficiency to the investment process.
          </Text>
          <Text as='p' marginTop='20px'>
            Imagine a world where real estate investment becomes more inclusive, efficient, and liquid. Thanks to fractionalisation and cutting-edge technology like Veerge, this future is closer than ever. Embrace the transformative power of fractional ownership and ride the wave of a more engaging and accessible real estate market. The possibilities are boundless, and the time to seize them is now. Welcome to the future of real estate investment!
          </Text>
        </Text>
      </Box>
      <Box pt="150px" id="asset">
        <Text className="content_head">
          ASSET MANAGEMENT COMPANY’S USE CASE
        </Text>
        <Text className="content">
          Asset management investors are constantly looking for ways to increase
          or preserve liquidity options thereby allowing them to improve
          positions and manage risk. A pension fund, for example, might own
          several large commercial buildings in one city but might want to
          expand into another city either as part of a diversification or
          portfolio expansion strategy. They might not, however, have the desire
          to buy an entire building or an investment block. Instead they might
          want to buy a smaller securitized portion of a property. Likewise, an
          individual might want to invest in real estate but not have sufficient
          capital or desire to purchase and manage a house or commercial
          building. And certainly while there are real estate investment
          vehicles available to investors such as REITs – they do not offer the
          specificity that many investors might want. Instead of a set of
          distant properties collected in a basket, an investor might want to
          invest in a single property or in a set of buildings in a specific
          area known to them. Doing either investment currently, however, is
          problematic in that the overhead and marketplace to secure portions of
          properties takes significant time, expense, and mindshare. Veerge
          however, can make these types of investments possible.
        </Text>
      </Box>
      <Box pt="150px" id="new">
        <Text className="content_head">THE NEW WAY</Text>
        <Text className="content">
          The concept of fractionalisation offers the ability to unlock
          investment opportunities for individuals and organisations, while
          lowering the amount of fees and costs typically associated with
          real-estate transactions. The future of real estate investment lies in
          the use of technology, particularly in the concept of
          fractionalisation which allows investors to purchase and sell partial
          pieces of assets. In the current property development model addressed
          above, we see the developer put a very small stake in the project, and
          raise the rest of the money through a combination of equity
          contributions, bank debt, and unit pre-sales. Imagine, however, if
          this same developer were to launch a development project administered
          by veerge. The developer could divide the holding into say 100,000
          pieces, and sell the pieces as fractions. A fractional owner would
          have ownerships rights to 1/100,000th of the whole property
          development. After purchasing fractions, an investor can hold the
          fractions in their portfolio until project completion, at which time
          they can exchange a certain number for ownership of a unit in the
          building. Or, if the investor has purchased the fractions as a purely
          financial investment, they can sell the fractions to other investors
          via a marketplace. (As the project’s future cash flow becomes less
          risky when it approaches completion, the fractions will presumably
          have increased in value). The technology makes it possible for the
          investor to make this transfer without the delays, high costs,
          middleman and other sources of friction that typically belabor
          real-estate transactions. The benefits outlined above – increased
          liquidity, more open markets, and reduced friction – all become
          magnified when one looks at it across cities, state, and country
          borders. Establishing a common language around real estate property
          registration and securitization and providing for mechanisms for
          digital purchase will reduce a tremendous amount of overhead and
          special knowledge needed in order to participate in real estate
          transactions across the world. By utilizing smart contracts, the whole
          agreement can be automated and payments can be sent and received
          instantly. A smart contract can make it possible to write,
          authenticate, and audit agreements in real- time. This can be done on
          a global scale and without the need for intermediaries, thus keeping
          the value between the main parties involved in the deal. Within the
          smart contract the instructions and dependencies are clearly defined
          so payment can only be executed as long as these conditions are
          fulfilled. This gives greater transparency to the parties involved and
          theoretically reduce the number of disputes. Smart contract processing
          also has the potential to reduce the risk of fraud. An example is when
          the property generates cash flow, everyone has access to what’s
          generated and funds are immediately disbursed on a pro rata basis to
          involved parties. A final note here is that transactions are processed
          24/7, with no business hour or holiday cutoff times and transactions
          are also confirmable in a matter of minutes.
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
              <a href="/listings/fractionalize_asset" style={{ color: "#5d5fef" }}>
                How do i fractionalise an asset
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
              <a href="/listings/archive_unit" style={{ color: "#5d5fef" }}>
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
              <a href="/listings/fractionalize_asset" style={{ color: "#5d5fef" }}>
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
