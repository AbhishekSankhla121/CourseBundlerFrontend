import {  Container, Heading, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import{RiErrorWarningFill} from "react-icons/ri"
import { Link } from 'react-router-dom'
const PaymentFailed = () => {
  return (
    <>
    <Container h={"90vh"}  > 
    
 
    <VStack h={'full'} justifyContent={'center'}  spacing={'4'} >
     <RiErrorWarningFill size={"5rem"}/>
    <Heading my={"8"} textAlign={'center'} children={"Payment Failed"}/>
  
      
 <Link to='/subscribe'>
   <Button 
   varient={'ghost'}
   children={'try Again'}
   />
 </Link>
 
    </VStack>
    </Container>
    </>
   )
 }
 

export default PaymentFailed