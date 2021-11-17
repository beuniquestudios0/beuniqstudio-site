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

const LogicPro: NextPage = () => {
    return (
        <>
            <Head>
                <title>Logic Pro Music Production Training - BeUnique Studios</title>
                <meta name="description" content="Logic Pro Music Production Training" />
            </Head>
            <Hero type={"Logic Pro Music Production"} src={"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"}/>
            <Description type={"Logic Pro Music Production"} />

        </>

    )
}

(LogicPro as PageWithLayoutType).layout = DefaultLayout;

export default LogicPro;
