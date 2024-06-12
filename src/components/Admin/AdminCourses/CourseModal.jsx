import { fileUploadcss } from '../../Auth/Register';
import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  CourseTitle,
  lectures = [],
  addLectureHandler,
  loading,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };
  const handleClose = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} size={'full'} onClose={handleClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{CourseTitle}</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody py={16}>
            <Grid templateColumns={['1fr', '3fr 1fr']}>
              <Box px={['0', '16']}>
                <Box my={5}>
                  <Heading children={CourseTitle} />
                  <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
                </Box>
                <Heading children={'Lectures'} size={'lg'} />
                {lectures.length > 0 &&
                  lectures.map((item, i) => (
                    <React.Fragment>
                      <VideoCard
                        loading={loading}
                        key={i}
                        title={item.title}
                        description={item.description}
                        num={i + 1}
                        lectureID={item._id}
                        courseID={id}
                        deleteButtonHandler={deleteButtonHandler}
                      />
                    </React.Fragment>
                  ))}
              </Box>
              <Box>
                <form
                  onSubmit={e => {
                    addLectureHandler(e, id, title, description, video);
                  }}
                >
                  <VStack spacing={4}>
                    <Heading
                      children={'Add lecture'}
                      size={'md'}
                      textTransform={'uppercase'}
                    />

                    <Input
                      focusBorderColor={'purple.500'}
                      placeholder="title"
                      value={title}
                      onChange={e => {
                        setTitle(e.target.value);
                      }}
                    />
                    <Input
                      focusBorderColor={'purple.500'}
                      placeholder="description"
                      value={description}
                      onChange={e => {
                        setDescription(e.target.value);
                      }}
                    />
                    <Input
                      accept={'video/mp4'}
                      required
                      type={'file'}
                      focusBorderColor="purple.500"
                      css={{
                        '&::file-selector-button': {
                          ...fileUploadcss,
                          color: 'purple',
                        },
                      }}
                      onChange={changeVideoHandler}
                    />
                    {videoPrev && (
                      <video
                        controlsList="nodownload"
                        controls
                        src={videoPrev}
                      ></video>
                    )}
                    <Button
                      isloading={loading}
                      w={'full'}
                      colorScheme={'purple'}
                      type={'submit'}
                      children={'Upload'}
                    />
                  </VStack>
                </form>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button children={'close'} onClick={handleClose}></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CourseModal;

function VideoCard({
  title,
  description,
  num,
  lectureID,
  courseID,
  deleteButtonHandler,
  loading,
}) {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        my={'8'}
        borderRadius={'lg'}
        boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
        justifyContent={['flex-start', 'space-between']}
        p={['4', '8']}
      >
        <Box>
          <Heading size={'sm'} children={`#${num} ${title}`} />
          <Text children={`${description}`} />
        </Box>
        <Button>
          <RiDeleteBin7Fill
            isLoading={loading}
            color={'purple.600'}
            onClick={() => {
              deleteButtonHandler(courseID, lectureID);
            }}
          />
        </Button>
      </Stack>
    </>
  );
}
