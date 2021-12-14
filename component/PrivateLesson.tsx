import {Button, Flex, Heading, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";

const PrivateLesson = () => {
    const router = useRouter()
    return <>
    <Flex gridGap={".3rem"} background={"linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%)"} color={"white"} h={"100%"} padding={"2rem 0"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Heading>
            Private Lessons
        </Heading>
        <Text textAlign={"center"}>
            We offer music education for individuals of just about every age and skill level.
        </Text>
        <Button  onClick={() => router.push("/booking")} colorScheme={"white"} variant={"outline"}>
            Learn More
        </Button>
    </Flex>
    </>
}
export default PrivateLesson