import type { NextPage } from 'next'
import Head from 'next/head'
import {Box} from "@chakra-ui/react";
import {ReactChild} from "react";

// COMPONENTS
import Navbar from "component/navbar"
const AdminLayout: NextPage<{children: ReactChild}> = ({children}) => {
    return (
        <Box w={"full"}>
            <Head>
                <title>Be Unique Studios</title>
                <meta name="description" content="Be Unique Studios" />
            </Head>
            <Navbar isAdmin/>
            {children}
        </Box>
    )
}

export default AdminLayout
