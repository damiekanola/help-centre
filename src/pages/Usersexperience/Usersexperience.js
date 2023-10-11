import React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";
import end1 from "../../assets/videos/endtoend1.mov";
import end2 from "../../assets/videos/endtoend2.mov";
import end3 from "../../assets/videos/endtoend3.mov";
import end4 from "../../assets/videos/endtoend4.mov";
import end5 from "../../assets/videos/endtoend5.mov";
import end6 from "../../assets/videos/endtoend6.mov";
import end7 from "../../assets/videos/endtoend7.mov";
import end8 from "../../assets/videos/endtoend8.mov";
import end9 from "../../assets/videos/endtoend9.mov";
import end10 from "../../assets/videos/endtoend10.mov";
import end11 from "../../assets/videos/endtoend11.mov";
import end12 from "../../assets/videos/endtoend12.mov";
import end13 from "../../assets/videos/endtoend13.mov";
import end14 from "../../assets/videos/endtoend14.mov";
import end15 from "../../assets/videos/endtoend15.mov";
import QuestionsAndReplies from "../../components/Faq/QuestionsAndReplies";
import Helpful from "../../components/Faq/Helpful";

export const Usersexperience = () => {

  const questions = [
    {
      name: 'Sam G.',
      date: 'Jun 08, 2023',
      content: "This is great, but there are instances where the development company prefers not to display the property price and opts for a 'Call to Inquire' approach. How does Veerge handle this?",
      replies: [
        "Hi Sam, we've got that covered as well. On the application, what's displayed is a 'Call to Inquire' instead of the price. Once negotiations are completed, the development company can send a private offer directly from their portal to the interested buyer. This private offer feature also proves invaluable when someone wishes to negotiate the listed price on the application"
      ]
    },
    {
      name: 'Jerry M.',
      date: 'Jun 07, 2023',
      content: "I'm quite enthusiastic about the fractional ownership aspect, but what if it doesn't gain traction?",
      replies: [
        "Hi Jerry, there's really no downside. If fractional ownership doesn't achieve the level of success that was anticipated, the development company can simply list the property on the application as usual. In that case, those who purchased fractional units will be reimbursed once the property is sold, and the development company will receive the remaining funds."
      ]
    }
  ]


  return (
    <Box bg='#0D0D0D' color='#FFF'>
      <Box
        style={{
          width: '100%',
          padding: '70px 100px',
          margin: '0 auto',
          marginTop: '70px'
        }}
      >
        {/* 
        max-width: 621px;
        font-family: euclid;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 160%;
        color: #191919; */}

        <Box mx='auto' w='95%' >
          <Text color='#FFF' lineHeight={'25px'}>
            <Box w='60%' mx='auto'>
              <Text className="head_" color='#FFF'>End to End Experience</Text>
              <Text as='p' fontWeight={300} mt='30px' >
                This is where Veerge truly shines – as a catalyst for business value. Veerge serves as a robust system of engagement. It empowers you to craft an application interface effortlessly, without the need for a single line of code. Yet, it's not just any interface; it's the nexus, an all-encompassing marketplace where your offerings and your buyers coexist seamlessly day in and day out. This coexistence is uniquely tailored to cater to the specific needs of every individual buyer. When Veerge integrates into a development company's existing infrastructure, it turns the experience into gold, addressing every facet of the home ownership journey, all without demanding any coding.
              </Text>
              <Text as='p' fontWeight={300} mt='30px'>
                Why do we emphasize personalization? Because buyers are not uniform entities with identical needs and preferences. Each buyer is a distinctive individual with specific desires, challenges, and dreams. By infusing a personal touch, we forge deep connections with buyers, nurturing loyalty and trust. Consistently delivering exceptional service that surpasses buyer expectations creates enduring, memorable experiences.
              </Text>
              <Text as='p' fontWeight={300} mt='30px'>
                In this section, we will guide you through the comprehensive workings of Veerge from start to finish.
              </Text>
              <Text as='p' fontWeight={300} mt='30px'>
                Before we dive into the breakdown of how things work, it's important to note that there are two types of applications: basic and custom. The one in focus here is the custom application, which has already been fully deployed. Therefore, the steps we will discuss start from the point after deployment, leading to the Google Play Store or Apple App Store.
              </Text>
            </Box>
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                AUTHENTICATION
              </Text>
              <Text as='p' fontWeight={300} mt='30px'>
                After your application has been successfully deployed, your subscribers and potential buyers simply need to visit the Google Play Store or Apple App Store. There, they can search for your property development company's name, download the app, and proceed to sign up by providing some fundamental information, including their full name, email, phone number, and password. Once these details have been filled out, their account will be created, and they will be prompted to provide additional information.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end1} />
              </video>
              <Text as='p' fontWeight={300} mt='30px'>
                On your portal, you will immediately see new user sign-ups, and you can access and review the profiles of these individuals. Additionally, you have the capability to track their activities within your applicatio
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end2} />
              </video>
              <Text as='p' fontWeight={300} mt='30px' color='#56C3CE'>
                What is the sweet spot in this process?
              </Text>
            </Box>
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                AFTER AUTHENTICATION, WHAT NEXT ?
              </Text >
              <Text as='p' fontWeight={300} mt='30px'>
                After completing the sign-up process, users gain effortless access to all available properties, including those that have already been sold, along with comprehensive information such as pricing, location, and property type. The information provided is continuously updated in real-time, eliminating the need for manual updates. It's like magic! Our system is intuitively designed to be user-friendly, ensuring that all information required for informed decision-making is readily available. Users can easily access pricing details, explore various payment plans and structures, and even identify nearby schools and recreational centers for a comprehensive understanding of the property's location.
                Furthermore, users have the option to schedule property inspections, whether in-person or through a convenient video chat.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end3} />
              </video>
              <Text as='p' fontWeight={300} mt='30px'>
                On your portal, you have the ability to manage these requests. You can approve requests that align with the given schedule or, if the timing doesn't work, you can easily reschedule them. When it comes to assignment, you can assign the task to any member of your team for handling the inspection.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end4} />
              </video>
              <Text as='p' fontWeight={300} mt='30px'>
                After the inspection, the potential home buyer, in this case, Ahmed Ali, will receive a notification to provide inspection feedback. This feedback system is akin to the ones employed by popular ride-sharing services like Uber and Bolt. It's this innovative feedback system that distinguishes Veerge from the conventional inspection processes used by most property development companies.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end5} />
              </video>
              <Text as='p' fontWeight={300} mt='30px'>
                All feedback will be centralized in one accessible location, ensuring that everyone can review it. Moreover, the feedback can be responded to, and if any issues require further attention, they can be escalated by creating <Text color='#56C3CE' as='span'>a dedicated ticket.</Text>
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end6} />
              </video>
              <Text as='p' fontWeight={300} mt='30px'>
                What is the sweet spot in this process?
              </Text>
              <Text as='p' fontWeight={300} mt='30px'>
                With this approach, you can effectively navigate the daily operations while concurrently strategizing for the future of your business. Veerge excels at collecting and collating feedback data, transforming it into actionable insights. When the opportune moment arises, it alerts you to the presence of a significant customer segment that may have been overlooked. This enables you to seamlessly tap into new revenue streams, explore distinctive opportunities, maximize your addressable market, and expand your customer base.
              </Text>
            </Box >
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                PURCHASE FLOW
              </Text >
              <Text as='p' fontWeight={300} mt='30px'>
                If the buyer remains interested after the inspection, they have the convenience of making the property purchase directly through the application. The current property price, along with available payment options, is readily accessible within the app. Prior to making the purchase, the buyer can review the purchase agreement at their convenience. Payment can be facilitated through the application's wallet or via bank payments. Our payment system is globally inclusive, supporting transactions in over 70 countries and more than 150 currencies.
              </Text>
              <Text as='p' fontWeight={300}>
                In this specific case, Ahmed Ali, the buyer, gains immediate access to the purchase document and all other associated documents relevant to the property purchase
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end7} />
              </video>
            </Box >
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                REVENUE RECOGNITION SOLUTION
              </Text >
              <Text as='p' fontWeight={300} mt='30px'>
                As your business continues to grow, managing revenue can become a complex and error-prone task. To effectively address this challenge, we have implemented a robust revenue recognition system. With this system in place, you can effortlessly track who has made payments and what those payments were made for. It serves as the definitive source of truth, enabling your accounting team to rely on accurate upstream data. Unlike conventional methods, there's no need for manual confirmation calls before paperwork can be signed. Once payment is confirmed, our integrated inventory management system is instantly updated. Moreover, when a particular property unit type is completely sold, the system notifies all relevant parties and restricts further purchases within the application."
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end8} />
              </video>
            </Box >
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                SMART ALLOCATION
              </Text >
              <Text as='p' fontWeight={300} mt='30px'>
                The core objective behind our creation is to deliver an unparalleled experience to our customers. We aim for nothing less than a gold-standard experience, and we believe achieving this necessitates the inclusion of a smart allocation system. So, what have we devised? Have you ever encountered the exciting feature on certain travel booking websites that allows you to select your seat on a plane using a seat map? Well, we've incorporated a similar concept into Veerge, and we've made it exceptionally user-friendly.
              </Text>
              <Text as='p' fontWeight={300} mt='30px'>
                All a property development company needs to do is provide some essential information regarding unit numbering. They also have the flexibility to designate which units they don't want to be available for selection, such as those that are reserved. Furthermore, they can specify the milestone at which buyers or subscribers become eligible for unit allocation. Some companies opt for allocation after the initial deposit, while others prefer it after full payment, or even at the 50% payment mark. Some companies may also choose to handle allocations themselves. The beauty of Veerge is that it accommodates all these use cases seamlessly.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end9} />
              </video>
              <Text as='p' fontWeight={300} mt='30px'>
                For instance, if a company sets the allocation milestone at 50%, it means that once Ahmed Ali completes 50% of his payment, he gains the ability to select from the available units in real-time.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end10} />
              </video>
            </Box >
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                AUTO - PAY
              </Text >
              <Text as='p' fontWeight={300} mt='30px'>
                After the purchase, subscribers gain full control over all transactions related to their newly acquired property. This includes the ability to set up Autopay, a convenient feature that automatically deducts the due payment plan amount from their bank account. Autopay helps in preventing late payments and relieves subscribers from the task of remembering payment dates.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end11} />
              </video>
            </Box >
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                CO - OWNERSHIP
              </Text >
              <Text as='p' fontWeight={300} mt='30px'>
                The mobile application also boasts a secret weapon - co-ownership. Take someone like Ahmed Ali, for instance; he can invite his friends or family to join him in purchasing a property seamlessly. With co-ownership, they can split the costs based on their agreed-upon sharing ratio, all while ensuring that each party remains accountable for their financial commitments. It's truly a win-win situation for everyone involved!
                We liken this feature to the invention of the fax machine. When the first person acquired a fax machine, they couldn't make full use of it alone. Similar to the fax machine's inherent marketing potential, co-ownership itself is a marketing tool. By inviting friends and family to co-own, you not only fulfill your property goals but also extend the reach of the development company. Once the company delivers on its promises, these co-owners become long-term, loyal customers.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end12} />
              </video>
            </Box >
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                FRACTIONAL
              </Text >
              <Text as='p' fontWeight={300} mt='30px'>
                One of the remarkable benefits offered by Veerge is the ability to fractionalize real estate without the need for intermediaries. Fractional ownership is a feature designed to provide individuals with limited purchasing power access to the real estate market, breaking down the traditional barriers to entry. This innovative approach doesn't change the fundamental way properties are sold; instead, it introduces a fresh perspective by dividing ownership into smaller, more affordable shares.
              </Text>
              <Text as='p' fontWeight={300} mt='30px'>
                For instance, consider a property with a total value of 50 million units. With fractional ownership, this property can be divided into 1,000 shares, each priced at 50,000 Naira, representing a fraction of the property's overall value. This means that individuals with varying budgets and investment capabilities can purchase a fraction of the property according to their financial capacity, even if it's a very small amount.
                This approach opens up exciting opportunities for a wider range of people to participate in the real estate market, enabling them to benefit from the property's value appreciation over time.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end13} />
              </video>
              <Text as='p' fontWeight={300} mt='60px' color='#56C3CE' cursor={'pointer'}>
                Click here to read more about Fractional Real Estate
              </Text>
            </Box >
            <Box borderBottom='1px solid #2E2E32' w='full' mx='auto' mt='70px' mb='60px' />
            <Box w='60%' mx='auto'>
              <Text fontSize={'24px'} fontWeight={600}>
                AGENT
              </Text >
              <Text as='p' fontWeight={300} mt='30px'>
                An integral figure in numerous real estate transactions is the agent. In fact, for many real estate deals, agents play a pivotal role, akin to the vital function of kidneys in the human body. They often serve as intermediaries, and recognizing the significance of their contributions, we have equipped them with their own dedicated portal.
                This portal functions as a centralized hub and also reimagines the commission payout process for the sales team. Within this portal, agents gain access to critical information, including pricing details, marketing resources, performance metrics, and all the essential tools required for effective selling. Furthermore, it provides management teams with enhanced visibility into the entire sales process and performance metrics.
                The process for agents is streamlined and user-friendly. They simply visit your application to initiate the sign-up process. Upon submission of their application, you have the opportunity to review and, if it meets your criteria, grant approval. This approval grants them access to their dedicated portal. Any referrals generated by the agent are automatically logged, providing a record of their client acquisitions. Additionally, agents can monitor their customers' payment statuses, facilitating the identification of defaults and guiding follow-up actions when necessary.
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end14} />
              </video>
              <Text as='p' fontWeight={300} mt='30px'>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
              </Text>
              <video style={{ marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', height: '282px', width: '100%' }} controls>
                <source src={end15} />
              </video>
            </Box >
          </Text >
        </Box >

        <Box >
          <QuestionsAndReplies white questions={questions} />
        </Box>

        <Helpful white />

      </Box >
    </Box >
  );
};
