import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmitButton = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
  };

  const { loading, message, error } = useSelector(state => state.profile);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/profile');
    }
  }, [dispatch, error, message]);
  return (
    <>
      <Container py={16} minH={'90vh'}>
        <form onSubmit={handleSubmitButton}>
          <Heading
            children={'Change Password'}
            my={'16'}
            textAlign={['center', 'left']}
          />

          <VStack spacing={'8'}>
            <Input
              required
              value={oldPassword}
              onChange={e => {
                setOldPassword(e.target.value);
              }}
              placeholder="Old password"
              type="password"
              focusBorderColor="red.500"
            />
            <Input
              required
              value={newPassword}
              onChange={e => {
                setNewPassword(e.target.value);
              }}
              placeholder="New password"
              type="password"
              focusBorderColor="red.500"
            />
            <Button
              isLoading={loading}
              w={'full'}
              type={'submit'}
              colorScheme={'yellow'}
              children={'change'}
            />
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ChangePassword;
