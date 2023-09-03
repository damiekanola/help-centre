import { Box, Show, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const RightNav = () => {
  const location = useLocation()
  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        position={'fixed'} h='65%'
        overflowY={'scroll'} right='0'
        w='100%' maxW={'282px'} pl='40px'
        pb='50px'
        __css={{
          '&::-webkit-scrollbar': {
            w: '1',
          },
          '&::-webkit-scrollbar-track': {
            w: '6',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10',
            bg: `#333`,
          },
        }}
      >
        <Text color="#000" fontSize={'24px'} fontWeight={500} letterSpacing={'3px'}>Listings</Text>
        <VStack mt='30px' spacing={'20px'} align='stretch'>
          <Link to="/listings">
            <Text fontWeight={location.pathname === '/listings' && 600}>Overview of Listing</Text>
          </Link>
          <Link to="/create_listing">
            <Text fontWeight={location.pathname === '/create_listing' && 600}>How to create a listing</Text>
          </Link>
          <Link to="/create_unit">
            <Text fontWeight={location.pathname === '/create_unit' && 600}>Unit Allocations</Text>
          </Link>
          <Link to="/archive_unit">
            <Text fontWeight={location.pathname === '/archive_unit' && 600}>Archive a listing</Text>
          </Link>
          <Link to="/fractionalize_asset">
            <Text fontWeight={location.pathname === '/fractionalize_asset' && 600}>How to fractionalise a unit</Text>
          </Link>
          <Link to="/change_listing">
            <Text fontWeight={location.pathname === '/change_listing' && 600}>Changing listing information</Text>
          </Link>
          <Link to="/delist">
            <Text fontWeight={location.pathname === '/delist' && 600}>How to delist a listing</Text>
          </Link>
        </VStack>
      </Box>
    </Show>
  )
}

export default RightNav