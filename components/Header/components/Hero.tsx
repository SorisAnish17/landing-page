import React from "react";
import Box from "@mui/material/Box";
import { Typography, Container } from "@mui/material";
import { Button } from "./button";
import LocationIcon from "../../svg/framer";
import OrderSvg from "../../svg/order";

export const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(/assets/images/herobg.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        // padding: "0 20px",
      }}
    >
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            gap: "3rem",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "3rem", md: "6rem" } }}
            >
              Revolutionise Your In <br />
              Flight Dining Experience
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "3rem",
              }}
            >
              Potential With Our Food Delivery Platform
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Button title={"Search Location"} icon={<LocationIcon />} />
            <Button title={"Order Now"} icon={<OrderSvg />} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
