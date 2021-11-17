import {Box, Button, Flex, Heading, Image, Text, useBreakpointValue} from "@chakra-ui/react";
import React from "react";

const Hero: React.FC<{type: string, src: string}> = ({type, src}) => {
    const top = useBreakpointValue({ base: '50%', md: '50%' });
    const side = useBreakpointValue({ base: '18%', md: '10%', lg: "30%"});
    const headingSize = useBreakpointValue({ base: 'xl', md: '4xl' });
    const textSize = useBreakpointValue({ base: 'xl', md: '2xl' });
    const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

    return <>
        <Box position={"relative"} height={{base: "100%", md:"400px", lg:"100vh"}} width={"100%"}>
            <Box zIndex={30} pos={"absolute"} width={"100%"} height={"100%"} background={"black"} opacity={"0.4"}/>
            <Image src={src} width={"100%"} height={"100%"} />

            <Box pos={"absolute"}
                 left={side}
                 top={top}
                 transform={'translate(0%, -50%)'}
                 zIndex={40}
            >
                <Flex justifyContent={"center"} gridGap={[".5rem","1rem"]} alignItems={"center"} flexDirection={"column"} color={"white"}>
                    <Heading as={"h1"} fontWeight={"bold"} size={headingSize}>Our {type} Training</Heading>
                    <Button colorScheme={"yellow"} size={buttonSize} variant={"solid"}>Start Learning</Button>
                    <Text fontSize={textSize}>Batches starting soon</Text>
                </Flex>
            </Box>
        </Box>
    </>
}

export default Hero;