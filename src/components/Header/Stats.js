import {Box, Flex, Text, SimpleGrid} from '@chakra-ui/react';

export default function StatsSection() {
  return (
    <Box py={{base: 16, md: 20}} px={'20px'} textAlign="center" bg="white">
      <Box w={{base:'90%', md:'60%'}} mx={'auto'}>
        <Text fontSize={{base: 'xl', md: '45px'}} fontWeight="500" letterSpacing={'-1.22px'} lineHeight={'1.2'} mb={{base: 8, md: 12}}>
          Myxellia makes building property tech solutions effortless
        </Text>
      </Box>

      {/* Stats Grid */}
      <SimpleGrid columns={{base: 3, sm: 3}} spacing={{base: 6, md: 12}} justifyItems="center">
        <Flex direction="column" align="center">
          <Text fontSize={{base: '2xl', md: '4xl'}} fontWeight="bold">
            50+
          </Text>
          <Text fontSize="sm" color="gray.600">
            Countries
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Text fontSize={{base: '2xl', md: '4xl'}} fontWeight="bold">
            10,000+
          </Text>
          <Text fontSize="sm" color="gray.600">
            Customers
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Text fontSize={{base: '2xl', md: '4xl'}} fontWeight="bold">
            174+
          </Text>
          <Text fontSize="sm" color="gray.600">
            Currencies
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
