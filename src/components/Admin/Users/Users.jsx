import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import SlideBar from '../SlideBar';
import cursor from '../../../assets/images/cursor.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from '../../../redux/actions/admin';
import toast from 'react-hot-toast';
const Users = () => {
  const { users, loading, error, message } = useSelector(state => state.admin);

  const updateHandler = userid => {
    dispatch(updateUserRole(userid));
  };

  const deleteButtonHandler = userid => {
    dispatch(deleteUser(userid));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllUsers());
  }, [dispatch, error, message]);
  return (
    <>
      <Grid
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
        css={{
          cursor: `url(${cursor}),default`,
        }}
      >
        <Box p={['0', '16']} overflowX={'auto'}>
          <Heading
            textTransform={'uppercase'}
            children={'ALl Users '}
            my={'16'}
            textAlign={['center', 'left']}
          />

          <TableContainer width={['100vw', 'full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption children={'All available users in the database'} />
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users &&
                  users.length > 0 &&
                  users.map(item => (
                    <Row
                      key={item._id}
                      item={item}
                      updateHandler={updateHandler}
                      deleteButtonHandler={deleteButtonHandler}
                      loading={loading}
                    />
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <SlideBar />
      </Grid>
    </>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler, loading }) {
  return (
    <>
      <Tr>
        <Td>#{item._id}</Td>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.role}</Td>
        <Td>
          {console.log(item)}
          {item.subscription && item.subscription.status === 'active'
            ? 'Active'
            : 'No Active'}
        </Td>
        <Td isNumeric>
          <HStack justifyContent={'flex-end'}>
            <Button
              isLoading={loading}
              variant={'outline'}
              color={'purple.500'}
              children={'Change role'}
              onClick={() => {
                updateHandler(item._id);
              }}
            />
            <Button
              color={'purple.600'}
              onClick={() => {
                deleteButtonHandler(item._id);
              }}
            >
              <RiDeleteBin7Fill />
            </Button>
          </HStack>
        </Td>
      </Tr>
    </>
  );
}
