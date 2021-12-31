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
                               name,
                               title,
                           }: {
    name: string;
    title: string;
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
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
                    spacing={{ base: 10, md: 4, lg: 10 }}
                    justifyContent={"center"}
                >
                    <Teachers>
                        <TeachersContent>
                            <TeachersHeading>Guitar Instructor</TeachersHeading>
                            <TeachersText>
                                Sumantha Biswas is a guitar instructor with 8 years of experience.
                            </TeachersText>
                        </TeachersContent>
                        <TeachersAvatar
                            name={'Sumantha Biswas'}
                            title={'Music Teacher at DPS'}
                        />
                    </Teachers>
                    <Teachers>
                        <TeachersContent>
                            <TeachersHeading>Keyboard Instructor</TeachersHeading>
                            <TeachersText>
                                Anthony Bhaskar is a keyboard instructor with 6 years of experience.
                            </TeachersText>
                        </TeachersContent>
                        <TeachersAvatar
                            name={'Anthony Bhaskar'}
                            title={'Music Teacher at DPS'}
                        />
                    </Teachers>
                </Stack>
            </Container>
        </Box>
    );
}