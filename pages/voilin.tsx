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

const Voilin: NextPage = () => {
    return (
        <>
            <Head>
                <title>Voilin Training - BeUnique Studios</title>
                <meta name="description" content="Voilin Training" />
            </Head>
            <Hero type={"Voilin"} src={"https://images.unsplash.com/photo-1621368286550-f54551f39b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
            <Description type={"Voilin"} />

        </>

    )
}

(Voilin as PageWithLayoutType).layout = DefaultLayout;

export default Voilin;
