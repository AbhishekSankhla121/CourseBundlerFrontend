import { Box, Grid, Heading,Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assets/videos/intro.mp4'
const CoursePage = () => {
     const lectureTitle ="ifufuiiweewe";
     
     const lecture =[{
        _id:"hvuhrfedviu",
        title:"nbcviuew",
        description:"euifeiugwfuye",
        video:{
            url:"jsdhviudsgb"
        },
     },{
        _id:"hvuhrfedviu",
        title:"nbcviuew",
        description:"euifeiugwfuye",
        video:{
            url:"jsdhviudsgb"
        },
     },{
        _id:"hvuhrfedviu",
        title:"nbcviuew",
        description:"euifeiugwfuye",
        video:{
            url:"jsdhviudsgb"
        },
     }];
    const [lectureNumber, setLectureNumber] = useState(0);
  return (
   <>
        <Grid minH ={"90vh"} templateColumns={["1fr",'3fr 1fr']}>
            <Box>
            <video
            width={'100%'}
            controls={'true'}
            controlsList={'nodownload noremoteplayback '}
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            ></video>
            <Heading m={"4"} children={`#${lectureNumber +1} ${lecture[lectureNumber].title}`}/>
            <Heading m={"4"} children={"Descripttion"}/>
            <Text m={'4'} children={lecture[lectureNumber].description}/>
            </Box>
        

            <VStack>
                {
                    lecture.map((item,index)=>(
                        <button  
                        key={item._id}
                        onClick={()=>{setLectureNumber(index)}}
                        style={{
                            width:"100%",
                            padding:"1rem",
                            textAlign:'center',
                            margin:"0",
                            borderBottom:'1px solid black'
                        }}
                        >
                            

                            <Text noOfLines={1}> #{index+1} {item.title}</Text>
                        </button>
                      
                    ))
                }
            </VStack>

        </Grid>
   </>
  )
}

export default CoursePage