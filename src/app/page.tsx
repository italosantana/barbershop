"use client"

import { CustomButton } from './components/button/Button'
import React from 'react'
import Image from 'next/image';
import { Box, CssBaseline, Typography } from '@mui/material';
import theme from '@/styles/theme';

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
            maxWidth: "1200px",
            width: "100%",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <Image src={'/logo.png'} alt="logo barbershop business" width={220} height={220} />
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
                button: {
                  mt: 2,
                }
              }
            }}
          >

            <CustomButton>Acesse sua conta</CustomButton>
            <CustomButton>Registre sua conta</CustomButton>
          </Box>
        </Box>
    </React.Fragment >
  )
}
