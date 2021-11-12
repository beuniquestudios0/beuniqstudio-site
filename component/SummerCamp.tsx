import {Box, Container, Flex, Image, Text, Heading, Button} from "@chakra-ui/react";
import React from "react";

// ASSET
import ChilderenPlaylingBlob from "../assets/svgs/ChilderenPlaylingBlob";
import ChildrenPlayling2 from "../assets/svgs/ChildrenPlayling2";

const SummerCamp = () => {
    return <>
        <Box margin={"2rem 0"}>
            <Container maxW={"container.xl"}>
                <Flex flexDirection={["column", "row"]} bg={"white"} p={"1rem"} justifyContent={"center"}  alignItems={"center"} gridGap={"1rem"} w={"100%"}>
                    <Box  w={["100%", "60%", "50%"]} h={["100%", "400px"]}>
                        <ChilderenPlaylingBlob width={"100%"} height={"100%"}/>
                    </Box>
                    <Flex position={"relative"} bg={"white"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}  gridGap={".3rem"} w={["100%", "40%", "50%"]}  >
                        <Flex zIndex={20} flexDirection={"column"} justifyContent={"center"} textAlign={{base: "left", lg:"center"}} gridGap={".3rem"}  w={["100%"]} >
                            <Heading color={"brandPrimary.500"} as={"h3"}>
                                Summer Camp for Students
                            </Heading>
                            <Text fontWeight={"medium"} mt={"1rem"}>
                                We offers full-day and half-day music camps for kids of all ages and skill levels – including beginners!
                            </Text>
                            <Text fontWeight={"medium"}>
                                Summer camps give students an opportunity to focus on one instrument or genre for a whole week.
                            </Text>
                            <Box mt={"1rem"}>
                                <Button variant={"outline"} colorScheme={"brandPrimary"}>
                                    Learn More
                                </Button>
                            </Box>
                        </Flex>
                    </Flex>
                    <Box d={{base: "none", lg:"block"}} w={["100%","50%"]} h={["100%", "400px"]}>
                        <ChildrenPlayling2 width={"100%"} height={"100%"}/>
                    </Box>
                </Flex>
            </Container>
        </Box>
    </>
}

export default SummerCamp;