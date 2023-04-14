'use client';

import { Container, CssBaseline } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import theme from '@/styles/theme';
import { RegisterSection } from '../components/Register';

export default function Page() {
  return (
    <React.Fragment>
      <Head>
        <title>Register</title>
      </Head>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <RegisterSection />
      </Container>
    </React.Fragment>
  );
}
