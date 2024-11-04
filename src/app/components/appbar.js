import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

export default function NavigationBar() {
    return (
        <AppBar position="sticky">
            <Container sx={{ paddingBottom: 1, paddingTop: 1 }}>
                <Typography variant="h6">
                    My Sticky AppBar
                </Typography>
            </Container>
        </AppBar>
    );
}
