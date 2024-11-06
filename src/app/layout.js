"use client"
import localFont from "next/font/local";
import { Container, Grid2 } from "@mui/material";
import List from '@mui/material/List';
import ListItemComponent from "./components/listItemComponent";
import "./globals.css";
import NavigationBar from "./components/appbar";
import congoData from './jsondata/congodata.json';
import { useRouter } from 'next/navigation';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const provinces = congoData.provinces.map(province => province.name);

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleProvinceClick = (provinceName) => {
    router.push(`/province/${provinceName}`);
  };

  return (
    <>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <NavigationBar />
          <Container sx={{ paddingTop: 5 }}>
            <Grid2 container spacing={2}>
              <Grid2
                size={{ md: 3 }}
                sx={{
                  display: { xs: 'none', md: 'block' },
                  backgroundColor: "white",
                  maxHeight: "100vh",
                  overflowY: "auto"
                }}>
                <List>
                  {provinces.map((province, index) => (
                    <ListItemComponent
                      key={province}
                      provinceIndex={index}
                      onClick={() => handleProvinceClick(province)}
                    />
                  ))}
                </List>
              </Grid2>
              <Grid2 size={{ md: 9, xs: 12 }}
                sx={{
                  maxHeight: "100vh",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    width: "0px"
                  },
                  msOverflowStyle: "none",  // For Internet Explorer and Edge
                  scrollbarWidth: "none"  // For Firefox
                }}>
                {children}
              </Grid2>
            </Grid2>
          </Container>
        </body>
      </html>
    </>
  );
}