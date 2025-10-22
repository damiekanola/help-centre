import {Box, Text, Button, HStack} from '@chakra-ui/react';
import {motion, useMotionValue, useSpring} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import {ResourceCard} from '../../pages/Homepage/ResourceCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const MotionBox = motion(Box);

export default function Carousel({otherresources}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const smoothX = useSpring(x, {stiffness: 100, damping: 20});

  const thumbWidth = 200;
  const [cardWidth, setCardWidth] = useState(0);
  const [activeDir, setActiveDir] = useState('right'); // <-- track which direction is active

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScroll = () => {
      const {scrollLeft, scrollWidth, clientWidth} = container;
      const maxScroll = scrollWidth - clientWidth;
      const maxThumbX = clientWidth - thumbWidth;
      const thumbX = (scrollLeft / maxScroll) * maxThumbX || 0;
      x.set(thumbX);

      // ✅ detect direction based on scroll position
      if (scrollLeft <= 0) {
        setActiveDir('right'); // at start
      } else if (scrollLeft >= maxScroll) {
        setActiveDir('left'); // at end
      } else {
        // use middle position heuristic: if scrolling right, set to right, else left
        setActiveDir(scrollLeft > maxScroll / 2 ? 'right' : 'left');
      }
    };

    updateScroll();
    container.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateScroll);

    const firstCard = container.querySelector('div');
    if (firstCard) setCardWidth(firstCard.offsetWidth + 24);

    return () => {
      container.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, [x]);

  const slide = dir => {
    const container = containerRef.current;
    if (!container) return;

    const newScrollLeft =
      dir === 'right' ? container.scrollLeft + cardWidth : container.scrollLeft - cardWidth;

    container.scrollTo({left: newScrollLeft, behavior: 'smooth'});

    // ✅ manually update button active state
    setActiveDir(dir);
  };

  return (
    <Box
      bg="#EBEBFF"
      p={{base: '30px', md: '40px', lg: '64px'}}
      overflow="hidden"
      position="relative"
    >
      {/* Header + Controls */}
      <HStack justify="space-between" mb="50px">
        <Text fontSize="40px" fontWeight="500" letterSpacing="-2px">
          Other resources
        </Text>

        <HStack spacing={3}>
          <Button
            size="sm"
            w="40px"
            h="40px"
            rounded="full"
            onClick={() => slide('left')}
            bg={activeDir === 'left' ? '#1B1B1B' : '#1B1B1B1A'} // ✅ active color
            color={activeDir === 'left' ? 'white' : 'black'}
            _hover={{bg: '#1B1B1B', color: 'white'}}
          >
            <FaArrowLeft />
          </Button>

          <Button
            size="sm"
            w="40px"
            h="40px"
            rounded="full"
            onClick={() => slide('right')}
            bg={activeDir === 'right' ? '#1B1B1B' : '#1B1B1B1A'} // ✅ active color
            color={activeDir === 'right' ? 'white' : 'black'}
            _hover={{bg: '#1B1B1B', color: 'white'}}
          >
            <FaArrowRight />
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
          '&::-webkit-scrollbar': {display: 'none'},
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
        }}
      >
        {otherresources.map((item, index) => (
          <Box key={index} minW={{base: '280px', md: '320px'}} flexShrink={0}>
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
          style={{x: smoothX}}
        />
      </Box>
    </Box>
  );
}
