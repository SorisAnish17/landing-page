"use client";
import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import "./style.css";

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const handleEnded = () => {
      videoElement.currentTime = 0;
      videoElement.play();
    };

    videoElement.addEventListener("ended", handleEnded);

    return () => {
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image
        src={`/assets/gif/Comp 1_1.gif`}
        width={1800}
        height={800}
        alt="map"
        className="map"
      />
    </Box>
  );
};
