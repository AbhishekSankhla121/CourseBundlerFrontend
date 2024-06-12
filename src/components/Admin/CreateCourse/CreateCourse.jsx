import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import SlideBar from '../SlideBar';
import { fileUploadcss } from '../../Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../../redux/actions/admin';
import toast from 'react-hot-toast';

const CreateCourse = () => {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(state => state.admin);

  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', image);
    formData.append('category', category);
    formData.append('createdBy', createdBy);
    dispatch(createCourse(formData));
  };

  useEffect(() => {
    console.log(message);
    if (error) {
      toast.error(`Error: ${error}`);
      dispatch({ type: 'clearError' });
      console.log(error);
    }
    if (message) {
      toast.success(message);
      console.log('message', message);
      dispatch({ type: 'clearMessage' });
    }
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
        <Container py={'16'}>
          <form
            onSubmit={e => {
              submitHandler(e);
            }}
          >
            <Heading
              textTransform={'uppercase'}
              children={'Create Course'}
              my={16}
              textAlign={['center', 'left']}
            />

            <VStack m={'auto'} spacing={8}>
              <Input
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                }}
                placeholder={'Ttile'}
                type={'text'}
                focusBorderColor="purple.500"
              />
              <Input
                value={description}
                onChange={e => {
                  setDescription(e.target.value);
                }}
                placeholder={'Description'}
                type={'text'}
                focusBorderColor="purple.500"
              />
              <Input
                value={createdBy}
                onChange={e => {
                  setCreatedBy(e.target.value);
                }}
                placeholder={'Creator Name'}
                type={'text'}
                focusBorderColor="purple.500"
              />
              <Select
                focusBorderColor="purple.500"
                value={category}
                onChange={e => {
                  setCategory(e.target.value);
                }}
              >
                <option> Category</option>
                {categories.map(item => (
                  <option key={item} value={item}>
                    {' '}
                    {item}
                  </option>
                ))}
              </Select>

              <Input
                accept={'image/*'}
                required
                type={'file'}
                focusBorderColor="purple.500"
                css={{
                  '&::file-selector-button': {
                    ...fileUploadcss,
                    color: 'purple',
                  },
                }}
                onChange={changeImageHandler}
              />

              {imagePrev && (
                <>
                  <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
                </>
              )}

              <Button
                isLoading={loading}
                w={'full'}
                colorScheme={'purple'}
                children={'Create'}
                type={'submit'}
              ></Button>
            </VStack>
          </form>
        </Container>
        <SlideBar />
      </Grid>
    </>
  );
};

export default CreateCourse;
