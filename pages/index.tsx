import type { NextPage } from 'next'
import Head from 'next/head'
import {Box, Text, Heading} from "@chakra-ui/react";

// COMPONENTS
import Hero from "component/hero";
import Why from "component/why";
import PrivateLesson from "component/PrivateLesson";
import SummerCamp from "component/SummerCamp";

// LAYOUT
import DefaultLayout from "layout/default";

// TYPES
import PageWithLayoutType from "../pageWithLayout";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>John Sede</title>
        <meta name="description" content="John sede" />
      </Head>
      <Hero/>
      <PrivateLesson/>
      <SummerCamp/>
    </Box>

  )
}

(Home as PageWithLayoutType).layout = DefaultLayout;

export default Home
