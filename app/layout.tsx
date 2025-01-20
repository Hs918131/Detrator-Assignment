"use client";
import MainContent from "@/components/MainContent";
import "@fontsource/poppins";
import { createTheme, Grid2, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body style={{ margin: "0px" }}>
          <Grid2 height={"100vh"} overflow={"hidden"}>
            <MainContent />
            {children}
          </Grid2>
        </body>
      </html>
    </ThemeProvider>
  );
}
