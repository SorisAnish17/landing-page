import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "./components/carousel";

export const Testimonial = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F3F5FF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
        py: "2rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontFamily: "Soligant,serif", textAlign: "center" }}
      >
        Testimonial
      </Typography>
      <Carousel />
    </Box>
  );
};
