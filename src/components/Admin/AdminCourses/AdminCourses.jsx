import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import SlideBar from '../SlideBar';
import cursor from '../../../assets/images/cursor.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getAllCourses,
  getCourseLectures,
} from '../../../redux/actions/course';
import {
  addlecture,
  deleteCourse,
  deletelecture,
} from '../../../redux/actions/admin';
import toast from 'react-hot-toast';
const AdminCourses = () => {
  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { courses, lectures } = useSelector(state => state.course);
  const { loading, error, message } = useSelector(state => state.admin);
  const coursesDetailHandler = (courseId, title) => {
    onOpen();
    dispatch(getCourseLectures(courseId));
    setCourseId(courseId);
    setCourseTitle(title);
  };

  const deleteButtonHandler = courseID => {
    dispatch(deleteCourse(courseID));
  };

  const deleteLectureButtonHandler = async (courseId, lectureId) => {
    console.log(courseId, lectureId);
    await dispatch(deletelecture(courseId, lectureId));
    await dispatch(getCourseLectures(courseId));
  };

  const addLectureHandler = async (e, courseID, title, description, video) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', video);
    await dispatch(addlecture(courseID, formData));
    await dispatch(getCourseLectures(courseId));
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
    dispatch(getAllCourses());
  }, [dispatch, message, error]);
  return (
    <>
      <Grid
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
        css={{
          cursor: `url(${cursor}),default`,
        }}
      >
        <Box p={['0', '8']} overflowX={'auto'}>
          <Heading
            textTransform={'uppercase'}
            children={'ALl courses '}
            my={'16'}
            textAlign={['center', 'left']}
          />

          <TableContainer width={['100vw', 'full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption
                children={'All available Courses in the database'}
              />
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {courses.map(item => (
                  <Row
                    key={item._id}
                    item={item}
                    coursesDetailHandler={coursesDetailHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    loading={loading}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <CourseModal
            isOpen={isOpen}
            onClose={onClose}
            id={courseId}
            CourseTitle={courseTitle}
            deleteButtonHandler={deleteLectureButtonHandler}
            addLectureHandler={addLectureHandler}
            lectures={lectures}
            loading={loading}
          />
        </Box>
        <SlideBar />
      </Grid>
    </>
  );
};

function Row({ item, coursesDetailHandler, deleteButtonHandler, loading }) {
  return (
    <>
      <Tr>
        <Td>#{item._id}</Td>
        <Td>
          <Image src={item.poster.url} />
        </Td>
        <Td>{item.title}</Td>
        <Td textTransform={'uppercase'}>{item.category}</Td>
        <Td>{item.createdBy}</Td>
        <Td isNumeric>{item.views}</Td>
        <Td isNumeric>{item.numOfVideos}</Td>
        <Td isNumeric>
          <HStack justifyContent={'flex-end'}>
            <Button
              variant={'outline'}
              color={'purple.500'}
              children={'View lecture'}
              onClick={() => {
                coursesDetailHandler(item._id, item.title);
              }}
            />
            <Button
              isLoading={loading}
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

export default AdminCourses;
