import {
  Box,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
 
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import {useState} from 'react';

export const Helpful = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [hasResponded, setHasResponded] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [selectedReason, setSelectedReason] = useState('');

  const handleYes = () => {
    setHasResponded(true);
  };

  const handleNo = () => {
    onOpen();
  };

  const handleSubmit = () => {
    // simulate sending feedback somewhere (e.g. API or analytics)
    const payload = {
      reason: selectedReason,
      comment: feedback,
    };
    console.log('User feedback:', payload);

    // Mark as responded
    setHasResponded(true);

    // Close modal
    onClose();

    // Reset inputs
    setSelectedReason('');
    setFeedback('');
  };

  if (hasResponded) {
    return (
      <>
        <Box w="60px" h="4px" bgColor="#D4D4D8" my="40px" />
        <Text color="#5D5FEF" fontWeight="500" fontSize="17px">
          Thank you for your feedback!
        </Text>
      </>
    );
  }

  return (
    <>
      <Box w="60px" h="4px" bgColor="#D4D4D8" my="40px" />
      <Flex fontSize="17px" align="center" gap="13px" flexWrap="wrap" mt="20px">
        <Text fontWeight="700">Was this article helpful?</Text>

        <Button
          bg="#fff"
          border="1px solid #616161"
          p="5px 15px"
          onClick={handleYes}
          _hover={{bg: '#f3f3f3'}}
          borderRadius="0"
        >
          Yes
        </Button>

        <Button
          bg="#fff"
          border="1px solid #616161"
          p="5px 15px"
          onClick={handleNo}
          _hover={{bg: '#f3f3f3'}}
          borderRadius="0"
        >
          No
        </Button>

        {/* Modal for "No" feedback */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>We’d love your feedback</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
              <Text mb={3}>What is the issue with this section?</Text>

              <RadioGroup onChange={setSelectedReason} value={selectedReason} mb={4}>
                <Stack direction="column" spacing={2}>
                  <Radio size='md' value="hardtofind">It’s hard to find what I’m looking for.</Radio>
                  <Radio size='md' value="unhelpful">The tone feels unhelpful or too technical.</Radio>
                  <Radio size='md' value="understand">
                    Hard to understand - unclear or translation is wrong
                  </Radio>
                  <Radio size='md' value="instructionsdontmatch">
                    The instructions don’t match what I see on my screen.
                  </Radio>
                  <Radio size='md' value="irrelevant">
                    Irrelevant - doesn’t match the title and / or my expectations
                  </Radio>
                  <Radio size='md' value="other">Other</Radio>
                </Stack>
              </RadioGroup>

              {(selectedReason === 'other' || selectedReason === '') && (
                <Textarea
                  placeholder="Type your feedback..."
                  value={feedback}
                  onChange={e => setFeedback(e.target.value)}
                  size="sm"
                  resize="vertical"
                />
              )}
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleSubmit}
                isDisabled={!selectedReason && !feedback.trim()}
              >
                Submit
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};
