import './Module.css';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsEmojiSmileFill } from 'react-icons/bs';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  // Lorem,
  ModalFooter
}
  from '@chakra-ui/react'
export default function Module() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} id='post-modal'>Add New</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Habit</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} id='target-input-field'>


          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Repeat'/>
          <input type="text" placeholder='Goal'/>
          <input type="date" placeholder='Start Date'/>
         

          </ModalBody>

          <ModalFooter>
            <Button id='modal-post-button' mr={3}>
             Save
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}