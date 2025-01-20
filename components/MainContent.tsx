import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import NavBar from "./NavBar";

const MainContent = () => {
  return (
    <Grid
      alignItems="center"
      container
      spacing={2}
      sx={{
        minHeight: 67,
        border: "solid 1px green",
        paddingX: { xs: "2rem", md: "7rem" },
      }}
    >
      {/* Brand_Name_Section - Detrator */}
      <Grid
        sx={{ display: "flex", justifyContent: "start" }}
        size={{ xs: "grow", md: 2 }}
      >
        <div>Detrator</div>
      </Grid>

      {/* NavBar_Section */}
      <Grid
        size={6}
        justifyContent="flex-start"
        display={{ xs: "none", md: "flex" }}
      >
        <NavBar />
      </Grid>

      {/* Profile_Section */}
      <Grid
        size="grow"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            backgroundColor: "Blue",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
        />
        <Box display={{ xs: "none", md: "block" }}>John</Box>
      </Grid>
    </Grid>
  );
};

export default MainContent;
