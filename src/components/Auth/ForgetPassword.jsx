import { Container, Heading, VStack ,Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
  return (
    <>
    <Container py={'16'} h={'90vh'}>
        <form>
            <Heading
            children="forget password"
            my={'16'} 
            textTransform={'uppercase'}
            textAlign={["center","left"]}
            />

            <VStack spacing={8}>
            <Input
            required 
            id='email' 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder='abc@gmail.com'
            type='email'
            focusBorderColor='red.500'
            />
            <Button 
            type='submit' 
            width={'full'}
            colorScheme={'red'}
            children="Send Reset Link"
            />
            </VStack>
        </form>
    </Container>
    </>
  )
}

export default ForgetPassword