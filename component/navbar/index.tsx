import {NextPage} from "next";
import {FiMenu} from "react-icons/fi";
import {
    Box, Flex, Text, Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure, Button, IconButton
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link"

// COMPONENTS
import HamburgerMenu from "component/navbar/hamburgerMenu";


const BaseNavbar = () => {
    const { isOpen: isHamburgerMenuOpen, onOpen: onHamburgerMenuOpen, onClose: onHamburgerMenuClose } = useDisclosure();

    const router = useRouter();

    useEffect(() => {
        onHamburgerMenuClose();
    },[router.pathname]);

    return <>
        <HamburgerMenu isOpen={isHamburgerMenuOpen}  onClose={onHamburgerMenuClose}/>

        <Box d={{lg: "none"}}>
            <IconButton aria-label={"Menu"} colorScheme={"gray"} onClick={onHamburgerMenuOpen}>
                <FiMenu/>
            </IconButton>
        </Box>

    </>
}


const Index: NextPage = () => {
    const router = useRouter();

    return <>
        <Flex zIndex={50} position={{base:"relative", lg: "absolute"}} w={"100%"} bg={{base: "brandPrimary.400", lg:"transparent"}} alignItems={"center"} justify={"space-between"} p={"1rem"}>
            <Flex flexDirection={"column"} w={["50px", "80px"]} h={["50px", "80px"]}>
                <Image src={"https://i.ibb.co/RNF7gR7/LOGO.png"} width={"100%"} height={"100%"} filter={"brightness(0) invert(1)"}/>
                <Text fontSize={"xs"} color={"white"}>(Since 2016)</Text>
            </Flex>
            <Flex d={{base:"flex", lg: "none"}} alignItems={"center"} gridGap={"1rem"}>
                <BaseNavbar/>
            </Flex>
            <Flex d={{base: "none", lg: "flex"}} alignItems={"center"} gridGap={".4rem"} color={{base: "default", lg: "white"}}>
                <Box transition={"all .3s linear"} _hover={{bg:"brandPrimary.50", color:"brandPrimary.600"}} cursor={"pointer"} borderRadius={"6px"} px={"1rem"} py={".5rem"}>
                   <Link href={"/"}>
                        <Text fontWeight={"semibold"} fontSize={"lg"}>
                            Home
                        </Text>
                   </Link>
                </Box>
                <Box transition={"all .3s linear"} _hover={{bg:"brandPrimary.50", color:"brandPrimary.600"}} cursor={"pointer"} borderRadius={"6px"} px={"1rem"} py={".5rem"}>
                    <Menu>
                        <MenuButton as={Text} fontWeight={"semibold"}>
                            Our Training
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => router.push("/guitar")}  color={"heading"}>Guitar</MenuItem>
                            <MenuItem onClick={() => router.push("/paino")}  color={"heading"}>Paino</MenuItem>
                            <MenuItem onClick={() => router.push("/drums")}  color={"heading"}>Drums</MenuItem>
                            <MenuItem onClick={() => router.push("/tabla")}  color={"heading"}>Tabla</MenuItem>
                            <MenuItem onClick={() => router.push("/voilin")}  color={"heading"}>Voilin</MenuItem>
                            <MenuItem onClick={() => router.push("/logicpro")}  color={"heading"}>Music Production In Logic Pro</MenuItem>
                            <MenuItem onClick={() => router.push("/cinematicvocal")}  color={"heading"}>Cinematic Vocals</MenuItem>
                            <MenuItem onClick={() => router.push("/westernvocal")}  color={"heading"}>Western Vocals</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Button colorScheme={"brandPrimary"} size={"lg"} onClick={() => router.push("/booking")}
                > Book your seat now </Button>

            </Flex>
        </Flex>
    </>
}

export default Index;