"use client";
import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./MobileNavbar";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };
  return (
    <Box>
      <Box
        sx={{
          height: { xs: "4rem", md: "6rem" },
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#FFFFFF",
          paddingLeft: { xs: "1rem", md: "2rem" },
          paddingRight: { xs: "1rem", md: "2rem" },
          boxShadow: "0 2px 4px rgba(0, 0, 1, 0.1)",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url('/assets/images/galleycloudlogo.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: { xs: "50px", md: "150px" },
            height: { xs: "50px", md: "75px" },
          }}
        />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: { sm: "1rem", lg: "3rem" },
          }}
        >
          <Typography
            sx={{ fontSize: { sm: "1rem", xl: "1.125rem" }, color: "black" }}
          >
            Home
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            About Us
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            Contact
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex", gap: "2rem" } }}>
          <Typography
            sx={{
              fontSize: { sm: "1rem", xl: "1.125rem" },
              fontFamily: "STSong,Serif",
              p: { sm: "0.4rem" },
              bgcolor: "black",
              color: "white",
              borderRadius: "0.3rem",
              cursor: "pointer",
            }}
          >
            Registration
          </Typography>
          <Typography
            sx={{
              fontSize: { sm: "1rem", xl: "1.125rem" },
              fontFamily: "STSong,Serif",
              p: { sm: "0.2rem 0.5rem" },
              bgcolor: "transparent",
              color: "black",
              width: "130px",
              textAlign: "center",
              border: "1px solid black",
              borderRadius: "0.3rem",
              cursor: "pointer",
            }}
          >
            Sign In
          </Typography>
        </Box>
      </Box>
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer(false)} />
    </Box>
  );
};
