import { Container, Heading, VStack ,Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params = useParams()
    console.log(params.token);
  return (
    <>
    <Container py={'16'} h={'90vh'}>
        <form>
            <Heading
            children="reset password"
            my={'16'} 
            textTransform={'uppercase'}
            textAlign={["center","left"]}
            />

            <VStack spacing={8}>
            <Input
            required 
            id='email' 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='Enter new password'
            type='password'
            focusBorderColor='red.500'
            />
            <Button 
            type='submit' 
            width={'full'}
            colorScheme={'red'}
            children="Update Password"
            />
            </VStack>
        </form>
    </Container>
    </>
  )
}

export default ResetPassword