"use client"
import React, { useEffect, useState } from 'react';
import { Card, Grid2, List, ListItem, Typography } from "@mui/material";
import provincedata from "../../jsondata/congodata.json"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function ProvinceDetail() {

    const pathname = usePathname();
    const province = pathname.split('/').pop();
    const [provinceData, setProvinceData] = useState(null);

    useEffect(() => {
        if (province) {
            const matchedProvince = provincedata.provinces.find(p => p.name.toLowerCase() === province.toLowerCase());
            setProvinceData(matchedProvince);
            console.log('Matched Province:', matchedProvince);
        }
    }, [province]);

    if (!province) {
        console.error('No province name found in URL parameters.');
        return (
            <Typography variant="h6">
                No province specified in the URL. Please ensure the URL contains a valid province name.
            </Typography>
        );
    }

    if (!provinceData) {
        return <Typography variant="h6">Province not found</Typography>;
    }

    return (
        <>
            <div style={{ marginBottom: "3vh" }}>
                <Grid2 container justifyContent={"space-between"} paddingTop={5} paddingBottom={1}>
                    <Grid2>
                        <Typography variant="body2" fontWeight={"bold"}>{provinceData.name}</Typography>
                        <Typography variant="subtitle2" fontWeight={"bold"} color="#555555">BP: {provinceData.postal_code}</Typography>
                    </Grid2>
                    <Grid2>
                        {/* <Typography variant="body2">Location</Typography> */}
                    </Grid2>
                </Grid2>
                <Card elevation={0}>
                    <Grid2 container justifyContent="center" sx={{ height: 500 }}>
                        <img
                            src={provinceData.maps}
                            style={{ height: 250, marginTop: 100, }}
                            alt={`${provinceData.name} Map`}
                        />
                    </Grid2>
                </Card>

                <Grid2 marginTop={2} marginBottom={1}>
                    <Typography variant="body2" fontWeight={"bold"}>{provinceData.name}</Typography>
                    <Typography variant="subtitle2" fontWeight={"bold"} color="#555555"> BP: {provinceData.postal_code}</Typography>
                </Grid2>

                <Grid2>
                    <Typography variant="body2">{provinceData.overview}</Typography>
                </Grid2>
                <Grid2 marginTop={2}>
                    <Typography variant="h6" fontWeight={"bold"}>Cities</Typography>
                </Grid2>
                <Grid2 container spacing={2} marginBottom={4}>
                    <Grid2>
                        <List sx={{ marginLeft: 0, paddingLeft: 0 }}>
                            {provinceData.towns.slice(0, 3).map((town, index) => (
                                <ListItem key={index} sx={{ paddingLeft: 0 }}>
                                    <Grid2>
                                        <Typography variant="body2" fontWeight={"bold"}>{town.name}</Typography>
                                        <Typography variant="subtitle2" color="#555555">BP: {town.postal_code}</Typography>
                                    </Grid2>
                                </ListItem>
                            ))}
                        </List>
                    </Grid2>
                    <Grid2>
                        <List sx={{ marginLeft: 0 }}>
                            {provinceData.towns.slice(3, 6).map((town, index) => (
                                <ListItem key={index}>
                                    <Grid2>
                                        <Typography variant="body2" fontWeight={"bold"}>{town.name}</Typography>
                                        <Typography variant="subtitle2" color="#555555">BP: {town.postal_code}</Typography>
                                    </Grid2>
                                </ListItem>
                            ))}
                        </List>
                    </Grid2>
                </Grid2>
                <Grid2>
                    <Grid2>
                        <Typography variant="h6" fontWeight={"bold"} marginBottom={2}>Territories and Tribes</Typography>
                    </Grid2>
                    <Grid2 container spacing={4} sx={{ marginLeft: 0 }}>
                        {provinceData.territories?.map((territories, index) => (
                            <Grid2 item="true" key={index.toString()}>
                                <Typography variant="body2" fontWeight={"bold"}>{territories.name}</Typography>
                                <List sx={{ marginLeft: 0 }}>
                                    {territories.tribes?.map((tribe, index) => (
                                        <ListItem key={index.toString()} sx={{ paddingLeft: 0 }}>
                                            <Typography variant="subtitle2" color="#555555">{tribe}</Typography>
                                        </ListItem>
                                    )) || <Typography variant="subtitle2" color="#555555">N/A</Typography>}
                                </List>
                            </Grid2>
                        )) || <Typography variant="body2" color="#555555">No territories available</Typography>}
                    </Grid2>
                </Grid2>
            </div>
        </>
    );
}