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
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "1600px",
          gap: "5rem",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(/assets/images/section2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { xs: "300px", xl: "750px", lg: "500px" },
            height: { xs: "300px", xl: "750px", lg: "500px" },
            borderRadius: "0.5rem",
          }}
        />
        <Box sx={{ width: { xs: "300px", lg: "700px" } }}>
          <Typography
            sx={{
              my: "2rem",
              fontFamily: "Soligant, serif",
              fontSize: { xs: "2rem", md: "3.75rem" },
            }}
            variant="h2"
          >
            Galley Cloud
          </Typography>
          <Typography
            sx={{
              my: "2rem",
              fontFamily: "STSong, serif",
              fontSize: { xs: "1rem", md: "1.5rem" },
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
