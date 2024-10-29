import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavigationBar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div">
                    My Sticky AppBar
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
