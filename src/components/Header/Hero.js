import {Box, Text, Flex, Input, Link, Image} from '@chakra-ui/react';
import React, {useState} from 'react';
import {CiSearch} from 'react-icons/ci';
import {helpSearchData} from '../Searchbar/data';
import blogicon from '../../assets/icons/blog.svg';
import searchicon from '../../assets/icons/search.svg';

export const Hero = () => {
  const [query, setQuery] = useState('');

  const [filteredData, setFilteredData] = useState([]);

  return (
    <>
      <Box
        w="full"
        py={{base: '200px', md: '200px'}}
        px={{base: '20px', md: '64px'}}
        bg={'#0d0d0d'}
      >
        <Text
          fontSize={{base: '3xl', md: '4xl'}}
          fontWeight="bold"
          mb={4}
          align="start"
          color={'#FAF4EE'}
        >
          Myxellia Resource Hub
        </Text>
        <Text
          color="#FAF4EE"
          fontSize={{base: 'md', md: 'lg'}}
          lineHeight={'24px'}
          mb={'20px'}
          w={{base: '100%', md: '80%'}}
        >
          Let us be your go-to for all things real estate technology, investment solutions, and
          property development. Take a look at our helpful articles, guides, templates, tools and
          more.
        </Text>
        <Box bg="#ffffff" borderRadius={'12px'} overflow={'hidden'}>
          <Flex
            direction="row"
            align="center"
            bg="#ffffff"
            borderRadius={'full'}
            px="10px"
            py="5px"
          >
            <CiSearch style={{width: '24px', height: '24px'}} />
            <Input
              placeholder="Find a Resource"
              type="text"
              value={query}
              border="none"
              FontWeight="400"
              fontSize="12px"
              lineHeight="15px"
              color="#606060"
              borderRadius={'full'}
              _focusVisible={{
                border: 'none',
              }}
              onChange={event => {
                const value = event.target.value;
                setQuery(value);

                if (value.trim() === '') {
                  setFilteredData([]);
                } else {
                  setFilteredData(
                    helpSearchData.filter(item =>
                      item.title.toLowerCase().includes(value.toLowerCase())
                    )
                  );
                }
              }}
            />
          </Flex>
          {filteredData.length > 0 && (
            <Box
              w="100%"
              bg="white"
              boxShadow="md"
              zIndex="10"
              maxH="200px"
              overflowY="auto"
              borderTop={'1px solid gray'}
            >
              {filteredData.map((item, index) => (
                <Flex
                  key={index}
                  gap={'14px'}
                  px="4"
                  py="2"
                  alignItems={'center'}
                  _hover={{bg: 'gray.100'}}
                  cursor="pointer"
                  onClick={() => {
                    setQuery(item.title);
                    setFilteredData([]);
                  }}
                >
                  <Image
                    src={item.type === 'article' ? blogicon : searchicon}
                    w={'20px'}
                    h={'20px'}
                  />
                  <Link href={item.link} fontSize="sm" fontWeight="500" color="gray.700">
                    {item.title}
                  </Link>
                </Flex>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
