import React from "react";
import { Box, Typography } from "@mui/material";

export const ArticleTwo = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "#F3F5FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem", // Add padding for spacing
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "1600px",
          gap: "5rem",
          justifyContent: "space-between",
          alignItems: "center", // Center align items vertically
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(/assets/images/section2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { xl: "750px", lg: "500px" },
            height: { xl: "750px", lg: "500px" },
            borderRadius: "0.5rem",
          }}
        />
        <Box sx={{ maxWidth: "750px" }}>
          <Typography
            sx={{
              my: "2rem",
              fontFamily: "Soligant, serif",
              fontSize: "3.75rem",
            }}
            variant="h2"
          >
            Galley Cloud
          </Typography>
          <Typography
            sx={{
              my: "2rem",
              fontFamily: "STSong, serif",
              fontSize: "1.5rem",
            }}
          >
            Keep in touch with the groups of people that matter the most, like
            your family or coworkers. Keep in touch with the groups of people
            that matter the most, like your family or coworkers. Keep in touch
            with the groups of people that matter the most, like your family or
            coworkers. Keep in touch with the groups of people that matter the
            most, like your family or coworkers.
          </Typography>
          <Typography
            sx={{
              my: "1rem",
              fontFamily: "STSong, serif",
              textDecoration: "underline",
              color: "#111E64",
              fontSize: "1.2rem",
            }}
          >
            Learn More
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
