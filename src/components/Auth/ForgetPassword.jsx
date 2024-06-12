import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
  const { loading, message, error } = useSelector(state => state.profile);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const submitForgetpasswordClick = e => {
    e.preventDefault();
    dispatch(forgetPassword(email));
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
  }, [dispatch, message, error]);

  return (
    <>
      <Container py={'16'} h={'90vh'}>
        <form onSubmit={submitForgetpasswordClick}>
          <Heading
            children="forget password"
            my={'16'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          />

          <VStack spacing={8}>
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
            <Button
              isLoading={loading}
              type="submit"
              width={'full'}
              colorScheme={'red'}
              children="Send Reset Link"
            />
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ForgetPassword;
