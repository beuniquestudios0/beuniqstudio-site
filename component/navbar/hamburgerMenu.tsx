import {NextPage} from "next";
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay, Flex, Text,
    DrawerHeader, Button
} from "@chakra-ui/react";
import {AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import {IoLogoYoutube} from "react-icons/io";
import React from "react";

const HamburgerMenu: NextPage<{isOpen: boolean, onClose: () => void}> = ({isOpen, onClose}) => {
    return <>
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader >
                    <Flex gridGap={"1rem"} fontSize={"2xl"}>
                        <AiFillFacebook/>
                        <AiFillInstagram/>
                        <IoLogoYoutube/>
                    </Flex>
                </DrawerHeader>

                <DrawerBody>

                <Flex flexDirection={"column"}  gridGap={".1rem"}>
                    <Box _active={{bg:"brandPrimary.50", color:"brandPrimary.600"}} borderRadius={"6px"} p={".5rem"}>
                        <Text fontSize={"lg"}>
                            Home
                        </Text>
                    </Box>
                    <Box _active={{bg:"brandPrimary.50", color:"brandPrimary.600"}} borderRadius={"6px"} p={".5rem"}>
                        <Text fontSize={"lg"}>
                            Contact us
                        </Text>
                    </Box>
                </Flex>

                <Button mt={"1rem"} w={"100%"} colorScheme={"brandPrimary"}>Book your seat now</Button>

                </DrawerBody>

            </DrawerContent>
        </Drawer>
    </>
};

export default HamburgerMenu;