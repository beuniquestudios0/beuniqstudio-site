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
    Icon, HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast, IconProps
} from '@chakra-ui/react';
import {useRadioGroup} from "@chakra-ui/radio";
import {AiOutlineArrowLeft} from "react-icons/ai";
import React, {ReactNode, SyntheticEvent, useState} from "react";
import supabase from "../supabase";
import Lottie from "react-lottie";
import animationData from "assets/lottie/success_lottie.json";
import {useRouter} from "next/router";


// COMPONENTS
import RadioCard from "component/ServiceRadio";

// CONFIGS
import {sendMail} from "../configs/mail";
import axios from "axios";

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

const  JoinOurTeam = () => {
    const [user, setUser] = useState<USER>({
        fullname: "",
        email:"",
        phone:"",
        instrument:"Guitar"
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const router = useRouter();


    const fontSize = useBreakpointValue({base: "lg", md: "2xl"});
    const size = useBreakpointValue({ base: 'md', md: 'lg' });


    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "react",
        onChange: (instrument: string) => setUser((user: USER) => ({...user, instrument})),
    })

    const group = getRootProps();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleChange = (event: any) => {
        setUser((user: USER) => ({...user, [event.target.name]: event.target.value}))
    };

    const handleSubmit = async () => {

        try {
            let error = "";
            const  email =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const phone =  /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/;

            Object.entries(user).map((entry: string[]) => {
                if(!entry[1]){
                    error = `${entry[0]} field is required`;
                    return;
                }

                if(entry[0] === "email"){
                    if(!email.test(entry[1])) {
                        error = `please enter valid ${entry[0]}`;
                    }
                    return;
                }

                if(entry[0] === "phone"){
                    if(!phone.test(entry[1])) {
                        error = `please enter valid ${entry[0]}`;
                    }
                    return;
                }
            });

            if(error){
                toast({
                    status: "error",
                    title: `${error}`,
                    description: `Please fill the ${error} field to proceed further.`,
                    duration: 2500,
                    isClosable: true,
                })
                return;
            }

            const { data } = await supabase
                .from<USER & {id: number; created_at: string}>('users')
                .insert(user);
            setUser({
                fullname:"",
                email:"",
                phone:"",
                instrument:"Guitar"
            });
            onOpen();
            await axios({
                method: "POST",
                url: "/api/mail",
                data: {type: "User"}
            })

        }catch (error: any){
            toast({
                status: "error",
                title: "Something went wrong, try again.",
                isClosable: true,
                duration: 2000
            })
        }
    }

    return (
        <Box  position={'relative'}>
            <Button onClick={() => router.push("/")} d={["none", "block"]} position={"absolute"} top={8} right={10} leftIcon={<AiOutlineArrowLeft/>} variant={"outline"} colorScheme={"brandPrimary"}>
                Go back
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Details Submitted.</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box textAlign="center" px={6}>
                            <Lottie options={defaultOptions} height={200} width={200} />
                            <Heading as="h2" size="xl">
                                We Received Your Details.
                            </Heading>
                            <Text fontWeight={"semibold"} color={'gray.500'}>
                               Thank you for your interest. We will get in touch with in few hours.
                            </Text>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="brandPrimary" variant={"ghost"} mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack >
                    <Heading
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Join the BeUnique family now.
                    </Heading>
                    <Text fontSize={fontSize}>Join 100+ students learning music from the best instructors, with 1:1 teaching.</Text>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={size}
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
                            width={{ base: '44px', md: '60px' }}
                            height={{ base: '44px', md: '60px' }}
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
                    boxShadow={"lg"}
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
                                required
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
                                required
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
                                required
                            />
                            <Text>Select Your Instrument</Text>
                            <Flex gridGap={"10px"} flexWrap={"wrap"} {...group}>
                                {["Guitar", "Drums", "Paino", "Voilin", "Tabla", "Logic Pro", "Vocals"].map((value) => {
                                    const radio = getRadioProps({ value })
                                    return (
                                        <RadioCard key={value} {...radio}>
                                            {value}
                                        </RadioCard>
                                    )
                                })}
                            </Flex>
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

                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                zIndex={-10}
                style={{ filter: 'blur(70px)' }}
            />

        </Box>
    );
}

export default JoinOurTeam;

export const Blur = (props: IconProps) => {
    const width = useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' });
    const zIndex = useBreakpointValue({ base: -1, md: -1, lg: 0 });
    return (
        <Icon
            width={width}
            zIndex={zIndex}
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
