"use client";

import { Container, CssBaseline } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import theme from '@/styles/theme';
import { DashboardSection } from './Dashboard';

export default function Page() {
    return (
        <React.Fragment>
            <Head>
                <title>Dashboard</title>
                <meta property="og:title" content="Dashboard page | Barbershop" key="title" />
            </Head>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ backgroundColor: theme.palette.secondary.main, }}>
                <DashboardSection />
            </Container>
        </React.Fragment>
    )
}
