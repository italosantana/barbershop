import { Box, Typography } from "@mui/material"
import { RequestCard } from "./RequestsCard"
import { Logo } from "./Logo"
import theme from "@/styles/theme"


export const DashboardSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100vh",
            }}
        >
            <Logo />
            <Typography
                sx={{
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "33.6px",
                    color: theme.palette.primary.dark,
                    textAlign: "center",
                }}
            >Próximos clientes</Typography>
            <RequestCard />
            <RequestCard />
        </Box>
    )
}