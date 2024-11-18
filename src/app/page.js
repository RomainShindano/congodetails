"use client"
import { Card, Grid2, List, ListItem, Typography } from "@mui/material";
import InteractiveMap from "./components/mapsComponet";
import congoData from "./jsondata/congodata.json";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleProvinceClick = (provinceName) => {
    router.push(`/province/${provinceName}`);
  };

  return (
    <>
      <Grid2 container justifyContent={"space-between"} paddingTop={3} paddingBottom={1}>
        <Grid2>
          <Typography variant="body2" fontWeight={"bold"}>
            D.R.Congo
          </Typography>
          <Typography variant="subtitle2" fontWeight={"bold"} color="#555555">
            00243
          </Typography>
        </Grid2>
        <Grid2>
          <Typography variant="body2">Location</Typography>
        </Grid2>
      </Grid2>
      <Card elevation={0}>
        <Grid2 container justifyContent="center">
          <InteractiveMap />
        </Grid2>
      </Card>

      <Grid2 marginTop={2} marginBottom={1}>
        <Typography variant="body2" fontWeight={"bold"}>
          Province Name
        </Typography>
        <Typography variant="subtitle2" fontWeight={"bold"} color="#555555">
          00243
        </Typography>
      </Grid2>

      <Grid2>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        </Typography>
      </Grid2>
      <Grid2 marginTop={2}>
        <Typography variant="h6" fontWeight={"bold"}>
          Town & Cities
        </Typography>
      </Grid2>
      <Grid2 container justifyContent={"space-between"} marginBottom={4}>
        <Grid2>
          <List sx={{ marginLeft: 0, paddingLeft: 0 }}>
            {congoData.provinces.slice(0, 13).map((province, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0, cursor: 'pointer' }} button="true" onClick={() => handleProvinceClick(province.name)}>
                <Grid2>
                  <Typography variant="body2" fontWeight={"bold"}>
                    {province.name}
                  </Typography>
                  <Typography variant="subtitle2" color="#555555">
                    {province.postal_code}
                  </Typography>
                </Grid2>
              </ListItem>
            ))}
          </List>
        </Grid2>
        <Grid2>
          <List sx={{ marginLeft: 0 }}>
            {congoData.provinces.slice(13, 26).map((province, index) => (
              <ListItem key={index} sx={{ cursor: 'pointer' }} button="true" onClick={() => handleProvinceClick(province.name)}>
                <Grid2>
                  <Typography variant="body2" fontWeight={"bold"}>
                    {province.name}
                  </Typography>
                  <Typography variant="subtitle2" color="#555555">
                    {province.postal_code}
                  </Typography>
                </Grid2>
              </ListItem>
            ))}
          </List>
        </Grid2>
      </Grid2>
    </>
  );
}
