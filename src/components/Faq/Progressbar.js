import {useEffect, useState} from 'react';
import {Box} from '@chakra-ui/react';

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
    //   transform="translateY(-50%)"
      h="80px"
      w="3px"
      bg="#D9D9D9"
      borderRadius="50px"
      overflow="hidden"
      display={{base: 'none', md: 'block'}}
      zIndex="9999"
    >
      <Box bg="#624DE3" h={`${scrollProgress}%`} w="100%" transition="height 0.1s ease-out" borderRadius="50px" />
    </Box>
  );
};
