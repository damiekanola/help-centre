import { Box, Show, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const LeadRightNav = () => {
  const location = useLocation()
  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        bg='#F9FAFB'
        boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.08)'}
        position={'fixed'} h='fit-content'
        maxH={'70vh'}
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
        <Text color="#000" fontSize={'24px'} fontWeight={500} letterSpacing={'3px'}>Lead & Account</Text>
        <VStack mt='30px' spacing={'20px'} align='stretch'>
          <Link to="/lead/create_account">
            <Text fontWeight={location.pathname === '/lead/create_account' && 600}>Create an account</Text>
          </Link>
          <Link to="/lead/home_owners_packet">
            <Text fontWeight={location.pathname === '/lead/home_owners_packet' && 600}>Home owner’s packet</Text>
          </Link>
          <Link to="/lead/send_an_offer">
            <Text fontWeight={location.pathname === '/lead/send_an_offer' && 600}>Send an offer</Text>
          </Link>
        </VStack>
      </Box>
    </Show>
  )
}

export default LeadRightNav