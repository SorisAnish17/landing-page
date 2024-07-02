"use client";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Spinner } from "./components/spinner";
import { ContentLayOut } from "./components/content-layout";

export const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#111E64",
      }}
      id="about"
    >
      <Spinner />
      <ContentLayOut />
    </Box>
  );
};
