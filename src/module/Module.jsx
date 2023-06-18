import './Module.css';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { useHabit } from '../Context/habit-context';
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
 

const {habit,setHabit,addHabit,handleSubmit,handleChange}=useHabit();
 
  return (
    <>
      <Button onClick={onOpen} id='post-modal' >Add New</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Habit</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} id='target-input-field'>

            <input type="text" name='name' onChange={handleChange} placeholder='Name' />
            <input type="text" name='repeat' onChange={handleChange} placeholder='Repeat' />
            <input type="text" name='goal' onChange={handleChange} placeholder='Goal' />
            <input type="date"  name='date' onChange={handleChange} placeholder='Start Date' />

          </ModalBody>

          <ModalFooter>
            <Button  type='submit' id='modal-post-button' mr={3} onClick={handleSubmit}>
              Save
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}