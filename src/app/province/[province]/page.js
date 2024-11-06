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
            <div>
                <Grid2 container justifyContent={"space-between"} paddingTop={3} paddingBottom={1}>
                    <Grid2>
                        <Typography variant="body2" fontWeight={"bold"}>{provinceData.name}</Typography>
                        <Typography variant="subtitle2" fontWeight={"bold"} color="#555555">{provinceData.postal_code}</Typography>
                    </Grid2>
                    <Grid2>
                        <Typography variant="body2">Location</Typography>
                    </Grid2>
                </Grid2>
                <Card elevation={0}>
                    <Grid2 container justifyContent="center" sx={{ height: 500 }}>
                        <img
                            src={provinceData.maps}
                            style={{ height: 400, marginTop: 40 }}
                            alt={`${provinceData.name} Map`}
                        />
                    </Grid2>
                </Card>

                <Grid2 marginTop={2} marginBottom={1}>
                    <Typography variant="body2" fontWeight={"bold"}>{provinceData.name}</Typography>
                    <Typography variant="subtitle2" fontWeight={"bold"} color="#555555">{provinceData.postal_code}</Typography>
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
                            {provinceData.towns.slice(0, 5).map((town, index) => (
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
                            {provinceData.towns.slice(5, 10).map((town, index) => (
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