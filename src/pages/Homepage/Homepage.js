import {Box, Button, Center, Flex, HStack, Image, SimpleGrid, Text} from '@chakra-ui/react';
import React from 'react';
import data from '../../constant/pages';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {handleTagType} from '../../utils/handleTags';
import readIcon from '../../assets/icons/read_icon.svg';
import timeIcon from '../../assets/icons/time_icon.svg';
import {MdArrowDownward} from 'react-icons/md';
import {HomePageCard} from './HomePageCard';

export const Homepage = () => {
  return (
    <Box w="full" pt="200px" pb="50px">
      <SimpleGrid
        w="85%"
        mx="auto"
        gap="30px"
        columns={{base: 1, md: 3, lg: 3, xl: 4}}
        justify={'center'}
        alignItems={'center'}
      >
        {data.map((detail, i) => (
          <HomePageCard detail={detail} key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
