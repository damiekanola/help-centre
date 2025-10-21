import {Box, Flex, Text, Grid, Image} from '@chakra-ui/react';
import blueicon from '../../assets/icons/blue-veerge.svg';
import grammer from '../../assets/icons/grammerly.svg';

export const FaqCard = ({children, question, asker}) => {
  return (
    <Grid
      marginTop="50px"
      id="faq"
      bgColor="#FFFAF5"
      p="16px 24px"
      borderRadius="16px"
      gridColumn={'1'}
      gap={'18px'}
    >
      <Flex bgColor="#F97316" borderRadius="full" p="10px" w="fit-content" alignItems={'center'}>
        <Image src={grammer} w="24px" h="24px" />
        <Text color="white" fontWeight="600">
          {asker}
        </Text>
      </Flex>
      <Text fontWeight={'bold'} fontSize={'17px'}>
        {question}
      </Text>
      <Box border="1px solid #FED7AA" bgColor="#FFF7ED" borderRadius="8px" overflow="hidden">
        <Flex bgColor="#FFEDD5" p="12px" borderBottom="1px solid #FED7AA" alignItems={'center'} gap={'10px'}>
          <Image src={blueicon} w="24px" h="24px" />
          <Text color="#4545FE" fontWeight={'bold'}>
            Veerge Support
          </Text>
        </Flex>
        <Box padding={'12px'} lineHeight={'28px'} letterSpacing={'-0.09px'}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
