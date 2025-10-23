import {Box, Text, Flex, Input, Link, Image} from '@chakra-ui/react';
import React, {useState, useRef, useEffect} from 'react';
import {CiSearch} from 'react-icons/ci';
import {helpSearchData} from '../Searchbar/data';
import blogicon from '../../assets/icons/blog.svg';
import searchicon from '../../assets/icons/search.svg';
import {useNavigate} from 'react-router-dom';

export const Hero = () => {
  const [query, setQuery] = useState('');

  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const exactMatch = helpSearchData.find(
        item => item.title.toLowerCase() === query.toLowerCase()
      );

      if (exactMatch) {
        navigate(exactMatch.link); // React Router navigation
      } else if (filteredData.length > 0) {
        navigate(filteredData[0].link); // fallback to first suggestion
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setQuery(''); // Clear the input
        setFilteredData([]); // Clear suggestions
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box
        w="full"
        pt={{base: '200px', md: '260px'}}
        pb={{base: '150px', md: '200px'}}
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
        <Box
          bg="#ffffff"
          borderRadius={'12px'}
          overflow={'visible'}
          ref={inputRef}
          position="relative"
        >
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
              onKeyDown={handleKeyDown}
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
              zIndex="1"
              maxH="200px"
              position="absolute"
              top="calc(100% - 12px)"
              overflowY="auto"
              borderTop={'1px solid gray'}
              borderBottomRadius="12px"
            >
              {filteredData.map((item, index) => (
                <Link href={item.link} fontSize="sm" fontWeight="500" color="gray.700">
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
                    {item.title}
                  </Flex>
                </Link>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
