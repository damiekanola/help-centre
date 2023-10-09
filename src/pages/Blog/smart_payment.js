import { Center, Flex, Image, Box, Text } from '@chakra-ui/react'
import React, { useRef } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';
import Helpful from '../../components/Faq/Helpful';
import smart_payment from '../../assets/images/blog/smart_payment.png';
import { useNavigate } from 'react-router-dom';


const Smart_payment = () => {
  const navigate = useNavigate();

  return (
    <Box p='0'>
      <Flex direction={'row'} align={'stretch'} py='0' gap='70px' pr='78px' pl='150px' mt='150px' w='full' bg={'#E6F7FC'} maxH={'100vh'} h={'500px'} position={'relative'}>
        <Center
          onClick={() => navigate(-1)}
          position={'absolute'} top='20px'
          cursor={'pointer'} left='78px'
          h='50px' w='50px' borderRadius={'full'}
          color='#191919' bg='#fff'
        >
          <SlArrowLeft fontSize={'20px'} />
        </Center>

        <Image
          h='full' w='468px'
          src={smart_payment}
          bgPosition={'center'} bgSize={'cover'}
        />

        <Flex h='full' direction={'column'} align={'stretch'} justify={'space-between'} w='full'>

          <Box />
          <Box>
            <Text fontWeight={600} color='#191919' w='full' alignSelf={'center'} fontSize='36px'>
              Smart Payment Plan
            </Text>
            <Text mt='15px' fontWeight={300} color='#191919' w='80%' alignSelf={'center'} fontSize='14px'>
              We have Automated the conventional payment plan, the time has come to re-engineer it
            </Text>
            <Text mt='45px' fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
              By Ahmed Ibraheem
            </Text>
            <Text mt='15px' fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
              July 29, 2023
            </Text>
          </Box>
          <Flex w='full' justify={'space-between'} align={'center'} pb='10px'>
            <Text fontWeight={500} color='#191919' alignSelf={'center'} fontSize='14px'>
              11 mins read
            </Text>
            <Flex align={'center'} gap='4px'>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrFacebook style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrTwitter style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <CiInstagram style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
              <Center
                cursor={'pointer'} bg='#FFF'
                h='28px' w='28px' borderRadius={'full'}
              >
                <GrLinkedin style={{ borderRadius: '10000px' }} color='#000' size={17} />
              </Center>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box px={'78px'} position={'relative'}>
        {/* <Box shadow={'md'} p='32px 20px' w='256px' h='193px' position={'absolute'} top='-100px' bg='white'>
          <Text mb='20px' fontWeight={500} fontSize={'20px'}>Table of Content</Text>
        </Box> */}
        <Box w={'75%'} ml='auto' mt='58px' pb='70px'>
          <Box>
            <Text>
              Imagine the joy of owning your dream home — a place to call your own, where you can build cherished memories with your family. In the western part of Africa, however, this dream seems like an elusive mirage for many hardworking Africans. The housing deficit looms large, presenting a daunting challenge that stands between them and their dream of homeownership. While buying or building a home are potential options, only a select few have the financial means to do so due to the substantial capital typically required. For the majority, a mortgage could be the key to unlocking the doors of their dream home. But alas! Several factors conspire to keep this door tightly shut, making access to mortgages a Herculean task.
            </Text>
            <Text mt='30px'>
              One of the primary impediments to accessing mortgages in Africa is the issue of high interest rates, exacerbated by the prevalence of informal economies. Unlike the Western world, where mortgage interest rates usually remain in single digits, in Africa, rates can soar much higher. For instance, in countries like Nigeria, people may fix deposits with mortgage banks for as high as 13%. This is often linked to inflation, as higher inflation rates erode the purchasing power of the currency, leading to the need for higher interest rates to compensate for the loss, making it impossible for any mortgage bank to offer home loans at single-digit rates. The high cost of funds, coupled with the inherent nature of banking operations that involve margins and intermediation, create further challenges.
            </Text>
            <Text mt='30px'>
              Consequently, mortgages become unattainable for many, particularly those in the informal sector, which constitutes a significant portion of the population. The lack of easily verifiable and stable income in the informal sector makes it challenging for individuals to meet the stringent income requirements set by traditional mortgage lenders, further limiting access to mortgage financing. As a result, hardworking Africans, who aspire to own a home and create a stable future for their families, are left with limited options and find themselves excluded from the formal housing market.
            </Text>
            <Text mt='30px'>
              Another contributing factor is the low income levels prevalent in many African countries. The relatively meager average income further compounds the financial strain of homeownership, making it unaffordable for numerous individuals and families.
            </Text>
            <Text mt='30px'>
              Moreover, the inadequate formalization of property rights in many African countries poses a significant challenge for lenders. The absence of clear ownership and legal protection in case of default creates uncertainty for financial institutions, discouraging them from providing mortgage loans. Limited access to credit is another obstacle to mortgage acquisition. Financial institutions in some African countries have stringent lending criteria, making it difficult for potential borrowers to qualify for a mortgage, further limiting access to homeownership.
            </Text>
            <Text mt='30px'>
              Venturing deeper into this maze, we encounter the underdeveloped financial markets — a labyrinth of limited long-term funding options for mortgage lenders. The scarcity of resources leads to a scarcity of mortgages, further dimming the prospects for aspiring homeowners.
            </Text>
            <Text mt='30px'>
              Political and economic instability in certain regions of Africa further compounds the issue. Uncertainty and risk deter potential investors and lenders from engaging in the housing market, which has a ripple effect on borrowers’ ability to access mortgages
            </Text>
            <Text mt='30px'>
              Furthermore, inadequate infrastructure, such as the absence of proper land registration systems, hinders the growth of mortgage markets and property development, creating barriers to homeownership.
              Lastly, demographic challenges, such as rapid urbanization and population growth in some African countries, place immense pressure on housing demand and supply. This imbalance makes it difficult for mortgage markets to keep up with the pace, leaving many individuals without access to affordable mortgage options.
            </Text>
            <Text mt='30px'>
              As the sun sets on this gripping tale of homeownership challenges in Africa, we are reminded that overcoming these obstacles requires a collective effort. Thankfully, some real estate companies have stepped up to simplify the process of property acquisition. Gone are the days when property builders demanded outright payments. Now, property development companies offer flexible payment plans, providing a glimmer of hope for aspiring homeowners.
            </Text>
            <Text mt='30px'>
              Let’s delve into a fascinating real life case study featuring Mary in 2022, a determined individual searching for her dream home in Lagos. After tirelessly exploring various avenues, she discovers a two-bedroom apartment that matches her criteria and price range. The property is priced at ₦28,609,500 for an outright payment. However, with the availability of the property development company’s flexible payment plans, Mary has options that suit her financial situation. Considering a 12-month payment plan, Mary will make an initial deposit of ₦8,529,900. Over the course of 12 months, she will have to pay ₦6,809,000 quarterly, gradually reducing her outstanding balance. With this payment plan, Mary will ultimately pay an extra ₦27,236,000 over the 12-month period, including the initial deposit. Calculating the interest rate, this amounts to approximately 36% using the formula((₦7,236,000/₦20,000,000)*100).
            </Text>
            <Text mt='30px'>
              Now, let’s consider an alternative scenario: If someone were to take a year-long mortgage of 20 million Naira at an interest rate of 54.43%, paid quarterly, you might expect a daunting total payment. Surprisingly, the amount would be approximately 27,235,769.83 Naira, which is slightly less than Mary’s payment on her chosen payment plan at an interest of 54.43%.
            </Text>
            <Text mt='30px'>
              Mary’s journey to homeownership became a seamless and convenient experience, all thanks to the innovative Veerge portal provided by the property development company. With the aid of Veerge, they developed an app with just clicks without a single line of code that revolutionized the end-to-end process of home ownership, simplifying every step for Mary.
            </Text>
            <Text mt='30px'>
              One of the app’s standout features is “Auto-pay,” which proved to be a game-changer for buyers opting for payment plans like Mary. Upon her purchase, the app offered her the option to automate her payment plan by linking her card or bank account. This remarkable convenience feature ensured that when the payment was due, it was automatically processed, lifting the burden of manual transactions from her shoulders. With a smile, Mary happily chose to automate her quarterly payment of ₦6,809,000, and she even had the flexibility to switch to monthly, weekly, or daily payments if she found it more convenient. This level of control and ease of payment management transformed the way property development companies handled transactions, making it a win-win for both buyers and sellers.
            </Text>
            <Text mt='30px'>
              Embracing this quantum leap in automation, development companies streamlined their payment processes, making every transaction a seamless affair. The use of the Veerge app allowed all payments to be effortlessly logged on their management systems, while buyers like Mary could conveniently track their payments and outstanding balances through the user-friendly application.
            </Text>
            <Text mt='30px'>
              In my experience, I have encountered three types of individuals opting for payment plans. There are those who might not have the means for their outstanding balance but are hopeful and determined to find a way to manage it. Then, there are those who have the means and demonstrate diligence by staying on top of their outstanding balances. Lastly, some buyers have the means but prefer owing the development company, keeping their funds available for other ventures.
            </Text>
            <Text mt='30px'>
              Among the segment of people who have the means and are diligent with their outstanding balances, a significant number prefers having their funds accessible in their bank accounts and diligently sticking to making payments precisely on the due dates. However, there are also individuals who are averse to debt and find great comfort in making payments at the earliest opportunity. These individuals, in particular, become the biggest fans of the “Auto-pay” feature. It alleviates any worries about missing payment deadlines, grants them the flexibility of customizing their payments, and ultimately provides them with much-needed peace of mind.
            </Text>
            <Text mt='30px'>
              At Veerge, we believe in continuous improvement and collaboration with property development companies to better serve their customers. Through our program, with the permission of the property development company, we work closely with their support team for two weeks every three months. This collaboration allows us to gather valuable insights and receive reports, helping us build features that their customers truly desire.
            </Text>
            <Text mt='30px'>
              One of the innovative features we introduced was the Auto-pay option. However, we faced a challenge initially as the adoption rate for this feature was slow. We realized that this was because there was no clear incentive or reward for using Auto-pay. In the case of a buyer like Mary, although she received a notification about the convenience of customizing her payments daily, weekly, or monthly, she found it equally easy to use a micro saving app instead. By doing so, she could make daily payments and earn interest on her capital over the course of three months. Subsequently, she could then transfer the capital to her due payment plan.
            </Text>
            <Text mt='30px'>
              Acknowledging this shortfall, we were fortunate to have an alpha-phase feature that could address this issue. This innovative feature became our secret weapon in accelerating the cash flow into the company. We understand that time can be both a buyer’s best friend and worst enemy when it comes to payments. When buyers choose to pay early, time works in their favor, providing a sense of accomplishment and potentially reducing their outstanding balances.
            </Text>
            <Text mt='30px'>
              With this powerful feature in place, buyers like Mary can seize full advantage of prepayment incentives. Each prepayment she makes not only reduces her debt burden but also comes with the rewarding benefit of avoiding additional interest charges. This personalized approach to payment plans serves as a powerful incentive, motivating buyers to make timely payments and take control of their financial journey. As a result, the velocity of cash flow into the property development company is further enhanced, fueling growth and enabling more aspiring homeowners to realize their dreams. With every prepayment, Mary not only moves closer to owning her dream home but also gains the satisfaction of knowing she’s making smart financial decisions that benefit her in the long run. The interplay of buyer incentives and accelerated cash flow reshapes the landscape of real estate transactions, making homeownership a more attainable and rewarding reality for all.
            </Text>
            <Text mt='30px'>
              The question then arises: How did we design this revolutionary payment model? It’s an entirely different option for property development companies, steering away from the traditional payment structure of Initial deposit (X amount), Installment payment (Y amount), payment frequency (Z), resulting in the purchase price of the property as X+Y(Z). Instead, Veerge offers an improved approach that simplifies the process for both buyers and developers. Instead of relying on the typical payment plan structure — comprising an initial deposit (X amount), installment payments (Y amount), payment frequency (Z), and calculating the purchase price as X + Y(Z) — we sought to enhance the model.
            </Text>
            <Text mt='30px'>
              Now, all a development company needs to provide is the initial deposit, the yearly interest rate, and the desired longest payment duration that suits their preferences. Veerge takes it from there, automatically performing complex calculations. By calling the outright price value and breaking down the yearly interest rate into an effective daily rate, we lay the foundation for a more personalized and buyer-friendly payment plan.
            </Text>
            <Text mt='30px'>
              Let’s put things into perspective-For a property selling at $100,000.00 outright, let’s assume the development company chooses an initial deposit of 20% ($20,000.00) and a 36-month payment plan with a 20% per annum interest rate. Veerge transforms this into an effective daily interest rate (0.04865%) to ensure accuracy in the calculations (please note that we use 365 days instead of 360 to maintain accuracy).
            </Text>
            <Text mt='30px'>
              So, for someone to purchase this property, they would begin by paying the initial deposit, which amounts to $20,000.00. Once this deposit is made, the outstanding balance of $80,000 (outright price — initial deposit) remains.
              At this point, the buyer has the flexibility to customize how they want to make payments for the $80,000, which compounds daily. Veerge’s offers a range of payment options for the buyer’s convenience. They can choose to make weekly, monthly, or even yearly payments, tailoring the payment plan to their unique financial situation. The beauty of this approach lies in the incentives provided for every prepayment made. Unlike traditional payment plans that accumulate interest until the end of the payment period, Veerge rewards buyers for early prepayments.
            </Text>
            <Text mt='30px'>
              The underlying idea is straightforward yet powerful — for every day that the subscriber doesn’t carry a debt, it positively impacts their debt burden. By allowing buyers to customize their payment schedules and providing incentives for prepayments, Veerge individualizes the payment plan for each home buyer. This personalized approach not only empowers buyers to take control of their financial journey but also motivates them to make timely payments and achieve their dream of homeownership sooner.
            </Text>
            <Text mt='30px'>
              Returning to Mary’s case, her decision to opt for daily payments is proving to be a savvy one. By choosing this payment frequency, Mary pays only ₦72,087.40 daily, resulting in a total of ₦25,951,462.52 over the duration of her payment plan. This means she saves an impressive ₦1,284,538 Naira compared to other payment methods. It’s truly an incredible deal that not only makes her dream of homeownership more attainable but also offers her the freedom from the burden of excessive debt. This choice becomes one of the best investments Mary can make in her life, as it aligns her goals with an efficient and rewarding payment plan.
            </Text>
            <Text mt='30px'>
              With each prepayment she makes, Mary continuously reduces her outstanding balance, putting herself in a stronger financial position. This not only results in significant financial benefits but also provides her with the peace of mind knowing that she is moving closer to owning her dream home without the stress of overwhelming debt.
              The prepayment incentive not only benefits Mary but also has a profound impact on the property development company. It works as a catalyst, accelerating the velocity of cash flow into the company. By incentivizing buyers like Mary to make early payments, Veerge creates a positive cycle of financial growth that benefits both buyers and property developers alike. The platform empowers homebuyers to take control of their payment journey, making the path to homeownership more rewarding and accessible.
            </Text>
            <Text mt='30px'>
              If you’ve already delved into our previous article on Veerge as a system of engagement, you’ll realize that the true secret sauce behind our new payment plan model lies in the integration of an interface and an intelligent system that manages the process seamlessly at all times. This combination of a system of engagement, a system of trust, and a system of intelligence is what makes it efficient, scalable, and future-proof. It revolutionizes the real estate industry by providing personalized financial aggregation tools, giving property development companies the power to reshape the real estate landscape and elevate the home buying experience for customers.
            </Text>
            <Text mt='30px'>
              Through Veerge, property development companies can now offer their customers an intuitive interface that makes the home buying process faster and simpler. Buyers can access a centralized platform where they can effortlessly manage all their property-related information in one place. This includes keeping track of outstanding balances, making extra repayments, and gaining valuable insights into their financial journey. Visualizations and photos of their property add a touch of personalization, while estimations of when they could become debt-free provide a clear path to financial freedom.
            </Text>
            <Text mt='30px'>
              Imagine a home loan that not only shows your current outstanding balance and monthly payments but also provides interactive visualizations, photos of your property, and estimations of when you could become debt-free. Veerge envisions a future where real estate becomes personal, accessible, and meaningful for all its customers.
              With Veerge leading the charge, property development companies have a unique opportunity to embrace this vision and create a brighter future for real estate. The combination of great people and an intuitive interface brings forth a transformation that empowers both property developers and aspiring homeowners alike. As the sun rises on this new era, we firmly believe that Veerge’s innovative approach will shape a brighter future for real estate, one that is more personal, accessible, and meaningful for all. Our commitment to personalized financial solutions and a forward-thinking approach paves the way for an exciting journey ahead, where the dream of homeownership becomes a vibrant and achievable reality for everyone.
            </Text>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  )
}

export default Smart_payment