import {Container, Flex, Heading, Text} from "@chakra-ui/react";
import React from "react";

const Description:React.FC<{type: string}> = ({type}) => {
    return <Container maxW={"container.lg"}>
        <Heading margin={"2rem 0"}>Our {type} Training Program</Heading>
        <Flex pb={"1rem"} flexDirection={"column"} gridGap={"1rem"} fontSize={"lg"} fontWeight={"medium"} color={"gray.700"}>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at fermentum libero. Cras id mi eget nisi venenatis aliquet eu vel ligula. Donec porttitor accumsan erat, vel condimentum nisl molestie quis. Donec vitae metus dolor. In et enim ac ipsum sagittis sagittis vel eget ante. Phasellus eleifend et felis non mattis. Maecenas vulputate varius odio. Nunc mollis ac purus id lacinia. Sed vulputate congue sem. Nunc eu porttitor nunc. Nullam fermentum odio ac nunc accumsan commodo.
            </Text>
            <Text>
                Vestibulum ac dolor id magna aliquam commodo vitae vel odio. Donec mattis vel odio sed posuere. Pellentesque nec est porttitor, fermentum nibh cursus, dapibus quam. In diam lorem, fermentum in tempor id, egestas in ex. Mauris diam velit, pretium scelerisque velit auctor, rutrum blandit nisl. Mauris dictum magna nisi, et interdum nisi suscipit eu. Vestibulum non neque eget dui venenatis accumsan sed at leo.
            </Text>
            <Text>
                Curabitur ante dolor, eleifend id urna ut, sagittis dapibus lorem. Maecenas pellentesque, quam eu scelerisque mattis, augue ante faucibus nisl, et condimentum nulla neque vel elit. Sed fringilla eget enim nec aliquet. Mauris vitae turpis nunc. Phasellus lobortis dui in metus porttitor, sed vestibulum dolor laoreet. Donec congue mattis ex ut feugiat. Nunc non condimentum velit.
            </Text>
        </Flex>
    </Container>
}

export default Description;