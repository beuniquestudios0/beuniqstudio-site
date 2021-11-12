import {NextPage} from "next";
import dynamic from 'next/dynamic'
import {Flex, Box, Heading, Text, Grid, Button, Image} from "@chakra-ui/react";

// COMPONENT
const HeroCaoursal = dynamic(() => import('component/hero/HeroCaoursal'))


const Hero: NextPage = () => {
    return <>
        {typeof window !== "undefined" && <HeroCaoursal />}
    </>
}

export default Hero;