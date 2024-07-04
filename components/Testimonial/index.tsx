import React from "react";
import { Box, Typography, Container } from "@mui/material";
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
        gap: { xs: "2rem", lg: "5rem" },
        py: "2rem",
      }}
    >
      <Container maxWidth={"xl"}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Testimonial
        </Typography>
        <Carousel />
      </Container>
    </Box>
  );
};
