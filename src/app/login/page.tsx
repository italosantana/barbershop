"use client";

import { Container, CssBaseline } from '@mui/material'
import Head from 'next/head'
import { LoginSection } from './Login'
import React from 'react'
import theme from '@/styles/theme';

export default function Page() {
    return (
        <React.Fragment>
            <Head>
                <title>Login</title>
                <meta property="og:title" content="Login page | Barbershop" key="title" />
            </Head>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ backgroundColor: theme.palette.secondary.main, }}>
                <LoginSection />
            </Container>
        </React.Fragment>
    )
}
