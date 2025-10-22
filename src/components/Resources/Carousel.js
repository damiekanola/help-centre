// import {Box, Text, Button, HStack} from '@chakra-ui/react';
// import {motion, useMotionValue, useTransform, useSpring, animate} from 'framer-motion';
// import {useRef, useEffect, useState} from 'react';
// import {ResourceCard} from '../../pages/Homepage/ResourceCard';
// import {GoArrowLeft, GoArrowRight} from 'react-icons/go';

// const MotionBox = motion(Box);

// export default function Carousel({otherresources}) {
//   const x = useMotionValue(0);
//   const [maxDrag, setMaxDrag] = useState(0);
//   const containerRef = useRef(null);
//   const [cardWidth, setCardWidth] = useState(0);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       const updateWidth = () => {
//         const scrollWidth = container.scrollWidth;
//         const visibleWidth = container.offsetWidth;
//         setMaxDrag(scrollWidth - visibleWidth);
//         const firstCard = container.querySelector('div');
//         setCardWidth(firstCard?.offsetWidth + 24 || 300); // include gap
//       };
//       updateWidth();
//       window.addEventListener('resize', updateWidth);
//       return () => window.removeEventListener('resize', updateWidth);
//     }
//   }, []);

//   const progress = useTransform(x, [-maxDrag, 0], [1, 0]);
//   const smoothProgress = useSpring(progress, {stiffness: 100, damping: 20});

//   const slide = dir => {
//     const currentX = x.get();
//     let newX = dir === 'right' ? currentX - cardWidth : currentX + cardWidth;
//     if (newX > 0) newX = 0;
//     if (newX < -maxDrag) newX = -maxDrag;
//     animate(x, newX, {type: 'spring', stiffness: 120, damping: 20});
//   };

//   return (
//     <Box
//       bg="#EBEBFF"
//       p={{base: '30px', md: '40px', lg: '64px'}}
//       overflow="hidden"
//       position="relative"
//     >
//       {/* Header + text controls */}
//       <HStack justify="space-between" mb={'50px'}>
//         <Text fontSize="40px" fontWeight="500" letterSpacing={'-2px'} >
//           Other resources
//         </Text>

//         <HStack spacing={3}>
//           <Button
//             size="sm"
//             variant="ghost"
//             fontWeight="600"
//             w="40px"
//             h="40px"
//             p={0}
//             rounded={'full'}
//             bg={'#1B1B1B1A'}
//             onClick={() => slide('left')}
//             _hover={{textDecoration: 'underline'}}
//           >
//             <GoArrowLeft width={'16px'} height={'16px'} />
//           </Button>
//           <Button
//             size="sm"
//             variant="ghost"
//             fontWeight="600"
//             w="40px"
//             h="40px"
//             minW="40px"
//             rounded={'full'}
//             bg={'#1B1B1B1A'}
//             onClick={() => slide('right')}
//             _hover={{textDecoration: 'underline'}}
//           >
//             <GoArrowRight width={'16px'} height={'16px'} />
//           </Button>
//         </HStack>
//       </HStack>

//       {/* Carousel cards */}
//       <Box overflow="hidden">
//         <MotionBox
//           ref={containerRef}
//           display="flex"
//           gap={6}
//           style={{x}}
//           flexWrap="nowrap"
//           cursor="grab"
//         >
//           {otherresources.map(item => (
//             <ResourceCard detail={item} />
//           ))}
//         </MotionBox>
//       </Box>

//       {/* Progress bar */}
//       <Box mt={10} bg="gray.200" h="2px" borderRadius="full" position="relative">
//         <MotionBox
//           h="4px"
//           bg="#27272A"
//           borderRadius="full"
//           style={{scaleX: smoothProgress, transformOrigin: '0%'}}
//         />
//       </Box>
//     </Box>
//   );
// }

import { Box, Text, Button, HStack } from '@chakra-ui/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ResourceCard } from '../../pages/Homepage/ResourceCard';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const MotionBox = motion(Box);

export default function Carousel({ otherresources }) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });

  const thumbWidth = 200; // ✅ fixed width
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      const maxThumbX = clientWidth - thumbWidth;
      const thumbX = (scrollLeft / maxScroll) * maxThumbX || 0;
      x.set(thumbX);
    };

    updateScroll(); // initial call
    container.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateScroll);

    const firstCard = container.querySelector('div');
    if (firstCard) setCardWidth(firstCard.offsetWidth + 24); // account for gap

    return () => {
      container.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, [x]);

  const slide = (dir) => {
    const container = containerRef.current;
    if (!container) return;

    const newScrollLeft =
      dir === 'right'
        ? container.scrollLeft + cardWidth
        : container.scrollLeft - cardWidth;

    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  return (
    <Box bg="#EBEBFF" p={{ base: '30px', md: '40px', lg: '64px' }} overflow="hidden" position="relative">
      {/* Header + Controls */}
      <HStack justify="space-between" mb="50px">
        <Text fontSize="40px" fontWeight="500" letterSpacing="-2px">
          Other resources
        </Text>

        <HStack spacing={3}>
          <Button size="sm" w="40px" h="40px" rounded="full" bg="#1B1B1B1A" onClick={() => slide('left')}>
            <GoArrowLeft />
          </Button>
          <Button size="sm" w="40px" h="40px" rounded="full" bg="#1B1B1B1A" onClick={() => slide('right')}>
            <GoArrowRight />
          </Button>
        </HStack>
      </HStack>

      {/* Scrollable Carousel */}
      <Box
        ref={containerRef}
        display="flex"
        gap={6}
        overflowX="auto"
        overflowY="hidden"
        scrollBehavior="smooth"
        cursor="grab"
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
        }}
      >
        {otherresources.map((item, index) => (
          <Box key={index} minW={{ base: '280px', md: '320px' }} flexShrink={0}>
            <ResourceCard detail={item} />
          </Box>
        ))}
      </Box>

      {/* Scrollbar Track + Fixed Thumb */}
      <Box mt={10} bgColor={'#E4E4E7'} h="4px" borderRadius="full" position="relative">
        <MotionBox
          position="absolute"
          top="0"
          left="0"
          h="6px"
          bg="#1B1B1B"
          borderRadius="full"
          width={`${thumbWidth}px`}
          style={{ x: smoothX }}
        />
      </Box>
    </Box>
  );
}
