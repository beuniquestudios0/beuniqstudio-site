import type { NextPage } from 'next'
import Head from 'next/head'
import {Box, Text, Heading} from "@chakra-ui/react";

// COMPONENTS
import Navbar from "component/navbar"
const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>John Sede</title>
        <meta name="description" content="John sede" />
      </Head>
        <Navbar/>
    </Box>
  )
}

export default Home
