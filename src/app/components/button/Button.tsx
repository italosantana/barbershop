'use client';
import { Button } from "@mui/material"

type Props = {
    onClick?: (e?: any) => void;
    children?: React.ReactNode;
    sx?: any;
}

export const CustomButton = ({ children, sx, onClick }: Props) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                color: '#5C5A4E',
                backgroundColor: "#E6EEDE",
                '&:hover': {
                    backgroundColor: "#ABB3A3",
                },
                ...sx,
            }}
        >
            {children}
        </Button>
    )
}