import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { login } from '../../redux/actions/user';
const Login = () => {
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState('');
   const dispatch  = useDispatch()
    const submitHandler =(e)=>{
      e.preventDefault();
     dispatch(login(email,password));
    }
    
  return (
   <>
   <Container h={"95vh"}>
    <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading 
        children={'welcome to course bundler'}
        />
        <form style={{width:"100%"}} onSubmit={(e)=>{submitHandler(e)}}> 
           
           <Box my={4}> 
           <FormLabel htmlFor='email' children="Email Address"/>
            <Input
            required 
            id='email' 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder='abc@gmail.com'
            type='email'
            focusBorderColor='red.500'
            />
           </Box>
           
           <Box my={4}> 
           <FormLabel htmlFor='password' children="Password"/>
            <Input
            required 
            id='password' 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='Enter your password'
            type='password'
            focusBorderColor='red.500'
            />
           </Box >
           
           <Box >
           <Link to="/forgetpassword" >
            <Button
            fontSize={'sm'}
            children="Forget Passwords"
            variant={'link'}
            />
           </Link>
           </Box>

            <Button
            children={"Login"}
            colorScheme={'red'}
            type={'submit'}
            my={4}
            />

            <Box my={4} >
            New User?{' '}
            <Link to={'/register'}>
            <Button 
            colorScheme='red' 
            variant={'link'}
            children={'Sign up'}
            />{' '}
            here

    
            </Link>
            </Box>
        </form>
    </VStack>
   </Container>
   </>
  )
}

export default Login