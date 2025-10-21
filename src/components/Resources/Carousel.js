import {Box, Text, Button, HStack} from '@chakra-ui/react';
import {motion, useMotionValue, useTransform, useSpring, animate} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import {ResourceCard} from '../../pages/Homepage/ResourceCard';
import {GoArrowLeft, GoArrowRight} from 'react-icons/go';

const MotionBox = motion(Box);

export default function Carousel({otherresources}) {
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const updateWidth = () => {
        const scrollWidth = container.scrollWidth;
        const visibleWidth = container.offsetWidth;
        setMaxDrag(scrollWidth - visibleWidth);
        const firstCard = container.querySelector('div');
        setCardWidth(firstCard?.offsetWidth + 24 || 300); // include gap
      };
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  const progress = useTransform(x, [-maxDrag, 0], [1, 0]);
  const smoothProgress = useSpring(progress, {stiffness: 100, damping: 20});

  const slide = dir => {
    const currentX = x.get();
    let newX = dir === 'right' ? currentX - cardWidth : currentX + cardWidth;
    if (newX > 0) newX = 0;
    if (newX < -maxDrag) newX = -maxDrag;
    animate(x, newX, {type: 'spring', stiffness: 120, damping: 20});
  };

  return (
    <Box
      bg="#EBEBFF"
      p={{base: '30px', md: '40px', lg: '64px'}}
      overflow="hidden"
      position="relative"
    >
      {/* Header + text controls */}
      <HStack justify="space-between" mb={'50px'}>
        <Text fontSize="40px" fontWeight="500" letterSpacing={'-2px'} >
          Other resources
        </Text>

        <HStack spacing={3}>
          <Button
            size="sm"
            variant="ghost"
            fontWeight="600"
            w="40px"
            h="40px"
            p={0}
            rounded={'full'}
            bg={'#1B1B1B1A'}
            onClick={() => slide('left')}
            _hover={{textDecoration: 'underline'}}
          >
            <GoArrowLeft width={'16px'} height={'16px'} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            fontWeight="600"
            w="40px"
            h="40px"
            minW="40px"
            rounded={'full'}
            bg={'#1B1B1B1A'}
            onClick={() => slide('right')}
            _hover={{textDecoration: 'underline'}}
          >
            <GoArrowRight width={'16px'} height={'16px'} />
          </Button>
        </HStack>
      </HStack>

      {/* Carousel cards */}
      <Box overflow="hidden">
        <MotionBox
          ref={containerRef}
          display="flex"
          gap={6}
          style={{x}}
          flexWrap="nowrap"
          cursor="grab"
        >
          {otherresources.map(item => (
            <ResourceCard detail={item} />
          ))}
        </MotionBox>
      </Box>

      {/* Progress bar */}
      <Box mt={10} bg="gray.200" h="2px" borderRadius="full" position="relative">
        <MotionBox
          h="4px"
          bg="#27272A"
          borderRadius="full"
          style={{scaleX: smoothProgress, transformOrigin: '0%'}}
        />
      </Box>
    </Box>
  );
}
