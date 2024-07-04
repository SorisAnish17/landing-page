import React from "react";
import {
  Divider,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Box,
  Container,
} from "@mui/material";
import Image from "next/image";

export const LayOut = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", pt: "5rem" }}>
      <Container maxWidth={"xl"}>
        {/* section 1*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            mt: "4rem",
            gap: { xs: "2rem", sm: "auto" },
            minHeight: "35rem",
          }}
        >
          <Box>
            <Typography variant="h4">
              Ready To <br />
              Plan Food Order <br />
              For Your <br />
              Private Jet ?
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: "3rem",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  fontFamily: "STSong,Serif",
                  fontSize: "2.25rem",
                }}
              >
                Get Started
              </Box>
              <Image
                src={`/assets/images/rightarrow.png`}
                alt="arrow img"
                width={24}
                height={24}
              />
            </Box>
          </Box>
          <Box>
            <Typography variant="h4">
              Looking For <br />
              The Perfect <br /> Venue?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "#6C6C6C",
                fontFamily: "STSong,Serif",
                fontSize: "1.3rem",
              }}
            >
              Please leave us your email address below to access our list of the
              best,
              <br /> venues in the Tampa Bay area.
            </Typography>
            <FormControl variant="standard" fullWidth sx={{ mt: "3.3rem" }}>
              <InputLabel htmlFor="Email">Email</InputLabel>
              <Input
                id="input-with-icon-adornment"
                endAdornment={
                  <InputAdornment position="end">
                    <Typography
                      sx={{
                        bgcolor: "#111E64",
                        color: "white",
                        borderRadius: "0.2rem",
                        fontSize: "1rem",
                        fontFamily: "STSong,Serif",
                      }}
                    >
                      Get Started
                    </Typography>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Box>
        {/*section 2*/}
        <Divider
          sx={{
            bgcolor: "black",
            m: "2rem 0rem",
            display: { xs: "none", md: "block" },
          }}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            minHeight: "15rem",
          }}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "auto" } }}>
            <Typography variant="h6" sx={{ mb: { md: "1rem" } }}>
              Catering
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Our Catering Brands
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Our Catering Brands
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Our Catering Brands
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: { xs: "center", sm: "auto" } }}>
            <Typography variant="h6" sx={{ mb: { md: "1rem" } }}>
              Venues
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Networks
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Catering Service
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Location
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: { md: "1rem" } }}>
              The Farm
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Values
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                About
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                The Privacy
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: { xs: "center", sm: "auto" } }}>
            <Typography variant="h6" sx={{ mb: { md: "1rem" } }}>
              The Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                About
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Blog
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#6C6C6C",
                  textDecoration: "underline",
                }}
              >
                Terms and Condition
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*section3*/}
        <Divider sx={{ bgcolor: "black", m: "2rem 0rem" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "auto", md: "auto" },
          }}
        >
          <Box mt={2}>
            <Typography sx={{ fontFamily: "Soligant,serif", fontSize: "2rem" }}>
              Contact Information
            </Typography>
            <Typography variant="h5">
              Galley Cloud, The One Tower, Internet City, Dubai, United Arab
              Emirates
            </Typography>
            <Typography variant="h5">partners@galleycloud.com</Typography>
            <Typography variant="h5">+971 04 548 2436</Typography>
            <Typography variant="h5">+971 04 (kitchen)</Typography>
          </Box>
          <Box mt={2}>
            <Typography
              sx={{
                color: "black",
                fontSize: "2rem",
                fontFamily: "Soligant,serif",
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                mt: "1rem",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  justifyContent: { xs: "auto", md: "auto" },
                }}
              >
                <Image
                  src={`/assets/images/insta.png`}
                  alt="insta Logo"
                  width={20}
                  height={20}
                />{" "}
                <Typography
                  variant="body2"
                  color={"#6C6C6C"}
                  fontSize={"1rem"}
                  fontFamily={"STSong,Serif"}
                >
                  Instagram
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  justifyContent: { xs: "auto", md: "auto" },
                }}
              >
                <Image
                  src={"/assets/images/Facebook.png"}
                  alt="insta Logo"
                  width={20}
                  height={20}
                />
                <Typography
                  variant="body2"
                  color={"#6C6C6C"}
                  fontSize={"1rem"}
                  fontFamily={"STSong,Serif"}
                >
                  Facebook
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        mt={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#111E64",
          padding: "1rem",
          color: "white",
          width: "100%",
          textAlign: "center",
          fontFamily: "STSong,Serif",
        }}
      >
        <Typography>
          © All rights reserved (Website Developed & Managed by GALLEYCLOUD)
        </Typography>
      </Box>
    </Box>
  );
};
