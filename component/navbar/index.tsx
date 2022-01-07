import {NextPage} from "next";
import {FiMenu} from "react-icons/fi";
import {
    Box, Flex, Text, Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure, Button, IconButton, useBreakpointValue
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


const Index: NextPage<{isAdmin?:boolean}> = ({isAdmin}) => {
    const router = useRouter();

    const logoText = useBreakpointValue({base: "5px", md: "xs"})

    return <>
        <Flex zIndex={50} position={{base:"relative", lg: "absolute"}} w={"100%"} bg={{base: "brandPrimary.400", lg:"transparent"}} alignItems={"center"} justify={"space-between"} p={"1rem"}>
            <Flex flexDirection={"column"} w={["50px", "80px"]} h={["50px", "80px"]}>
                <Image src={"https://i.ibb.co/RNF7gR7/LOGO.png"} width={"100%"} height={"100%"} filter={`brightness(0) invert(${isAdmin ? 0 : 1})`}/>
                <Text fontSize={logoText} color={isAdmin ? "gray.700" : "white"}>(Since 2016)</Text>
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
                   <Link href={"/careers"}>
                        <Text fontWeight={"semibold"} fontSize={"lg"}>
                            Career
                        </Text>
                   </Link>
                </Box>

                {!isAdmin &&  <Button colorScheme={"brandPrimary"} size={"lg"} onClick={() => router.push("/booking")}
                > Book your seat now </Button>}

            </Flex>
        </Flex>
    </>
}

export default Index;