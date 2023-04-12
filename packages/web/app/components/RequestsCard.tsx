import { Box, Typography } from "@mui/material"


export const RequestCard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: "column",
                border: "1px solid #FFF",
                borderRadius: "16px",
                width: "100%",
                maxWidth: "320px",
                height: "250px",
                mt: 2,
            }}
        >

            <Typography
                sx={{
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "33.6px",
                    color: "#E1E1E6",
                    textAlign: "center",
                    span: {
                        ml: 1,
                    }
                }}
            >
                Nome do cliente:
                <span>Flávio</span>
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "33.6px",
                    color: "#E1E1E6",
                    textAlign: "center",
                    span: {
                        ml: 1,
                    }
                }}
            >
                Valor:
                <span>R$30</span>
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "33.6px",
                    color: "#E1E1E6",
                    textAlign: "center",
                    span: {
                        ml: 1,
                    }
                }}
            >
                Serviços:
                <span>Corte simples</span>
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "33.6px",
                    color: "#E1E1E6",
                    textAlign: "center",
                    span: {
                        ml: 1,
                    }
                }}
            >
                Whatsapp:
                <span>55-8888-9999</span>
            </Typography>
        </Box>
    )
}