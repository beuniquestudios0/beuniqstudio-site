import {NextPage} from "next";
import {Badge, Box, Button, Center} from "@chakra-ui/react";

const HeroImages: NextPage<{src: string, alt: string}> = ({src, alt}) => {
    return <>
        <Box boxShadow={"2xl"} position={"relative"} w={["100%", "150px", "300px"]} h={["200px"]} borderRadius={"8px"}>
            <Box  position={"absolute"} w={"100%"} h={"100%"} bg={"rgb(0 0 0 / 20%)"} zIndex={"10"} borderRadius={"8px"}/>
            <img
                {...{alt, src}}
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px"
            }} />
            <Badge position={"absolute"} top={"4px"} left={"4px"} zIndex={"20"} fontSize={"2xl"} letterSpacing={"1px"} variant="solid" colorScheme="gray">{alt}</Badge>
            <Center>
                <Button position={"absolute"} bottom={"-10px"} colorScheme={"brandPrimary"} w={"80%"} zIndex={"20"} >Learn More</Button>
            </Center>
        </Box>
    </>
}

export default HeroImages;