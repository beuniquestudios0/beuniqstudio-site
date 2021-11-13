import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon, HStack,
} from '@chakra-ui/react';
import {useRadioGroup} from "@chakra-ui/radio";
import {ReactNode, useState} from "react";
import supabase from "../supabase";

// COMPONENTS
import RadioCard from "component/ServiceRadio";

// TYPES
import {Message} from "../types";

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];

interface USER {
    fullname: string,
    email:string,
    phone:string,
    instrument:string
}

export default function JoinOurTeam() {
    const [user, setUser] = useState<USER>({
        fullname: "",
        email:"",
        phone:"",
        instrument:""
    })

    const fontSize = useBreakpointValue({base: "lg", md: "2xl"})

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "react",
        onChange: (instrument: string) => setUser((user: USER) => ({...user, instrument})),
    })

    const group = getRootProps();

    const handleChange = (event: any) => {
        setUser((user: USER) => ({...user, [event.target.name]: event.target.value}))
    };

    const handleSubmit = async () => {
        try {
            const { data } = await supabase
                .from<USER & {id: number; created_at: string}>('users')
                .insert(user);

            console.log({data});
        }catch (error: any){
            console.log(error)
        }
    }

    return (
        <Box  position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack >
                    <Heading
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Join the BeUnique family now.
                    </Heading>
                    <Text fontSize={fontSize}>Join 100+ students learning music for the best instructors, with 1:1 teaching.</Text>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, red.400,pink.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            width={useBreakpointValue({ base: '44px', md: '60px' })}
                            height={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Book Your Seat Now
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            Fill the below form, and we will get in touch with you in few hours, to discuss more the On-boarding, and other process.
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <Input
                                placeholder="Full name"
                                bg={'gray.100'}
                                name={"fullname"}
                                value={user.fullname}
                                onChange={handleChange}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                placeholder="Email"
                                bg={'gray.100'}
                                name={"email"}
                                value={user.email}
                                onChange={handleChange}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                placeholder="Phone Number"
                                name={"phone"}
                                value={user.phone}
                                onChange={handleChange}
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Text>Select Your Instrument</Text>
                            <HStack {...group}>
                                {["Guitar", "Drums", "Paino"].map((value) => {
                                    const radio = getRadioProps({ value })
                                    return (
                                        <RadioCard key={value} {...radio}>
                                            {value}
                                        </RadioCard>
                                    )
                                })}
                            </HStack>
                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                zIndex={-20}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};