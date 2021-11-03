import {NextPage} from "next";
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import {IoLogoYoutube} from "react-icons/io";
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

        <Box d={{lg: "none"}}>
            <IconButton aria-label={"Menu"} colorScheme={"brandPrimary"} size={"lg"} onClick={onHamburgerMenuOpen}>
                <FiMenu/>
            </IconButton>
        </Box>

    </>
}


const Index: NextPage = () => {

    return <>
        <Flex bg={"brandPrimary.300"} color={"white"} px={"1rem"} py={".5rem"} alignItems={"center"} justify={"space-between"} >
            <Flex alignItems={"center"}  gridGap={".3rem"} fontSize={"3xl"}>
                <FaPhoneAlt/>
                <Flex flexDirection={"column"}>
                    <a href={"tel:+919000900009"}><Text fontSize={"md"}>+91-9000900009</Text></a>
                    <a href={"tel:+919000900009"}><Text fontSize={"md"}>+91-9000900009</Text></a>
                </Flex>
            </Flex>
            <Flex gridGap={"1rem"} fontSize={"2xl"}>
                <AiFillFacebook/>
                <AiFillInstagram/>
                <IoLogoYoutube/>
            </Flex>
        </Flex>
        <Flex alignItems={"center"} justify={"space-between"} p={"1rem"}>
            <Box w={["50px", "80px"]} h={["50px", "80px"]}>
                <img src={"https://i.ibb.co/yVyxj8v/medium-logo.png"} width={"100%"} height={"100%"}/>
            </Box>
            <Flex d={{base:"flex", lg: "none"}} alignItems={"center"} gridGap={"1rem"}>
                <BaseNavbar/>
            </Flex>
            <Flex d={{base: "none", lg: "flex"}} alignItems={"center"} gridGap={".4rem"}>
                <Box _hover={{bg:"brandPrimary.50", color:"brandPrimary.600"}} cursor={"pointer"} borderRadius={"6px"} px={"1rem"} py={".5rem"}>
                    <Text fontSize={"lg"}>
                        Home
                    </Text>
                </Box>
                <Box _hover={{bg:"brandPrimary.50", color:"brandPrimary.600"}} cursor={"pointer"} borderRadius={"6px"} px={"1rem"} py={".5rem"}>
                    <Text fontSize={"lg"}>
                        Our Programs
                    </Text>
                </Box>
                <Box _hover={{bg:"brandPrimary.50", color:"brandPrimary.600"}} cursor={"pointer"} borderRadius={"6px"} px={"1rem"} py={".5rem"}>
                    <Text fontSize={"lg"}>
                        Contact us
                    </Text>
                </Box>
                <Button colorScheme={"brandPrimary"} size={"lg"}> Book your seat now </Button>

            </Flex>
        </Flex>
    </>
}

export default Index;