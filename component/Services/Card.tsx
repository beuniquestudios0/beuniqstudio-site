import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
    useColorModeValue,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td, Flex, Button,
} from '@chakra-ui/react';
import React from "react";
import {useRouter} from "next/router";
import {BsCalendar3} from "react-icons/bs";
import {BiTimeFive} from "react-icons/bi";

const ServiceCards: React.FC<{title: string; src: string; time: string[]}> = (props) => {
    const router = useRouter();
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={props.src}
                        layout={'fill'}
                        height={"100%"}
                        width={"100%"}
                        objectFit={"cover"}
                    />
                </Box>
                <Stack>

                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {props.title}
                    </Heading>
                    <Flex flexDirection={"column"} color={"brandPrimary.500"} fontWeight={"semibold"}>
                        <Flex alignItems={"center"} gridGap={"10px"}>
                            <BsCalendar3 />
                            <Text color={"gray.600"}>Everyday</Text>
                        </Flex>
                        <Flex alignItems={"center"} gridGap={"10px"}>
                            <BiTimeFive/>
                            <Text color={"gray.600"}>1 Hour</Text>
                        </Flex>
                    </Flex>
                    <Center>
                        <Button onClick={() => router.push(`/booking`)} variant={"outline"} size={"sm"}  colorScheme={"brandPrimary"}>Book your seat now</Button>
                    </Center>
                </Stack>
            </Box>
        </Center>
    );
}

export default ServiceCards;