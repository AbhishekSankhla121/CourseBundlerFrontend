import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispacth = useDispatch();
  const {
    loading,
    message: dispatchMessage,
    error,
  } = useSelector(state => state.other);
  const submitHandler = async e => {
    e.preventDefault();
    await dispacth(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispacth({ type: 'clearError' });
    }
    if (dispatchMessage) {
      toast.success(dispatchMessage);
      dispacth({ type: 'clearMessage' });
    }
  }, [dispacth, error, dispatchMessage]);
  return (
    <>
      <Container h={'92vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading children="Contact Us" />

          <form style={{ width: '100%' }} onSubmit={submitHandler}>
            <Box my={4}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
                placeholder="abc"
                type="text"
                focusBorderColor="red.500"
              />
            </Box>

            <Box my={4}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                placeholder="abc@gmail.com"
                type="email"
                focusBorderColor="red.500"
              />
            </Box>

            <Box my={4}>
              <FormLabel htmlFor="message" children="Message" />
              <Textarea
                required
                id="message"
                value={message}
                onChange={e => {
                  setMessage(e.target.value);
                }}
                placeholder="Your message"
                focusBorderColor="red.500"
              />
            </Box>

            <Button
              isLoading={loading}
              children={'Send Mail'}
              colorScheme={'red'}
              type={'submit'}
              my={4}
            />

            <Box my={4}>
              Request for a Course?{' '}
              <Link to={'/request'}>
                <Button
                  colorScheme="red"
                  variant={'link'}
                  children={'Click here'}
                />
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Contact;
