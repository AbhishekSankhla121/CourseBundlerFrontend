import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams();
  const { loading, message, error } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitresetpasswordClick = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
      navigate('/login');
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login');
    }
  }, [dispatch, message, error]);

  return (
    <>
      <Container py={'16'} h={'90vh'}>
        <form onSubmit={submitresetpasswordClick}>
          <Heading
            children="reset password"
            my={'16'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          />

          <VStack spacing={8}>
            <Input
              required
              id="email"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Enter new password"
              type="password"
              focusBorderColor="red.500"
            />
            <Button
              isLoading={loading}
              type="submit"
              width={'full'}
              colorScheme={'red'}
              children="Update Password"
            />
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ResetPassword;
