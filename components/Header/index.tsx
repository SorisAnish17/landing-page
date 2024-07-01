import React from "react";
import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";

export const Header = () => {
  return (
    <Box sx={{ bgcolor: "#111111", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
    </Box>
  );
};
