import React from "react";
import {
  Modal,
  Box,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  Text,
  ModalFooter,
  ModalBody,
  Flex,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function ModalSearch({ isOpen, onClose, finalRef }) {
  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack spacing={4} w={"100%"}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon boxSize={6} color="gray.300" />}
                />
                <Input type="search" placeholder="Search..." fontSize="16px" />
              </InputGroup>
            </Stack>
          </ModalHeader>
          {/* <ModalBody>
            <Box>asdasdsadsd</Box>
          </ModalBody> */}

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
