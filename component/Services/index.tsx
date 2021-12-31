// COMPONENTS
import ServiceCards from "component/Services/Card";
import {Container, Grid, Heading, Stack, Text} from "@chakra-ui/react";

const Services = () => {
    return <>
        <Container maxW={"container.xl"}>
            <Stack spacing={2} align={'center'}>
                <Heading size={"2xl"} color={"brandPrimary.500"}>Training We Offer</Heading>
                <Text>We conduct classes on the below instruments.</Text>
            </Stack>
            <Grid gridGap={"1rem"} templateColumns={["1fr", "repeat(3, 1fr)"]}>
                <ServiceCards title={"Drums"} src={"https://images.unsplash.com/photo-1571327073757-71d13c24de30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"} time={["2", "2","2", "2","2", "2", "leave"]} />
                <ServiceCards title={"Piano"} src={"https://images.unsplash.com/photo-1479118013749-9f79d55a28d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} time={["2", "2","2", "2","2", "2", "leave"]} />
                <ServiceCards title={"Guitar"} src={"https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} time={["2", "2","2", "2","2", "2", "leave"]} />
                <ServiceCards title={"Tabla"} src={"https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"} time={["2", "2","2", "2","2", "2", "leave"]} />
                <ServiceCards title={"Voilin"} src={"https://images.unsplash.com/photo-1621368286550-f54551f39b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} time={["2", "2","2", "2","2", "2", "leave"]} />
                <ServiceCards title={"Logic Pro Music Production"} src={"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"} time={["2", "2","2", "2","2", "2", "leave"]} />
                <ServiceCards title={"Vocals"} src={"https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} time={["2", "2","2", "2","2", "2", "leave"]} />
            </Grid>
        </Container>
    </>
}

export default Services