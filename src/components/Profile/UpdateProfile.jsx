import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const UpdateProfile = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
  return (
    <>
    <Container py={16}  minH={"90vh"}>
      <form>
        <Heading
          children={"Update Profile"}
          my={"16"}
          textAlign={["center", "left"]}
        />

          <VStack spacing={'8'}>
          <Input
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          placeholder={'Name'}
          type={'text'}
          focusBorderColor='red.500'
          />
          <Input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder='Email'
          type='password'
          focusBorderColor='red.500'
          />
          <Button w={'full'} type={'submit'} colorScheme={'yellow'} children={'Update Profile'}/>
          </VStack>

      </form>
    </Container>
  </>
  )
}

export default UpdateProfile