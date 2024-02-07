import {Box, Show, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const RightNav = () => {
  const location = useLocation();
  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
        position={'fixed'}
        h="fit-content"
        maxH="70vh"
        overflowY={'scroll'}
        right="0"
        w={'23%'}
        px="30px"
        pb="50px"
        
        __css={{
          '&::-webkit-scrollbar': {
            w: '1',
          },
          '&::-webkit-scrollbar-track': {
            w: '6',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10',
            bg: `transparent`,
          },
        }}
      >
        <Text
          fontSize={'24px'}
          
          color={'white !important'}
          letterSpacing={'3px'}
        >
          Listings
        </Text>
        <VStack mt="30px" spacing={'27px'} align="stretch">
          <Link to="/listings/overview">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/listings/overview' && 500}
            >
              Overview of Listing
            </Text>
          </Link>
          <Link to="/listings/create_listing">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/listings/create_listing' && 500}
            >
              How to create a listing
            </Text>
          </Link>
          <Link to="/listings/create_unit">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/listings/create_unit' && 500}
            >
              Unit Allocations
            </Text>
          </Link>
          <Link to="/listings/archive_unit">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/listings/archive_unit' && 500}
            >
              Archive a unit
            </Text>
          </Link>
          <Link to="/listings/fractionalize_asset">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/listings/fractionalize_asset' && 500}
            >
              How to fractionalise a unit
            </Text>
          </Link>
          <Link to="/listings/change_listing">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/listings/change_listing' && 500}
            >
              Changing listing information
            </Text>
          </Link>
          <Link to="/listings/delist">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/listings/delist' && 500}
            >
              How to delist a listing
            </Text>
          </Link>
        </VStack>
      </Box>
    </Show>
  );
};

export default RightNav;
