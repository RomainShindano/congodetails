import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';

export default function ListItemComponent({ primaryText = "Download Play", href = "#" }) {
    return (
        <>
            <ListItem>
                <Link
                    href={href}
                    underline="none"
                    color="inherit"
                    sx={{
                        '&:hover': {
                            color: '#c99b3e', // Change this to your desired hover color
                        }
                    }}
                >
                    <ListItemText primary={primaryText} />
                </Link>
            </ListItem>
            <Divider variant="middle" sx={{ padding: "none" }} />
        </>
    );
}


