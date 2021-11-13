import {Box, Container, Flex, Image, Text, Heading, Button, Link, Center} from "@chakra-ui/react";
import React from "react";

// ASSET
import ChilderenPlaylingBlob from "../assets/svgs/ChilderenPlaylingBlob";
import ChildrenPlayling2 from "../assets/svgs/ChildrenPlayling2";

const SummerCamp = () => {
    return <Box>
        <Container margin={"3rem 0"} maxW={"container.xl"}>
            <Center>
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between">
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            height={["200px", "400px"]}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}
                            borderRadius="20px"
                            marginTop="5%">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    borderRadius="20px"
                                    src={
                                        'https://images.unsplash.com/photo-1475275166152-f1e8005f9854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                    width={"100%"}
                                    height={"100%"}

                                />
                            </Link>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={'radial(orange.600 1px, transparent 1px)'}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>
                        {/*<BlogTags tags={['Engineering', 'Product']} />*/}
                        <Heading marginTop="1" color={"brandPrimary.500"}>
                            1:1 Online Music Classes
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={'gray.700'}
                            fontSize="lg">
                            We offers full-day and half-day music camps for kids of all ages and skill levels – including beginners!
                        </Text>

                        <Text
                            as="p"
                            marginTop="2"
                            color={'gray.700'}
                            fontSize="lg">
                            Summer camps give students an opportunity to focus on one instrument or genre for a whole week
                        </Text>
                        <Box marginTop={"1rem"}>
                            <Button variant={"outline"} colorScheme={"brandPrimary"}>Learn More</Button>
                        </Box>
                    </Box>
                </Box>
            </Center>
        </Container>
    </Box>
}

export default SummerCamp;