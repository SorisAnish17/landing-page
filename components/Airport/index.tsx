import React from "react";
import { Box, Typography } from "@mui/material";
import { BackgroundVideo } from "./components/video";
import { Widgets } from "./components/widgets";

export const Airport = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        width: "100%",
        bgcolor: "#111E64",
        color: "white ",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Soligant,sans-serif",
          display: "flex",
          justifyContent: "center",
          p: "1rem",
          fontSize: { xs: "2rem", md: "3.75rem" },
        }}
      >
        FIND YOUR AIRPORT
      </Typography>
      <BackgroundVideo />
      <Box sx={{ pb: "5rem" }}>
        <Widgets />
      </Box>
    </Box>
  );
};
