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
import { courseRequest } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const dispacth = useDispatch();
  const {
    loading,
    message: dispatchMessage,
    error,
  } = useSelector(state => state.other);
  const submitHandler = async e => {
    e.preventDefault();
    await dispacth(courseRequest(name, email, course));
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
          <Heading children="Request New Course" />

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
              <FormLabel htmlFor="course" children="Course" />
              <Textarea
                required
                id="course"
                value={course}
                onChange={e => {
                  setCourse(e.target.value);
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
              See Available Course !{' '}
              <Link to={'/courses'}>
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

export default Request;
