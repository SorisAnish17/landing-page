import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  title: string;
  icon: React.ReactElement;
}

export const Button: React.FC<Props> = ({ icon, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "0.5px solid white",
        width: "250px",
        p: "0.3rem",
        gap: "0.5rem",
      }}
    >
      {icon}
      <Typography
        sx={{
          fontFamily: "STSong,Serif",
          fontSize: "1.5rem",
          color: "#f4f4eb",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
