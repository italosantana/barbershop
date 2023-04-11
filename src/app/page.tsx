"use client"

import { CustomButton } from './components/button/Button'
import React from 'react'
import Image from 'next/image';
import { Box, CssBaseline, Typography } from '@mui/material';
import theme from '@/styles/theme';
import { Logo } from './components/Logo';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: 'center',
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <Logo/>
          <Typography
            sx={{
              color: theme.palette.primary.light,
              fontWeight: 700,
              textAlign: 'center',
              mb: 1,
            }}
          >A solução que você procurava, Barbeiro!</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexDirection: "row",
              alignItems: "center",
              maxWidth: "350px",
              width: "100%",
              [theme.breakpoints.down('tablet')]: {
                flexWrap: "wrap",
                a: {
                  mt: 2,
                }
              }
            }}
          >

            <CustomButton href='/login'>Acesse sua conta</CustomButton>
            <CustomButton href='/register'>Registre sua conta</CustomButton>
          </Box>
        </Box>
    </React.Fragment >
  )
}
