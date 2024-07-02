import { Box } from "@mui/material";
import React from "react";
import { Spinner } from "./components/spinner";
import { ContentLayOut } from "./components/content-layout";

export const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#111E64",
      }}
    >
      <Spinner />
      <ContentLayOut />
    </Box>
  );
};
