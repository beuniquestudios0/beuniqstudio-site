import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    List, ListItem, ListIcon, OrderedList, UnorderedList,
    useColorModeValue, Image, Button, Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {GrLocation, GrPhone, GrMailOption} from "react-icons/gr";
import {useRouter} from "next/router";

const SocialButton = ({
                          children,
                          label,
                          href,
                      }: {
    children: ReactNode;
    label: string;
    href: string;
}) => {

    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    const router = useRouter();

    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '1fr 2fr 1fr' }}
                    alignItems={"center"}

                    spacing={8}>
                    <Stack spacing={6}>
                        <Box width={"100px"} height={"120px"}>
                            <Image src={"https://i.ibb.co/RNF7gR7/LOGO.png"}  width={"100%"} height={"100%"}/>
                        </Box>
                        <Text fontSize={'sm'}>
                            © {new Date().getFullYear()} BeUnique Studios. All rights reserved
                        </Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Contact us</ListHeader>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={GrLocation} color="green.500" />
                                no 21, 34th cross JP nagar, near Jp nagar, bangalore: 560023
                            </ListItem>
                            <ListItem>
                                <ListIcon as={GrMailOption} color="green.500" />
                                beuniquestudios@gmail.com
                            </ListItem>
                            <ListItem>
                                <ListIcon as={GrPhone} color="green.500" />
                                + 91 90000 00000
                            </ListItem>
                            <ListItem>
                                <ListIcon as={GrPhone} color="green.500" />
                                + 91 90000 00000
                            </ListItem>
                        </List>
                    </Stack>
                    <Button onClick={() => router.push("/booking")} colorScheme={"brandPrimary"} size={"lg"}>
                        Book Your Seat Now
                    </Button>
                </SimpleGrid>
            </Container>
        </Box>
    );
}