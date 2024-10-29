import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid2 from '@mui/material/Grid2';
import DownloadIcon from '@mui/icons-material/Download';

export default function ListItemComponent({ icon: Icon = DownloadIcon, primaryText = "Download Play" }) {
    return (
        <ListItem >
            <Grid2 sx={{
                backgroundColor: "#3c4066",
                padding: "3px",
                borderRadius: "4px",
                width: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 1
            }}>
                <Icon sx={{ color: "white", fontSize: "12px" }} />
            </Grid2>
            <ListItemText primary={primaryText} />
        </ListItem>
    );
}


