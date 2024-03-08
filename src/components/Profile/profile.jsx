import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { fileUploadcss } from "../Auth/Register";

const Profile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const user = {
    name: "Abhishek",
    email: "abhisheksankhla121@gmail.com",
    createdAt: new Date().toISOString(),
    role: "user",
    subscription: {
      status: "active",
    },
    playlist: [
      {
        course: "irjgfirfj",
        poster: " dihfvoiudsh",
      },
    ],
  };

  const removeFromPlaylistHandler = (id) => {
    console.log("id");
  };
const  changeImageSubmitHandler=(e,image)=>{
    e.preventDefault();
}
  return (
    <>
      <Container minH={"95vh"} maxW={"container.lg"} py={"8"}>
        <Heading children={"Profile"} m={8} textTransform={"uppercase"} />

        <Stack
          direction={["column", "row"]}
          justifyContent={"flex-start"}
          alignItems={"center"}
          spacing={["8", "16"]}
          padding={"8"}
        >
          <VStack>
            <Avatar boxSize={"48"} />
            <Button
              onClick={onOpen}
              colorScheme={"yellow"}
              variant={"ghost"}
              children={"Change Photo"}
            />
          </VStack>

          <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
            <HStack>
              <Text children={"name"} fontWeight={"bold"} />
              <Text children={user.name} />
            </HStack>
            <HStack>
              <Text children={"E-mail"} fontWeight={"bold"} />
              <Text children={user.email} />
            </HStack>
            <HStack>
              <Text children={"Created At:"} fontWeight={"bold"} />
              <Text children={user.createdAt.split("T")[0]} />
            </HStack>
            {user.role !== "admin" && (
              <HStack>
                <Text children={"Subscription"} fontWeight={"bold"} />
                {user.subscription.status === "active" ? (
                  <Button
                    color={"yellow.500"}
                    variant={"unstyled"}
                    children={"Cancel Subscription"}
                  ></Button>
                ) : (
                  <Link to="/subscribe">
                    <Button
                      colorScheme={"yellow"}
                      children={"Subscribe"}
                    ></Button>
                  </Link>
                )}
              </HStack>
            )}

            <Stack direction={["column", "row"]} alignItems={"center"}>
              <Link to="/updateprofile">
                <Button>Update Profile</Button>
              </Link>
              <Link to="/changepassword">
                <Button>Change Password</Button>
              </Link>
            </Stack>
          </VStack>
        </Stack>

        <Heading children={"playlist"} size={"md"} my={"8"} />

        {user.playlist.length > 0 && (
          <>
            <Stack
              direction={["column", "row"]}
              alignItems={"center"}
              flexWrap={"wrap"}
              p={4}
            >
              {user.playlist.map((element, index) => (
                <VStack w={48} m={2} key={element.course}>
                  <Image
                    boxSize={"full"}
                    objectFit={"contain"}
                    src={element.poster}
                  />

                  <HStack>
                    <Link to={`/course/${element.course}`}>
                      <Button
                        variant={"ghost"}
                        colorScheme={"yellow"}
                        children={"Watch Now"}
                      ></Button>
                    </Link>
                    <Button
                      onClick={() => {
                        removeFromPlaylistHandler(element.course);
                      }}
                    >
                      <RiDeleteBin7Fill />
                    </Button>
                  </HStack>
                </VStack>
              ))}
            </Stack>
          </>
        )}

        <ChangePhotoBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} />
      </Container>
    </>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler =()=>{
    onClose();
    setImagePrev('');
    setImage('');
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeHandler }>
        <ModalOverlay backdropFilter={"blur(10px)"} />
        <ModalContent>
            <ModalHeader children={"change photo"}/>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <form onSubmit={(e)=>{changeImageSubmitHandler(e,image)}}>
                <VStack spacing={8}>
                  {imagePrev && <Avatar src={imagePrev} boxSize={48} />}
                  <Input
                    type={"file"}
                    css={{  "&::file-selector-button":fileUploadcss }}
                    onChange={changeImage}
                  />
                  <Button
                    w={"full"}
                    colorScheme={"yellow"}
                    type={"submit"}
                    children={"Change"}
                  />
                </VStack>
              </form>
            </Container>
          </ModalBody>
          <ModalFooter mr={3} children={"Cancel"} onClick={closeHandler } />
        </ModalContent>
      </Modal>
    </>
  );
}
