import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../layout/Loader/Loader';
const CoursePage = () => {
  const { lectures, loading } = useSelector(state => state.course);

  const [lectureNumber, setLectureNumber] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
          {lectures && lectures.length > 0 ? (
            <>
              <Box>
                <video
                  width={'100%'}
                  controls
                  controlsList={'nodownload noremoteplayback '}
                  disablePictureInPicture
                  disableRemotePlayback
                  src={lectures[lectureNumber].video.url}
                ></video>
                <Heading
                  m={'4'}
                  children={`#${lectureNumber + 1} ${
                    lectures[lectureNumber].title
                  }`}
                />
                <Heading m={'4'} children={'Descripttion'} />
                <Text m={'4'} children={lectures[lectureNumber].description} />
              </Box>

              <VStack>
                {lectures.map((item, index) => (
                  <button
                    key={item._id}
                    onClick={() => {
                      setLectureNumber(index);
                    }}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      textAlign: 'center',
                      margin: '0',
                      borderBottom: '1px solid black',
                    }}
                  >
                    <Text noOfLines={1}>
                      {' '}
                      #{index + 1} {item.title}
                    </Text>
                  </button>
                ))}
              </VStack>
            </>
          ) : (
            <>
              <Heading children={'No lectures'}></Heading>
            </>
          )}
        </Grid>
      )}
    </>
  );
};

export default CoursePage;
