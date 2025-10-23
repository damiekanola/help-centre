import {Button, Flex, Text, Box, Image} from '@chakra-ui/react';
import veegelogo from '../../assets/icons/veerge-logo.svg';

export const Card = ({heading, title, desc, action}) => {
  return (
    <Flex my="30px" p={{ base:"18px 22px", md:"30px 40px"}} borderRadius="16px" bgColor={'#FFF7ED'}>
      <Flex direction={'column'} gap={'15px'} alignItems={'flex-start'} flex={{ md:1}}>
        <Flex borderBottom={'4px solid #FFCF25'} pb={'10px'} justify={'flex-start'} gap={'10px'}>
          <Image src={veegelogo} w={'24px'} h={'24px'} alt="veerge" />
          <Text letterSpacing={'-1px'} fontWeight={'500'} fontSize={'18px'}>
            {heading}
          </Text>
        </Flex>
        <Text fontSize={'27px'} letterSpacing={'-1px'} fontWeight={'500'}>
          {title}
        </Text>
        <Text lineHeight={'1'}>{desc}</Text>
        <Button bgColor={'#1B1B1B'} borderRadius={'200px'} color={'white'} p={'16px 20px'}>
          {action}
        </Button>
      </Flex>
      <Box flex={1}></Box>
    </Flex>
  );
};
