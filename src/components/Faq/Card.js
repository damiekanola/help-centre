import {Button, Flex, Text, Box, Image} from '@chakra-ui/react';
import veegelogo from '../../assets/icons/veerge-logo.svg';

export const Card = () => {
  return (
    <Flex marginTop="50px" p="30px 40px" borderRadius="16px" bgColor={'#FFF7ED'} >
      <Flex direction={'column'} gap={'15px'} alignItems={'flex-start'} flex={1}>
        <Flex borderBottom={'4px solid #FFCF25'} pb={'10px'} justify={'flex-start'} gap={'10px'}>
          <Image src={veegelogo} w={'24px'} h={'24px'} alt="veerge" />
          <Text letterSpacing={'-1px'} fontWeight={'500'} fontSize={'18px'}>
            Failsafe Account
          </Text>
        </Flex>
        <Text fontSize={'27px'} letterSpacing={'-1px'} fontWeight={'500'}>
          Protect Your Transactions
        </Text>
        <Text>
          Set up a backup bank account to ensure your payments stay uninterrupted, even if your
          primary account is unavailable.
        </Text>
        <Button bgColor={'#1B1B1B'} borderRadius={'200px'} color={'white'} p={'16px 20px'}>
          Set Up
        </Button>
      </Flex>
      <Box flex={1}></Box>
    </Flex>
  );
};
