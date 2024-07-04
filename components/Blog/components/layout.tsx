import React from "react";
import { Box, Typography, Container } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { blogOne, blogTwo, blogThree } from "./content";

export const Layout = () => {
  return (
    <Box sx={{ color: "white", m: "3rem 0rem" }}>
      <Container maxWidth={"xl"}>
        <Typography
          textAlign={"center"}
          sx={{ fontFamily: "Soligant,serif" }}
          variant="h2"
        >
          Blog
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: "3rem",
            mt: "2rem",
          }}
        >
          <Box
            sx={{
              height: { xs: "600px", xl: "800px", lg: "500px" },
              flex: "2.6",
              backgroundImage: `url(assets/images/blog1.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              p: "3rem",
            }}
          >
            <Typography
              sx={{ fontFamily: "STSong,serif", fontSize: "2.125rem" }}
            >
              {blogOne.date}
            </Typography>
            <Typography sx={{ fontFamily: "STSong,serif", fontSize: "1.6rem" }}>
              {blogOne.title}
            </Typography>
          </Box>
          <Box
            sx={{
              color: "white",
              flex: "1.5",
              height: { xs: "400px", xl: "800px", lg: "500px" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(/assets/images/blog2.png)`,
                backgroundPosition: "center",
                height: { xs: "300px", md: "400px" },
                backgroundSize: "cover",
                display: "flex",
                color: "black",
                flexDirection: "column",
                justifyContent: "flex-end",
                borderRadius: "0.5rem 0.5rem 0rem 0rem",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  width: { xs: "45px", md: "70px" },
                  height: { xs: "45px", md: "70px" },
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "STSong,serif",
                    fontSize: { lg: "0.8rem", xl: "1.5rem" },
                  }}
                >
                  {blogTwo.date}
                  <br />
                  {blogTwo.day}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: { xs: "1rem", md: "3rem" },
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography
                sx={{ fontFamily: "STSong,serif", fontSize: "2.125rem" }}
              >
                {blogTwo.title}
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF99",
                  fontFamily: "STSong,serif",
                  fontSize: { xl: "1.5rem", lg: "1rem" },
                }}
              >
                {blogTwo.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "STSong, serif",
                    color: "#FFFFFF99",
                    textDecoration: "underline",
                  }}
                >
                  {blogTwo.Link}
                </Typography>
                <Box
                  sx={{
                    border: "1px solid #FFFFFF99",
                    width: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EastIcon
                    sx={{ color: "#FFFFFF99", p: "0.2rem" }}
                    fontSize="small"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              color: "white",
              flex: "1.5",
              height: { xs: "400px", xl: "800px", lg: "500px" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(/assets/images/blog3.png)`,
                backgroundPosition: "center",
                height: { xs: "300px", md: "400px" },
                backgroundSize: "cover",
                display: "flex",
                color: "black",
                flexDirection: "column",
                justifyContent: "flex-end",
                borderRadius: "0.5rem 0.5rem 0rem 0rem",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  width: { xs: "45px", md: "70px" },
                  height: { xs: "45px", md: "70px" },
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "STSong,serif",
                    fontSize: { lg: "0.8rem", xl: "1.5rem" },
                  }}
                >
                  {blogThree.date}
                  <br />
                  {blogThree.day}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: { xs: "1rem", md: "3rem" },
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography
                sx={{ fontFamily: "STSong,serif", fontSize: "2.125rem" }}
              >
                {blogThree.title}
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF99",
                  fontFamily: "STSong,serif",
                  fontSize: { xl: "1.5rem", lg: "1rem" },
                }}
              >
                {blogThree.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "STSong, serif",
                    color: "#FFFFFF99",
                    textDecoration: "underline",
                  }}
                >
                  {blogThree.Link}
                </Typography>
                <Box
                  sx={{
                    border: "1px solid #FFFFFF99",
                    width: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EastIcon
                    sx={{ color: "#FFFFFF99", p: "0.2rem" }}
                    fontSize="small"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
