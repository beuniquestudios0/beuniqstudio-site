import {NextPage} from "next";
import {Box, Heading, Grid, Flex, Text} from "@chakra-ui/react";

const Why: NextPage = ( ) => {
    return <>
    <Box bg={"brandPrimary.50"} py={"2rem"} px={["1rem", "3rem"]}>
        <Heading textAlign={"center"}>WHY Be Unique Studios?</Heading>

        <Grid mt={"2rem"} templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={1}>
            <Flex _hover={{
                bg:"white",
                boxShadow:"xl",
                "& > div": {
                    bg: "brandPrimary.50"
                }
            }} p={"1rem"} borderRadius={"8px"} transition={"all .5s linear"} flexDirection={"column"} alignItems={"center"} justify={"center"} gridGap={".4rem"}>
                <Box w={"100px"} h={"100px"} bg={"white"} borderRadius={"50%"} p={"1rem"} transition={"all .5s linear"}>
                    <img src={"https://cdn-icons-png.flaticon.com/512/2883/2883939.png"} alt={"1:1"} style={{
                        width: "100%",
                        height: "100%"
                    }} />
                </Box>
                <Heading as={"h4"} size={"md"}textAlign={"center"}> 1-on-1 IS WHAT WE'RE ABOUT</Heading>
                <Text fontSize={"md"} textAlign={"center"}>We've believed that music is best taught 1-on-1 from the start. Our accountants  are convinced this makes little business sense, but hey we're still here 10 years in, and still committed to this ideal. It's how we're able to tailor-make our courses for you.
                </Text>
            </Flex><Flex _hover={{
                bg:"white",
                boxShadow:"xl",
                "& > div": {
                    bg: "brandPrimary.50"
                }
            }} p={"1rem"} borderRadius={"8px"} transition={"all .5s linear"} flexDirection={"column"} alignItems={"center"} justify={"center"} gridGap={".4rem"}>
                <Box w={"100px"} h={"100px"} bg={"white"} borderRadius={"50%"} p={"1rem"} transition={"all .5s linear"}>
                    <img src={"https://cdn-icons-png.flaticon.com/512/2883/2883939.png"} alt={"1:1"} style={{
                        width: "100%",
                        height: "100%"
                    }} />
                </Box>
                <Heading as={"h4"} size={"md"}textAlign={"center"}> 1-on-1 IS WHAT WE'RE ABOUT</Heading>
                <Text fontSize={"md"} textAlign={"center"}>We've believed that music is best taught 1-on-1 from the start. Our accountants  are convinced this makes little business sense, but hey we're still here 10 years in, and still committed to this ideal. It's how we're able to tailor-make our courses for you.
                </Text>
            </Flex><Flex _hover={{
                bg:"white",
                boxShadow:"xl",
                "& > div": {
                    bg: "brandPrimary.50"
                }
            }} p={"1rem"} borderRadius={"8px"} transition={"all .5s linear"} flexDirection={"column"} alignItems={"center"} justify={"center"} gridGap={".4rem"}>
                <Box w={"100px"} h={"100px"} bg={"white"} borderRadius={"50%"} p={"1rem"} transition={"all .5s linear"}>
                    <img src={"https://cdn-icons-png.flaticon.com/512/2883/2883939.png"} alt={"1:1"} style={{
                        width: "100%",
                        height: "100%"
                    }} />
                </Box>
                <Heading as={"h4"} size={"md"}textAlign={"center"}> 1-on-1 IS WHAT WE'RE ABOUT</Heading>
                <Text fontSize={"md"} textAlign={"center"}>We've believed that music is best taught 1-on-1 from the start. Our accountants  are convinced this makes little business sense, but hey we're still here 10 years in, and still committed to this ideal. It's how we're able to tailor-make our courses for you.
                </Text>
            </Flex>
        </Grid>
    </Box>
    </>
}

export default Why;