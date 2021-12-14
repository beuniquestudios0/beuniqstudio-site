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

const CinematicVocal: NextPage = () => {
    return (
        <>
            <Head>
                <title>John Sede</title>
                <meta name="description" content="John sede" />
            </Head>
            <Hero type={"Cinematic Vocal"} src={"https://images.unsplash.com/photo-1554446422-d05db23719d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"}/>
            <Description type={"Cinematic Vocal"} />

        </>

    )
}

(CinematicVocal as PageWithLayoutType).layout = DefaultLayout;

export default CinematicVocal;
