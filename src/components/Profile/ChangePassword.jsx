import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
  return (
    <>
      <Container py={16}  minH={"90vh"}>
        <form>
          <Heading
            children={"Change Password"}
            my={"16"}
            textAlign={["center", "left"]}
          />

            <VStack spacing={'8'}>
            <Input
            required 
            value={oldPassword}
            onChange={(e)=>{setOldPassword(e.target.value)}}
            placeholder='Old password'
            type='password'
            focusBorderColor='red.500'
            />
            <Input
            required 
            value={newPassword}
            onChange={(e)=>{setNewPassword(e.target.value)}}
            placeholder='New password'
            type='password'
            focusBorderColor='red.500'
            />
            <Button w={'full'} type={'submit'} colorScheme={'yellow'} children={'change'}/>
            </VStack>

        </form>
      </Container>
    </>
  );
};

export default ChangePassword;
