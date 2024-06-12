import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
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
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadcss } from '../Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromPlaylist,
  updateProfilePicture,
} from '../../redux/actions/profile';
import { cancelSubscription, loadUser } from '../../redux/actions/user';
import toast from 'react-hot-toast';

const Profile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { loading, message, error } = useSelector(state => state.profile);
  const {
    loading: subscriptionLoading,
    message: subscriptionMessage,
    error: subscriptionError,
  } = useSelector(state => state.subscription);

  const { user } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    try {
      await dispatch(updateProfilePicture(formData));
      await dispatch(loadUser());
    } catch (error) {
      console.log(error);
    }
  };

  const cancelSubscriptionHandler = async () => {
    await dispatch(cancelSubscription());
    dispatch(loadUser());
  };
  const removeFromPlaylistHandler = async (e, id) => {
    e.preventDefault();
    try {
      await dispatch(removeFromPlaylist(id));
      await dispatch(loadUser());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message, subscriptionMessage, subscriptionError]);

  return (
    <>
      <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
        <Heading children={'Profile'} m={8} textTransform={'uppercase'} />

        <Stack
          direction={['column', 'row']}
          justifyContent={'flex-start'}
          alignItems={'center'}
          spacing={['8', '16']}
          padding={'8'}
        >
          <VStack>
            <Avatar boxSize={'48'} src={user.avatar.url} />
            <Button
              isLoading={loading}
              onClick={onOpen}
              colorScheme={'yellow'}
              variant={'ghost'}
              children={'Change Photo'}
            />
          </VStack>

          <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
            <HStack>
              <Text children={'name'} fontWeight={'bold'} />
              <Text children={user.name} />
            </HStack>
            <HStack>
              <Text children={'E-mail'} fontWeight={'bold'} />
              <Text children={user.email} />
            </HStack>
            <HStack>
              <Text children={'Created At:'} fontWeight={'bold'} />
              <Text children={user.createdAt.split('T')[0]} />
            </HStack>
            {user.role !== 'admin' && (
              <HStack>
                <Text children="Subscription" fontWeight={'bold'} />
                {user.subscription && user.subscription.status === 'active' ? (
                  <Button
                    isLoading={subscriptionLoading}
                    onClick={cancelSubscriptionHandler}
                    color={'yellow.500'}
                    variant="unstyled"
                  >
                    Cancel Subscription
                  </Button>
                ) : (
                  <Link to="/subscribe">
                    <Button colorScheme={'yellow'}>Subscribe</Button>
                  </Link>
                )}
              </HStack>
            )}

            <Stack direction={['column', 'row']} alignItems={'center'}>
              <Link to="/updateprofile">
                <Button>Update Profile</Button>
              </Link>
              <Link to="/changepassword">
                <Button>Change Password</Button>
              </Link>
            </Stack>
          </VStack>
        </Stack>

        <Heading children={'playlist'} size={'md'} my={'8'} />

        {user.playlist.length > 0 && (
          <>
            <Stack
              direction={['column', 'row']}
              alignItems={'center'}
              flexWrap={'wrap'}
              p={4}
            >
              {user.playlist.map((element, index) => (
                <VStack w={48} m={2} key={element.course}>
                  <Image
                    boxSize={'full'}
                    objectFit={'contain'}
                    src={element.poster}
                  />

                  <HStack>
                    <Link to={`/course/${element.course}`}>
                      <Button
                        variant={'ghost'}
                        colorScheme={'yellow'}
                        children={'Watch Now'}
                      ></Button>
                    </Link>
                    <Button
                      isLoading={loading}
                      onClick={e => {
                        removeFromPlaylistHandler(e, element.course);
                      }}
                    >
                      <RiDeleteBin7Fill />
                    </Button>
                  </HStack>
                </VStack>
              ))}
            </Stack>
          </>
        )}

        <ChangePhotoBox
          isOpen={isOpen}
          onClose={onClose}
          changeImageSubmitHandler={changeImageSubmitHandler}
        />
      </Container>
    </>
  );
};

export default Profile;
function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeHandler}>
        <ModalOverlay backdropFilter={'blur(10px)'} />
        <ModalContent>
          <ModalHeader children={'change photo'} />
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <form
                onSubmit={e => {
                  changeImageSubmitHandler(e, image);
                }}
              >
                <VStack spacing={8}>
                  {imagePrev && <Avatar src={imagePrev} boxSize={48} />}
                  <Input
                    type={'file'}
                    css={{ '&::file-selector-button': fileUploadcss }}
                    onChange={changeImage}
                  />
                  <Button
                    w={'full'}
                    colorScheme={'yellow'}
                    type={'submit'}
                    children={'Change'}
                    onClick={closeHandler}
                  />
                </VStack>
              </form>
            </Container>
          </ModalBody>
          <ModalFooter mr={3} children={'Cancel'} onClick={closeHandler} />
        </ModalContent>
      </Modal>
    </>
  );
}
