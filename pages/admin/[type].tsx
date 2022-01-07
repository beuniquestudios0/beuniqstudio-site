import {NextPage} from "next";
import {useRouter} from "next/router";
import {
    Button, useDisclosure, useToast, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input, Tabs, TabList, TabPanels, Tab, TabPanel, Container, Flex, Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td, Badge, Link,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";

// CONFIGS
import supabase from "../../supabase";

// UTILS
import {getLists} from "utils/getList";

// TYPES
import PageWithLayoutType from "../../pageWithLayout";

// LAYOUT
import AdminLayout from "layout/admin";

const Admin: NextPage = () => {
    const [type, setType] = useState<"users" | "instructors" | "invalid">("users");
    const [code, setCode] = useState<string>("");
    const [tabIndex, setTabIndex] = useState(0)
    const [list, setList] = useState({
        users: [],
        instructors: []
    });
    const [isAuth, setIsAuth] = useState(false);

    const router = useRouter();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();



    useEffect(() => {
        const allowedTypes = ["users", "instructors"]

        if(!allowedTypes.includes(router.query.type as string)){
            setType("invalid");
            setTabIndex(0)
        }else {
            setType(router.query.type as "users" | "instructors");
            setTabIndex(router.query.type === "users" ? 0 : 1);
        }

        onOpen();
    }, [router]);


    const handleTabsChange = async(index: number) => {
        try{
            setTabIndex(index);
            const type = index ? "instructors" : "users";

            if(!list[type].length && isAuth) {
                const data = await getLists(index ? "instructors" : "users");
                setList({ ...list ,[type]: data});
            }

            return;

        }catch (error: any){
            toast({
                title: "Something went wrong.",
                description: "Seems like the server is down,please try again later.",
                status: "error",
                duration: 4000,
            })
            return;
        }
    }

    const handleVerification = async () => {
       try{
           if(code !== process.env.NEXT_PUBLIC_ADMIN_CODE as string){
               toast({
                   title: "Restricted page",
                   description: "The code you entered was invalid, this is a admin only page,please enter valid admin code.",
                   status: "error",
                   duration: 4000,
               })
               return;
           }

           setIsAuth(true);

           const data = await getLists(type === "invalid" ? "users" : type);

           // @ts-ignore
           setList({ ...list ,[type === "invalid" ? "users" : type]: data});
           setCode("");

           onClose();
       }catch (error: any){
           toast({
               title: "Something went wrong.",
               description: "Seems like the server is down,please try again later.",
               status: "error",
               duration: 4000,
           })
           return
       }

    }

    return <>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Admin verification</ModalHeader>
                <ModalBody>
                    <Input type={"text"} placeholder='Enter admin code.' value={code} onChange={(e:any) => setCode(e.target.value)} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme={"brandPrimary"} onClick={handleVerification}>Verify</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        <Flex>

        </Flex>
        <Container  maxW={"container.lg"}>
            <Heading as={"h4"} size={"lg"} my={"2rem"} >Admin panel</Heading>
            <Tabs variant='soft-rounded' colorScheme='brandPrimary' index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    <Tab>Users</Tab>
                    <Tab>Instructors</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Table size='sm'>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>Fullname</Th>
                                    <Th>Email</Th>
                                    <Th>Phone</Th>
                                    <Th>Instrument</Th>
                                    <Th>Date</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {list.users.length > 0 && list.users.map((user: any) => {
                                    const date = new Date(user.created_at);
                                    return <Tr>
                                        <Td>{user.id}</Td>
                                        <Td>{user.fullname}</Td>
                                        <Td>
                                            <a href={`mailto:${user.email}`} target="_top">
                                            {user.email}
                                            </a>
                                        </Td>
                                        <Td>
                                            <a href={`tel:+91${user.phone}`}>+91 {user.phone}</a>
                                        </Td>
                                        <Td><Badge colorScheme={"brandPrimary"} >{user.instrument}</Badge></Td>
                                        <Td>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</Td>
                                    </Tr>
                                })}
                            </Tbody>
                        </Table>
                    </TabPanel>
                    <TabPanel>
                        <Table size='sm'>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>Fullname</Th>
                                    <Th>Email</Th>
                                    <Th>Phone</Th>
                                    <Th>Resume</Th>
                                    <Th>Date</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {list.instructors.length > 0 && list.instructors.map((user: any) => {
                                    const date = new Date(user.created_at);
                                    return <Tr>
                                        <Td>{user.id}</Td>
                                        <Td>{user.fullname}</Td>
                                        <Td>
                                            <a href={`mailto:${user.email}`} target="_top">
                                                {user.email}
                                            </a>
                                        </Td>
                                        <Td>
                                            <a href={`tel:+91${user.phone}`}>+91 {user.phone}</a>
                                        </Td>
                                        <Td><Link href={user.resume} isExternal>Click here</Link></Td>
                                        <Td>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</Td>
                                    </Tr>
                                })}
                            </Tbody>
                        </Table>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    </>
}

(Admin as PageWithLayoutType).layout = AdminLayout;

export default Admin