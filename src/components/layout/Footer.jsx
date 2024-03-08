import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular,} from "react-icons/ti"
import{DiGithub} from "react-icons/di"

const Footer = () => {
  return (
    <>
    <Box padding={4} bg={'blackAlpha.900'} minH={"10vh"}>
    <Stack 
    direction={["column",'row']}
    >

        <VStack alignItems={['center','flex-start']} width={"full"} >
    <Heading color={'white'} children='All Rights Reserved'/>
    <Heading color={'yellow.400'} fontFamily={'body'} size={'sm'} children='@Abhishek'/>
        </VStack>
    <HStack spacing={['2','10']} justifyContent={'center'} color={'white'} varient={'ghost'} fontSize={"50"}>
        <a href='#youtube' target={'blank'}>
            <TiSocialYoutubeCircular></TiSocialYoutubeCircular>
        </a>
        <a href='#github' target={'blank'}>
            <DiGithub></DiGithub>
        </a>
        <a href='#instagram' target={'blank'}>
            <TiSocialInstagramCircular></TiSocialInstagramCircular>
        </a>
    </HStack>
    </Stack>
    </Box>
    </>
  )
}

export default Footer