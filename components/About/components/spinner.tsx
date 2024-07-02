"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import AddIcon from "@mui/icons-material/Add";

export const Spinner = () => {
  const spinnerContainerStyle = {
    width: "100%",
    p: "3.125rem 0.625rem",
    backgroundColor: "transparent",
    color: "white",
  };

  return (
    <Box sx={spinnerContainerStyle}>
      <Marquee direction="left" speed={100} delay={1}>
        <Box sx={{ display: "flex", gap: "10rem" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "1.875rem",
                fontFamily: "Soligant,serif",
                m: "1.5rem",
              }}
            >
              Best Catering Network <AddIcon fontSize="small" /> Beverage
              Experences is here
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "1.875rem",
                fontFamily: "Soligant,serif",
                m: "1.5rem",
              }}
            >
              Best Catering Network <AddIcon fontSize="small" /> Beverage
              Experences is here
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "1.875rem",
                fontFamily: "Soligant,serif",
                m: "1.5rem",
              }}
            >
              Best Catering Network <AddIcon fontSize="small" /> Beverage
              Experences is here
            </Typography>
          </Box>
        </Box>
      </Marquee>
    </Box>
  );
};

export default Spinner;
