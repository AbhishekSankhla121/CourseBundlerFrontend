import React from 'react'
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
// eslint-disable-next-line
import { Text, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom';


const NavList = ({ url, title, onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={"ghost"}>{title}</Button>
  </Link>
)

const isAuthenticated = true;
const user = {
  role: "admin"
}

const logouthandler = () => {
  console.log("Loutout");
  onclose();
}
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <ColorModeSwitcher></ColorModeSwitcher>
      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width={"12"}
        height={"12"}
        rounded={"full"}
        position={'fixed'}
        zIndex={'overlay'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Course Bundler</DrawerHeader>
          <DrawerBody>


            <VStack spacing={'4'} alignItems={'flex-start'}>
              <NavList onClose={onClose} url='/' title='Home'></NavList>
              <NavList onClose={onClose} url={'/courses'} title={'Browse All Courses'} />
              <NavList onClose={onClose} url={'/request'} title={'Request a course'} />
              <NavList onClose={onClose} url={'/contact'} title={'Contact us'} />
              <NavList onClose={onClose} url={'/about'} title={'About us'} />
            </VStack>

            <HStack justifyContent={'space-between'} position={"absolute"} bottom={"2rem"} width={"80%"}>



              {isAuthenticated ? (<>
                <VStack >
                  <HStack >
                    <Link onClick={onClose} to="/profile">
                      <Button variant={'ghost'} colorScheme={'yellow'}>Profile</Button>
                    </Link>
                    <Button variant={'ghost'} onClick={logouthandler}>
                      <RiLogoutBoxLine></RiLogoutBoxLine>
                      Logout
                    </Button>
                  </HStack>
                  {
                    user && user.role === "admin" && <Link to="/admin/dashboard">
                      <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                        <RiDashboardFill style={{ margin: '4px' }}></RiDashboardFill>
                        Dashboard
                      </Button>
                    </Link>

                  }
                </VStack>
              </>) : (<>
                <Link to={'/login'}>
                  <Button onClick={onClose} colorScheme={'red'} color={'yellow'}>Login</Button>
                </Link>
                <p>OR</p>
                <Link to="/register">
                  <Button onClick={onClose} colorScheme={'red'} color={'yellow'}>Sign-up</Button>
                </Link>
              </>)}



            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header;

