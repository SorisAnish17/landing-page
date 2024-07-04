"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import DownArrowSvg from "../svg/downarrow";
import Link from "next/link";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <Box sx={{ bgcolor: "#111111", minHeight: "100vh", position: "relative" }}>
      <Navbar />

      <HeroSection />
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Link href="/#about">
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-5, 5, -5],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
            <DownArrowSvg />
          </motion.div>
        </Link>
      </Box>
    </Box>
  );
};
