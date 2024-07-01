"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { content } from "../components/content";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === content.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    // Automatically move to the next slide every 5 seconds
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
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
          gap: "5rem",
          mt: "2rem",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${slide.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: { xl: "700px", lg: "500px" },
              height: "500px",
              borderRadius: "0.5rem",
            }}
          />
        </Box>
        <Box sx={{ width: "46.25rem" }}>
          <Typography
            sx={{
              my: "3rem",
              fontFamily: "STSong, serif",
              color: "#00000099",
              fontSize: "1.5rem",
            }}
          >
            {slide.review}
          </Typography>
          <Typography sx={{ fontFamily: "STSong, serif", fontSize: "1.5rem" }}>
            {slide.address}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ my: "8rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            alignItems: "center",
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
