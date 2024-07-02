import React from "react";
import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import DownArrowSvg from "../svg/downarrow";
import Link from "next/link";

export const Header = () => {
  return (
    <Box sx={{ bgcolor: "#111111", minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <HeroSection />
      <Box
        sx={{
          position: "absolute",
          bottom: "10px", // Adjusted to position 50px above the bottom
          left: "50%", // Center horizontally
          transform: "translateX(-50%)", // Center horizontally
          zIndex: 1, // Ensure it's above other content
        }}
      >
        <Link href="/#about">
          <Box>
            <DownArrowSvg />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
