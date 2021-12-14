import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    useColorModeValue, UnorderedList, ListItem,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Button,
} from '@chakra-ui/react';
import React from "react";
import {useRouter} from "next/router";

const ServiceCards: React.FC<{title: string; src: string; time: string[], path: string}> = (props) => {
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
                    <Text color={'gray.500'}>
                        Class Timings
                    </Text>
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>Days</Th>
                                <Th>Hours</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Everyday</Td>
                                <Td>1 Hours</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Stack>
                <Center>
                    <Button onClick={() => router.push(`/${props.path}`)} margin={"1rem 0"} variant={"outline"} size={"sm"}  colorScheme={"brandPrimary"}>Explore</Button>
                </Center>
            </Box>
        </Center>
    );
}

export default ServiceCards;