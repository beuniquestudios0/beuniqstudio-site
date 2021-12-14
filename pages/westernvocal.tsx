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

const WesternVocal: NextPage = () => {
    return (
        <>

            <Hero type={"Western Vocal"} src={"https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
            <Description type={"Western Vocal"} />

        </>

    )
}

(WesternVocal as PageWithLayoutType).layout = DefaultLayout;

export default WesternVocal;
