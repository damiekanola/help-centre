import {Box, Show, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const AgentRightNav = () => {
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
          Agents Guide
        </Text>
        <VStack mt="30px" spacing={'27px'} align="stretch">
          <Link to="/agent/portal">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/agent/portal' && 500}
            >
              Veerge Premier Agent Portal
            </Text>
          </Link>
          <Link to="/agent/process">
            <Text
              fontSize={'14px'}
              fontWeight={location.pathname === '/agent/process' && 500}
            >
              The complete agents process
            </Text>
          </Link>
        </VStack>
      </Box>
    </Show>
  );
};

export default AgentRightNav;
