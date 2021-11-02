import type { NextPage } from 'next'
import Head from 'next/head'
import {Box, Text, Heading} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>John Sede</title>
        <meta name="description" content="John sede" />
      </Head>
        <Heading>I'm a Heading</Heading>
    </Box>
  )
}

export default Home
