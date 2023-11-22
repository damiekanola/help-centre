import { Box, Text, useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import RightNav from "../../../components/Listings/RightNav";
import LeftNav from "../../../components/Leftsidenav/Leftsidenav";
import useIsInViewport from "../../../utils/useOnScreen/useOnScreen";


const Overview = () => {
  const toast = useToast();

  const overviewRef = useRef(null)
  const listingsRef = useRef(null);
  const paymentRef = useRef(null)
  const allocationsRef = useRef(null)
  const archiveRef = useRef(null)
  const inspectionsRef = useRef(null)

  const overviewCheck = useIsInViewport(overviewRef);
  const listingsCheck = useIsInViewport(listingsRef);
  const paymentCheck = useIsInViewport(paymentRef)
  const allocationsCheck = useIsInViewport(allocationsRef)
  const archiveCheck = useIsInViewport(archiveRef)
  const inspectionsCheck = useIsInViewport(inspectionsRef)


  const articleContent = [
    { check: overviewCheck, id: 'overview', title: 'Overview of listings' },
    { check: listingsCheck, id: 'listings', title: 'Listings & Units' },
    { check: paymentCheck, id: 'payment', title: 'Payment plan' },
    { check: allocationsCheck, id: 'allocations', title: 'Allocations' },
    { check: archiveCheck, id: 'archive', title: 'Archive a unit' },
    { check: inspectionsCheck, id: 'inspections', title: 'Inspections' },
  ]

  const relatedContent = [
    { link: '/intro_to_veerge', text: 'Intro to Veerge' },
    { link: "/blog/understanding_fraction", text: 'Understanding Fractional Real estate ' },
    { link: "/blog/veerge_data", text: 'Veerge & Data analytics' },
    { link: "/users_experience", text: 'End-to-End experience' }
  ]


  return (
    <div className="main" id="overview">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <RightNav />
      <Text className="head_">LISTINGS</Text>
      <Text className="publish">Published: February 18, 2023</Text>
      <Box>
        <Text className="content_head" id="overview" ref={overviewRef}>
          OVERVIEW OF LISTINGS
        </Text>
        <Text className="content" lineHeight={'25px'}>
          <Text as='p'>
            A listing is a comprehensive portrayal of a development project that is currently available for sale, rent, or investment. It encompasses a wealth of essential details about the property, ranging from its precise location and dimensions to its distinctive features, amenities, pricing, and contact information for prospective inquiries. The primary objective of a listing is to furnish buyers and investors with a lucid and captivating snapshot of the property, equipping them with the information necessary to make discerning choices about their continued interest and involvement.
          </Text>
          <Text as='p' marginTop="20px">
            Veerge provides a transparent, efficient, and secure solution that significantly reduces friction in the processes of buying,
            selling, and creating real estate assets. It is a cost-effective, user-friendly,
            and sustainable platform that enables businesses to handle increasing workloads while simplifying real estate investments,
            making them as straightforward, borderless, and programmable as other internet activities.
          </Text>
          <Text as='p' marginTop="20px">
            Imagine this as your grand podium, a spotlight-stealing stage for showcasing the transformative development projects you've masterfully orchestrated throughout time – both the trailblazing achievements of the past and the radiant promises of the present. These listings transcend mere descriptive summaries; Each project description demands your utmost attention, an infusion of vitality that breathes life into every word. Never lose sight of the fact that each listing surpasses the status of a mere item to check off on a to-do list. It is your personal saga, a narrative of your journey and a proclamation of your intent.
          </Text>
        </Text>
      </Box>
      <Box pt="30px" id="listings" ref={listingsRef}>
        <Text className="content_head">WHAT IS THE DIFFERENCE BETWEEN UNIT & A LISTING</Text>
        <Text className="content">
          <Text as='p'>
            Distinguishing between a "<b>unit</b>" and a "<b>listing</b>" is essential to grasp the dynamics of real estate. A "<b>listing</b>" represents a comprehensive portrayal of a property available for sale, rent, or investment. Notably, a "<b>listing</b>" can encompass multiple individual  "<b>unit</b>s," creating a framework for properties like multifamily apartments, apartment complexes, or estates.
          </Text>
          <Text as='p' marginTop="20px">
            Think of a "<b>listing</b>" as a broader canvas, a platform that can accommodate diverse configurations of "<b>units</b>." In essence, it serves as the umbrella term for a development project. On the other hand, a  "<b>unit</b>" is a distinct component within a  "<b>listing</b>" – it is a singular, self-contained living space or property that constitutes part of the larger whole.
          </Text>
          <Text as='p' marginTop="20px">
            For example, envision an apartment complex as a  "<b>listing</b>." Within this listing, each individual apartment unit is a distinct  "<b>unit</b>." Likewise, a multifamily estate, comprising several separate living spaces, is a  "<b>listing</b>," with each residential unit forming an essential part of it.
          </Text>
          <Text as='p' marginTop="20px">
            It's worth noting that in some instances, a single  "<b>unit</b>" can also be considered a  "<b>listing</b>." For instance, a single-family residential home, standing independently, can be regarded as both a single "<b>unit</b>" and a standalone  "<b>listing</b>."
          </Text>
        </Text>
      </Box>

      <Box pt="30px" id="payment" ref={paymentRef}>
        <Text className="content_head">WHAT YOU NEED TO KNOW ABOUT PAYMENT PLAN ON VEERGE</Text>
        <Text className="content">
          <Text as='p'>
            In the realm of real estate, a "Payment Plan" denotes a mutually agreed arrangement between a buyer and a seller, facilitating the acquisition of a property. This innovative approach allows buyers to disburse the property's cost across an extended duration, typically in incremental installments, as opposed to an immediate lump sum payment upfront. Variably referred to as installment plans, seller financing, or seller carry-back, Payment Plans present a flexible pathway to property ownership.
          </Text>
          <Text as='p' marginTop="20px">
            Within Veerge's dynamic landscape, two distinct types of payment plans emerge: the "Quick Payment Plan" and the "Custom Payment Plan."
            For instance, envision a property on the market for a total of 100 million Naira. To heighten buyer convenience, the seller proposes diverse payment plan options. Under the "Quick Payment Plan," buyers can initiate their journey by submitting an initial 20 million Naira and then dividing the remaining sum over a span of one year.
          </Text>
          <Text as='p' marginTop="20px">
            This division of payments can be structured as fixed amounts distributed weekly, monthly, or quarterly. For instance, the buyer might choose to allocate 1.6 million Naira weekly, 6.8 million Naira monthly, or 20.5 million Naira quarterly (inclusive of interest).
          </Text>
          <Text as='p' marginTop="20px">
            It's essential to recognize that all quick payment plan structures, inclusive of flexible payment plans, are unified under the umbrella of quick payment plans. In the case of a flexible payment plan, the buyer holds the reins of payment timing, unconfined by a stringent installment schedule, provided the payments are executed within the stipulated payment plan period.
          </Text>
          <Text as='p' marginTop="20px">
            In contrast, a "Custom Payment Plan" deviates slightly. Imagine the property's outright listing price stands at 100 million Naira. In this distinct plan, the structure encompasses an initial deposit of 20 million Naira, succeeded by subsequent payments: 30 million Naira after 3 months, 25 million Naira after an additional 3 months, followed by 20 million Naira, and finally, a concluding 10 million Naira, both allocated after 3-month intervals.
          </Text>
          <Text as='p' marginTop="20px">
            Within a "Custom Payment Plan" on Veerge, the payments' amounts and intervals isn’t rigid but buyers must adhere to as part of the purchasing agreement.
          </Text>
        </Text>
      </Box>

      <Box pt="30px" id="allocations" ref={allocationsRef}>
        <Text className="content_head">ALLOCATIONS</Text>
        <Text className="content">
          <Text as='p'>
            Allocation within the Veerge platform serves as an exclusive identifier uniquely assigned to each listing, streamlining the process of locating specific properties within your portfolio. This applies to various real estate offerings, whether they are individual apartments, gated communities, or other real estate ventures. To simplify, let's illustrate this concept through an example: picture an apartment complex named ABC, encompassing a total of 30 distinct apartment units. In this scenario, the allocation process might involve designations such as "Flat 1," "Flat 2," "Flat 3," progressing sequentially up to "Flat 30." Alternatively, it could be represented as "Apartment 1," "Apartment 2," seamlessly extending up to "Apartment 30."
          </Text>
          <Text as='p' marginTop='20px'>
            Veerge offers two distinct types of allocations: Smart Allocation and Manual Allocation. Under Smart Allocation, home buyers have the ability to select a unit of their preference once they reach a predetermined milestone set by the development company. In contrast, Manual Allocation means that buyers cannot personally choose their units; instead, the development company is responsible for assigning units to them.          </Text>
          <Text as='p' marginTop='20px'>
            Veerge's analytics solutions empower businesses to develop a profound understanding of their customers' preferences, behaviors, and buying patterns, ultimately fostering increased customer loyalty. By leveraging Veerge's technology, businesses can address crucial questions such as what clients want to purchase, when they are most likely to make a purchase, the factors driving their purchase decisions, and their preferred buying methods. This in-depth understanding of individual buyer needs allows businesses to tailor their services and offerings to better meet those unique requirements. Moreover, Veerge's analytics capabilities can identify customers who are most likely looking for second properties, determine their location preferences, understand what they desire in a second property, comprehend the factors influencing their loyalty, and prioritize them based on various criteria.
          </Text>
          <Text as='p' marginTop='20px'>
            In essence, this allocation mechanism functions as an advanced organizational tool, facilitating efficient navigation through your diverse property portfolio. It significantly streamlines property management processes and enhances interactions with clients, ensuring accuracy and effectiveness in your real estate endeavors.
          </Text>
        </Text>
      </Box>

      <Box pt="30px" id="archive" ref={archiveRef}>
        <Text className="content_head">ARCHIVING A UNIT</Text>
        <Text className="content">
          <Text as='p'>
            There are instances when not all the buildings or units within a listing are available for sale. This scenario can arise due to reasons such as joint ventures or a strategic decision to sell some units at a later date. This is precisely why this aspect of Veerge holds substantial importance.
          </Text>
          <Text as='p'>
            Allow me to clarify further:
            Imagine you're engaged in a joint venture with an investment company, aiming to develop a sprawling apartment complex encompassing 100 units. Within this partnership, your portion consists of 60 units, while the investment company owns the remaining 40 units. In this context, it's astute to segregate your 60 units from the investment company's 40. This separation is pivotal as it forestalls any inadvertent sales, which could complicate matters, considering these units were never intended for sale.
          </Text>
          <Text as='p'>
            Another common scenario arises when certain units have already been sold before transitioning your operations to Veerge. Let's revisit the previous case study: presume that the joint venture allocates 40 units to the investment company and 60 to your domain. However, you've already successfully sold 10 units. In this scenario, your focus shifts to archiving 50 units, not 40, since 50 units are no longer part of the market.
          </Text>
          <Text as='p'>
            For a step-by-step guide on archiving units, please follow this link [insert link]. This crucial feature ensures your property management remains streamlined and transparent, safeguarding against unintended transactions and simplifying your real estate operations.
          </Text>
        </Text>
      </Box>

      <Box pt="30px" id="inspections" ref={inspectionsRef}>
        <Text className="content_head">INSPECTIONS</Text>
        <Text className="content">
          <Text as='p'>
            Inspections on Veerge represent a paradigm shift from the norm that many property development companies are accustomed to. It is, in essence, the bedrock upon which the entire process stands, an unparalleled facet that sets it leagues apart. Allow me to elaborate.
          </Text>
          <Text as='p'>
            In most property development firms, a scheduling inspection feature on their website is not unheard of. But here's where Veerge shines distinctively. Our inspection system is not just intelligent; it's brilliantly intelligent. Its core essence is innovation at its peak. One aspect that distinguishes it is the post-inspection feedback mechanism—a prompt akin to how Uber seeks your input after a trip.
          </Text>
          <Text as='p'>
            “Tell us about your experience on site yesterday”
          </Text>
          <Text as='p'>
            This feedback mechanism is pivotal. It perpetually furnishes you with a comprehensive record of every individual who set foot on your site or embarked on a virtual tour of your project. More than that, it encapsulates their impressions. If an on-site experience doesn't align with their expectations, there's an accessible channel for them to communicate this. Should their preferences differ from what's being offered, they can articulate that too.
          </Text>
          <Text as='p'>
            This facet isn't merely about feedback—it's about intelligence derived from data. It's about spotting leaks in your business strategy. If a consistent pattern of complaints or requests emerges, it's an indicator of an underserved market or an existing gap. Veerge doesn't just inform; it empowers you to take timely action. It's the symbiotic dance between operational efficiency and strategic planning. Bear in mind, every individual with access holds the key to this repository of insight, a repository that molds future decisions. Here's the pinnacle of Veerge's intelligence:
            It's predictive. If a customer enters your site, offers less-than-stellar feedback, and then modifies their payment behavior after the visit, Veerge can unravel the threads connecting these actions.
          </Text>
          <Text as='p'>
            In essence, Veerge's inspection system transcends the ordinary. It's an embodiment of innovation, a guiding light that casts your business onto the forefront of progressive strategies. It's intelligent, insightful, and relentlessly ahead of everything you've grown accustomed to.
          </Text>
        </Text>
      </Box>
    </div>
  );
};

export default Overview