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

const Tabla: NextPage = () => {
    return (
        <>
            <Head>
                <title>Tabla Training - BeUnique Studios</title>
                <meta name="description" content="Tabla Training" />
            </Head>
            <Hero type={"Tabla"} src={"https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"}/>
            <Description type={"Tabla"} />

        </>

    )
}

(Tabla as PageWithLayoutType).layout = DefaultLayout;

export default Tabla;
