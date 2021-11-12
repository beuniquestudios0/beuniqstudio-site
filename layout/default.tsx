import type { NextPage } from 'next'
import Head from 'next/head'
import {Box} from "@chakra-ui/react";
import {ReactChild} from "react";

// COMPONENTS
import Navbar from "component/navbar"
const DefaultLayout: NextPage<{children: ReactChild}> = ({children}) => {
    return (
        <Box w={"full"}>
            <Head>
                <title>John Sede</title>
                <meta name="description" content="John sede" />
            </Head>
            <Navbar/>
            {children}
        </Box>
    )
}

export default DefaultLayout
