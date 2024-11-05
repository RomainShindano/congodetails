"use client"
import React from 'react';
import { Card, Grid2, List, ListItem, Typography } from "@mui/material";
import provincedata from "../../jsondata/congodata.json"
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function ProvinceDetail() {
    const searchParams = useSearchParams();
    const provinceName = searchParams.get('province');
    console.log('Province Name from URL:', provinceName); // Debugging line
    const province = provincedata.provinces.find(p => p.name === provinceName);
    console.log('Matched Province:', province); // Debugging line

    if (!province) {
        return <Typography variant="h6">Province not found</Typography>;
    }
    return (
        <>
            <div>
                <Grid2 container justifyContent={"space-between"} paddingTop={3} paddingBottom={1}>
                    <Grid2>
                        <Typography variant="body2" fontWeight={"bold"}>{province.name}</Typography>
                        <Typography variant="subtitle2" fontWeight={"bold"} color="#555555">{province.postal_code}</Typography>
                    </Grid2>
                    <Grid2>
                        <Typography variant="body2">Location</Typography>
                    </Grid2>
                </Grid2>
                <Card elevation={0}>
                    <Grid2 container justifyContent="center" sx={{ height: 500 }}>
                        <img
                            src={province.maps}
                            style={{ height: 400, marginTop: 40 }}
                            alt={`${province.name} Map`}
                        />
                    </Grid2>
                </Card>

                <Grid2 marginTop={2} marginBottom={1}>
                    <Typography variant="body2" fontWeight={"bold"}>{province.name}</Typography>
                    <Typography variant="subtitle2" fontWeight={"bold"} color="#555555">{province.postal_code}</Typography>
                </Grid2>

                <Grid2>
                    <Typography variant="body2">Lorem ipsum dolor sit amet...</Typography>
                </Grid2>
                <Grid2 marginTop={2}>
                    <Typography variant="h6" fontWeight={"bold"}>Town & Cities</Typography>
                </Grid2>
                <Grid2 container justifyContent={"space-between"} marginBottom={4}>
                    <Grid2>
                        <List sx={{ marginLeft: 0, paddingLeft: 0 }}>
                            {province.towns.slice(0, 5).map((town, index) => (
                                <ListItem key={index} sx={{ paddingLeft: 0 }}>
                                    <Grid2>
                                        <Typography variant="body2" fontWeight={"bold"}>{town.name}</Typography>
                                        <Typography variant="subtitle2" color="#555555">{town.postal_code}</Typography>
                                    </Grid2>
                                </ListItem>
                            ))}
                        </List>
                    </Grid2>
                    <Grid2>
                        <List sx={{ marginLeft: 0 }}>
                            {province.towns.slice(5, 10).map((town, index) => (
                                <ListItem key={index}>
                                    <Grid2>
                                        <Typography variant="body2" fontWeight={"bold"}>{town.name}</Typography>
                                        <Typography variant="subtitle2" color="#555555">{town.postal_code}</Typography>
                                    </Grid2>
                                </ListItem>
                            ))}
                        </List>
                    </Grid2>
                </Grid2>
            </div>

        </>
    );
}