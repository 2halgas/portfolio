import React, { FC } from 'react';
import Head from 'next/head';

export const AppHead: FC = () => (
    <Head>
        <title>Zhalgas Khamidulla</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/images/logo.png" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="Zhalgas Khamidulla" />
        <meta property="og:description" content="Ready for work" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
    </Head>
);
