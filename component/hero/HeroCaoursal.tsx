import React from "react";
import {Box, Button, Flex, Heading, Image, Text, useBreakpointValue} from "@chakra-ui/react";
import Slider from "react-slick";


// STYLES
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCaoursal: React.FC = () => {

    const top = useBreakpointValue({ base: '50%', md: '50%' });
    const side = useBreakpointValue({ base: '0%', md: '40px' });
    const headingSize = useBreakpointValue({ base: 'xl', md: '4xl' });
    const textSize = useBreakpointValue({ base: 'xl', md: '2xl' });
    const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,

    };
    return <>
        <Box position={"relative"} height={{base: "100%", md:"400px", lg:"100vh"}} width={"100%"} overflow={"hidden"}>
            <Slider
                {...settings}

            >
                {[1, 2, 3].map(() => <Box w={"100%"} h={"100%"} position={"relative"}>
                    <Box zIndex={30} pos={"absolute"} width={"100%"} height={"100%"} background={"black"} opacity={"0.4"}/>
                    <Image src={"https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} height={"100%"} w={"100%"} objectFit={"cover"} objectPosition={"center"} />
                </Box>)}
            </Slider>
            <Box pos={"absolute"}
                 left={side}
                 top={top}
                 transform={'translate(0%, -50%)'}
                 zIndex={2}
                 width={"100%"}
            >
                <Flex justifyContent={"center"} gridGap={[".5rem","1rem"]} alignItems={"center"} flexDirection={"column"} color={"white"}>
                    <Heading as={"h1"} fontWeight={"bold"} size={headingSize}>Music For Everyone</Heading>
                    <Text fontSize={textSize}>Awaken the possibility</Text>
                    <Button colorScheme={"yellow"} size={buttonSize} variant={"solid"}>Start Learning</Button>
                </Flex>
            </Box>
        </Box>
    </>
}

export default HeroCaoursal;