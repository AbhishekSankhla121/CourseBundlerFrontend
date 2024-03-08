import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from '../../assets/videos/intro.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndCondition from '../../assets/doc/termsAndCondition'

const Founder =()=>(
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
        <VStack>
        <Avatar boxSize={["40","48"]}/>
        <Text children={"Cofounder:"} opacity={"0.7"}/>
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading children={"ABhishek Sankhla"} size={['md',"xl"]}></Heading>
            <Text
            textAlign={['center','left']}
            children={"Hi , i am Ful-Stack developer Our mission is to provide quality quantent at reasonable price "}
            />
        </VStack>
    </Stack>
)

const VideoPlayer =()=>(
    <Box>
         <video
            loop
            autoPlay
            muted
            controls={'true'}
            controlsList={'nodownload nofullscreen noremoteplayback '}
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            ></video>
    </Box>
)

const TandC =({termsAndCondition}) =>(
    <>
    <Box>
        <Heading
        size={'md'}
        children={"Terms & Condition"}
        textAlign={["center","left"]}
        my={'4'}
        />
    <Box h={'sm'} p={'4'} overflowY={'scroll'}>
    <Text 
    textAlign={['center','left']}
    letterSpacing={"widest"}
    fontFamily={'heading'}
    >{termsAndCondition}</Text>
    <Heading my={'4'} size={'xs'} children={'Refund only applicable  for cancellation within 7 days'}/>
    </Box>
    </Box>
    </>
)

const About = () => {
  return (
   <>
   <Container maxW={'container.xl'} padding={16} boxShadow={'lg'}>
    <Heading 
    children="About us"
    textAlign={["center",'left']}
    />
    <Founder/>
    <Stack m={'8'} direction={['column','row']} alignItems={'center'}>
        
    <Text fontFamily={"cursive"} m={'8'} textAlign={["center","left"]}>
        We are a video streammin platfrom with some  premium courses Available only for premium user
    </Text>
    <Link to='/subscribe'>
        <Button
        variant={"ghost"}
        colorScheme={'yellow'}
        children={"Checkout our plan"}
        />
    </Link>
    </Stack>
    <VideoPlayer/>

<TandC termsAndCondition ={termsAndCondition}/>

    <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill/>
        <Heading 
        children={'pament is secure by razor pau'}
        size={'xs'}
        fontFamily={'sans-serif'}
        textTransform={'uppercase'}
        />
    </HStack>
   </Container>
   </>
  )
}

export default About