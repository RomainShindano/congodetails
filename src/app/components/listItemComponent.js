"use client"
import React from 'react';
import { ListItem, Link, ListItemText, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import provincedata from '../jsondata/congodata.json';

export default function ListItemComponent({ provinceIndex = 0 }) {
    const router = useRouter();
    const province = provincedata.provinces[provinceIndex];

    const handleLinkClick = (event) => {
        event.preventDefault();
        router.push(`/province/${province.name}`);
    };

    return (
        <>
            <ListItem>
                <Link
                    href={`/province/${province.name}`}
                    underline="none"
                    color="inherit"
                    onClick={handleLinkClick}
                    sx={{
                        '&:hover': {
                            color: '#c99b3e', // Change this to your desired hover color
                        }
                    }}
                >
                    <ListItemText primary={province.name} />
                </Link>
            </ListItem>
            <Divider variant="middle" sx={{ padding: "none" }} />
        </>
    );
}