import { Center, Flex, Image, Box, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import Helpful from '../../components/Faq/Helpful';
import fractional_ownership from '../../assets/images/blog/fractional_ownership.png';
import fractional_animation from '../../assets/images/blog/fractional_animation.gif';
import { useNavigate } from 'react-router-dom';
import BlogLeftNav from '../../components/Leftsidenav/BlogLeftNav';


const Fractional_ownership = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  const navigate = useNavigate();
  const overviewRef = useRef(null);
  const howRef = useRef(null);

  const a_ticketCheck = useIsInViewport(overviewRef);
  const howCheck = useIsInViewport(howRef)


  const articleContent = [
    { check: a_ticketCheck, id: 'overview', title: 'Overview' },
    { check: howCheck, id: 'how_fractional', title: 'How fractional works the Veerge way' },
  ]

  return (
    <Box p='0'>
      <Flex direction={'row'} align={'stretch'} py='0' gap='70px' pr='78px' pl='150px' mt='150px' w='full' bg={'#491A8F'} maxH={'100vh'} h={'500px'} position={'relative'}>
        <Center
          onClick={() => navigate("/blog")}
          position={'absolute'} top='20px'
          cursor={'pointer'} left='78px'
          h='50px' w='50px' borderRadius={'full'}
          color='#191919' bg='#fff'
        >
          <SlArrowLeft fontSize={'20px'} />
        </Center>

        <Image
          h='full' w='468px'
          src={fractional_ownership}
          bgPosition={'center'} bgSize={'cover'}
        />

        <Flex h='full' direction={'column'} align={'stretch'} justify={'space-between'} w='full'>

          <Box />
          <Box>
            <Text mb='15px' fontWeight={400} color='#FFF' alignSelf={'center'} fontSize='24px'>Peaks</Text>
            <Text fontWeight={500} color='#FFF' w='full' alignSelf={'center'} fontSize='36px'>
              Fractional Ownership
            </Text>
            <Text mt='15px' fontWeight={300} color='#FFF' w='80%' alignSelf={'center'} fontSize='14px'>
              If fractional ownership is such a game-changer, why are so many startups still struggling with it?
            </Text>
            <Text mt='45px' fontWeight={500} color='#FFF' alignSelf={'center'} fontSize='14px'>
              By Veerge Team
            </Text>
            <Text mt='15px' fontWeight={500} color='#FFF' alignSelf={'center'} fontSize='14px'>
              January 21, 2023
            </Text>
          </Box>
          <Flex w='full' justify={'space-between'} align={'center'} pb='10px'>
            <Text fontWeight={500} color='#FFF' alignSelf={'center'} fontSize='14px'>
              5 mins read
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
      <Box px={'78px'}>

        <BlogLeftNav articleContent={articleContent} />

        {/* <Box shadow={'md'} p='32px 20px' w='256px' h='193px' position={'absolute'} top='-100px' bg='white'>
          <Text mb='20px' fontWeight={500} fontSize={'20px'}>Table of Content</Text>
        </Box> */}
        <Box w={'95%'}
          maxW={{base: '587px', xl: '40%'}}
          minW={{base: '0px', xl: '40%'}}
          mx="auto" mt='58px' pb='70px' fontWeight={200} fontSize='16px'>
          <Box ref={overviewRef} id='overview'>
            <Text>
              Real estate, the golden ticket to wealth building, continues to entice investors seeking stability amidst the unpredictable stock market. But here’s the catch: for many young adults, the dream of owning property seems to drift further away as property prices soar higher than their incomes. Enter the hero of the hour: <b>Fractional ownership in real estate.</b>
            </Text>
            <Text mt='30px'>
              Now, you might be wondering, <b>“What on earth is fractional ownership?”</b> Well, it’s actually quite simple once you break it down. The word <b>“fractional”</b> implies dividing an asset into equal parts or fractions to make the costs more manageable. And <b>“ownership”</b> refers to the glorious sense of possessing a slice of the pie, or in this case, property.
            </Text>
            <Text mt='30px'>
              Imagine this: a luxurious property worth a jaw-dropping 1 million dollars. Now, let’s slice it up into bite-sized portions of 100,000 shares, making each share a mere $10. Suddenly, individuals with limited financial firepower can hop on board and snatch up a fraction of the property that fits within their budget and investment capacity. It’s like a gateway opening up to a world of opportunities, where more people can ride the wave of value appreciation and revel in the cash flow generated over time.
            </Text>
          </Box>
          <Image mt='13px' mb='20px' src={fractional_animation} h='auto' w='full' />
          <Box ref={howRef} id='how_fractional'>
            <Text mt='30px'>
              Now, let’s clear up a couple of misconceptions that might be floating around. First, let’s not mistake fractional ownership for REITs (Real Estate Investment Trusts). Sure, REITs offer a way to dip your toes into the real estate pool, but they might not fully satisfy your specific objectives. Why? Well, for starters, the options for traded-REITs that provide exposure to residential real estate are as scarce as finding a unicorn. The prices of REITs are also highly sensitive to interest rate fluctuations and overall market sentiment. So you have to say goodbye to one of the most appealing aspects of real estate investing: the low correlation and diversification it brings to your portfolio. To also distinguish fractional ownership from those timeshare shenanigans: When you buy a timeshare, you’re essentially buying the right to use a property for a limited time each year. But the catch is you don’t actually own a piece of the property itself, You don’t get to savor the sweet taste of appreciation or bask in the glory of rental income when the property sits idle during your unused time. Someone else holds the keys to ownership and all you have is a mere usage right. So, fractional real estate ownership is like having your cake and eating it too! because you not only get a slice of the property but also enjoy your fair share of the income and profits it generates.
            </Text>
            <Box mt='30px'>
              <Text>
                Here comes the million-dollar question: <b>“If fractional ownership is such a game-changer, why are so many startups still struggling with it?”</b>
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Lets explore the game’s rules that these startups must navigate. First, you need a breakthrough technology that solves a big problem. Check!. Then, the timing has to be just right for that problem to be solved. Check!. You also need a way to not only solve the problem but ensure it reaches the hands of those who are in desperate need of a solution. And here’s where many fractional startups stumble and fall flat on their faces.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Their grand plan? To reach the masses through Instagram ads, YouTube ads, Facebook ads, influencers and other channels. But hold on a second. In a world where trust has been fractured and authenticity is more precious than gold, how do you distribute your solution using these channels? Trust, is the currency of investment. And in a time when people hunger for authenticity, how can startups build that trust without a solid track record? After all, people don’t dabble in real estate because they want to play risky games; it has traditionally been a safe harbor for their hard-earned money. However, it still doesn’t end there. Limited inventory is another hurdle that startups encounter due to their restricted resources. Let’s take a closer look at how startups acquire inventory. In certain regions, like Africa, payment plans are prevalent instead of traditional mortgage systems. Some startups strike payment plans with property development companies, reserving residential units to sell fractions of them on their platforms. However, this approach proves to be inefficient over time. Limited financial resources result in limited inventory that may not meet the diverse requirements of potential investors. Additionally, their limited marketing capabilities hinder their ability to attract fractional investors at a rapid pace, leading to payment defaults and foreclosures. Foreclosure on payment plan properties in Africa often comes with hefty penalties, sometimes as high as 30%. Startups find themselves in a bind, needing to refund the money and bear the burden of the fees. It’s worth noting that not all fractional startups face this issue. Some have established strong relationships with property development companies and enjoy more convenient agreements. However, these challenges still persist. Managing and operating a fractional ownership model can also incur substantial administrative costs. From ensuring proper legal documentation to coordinating multiple investors and maintaining the overall structure, it’s a resource-intensive endeavor that can strain the startup’s limited resources.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Furthermore, fractional ownership, though not entirely new, still lacks widespread acceptance and understanding. Lack of awareness and education surrounding fractional ownership has led to slower adoption and limited market demand. It’s like a hidden gem waiting to be discovered by the masses. And let’s not forget about those pesky regulatory complexities. Navigating the regulatory landscape can be a formidable challenge for startups, and many are still grappling with finding a way around it.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Here comes the ultimate hurdle — limited liquidity. Unlike traditional investments like stocks or bonds, real estate is an illiquid asset. Selling or exiting the investment quickly can prove to be quite the challenge. Some startups have attempted to address this issue by building secondary marketplaces on their platforms. Yet, these marketplaces often see limited activity and struggle to attract enough users interested in this asset class to boost the velocity of fractional transactions. Limited liquidity can indeed be a concern for investors seeking flexibility in their investments.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                So there you have it — the behind-the-scenes struggles and obstacles faced by startups venturing into the world of fractional ownership. But lets not forget, every great innovation faces challenges along the way. Overcoming these hurdles will pave the path to a brighter future for fractional ownership, revolutionizing the way we invest in real estate. It’s a thrilling journey filled with potential, innovation, and the promise of transforming the world of investment as we know it.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text fontWeight={500} fontSize={'36px'} color='#000'>
                How Fractional Works the Veerge Way
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Veerge is a fully integrated hub of interconnected apps and services that seamlessly work together to take your property development company to new heights. It’s like having a powerhouse of tools at your fingertips, ready to revolutionize the way you operate. At its core lies a comprehensive CRM that offers a customer experience so blissful, it’ll make your head spin. But that’s not all. Veerge boasts of an advanced Inventory Management System, a Transaction Management System, and a myriad of other features, all seamlessly integrated with one another. It’s like a symphony of functionality that harmonizes to meet every real estate need. Now here’s where Veerge truly shines — <b>its innovative application development suite.</b> Imagine this: a property development company effortlessly creating a fully functional application without writing a single line of code. Yes, you read that right. With just a few clicks, they can bring their vision to life. The application that emerges is an omni-channel application, catering to everyone’s unique real estate requirements. Users are in for a treat as they sign up on these applications. They can schedule inspections, view real-time property availability, make initial deposit payments (collected in over <b>74 countries and 154 currencies</b>), track payments and outstanding balances, and even customize payments for their remaining balance. Everything they need, neatly organized and accessible in one place. These enhanced user interfaces and experiences play a pivotal role in customer satisfaction. Veerge goes above and beyond to ensure that every interaction leaves a lasting impression, transforming ordinary users into raving fans.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Here’s where things get really exciting — <b>Fractional ownership and Co-ownership.</b> This feature, seamlessly integrated into the applications created by property development companies, unleashes a world of possibilities. Fractional ownership makes life easier for property developers compared to struggling startups. It strategically opens doors to an untapped yet addressable market. Imagine giving individuals with limited purchasing power a seat at the table, all without breaking a sweat. And how does Veerge make it possible? Through its robust infrastructure that does the heavy lifting.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Fractional ownership doesn’t change the traditional way of selling properties; it introduces a whole new approach. Ownership of some residential units are divided into smaller, more affordable portions, with fractional prices that can be as low as the property development company desires. Even the company’s staff can invest, along with their family members. In Africa, there are property development companies with thousands of registered realtors. These realtors become champions, convincing people to invest in fractional ownership, all while earning their commission. And when the realtors receive their commissions, they can also invest in it themselves. It’s a win-win for everyone involved. Those potential buyers whose dream investment properties are just slightly out of reach can now also seize the opportunity. And when it comes to major decisions, a voting poll can be created, giving everyone a voice. No more feeling left out or unheard, talk about transparency and inclusivity. It’s a revolution in the making, and Veerge is at the forefront, spearheading the movement.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Now what does all of this mean for property development companies? It’s a killer feature, with minimal risk and an infinite upside. The velocity of cash inflow increases, ensuring no money is left on the table. Competitors will struggle to service customers who could be yours. Loyalty soars - as 90% of fractional buyers are likely first-time real estate investors. As long as promises are fulfilled, these customers will become ambassadors, spreading the word about the value creation exercise. It’s a ripple effect that sets the stage for exponential growth. You’re not just working for short-term gains; you’re building a foundation for results that will shine five years down the road. As the purchasing power of your fractional buyers increases, they’ll keep coming back to the property development company’s super application, bypassing intermediaries and strengthening the bond between the company and their dreams of real estate ownership
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Amazon, the unstoppable force of online retail, owes a large part of its success to Amazon Prime. With a staggering army of over 200 million subscribers ready to explore whatever Amazon ships with Prime, it’s no wonder they’ve become an unbeatable force. But here’s the thing — it didn’t happen overnight. Building such an army took time and dedication. However, for property development companies with a solid track record and a great reputation, the path to success in fractional ownership can be a smooth sail.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Imagine the power of credibility. Property developers with successful projects under their belts can instill confidence in potential investors. Those previous triumphs serve as proof of their ability to deliver results and manage properties effectively. This credibility becomes a magnet, attracting investors and facilitating the growth of fractional ownership initiatives. It’s like having an ace up their sleeves, giving them an edge in the race.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                Let’s also not forget the established networks and vast resources. Financial resources, marketing resources, human resources — the arsenal is unmatched. They can play the long game and conquer the world of fractional ownership. Users have the privilege of buying directly from these powerhouses, bypassing intermediaries and fees. It’s a direct line to success.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                And here’s another advantage that property developers bring to the table — a pipeline of real estate projects. This pipeline gives users access to a wide range of properties and can cherry-pick the properties that are most attractive to them, perfectly aligning with their objectives. Having a steady supply of properties puts property developers in the driver’s seat when it comes to setting up and scaling a fractional ownership business. It’s like having a treasure trove of opportunities, ready to be unlocked.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                But that’s not all — Veerge has an additional powerful solution called iBuyer, currently in its alpha phase. Once launched, property development companies can automate the buyback process. Let’s imagine this: if a fraction’s market value is $10, you can receive an immediate offer of $9.5 from the development company on the secondary market. This feature is a true game-changer, eliminating liquidity issues that have plagued the industry in the past. Moreover, property development companies can effortlessly attract a vast spectrum of users, making the liquidation of fractional assets easier than ever before. With their expertise, know-how, and marketing prowess, they can appeal to potential buyers who are interested in living in the estate and are willing to buy out fractional owners if desired. This harmonious convergence of supply and demand accelerates the velocity of transactions on the app. Compliance is also less of a headache compared to the challenges faced by startups. It’s like a golden ticket, unlocking a world of possibilities.
              </Text>
            </Box>
            <Box mt='30px'>
              <Text>
                But beyond the economic advantages, property development companies can use fractional ownership as a way to showcase their unique identity. It’s a chance to demonstrate a company with a conscience and a soul — a company that goes beyond mere success and shares it with others in unprecedented ways. It’s about responsibility, leveling the playing field, and understanding that when success is shared, all ships rise. In this moment of uncertainty and dislocation, people yearn for reassurance, guidance, and someone who can help them reach the next level. Wealth will be shifting from the hands of the already wealthy to a place where it can be shared by all. It’s a revolution that transforms the company into a performance-driven entity, through the lens of humanity.
                So, property development companies, are you ready to take the plunge? We’re eagerly waiting to have you on board. Get ready to embark on a journey where success is shared, dreams are realized, and the real estate world is forever transformed. It’s time to become a driving force in the world of fractional ownership, and Veerge is here to make it happen. Let’s pave the way for a future where everyone can share in the prosperity.
              </Text>
            </Box>
          </Box>
          <Helpful />
        </Box>
      </Box>
    </Box>
  )
}

export default Fractional_ownership