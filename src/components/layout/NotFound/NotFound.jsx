import {  Container, Heading, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import{RiErrorWarningFill} from "react-icons/ri"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   <>
   <Container h={"90vh"}  > 
   

   <VStack h={'full'} justifyContent={'center'}  spacing={'4'} >
    <RiErrorWarningFill size={"5rem"}/>
   <Heading my={"8"} textAlign={'center'} children={"Page Not found"}/>
 
     
<Link to='/'>
  <Button 
  varient={'ghost'}
  children={'Go to Home'}
  />
</Link>

   </VStack>
   </Container>
   </>
  )
}

export default NotFound