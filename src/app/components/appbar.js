import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Link } from '@mui/material';

export default function NavigationBar() {
    return (
        <AppBar position="sticky">
            <Container sx={{ paddingBottom: 1, paddingTop: 1 }}>
                <Link href="/" sx={{ color: "white" }}>
                    <Typography variant="h6">
                        Home
                    </Typography>
                </Link>
            </Container>
        </AppBar>
    );
}
