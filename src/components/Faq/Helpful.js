import { Box, Flex, Text, useToast } from '@chakra-ui/react'
import React from 'react'

const Helpful = ({ noMarginTop }) => {
  const toast = useToast();

  return (
    <Flex direction={'column'} align={'flex-end'} w='full' marginTop={noMarginTop ? "0" : "70px"}>
      <Text textAlign={'right'} className="content_head">Was this helpful?</Text>
      <Flex direction="row">
        <Text
          borderRight="1px solid #5d5fef"
          color="#5d5fef"
          pr="8px"
          cursor="pointer"
          onClick={() =>
            toast({
              position: "bottom-center",
              isClosable: true,
              render: () => (
                <Box color="white" p={3} bg="#000000">
                  Thank you for your feedback.
                </Box>
              ),
            })
          }
        >
          Yes
        </Text>{" "}
        <Text
          color="#5d5fef"
          pl="8px"
          cursor="pointer"
          onClick={() =>
            toast({
              position: "bottom-center",
              isClosable: true,
              render: () => (
                <Box color="white" p={3} bg="#000000">
                  Thank you for your feedback.
                </Box>
              ),
            })
          }
        >
          No
        </Text>
      </Flex>
    </Flex>
  )
}

export default Helpful