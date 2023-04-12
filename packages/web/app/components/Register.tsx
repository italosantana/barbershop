"use client";

import { Box, Input, Typography } from "@mui/material"
import { CustomButton } from "./button/Button"
import theme from "@/styles/theme"
import { Logo } from "./Logo";

export const RegisterSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: 'center',
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                maxWidth: "1200px",
                backgroundColor: theme.palette.secondary.main,
            }}
        >
            <Logo />
            <Box
                sx={{
                    border: "1px solid #FFF",
                    borderRadius: "16px",
                    height: "60%",
                    width: "100%",
                    maxWidth: "391px",
                    justifyContent: "center",
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    alignItems: 'center',
                    flexDirection: "column",
                    [theme.breakpoints.down('mobile')]: {
                        maxWidth: "88vw",
                        button: {
                            maxWidth: "70vw",
                            mb: 2,
                        }
                    }
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Roboto",
                        fontWeight: "700",
                        fontSize: "24px",
                        lineHeight: "33.6px",
                        color: "#E1E1E6",
                        textAlign: "center",
                        m: '19px',
                    }}
                >Criar sua conta</Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Input
                        sx={{
                            border: '1px solid #FFF',
                            borderRadius: 1,
                            color: '#8D8D99',
                            height: "56px",
                            width: "327px",
                            pl: "27px",
                            [theme.breakpoints.down('mobile')]: {
                                maxWidth: "70vw"
                            }
                        }}
                        disableUnderline
                        placeholder="Nome da barbearia"
                    />
                    <Input
                        sx={{
                            border: '1px solid #FFF',
                            borderRadius: 1,
                            mt: '27px',
                            color: '#8D8D99',
                            height: "56px",
                            width: "327px",
                            pl: "27px",
                            [theme.breakpoints.down('mobile')]: {
                                maxWidth: "70vw"
                            }
                        }}
                        disableUnderline
                        placeholder="Senha"
                    />
                    <Input
                        sx={{
                            border: '1px solid #FFF',
                            borderRadius: 1,
                            mt: '27px',
                            color: '#8D8D99',
                            height: "56px",
                            width: "327px",
                            pl: "27px",
                            [theme.breakpoints.down('mobile')]: {
                                maxWidth: "70vw"
                            }
                        }}
                        disableUnderline
                        placeholder="Email"
                    />
                    <Input
                        sx={{
                            border: '1px solid #FFF',
                            borderRadius: 1,
                            mt: '27px',
                            mb: "24px",
                            color: '#8D8D99',
                            height: "56px",
                            width: "327px",
                            pl: "27px",
                            [theme.breakpoints.down('mobile')]: {
                                maxWidth: "70vw"
                            }
                        }}
                        disableUnderline
                        placeholder="Whatsapp"
                    />
                </Box>
                <CustomButton sx={{ maxWidth: "327px", width: "100%" }}>ACESSAR</CustomButton>
            </Box>
        </Box>
    )
}