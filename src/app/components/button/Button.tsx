'use client';
import { Button } from "@mui/material"

type Props = {
    onClick?: (e?: any) => void;
    href?: string;
    children?: React.ReactNode;
    sx?: any;
}

export const CustomButton = ({ children, href, sx, onClick }: Props) => {
    return (
        <Button
            href={href}
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