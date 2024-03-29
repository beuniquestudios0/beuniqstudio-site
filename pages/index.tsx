import type { NextPage } from 'next'
import Head from 'next/head'
import {Box, Text, Heading} from "@chakra-ui/react";

// COMPONENTS
import Hero from "component/hero";
import Why from "component/why";
import PrivateLesson from "component/PrivateLesson";
import SummerCamp from "component/SummerCamp";
import MusicGroups from "component/MusicGroups";
import TeachersList from "component/Teachers";
import Footer from "component/Footers";
import Services from "component/Services";
import Gallery from "component/Gallery";

// LAYOUT
import DefaultLayout from "layout/default";

// TYPES
import PageWithLayoutType from "../pageWithLayout";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>BeUnique Studios</title>
        <meta name="description" content="Be Unique Studios" />
      </Head>
      <Hero/>
      <PrivateLesson/>
      <SummerCamp/>
      <Services/>
      <Gallery />
      <Why/>
      <TeachersList/>
      <Footer/>
    </Box>

  )
}

(Home as PageWithLayoutType).layout = DefaultLayout;

export default Home
