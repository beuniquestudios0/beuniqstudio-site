import {Box, Container, Grid, Heading, Image, Stack} from "@chakra-ui/react";

// COMP
import Item from "./Item";

const Gallery = () => {
    return <>
        <Container maxW={"container.xl"}>
            <Stack spacing={2} align={'center'}>
                <Heading size={"2xl"} color={"brandPrimary.500"}>Our Gallery</Heading>
            </Stack>

            <Grid
                gridTemplateColumns={{base: '1fr 1fr', lg: 'repeat(3, 1fr)'}}
                gridGap={'1rem'}
                my={'2rem'}
            >
                <Item url={'https://images.weserv.nl/?url=https://nonceblox.s3.ap-south-1.amazonaws.com/1.jpeg'} />
                <Item url={'https://images.weserv.nl/?url=https://nonceblox.s3.ap-south-1.amazonaws.com/2.jpeg'} />
                <Item url={'https://images.weserv.nl/?url=https://nonceblox.s3.ap-south-1.amazonaws.com/3.jpeg'} />
                <Item url={'https://images.weserv.nl/?url=https://nonceblox.s3.ap-south-1.amazonaws.com/4.jpeg'} />
                <Item url={'https://nonceblox.s3.ap-south-1.amazonaws.com/john_video.mp4'} isVideo />

            </Grid>

        </Container>
    </>
}

export default Gallery