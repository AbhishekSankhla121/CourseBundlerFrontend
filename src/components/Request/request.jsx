import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Request = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Course, setCourse] = useState("");
  return (
    <>
      <Container h={"92vh"}>
        <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
          <Heading children="Request New Course" />

          <form style={{ width: "100%" }}>
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
              <FormLabel htmlFor="course" children="Course" />
              <Textarea
                required
                id="course"
                value={Course}
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
                placeholder="Your message"
                focusBorderColor="red.500"
              />
            </Box>

            <Button
              children={"Send Mail"}
              colorScheme={"red"}
              type={"submit"}
              my={4}
            />

            <Box my={4}>
              See Available Course !{" "}
              <Link to={"/courses"}>
                <Button
                  colorScheme="red"
                  variant={"link"}
                  children={"Click here"}
                />
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Request;
