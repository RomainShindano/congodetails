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
          Democratic Republic of the Congo
        </Typography>
        <Typography variant="subtitle2" fontWeight={"bold"} color="#555555">
          00243
        </Typography>
      </Grid2>

      <Grid2>
        <Typography variant="body2">
          The Democratic Republic of the Congo (DRC) is a land of immense beauty, rich resources, and vibrant cultural diversity. As the second-largest country in Africa, it is home to lush rainforests, sprawling savannahs, and majestic rivers, including the mighty Congo River—the lifeline of its people and economy. The country’s breathtaking landscapes are complemented by a wealth of natural resources, from vast mineral deposits to fertile farmlands, making it one of the most naturally endowed nations in the world. Beyond its physical beauty, the DRC thrives on its cultural mosaic, where over 200 ethnic groups bring together centuries-old traditions, music, dance, and art that continue to shape its unique national identity.
        </Typography>
        <br />
        <Typography variant="body2">
          Despite historical challenges, the DRC stands as a beacon of resilience and potential, with a young and dynamic population driving innovation and progress. Major cities like Kinshasa, Lubumbashi, and Goma serve as economic and cultural hubs, fueling a vision of modernization while maintaining deep-rooted customs. The nation’s rich heritage, from the ancient Kingdom of Kongo to modern artistic expressions, speaks to its enduring strength and creativity. As efforts toward stability and development continue, the DRC is poised to reclaim its place as a leader in Africa, offering a future full of promise, growth, and unity for its people.
        </Typography>
      </Grid2>
      <Grid2 marginTop={2}>
        <Typography variant="h6" fontWeight={"bold"}>
          Provinces
        </Typography>
      </Grid2>
      <Grid2 container spacing={3} marginBottom={4}>
        <Grid2>
          <List sx={{ marginLeft: 0, paddingLeft: 0 }}>
            {congoData.provinces.slice(0, 8).map((province, index) => (
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
            {congoData.provinces.slice(8, 16).map((province, index) => (
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
        <Grid2>
          <List sx={{ marginLeft: 0 }}>
            {congoData.provinces.slice(16, 24).map((province, index) => (
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
        <Grid2>
          <List sx={{ marginLeft: 0 }}>
            {congoData.provinces.slice(24, 26).map((province, index) => (
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
