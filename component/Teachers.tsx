import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

const Teachers = ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
};

const TeachersContent = ({ children }: { children: ReactNode }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TeachersHeading = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TeachersText = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TeachersAvatar = ({
                               src,
                               name,
                               title,
                           }: {
    src: string;
    name: string;
    title: string;
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

export default function TeachersList() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading color={"brandPrimary.500"}>Featured Teachers</Heading>
                    <Text>We have been working amazing instructors</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Teachers>
                        <TeachersContent>
                            <TeachersHeading>Guitar Instructor</TeachersHeading>
                            <TeachersText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                                neque sed imperdiet nibh lectus feugiat nunc sem.
                            </TeachersText>
                        </TeachersContent>
                        <TeachersAvatar
                            src={
                                'https://images.unsplash.com/photo-1598728637989-9c5de7532584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                            }
                            name={'John Bosco'}
                            title={'CEO at Be Unique Studios'}
                        />
                    </Teachers>
                    <Teachers>
                        <TeachersContent>
                            <TeachersHeading>Paino Instructor</TeachersHeading>
                            <TeachersText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                                neque sed imperdiet nibh lectus feugiat nunc sem.
                            </TeachersText>
                        </TeachersContent>
                        <TeachersAvatar
                            src={
                                'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
                            }
                            name={'John Bosco'}
                            title={'CEO at Be Unique Studios'}
                        />
                    </Teachers>
                    <Teachers>
                        <TeachersContent>
                            <TeachersHeading>Drums Instructor</TeachersHeading>
                            <TeachersText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                                neque sed imperdiet nibh lectus feugiat nunc sem.
                            </TeachersText>
                        </TeachersContent>
                        <TeachersAvatar
                            src={
                                'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80'
                            }
                            name={'John Bosco'}
                            title={'CEO at Be Unique Studios'}
                        />
                    </Teachers>
                </Stack>
            </Container>
        </Box>
    );
}