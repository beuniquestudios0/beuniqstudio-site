import {NextPage} from "next";
import {Flex, Box, Heading, Text, Grid, Button} from "@chakra-ui/react";

// COMPONENT
import HeroImages from "component/hero/heroImages";

const Hero: NextPage = () => {
    return <>
        <Grid my={"3rem"} mx={["1rem", "3rem"]} templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}} gap={6}>
            <Box>
                <Heading d={{md: "none"}} size="xl">
                    1:1 Online MUSIC CLASSES
                    TAILOR-MADE for YOU.
                </Heading>
                <Heading d={{base: "none", md: "block"}} size="2xl">
                    1:1 Online MUSIC CLASSES
                    TAILOR-MADE for YOU.
                </Heading>
                <Text my={"1rem"} fontSize={"lg"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar non ligula sit amet ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu elit a metus mattis iaculis. Maecenas lectus ante, tincidunt sed ex in, feugiat hendrerit mi. Sed vitae fringilla orci. Praesent suscipit commodo metus eu finibus.                </Text>
                <Text my={"1rem"} fontSize={"lg"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar non ligula sit amet ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu elit a metus mattis iaculis. Maecenas lectus ante, tincidunt sed ex in, feugiat hendrerit mi. Sed vitae fringilla orci. Praesent suscipit commodo metus eu finibus.                </Text>
                <Button colorScheme={"brandPrimary"} size={"lg"}>
                    Book your seat now
                </Button>
            </Box>
            <Box>
                <Flex wrap={"wrap"} justify={"center"} alignItems={"center"} gridGap={"2rem"}>
                    <HeroImages src={"https://i.ibb.co/ZHxsZzL/paino.jpg"} alt={"Paino"}/>
                    <HeroImages src={"https://i.ibb.co/jvzsS8B/drums.jpg"} alt={"Drums"}/>
                    <HeroImages src={"https://i.ibb.co/5kTBQqR/guitar.jpg"} alt={"Guitar"}/>
                </Flex>
            </Box>
        </Grid>
    </>
}

export default Hero;