import { Box, Show, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AgentRightNav = () => {
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
        <Text color="#000" fontSize={'24px'} fontWeight={500} letterSpacing={'3px'}>Agent Guide</Text>
        <VStack mt='30px' spacing={'20px'} align='stretch'>
          <Link to="/agent/portal">
            <Text fontWeight={location.pathname === '/agent/portal' && 600}>Veerge Premier Agent Portal</Text>
          </Link>
          <Link to="/agent/process">
            <Text fontWeight={location.pathname === '/agent/process' && 600}>The complete agent process</Text>
          </Link>
        </VStack>
      </Box>
    </Show>
  )
}

export default AgentRightNav