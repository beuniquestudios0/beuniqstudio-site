import type { NextPage } from 'next'
import Head from 'next/head'

// COMPONENTS
import Hero from "component/Guitar/Hero";
import Description from "component/Guitar/Description";


// LAYOUT
import DefaultLayout from "layout/default";

// TYPES
import PageWithLayoutType from "../pageWithLayout";
import React from "react";

const Drums: NextPage = () => {
    return (
        <>
            <Head>
                <title>John Sede</title>
                <meta name="description" content="John sede" />
            </Head>
            <Hero type={"Drums"} src={"https://images.unsplash.com/photo-1571327073757-71d13c24de30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"}/>
            <Description type={"Drums"} />

        </>

    )
}

(Drums as PageWithLayoutType).layout = DefaultLayout;

export default Drums;
