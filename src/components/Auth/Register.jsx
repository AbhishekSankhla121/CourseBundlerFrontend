import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/user";

export const fileUploadcss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "#ECC94B",
  backgroundColor: "white",
};

const fileUploadStyle = {
  "&::file-selector-button": fileUploadcss,
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  // eslint-disable-next-line
  const [image, setImage] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

const dispatch = useDispatch();
const submitHandler =(e)=>{
  e.preventDefault();
  const form = new FormData();
  form.append("name",name);
  form.append("email",email);
  form.append("password",password);
  form.append("file",image);
  dispatch(register(form));

}

  return (
    <>
      <Container h={"95vh"}>
        <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
          <Heading textTransform={"uppercase"} children={"Registration "} />
          <form style={{ width: "100%" }} onSubmit={submitHandler}>
            <Box display={"flex"} justifyContent={"center"}>
              <Avatar src={imagePrev}></Avatar>
            </Box>

            <Box my={4}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="abc"
                type="text"
                focusBorderColor="red.500"
              />
            </Box>
            <Box my={4}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="abc@gmail.com"
                type="email"
                focusBorderColor="red.500"
              />
            </Box>

            <Box my={4}>
              <FormLabel htmlFor="password" children="Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your password"
                type="password"
                focusBorderColor="red.500"
              />
            </Box>

            <Box my={4}>
              <FormLabel htmlFor="chooseAvtar" children="Choose Avtar" />
              <Input
                accept={"image/*"}
                required
                id="chooseAvtar"
                type={"file"}
                focusBorderColor="red.500"
                css={fileUploadStyle}
                onChange={changeImageHandler}
              />
            </Box>

            <Button
              children={"Sign Up"}
              colorScheme={"red"}
              type={"submit"}
              my={4}
            />

            <Box>
              Already SignedUp?{" "}
              <Link to={"/login"}>
                <Button colorScheme="red" variant={"link"} children={"login"} />{" "}
                here
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Register;
