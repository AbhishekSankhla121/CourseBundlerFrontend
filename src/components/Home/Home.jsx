import React from "react";
import { Button, Heading, Stack, VStack,Text, Image, Box, HStack } from "@chakra-ui/react";
import "../Home/home.css";
import { Link } from "react-router-dom";
import vg from "../../assets/images/bg.png";
import {CgGoogle ,CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from '../../assets/videos/intro.mp4'
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <Stack
            direction={["column", "row"]}
            height="100%"
            justifyContent={["center", "space-between"]}
            alignItems="center"
            spacing={['16','56']}
          >
            <VStack width={"full"} alignItems={['center','flex-end']} spacing={8}>
              <Heading children="Learn from the experts"/>
              <Text  fontFamily={'cursive'} textAlign={["center","left"]} children="Find valueable Content at Reasonable price"/>
            <Link to={"/courses"}>
                <Button size={"lg"} colorScheme="red" color={"yellow"}>
                   Explore now 
                </Button>
            </Link>
            </VStack>

            <Image 
            className="vector-graphics" 
            boxSize={"md"} 
            src={vg}
            objectFit={"contain"}/>

          </Stack>
        </div>

        <Box padding={'8'} bg={'blackAlpha.800'}>
            <Heading
            textAlign={'center'}
            fontFamily={'body'}
            color={"yellow.400"}
            children="OUR Brands"
            />

            <HStack className="brandsbanner" justifyContent={"space-evenly"} marginTop={"8"}>
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>
            </HStack>
          
        </Box>


        <div className="container-2">
            <video
            
            controls={'true'}
            controlsList={'nodownload nofullscreen noremoteplayback '}
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            ></video>
        </div>
      </section>
    </>
  );
};

export default Home;
