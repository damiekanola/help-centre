import { Box, Show, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const RightNav = () => {
  const location = useLocation()
  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
        position={'fixed'} h='65%'
        overflowY={'scroll'} right='0'
        w={'23%'} px='30px'
        pb='50px' fontFamily={'euclid-light'}
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
        <Text color="#000" fontSize={'24px'} fontFamily={'euclid-medium'} letterSpacing={'3px'}>Listings</Text>
        <VStack mt='30px' spacing={'20px'} align='stretch'>
          <Link to="/listings/overview">
            <Text fontFamily={location.pathname === '/listings/overview' && 'euclid-medium'}>Overview of Listing</Text>
          </Link>
          <Link to="/listings/create_listing">
            <Text fontFamily={location.pathname === '/listings/create_listing' && 'euclid-medium'}>How to create a listing</Text>
          </Link>
          <Link to="/listings/create_unit">
            <Text fontFamily={location.pathname === '/listings/create_unit' && 'euclid-medium'}>Unit Allocations</Text>
          </Link>
          <Link to="/listings/archive_unit">
            <Text fontFamily={location.pathname === '/listings/archive_unit' && 'euclid-medium'}>Archive a listing</Text>
          </Link>
          <Link to="/listings/fractionalize_asset">
            <Text fontFamily={location.pathname === '/listings/fractionalize_asset' && 'euclid-medium'}>How to fractionalise a unit</Text>
          </Link>
          <Link to="/listings/change_listing">
            <Text fontFamily={location.pathname === '/listings/change_listing' && 'euclid-medium'}>Changing listing information</Text>
          </Link>
          <Link to="/listings/delist">
            <Text fontFamily={location.pathname === '/listings/delist' && 'euclid-medium'}>How to delist a listing</Text>
          </Link>
        </VStack>
      </Box>
    </Show>
  )
}

export default RightNav