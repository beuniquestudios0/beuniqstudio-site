import {Heading, Text, Box, Image, Grid, Container, Flex} from "@chakra-ui/react";
import React from "react";

const Group: React.FC<{bg?: string}> = (props) => {
    return <Flex boxShadow={"xl"} position={"relative"} bg={"white"} padding={"1rem 0"} borderRadius={"10px"} flexDirection={"column"} border={"2px solid"} borderColor={"brandPrimary.50"} alignItems={"center"} gridGap={".5rem"}>
        <Box position={["relative","absolute"]}  top={["0","-7rem"]} w={"150px"} border={"2px solid"} borderColor={"brandPrimary.500"} height={"150px"} borderRadius={"50%"}>
            <Image border={"2px solid"} borderColor={"brandPrimary.500"} borderRadius={"50%"} src={"https://images.unsplash.com/photo-1595712874516-b2739ab4f924?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"} w={"100%"} height={"100%"} objectPosition={"top"} objectFit={"cover"} />
        </Box>
        <Heading mt={"2rem"} as={"h5"} fontSize={"2xl"}>Kids</Heading>
        <Text fontSize={"md"} textAlign={"center"} w={"75%"}>
            Our school is a solution for families who would like to expose their children to the world of music.
        </Text>
    </Flex>
}

const MusicGroups = () => {
    return <Box padding={"2rem 0"}>
        <Container maxW={"container.xl"}>
            <Heading color={"brandPrimary.500"} textAlign={"center"}>Music Groups</Heading>
            <Text fontSize={"xl"} fontWeight={"semibold"} fontStyle={"italic"} color={"brandPrimary.500"} textAlign={"center"}>for</Text>
            <Grid   mt={["1rem", "8rem"]} templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gridGap={"1rem"}>
                <Group/>
                <Group bg={"transparent"}/>
                <Group/>
            </Grid>
        </Container>
    </Box>
}



export default MusicGroups;