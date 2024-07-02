"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { content } from "../components/content";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === content.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? content.length - 1 : prevSlide - 1
    );
  };

  const slide = content[currentSlide];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "2rem", lg: "5rem" },
          mt: "2rem",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${slide.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: {
                xs: "250px",
                sm: "400px",
                md: "500px",
                xl: "700px",
                lg: "500px",
              },
              height: { xs: "300px", md: "500px" },
              borderRadius: "0.5rem",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "46.25rem" },
            p: { xs: "1rem", sm: "0rem" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "STSong, serif",
              color: "#00000099",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            {slide.review}
          </Typography>
          <Typography
            sx={{
              fontFamily: "STSong, serif",
              fontSize: { xs: "1rem", md: "1.5rem" },
              my: "2rem",
            }}
          >
            {slide.address}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ my: { xs: "0rem", md: "8rem" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            alignItems: "center",
            p: { xs: "2rem", md: "0rem" },
          }}
        >
          <Box
            sx={{
              border: "1px solid #111E64",
              width: "50px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ":hover": { bgcolor: "#111E64", color: "white" },
            }}
            onClick={prevSlide}
          >
            <KeyboardBackspaceIcon />
          </Box>
          <Box sx={{ display: "flex", gap: "0.3rem" }}>
            {content.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentSlide ? "#111E64" : "#E0E0E0",
                  cursor: "pointer",
                  "&:not(:last-child)": {
                    marginRight: "5px",
                  },
                }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </Box>
          <Box
            sx={{
              border: "1px solid #111E64",
              width: "50px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ":hover": { bgcolor: "#111E64", color: "white" },
            }}
            onClick={nextSlide}
          >
            <EastIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
