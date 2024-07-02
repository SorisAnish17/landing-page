import React from "react";
import { Box, Typography, Container } from "@mui/material";

export const ContentLayOut = () => {
  return (
    <Container>
      <Box
        sx={{
          color: "white",
          width: "100%",
          m: "15rem 0rem",
          display: "flex",
          height: "20vh",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "2rem", md: "6rem" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: { xs: "center", md: "right" },
            fontFamily: "Soligant, sans-serif",
          }}
        >
          About <br /> GalleyCloud
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              sx={{
                width: { xs: "100%", md: "31.313rem" },
                color: "#FFFFFF99",
                fontFamily: "STSong,Serif",
                fontSize: { xs: "1.3rem", md: "1.5rem" },
                p: "1rem",
              }}
              align="center"
            >
              Keep in touch with the groups of people that matter the most, like
              your family or coworkers.Keep in touch with the groups of people
              that matter the most, like your family or coworkers.Keep in touch
              with the groups of people that matter the most, like your family
              or coworkers.Keep in touch with the groups of people that matter
              the most, like your family or coworkers.
            </Typography>
            <Typography
              sx={{
                textDecoration: "underline",
                fontFamily: "STSong,Serif",
                mt: "1rem",
                color: "#FFFFFF",
              }}
              align="center"
            >
              Learn more
            </Typography>
          </Box>
          <Box
            sx={{
              borderLeft: "1px solid white",
              height: "125px",
              mt: "5rem",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};
