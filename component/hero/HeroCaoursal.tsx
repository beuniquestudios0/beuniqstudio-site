import React from "react";
import {Box, Image} from "@chakra-ui/react";
import Slider from "react-slick";


// STYLES
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCaoursal: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,

    };
    return <>
        <Box height={{base: "100%", md:"400px", lg:"100vh"}} width={"100%"} overflow={"hidden"}>
            <Slider
                {...settings}

            >
                {[1, 2, 3].map(() => <Box w={"100%"} h={"100%"} position={"relative"}>
                    <Box zIndex={30} pos={"absolute"} width={"100%"} height={"100%"} background={"black"} opacity={"0.4"}/>
                    <Image src={"https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} height={"100%"} w={"100%"} objectFit={"cover"} objectPosition={"center"} />
                </Box>)}
            </Slider>
        </Box>
    </>
}

export default HeroCaoursal;