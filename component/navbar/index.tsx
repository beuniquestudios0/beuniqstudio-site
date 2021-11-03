import {NextPage} from "next";
import {FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";
import {GrYoutube} from "react-icons/gr";
import {FiMenu} from "react-icons/fi";
import {
    Box, Flex, Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, Button, IconButton
} from "@chakra-ui/react";
import React from "react";

// COMPONENTS
import HamburgerMenu from "component/navbar/hamburgerMenu";

const BaseNavbar = () => {
    const { isOpen: isHamburgerMenuOpen, onOpen: onHamburgerMenuOpen, onClose: onHamburgerMenuClose } = useDisclosure()

    return <>
        <HamburgerMenu isOpen={isHamburgerMenuOpen}  onClose={onHamburgerMenuClose}/>

        <Flex flexDirection={"column"} gridGap={".6rem"}>
            <Flex alignItems={"center"}  gridGap={".3rem"} fontSize={"3xl"}>
                <FaPhoneAlt/>
                <Flex flexDirection={"column"}>
                    <Text fontSize={"md"}>+91-9000900009</Text>
                    <Text fontSize={"md"}>+91-9000900009</Text>
                </Flex>
            </Flex>
        </Flex>

        <Box d={{md: "none"}}>
            <IconButton aria-label={"Menu"} colorScheme={"brandPrimary"} onClick={onHamburgerMenuOpen}>
                <FiMenu/>
            </IconButton>
        </Box>

    </>
}


const Index: NextPage = () => {

    return <>
        <Flex alignItems={"center"} justify={"space-between"} p={"1rem"}>
            <Box w={["50px", "80px"]} h={["50px", "80px"]}>
                <img src={"https://i.ibb.co/yVyxj8v/medium-logo.png"} width={"100%"} height={"100%"}/>
            </Box>
            <Flex d={{base:"flex", md: "none"}} alignItems={"center"} gridGap={"1rem"}>
                <BaseNavbar/>
            </Flex>
        </Flex>
    </>
}

export default Index;