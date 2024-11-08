import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid2, Link, Drawer, IconButton, List } from '@mui/material';
import { Menu } from '@mui/icons-material';
import congoData from './../jsondata/congodata.json';
import { useRouter } from 'next/navigation';
import ListItemComponent from './listItemComponent';

export default function NavigationBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const provinces = congoData.provinces.map(province => province.name);

    const router = useRouter();

    const handleProvinceClick = (provinceName) => {
        router.push(`/province/${provinceName}`);
        setDrawerOpen(false); // Ensure the drawer closes after navigation
    };

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="fixed">
                <Container sx={{ paddingBottom: 1, paddingTop: 1 }}>
                    <Grid2 container>
                        <Grid2 item="true" sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton onClick={toggleDrawer(true)} color="inherit">
                                <Menu />
                            </IconButton>
                        </Grid2>
                        <Link href="/" sx={{ color: "white" }}>
                            <Typography variant="h6" padding={"5px"}>
                                Home
                            </Typography>
                        </Link>
                    </Grid2>
                </Container>
            </AppBar>
            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Container sx={{ padding: 2, position: 'relative' }}>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <Menu />
                    </IconButton>
                    {/* <Link href="/" sx={{ display: 'block', marginTop: 1 }}>
                        Home
                    </Link> */}

                    <List>
                        {provinces.map((province, index) => (
                            <Grid2 key={province}
                                onClick={() => handleProvinceClick(province)}
                            >
                                <ListItemComponent
                                    key={province}
                                    provinceIndex={index}
                                    onClick={() => handleProvinceClick(province)}
                                />
                            </Grid2>
                        ))}
                    </List>
                </Container>
            </Drawer>
        </>
    );
}
