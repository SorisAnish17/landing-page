import React from "react";
import { Box, Typography, Container } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { about, subDescription } from "./components/content";

export const ArticleOne = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: "0rem", md: "5rem 0rem" },
      }}
    >
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", lg: "700px" },
              alignSelf: "flex-end",
              mb: "1rem",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3.75rem" },
                fontFamily: "Soligant, serif",
                textAlign: "left",
                my: { xs: "1rem", md: "3rem" },
              }}
            >
              {about.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "STSong, serif",
                fontSize: { xs: "1rem", md: "1.5rem" },
                my: { xs: "1rem", md: "3rem" },
              }}
            >
              {about.description}
            </Typography>
            <Typography
              sx={{
                textDecoration: "underline",
                color: "#2F3A77",
                fontFamily: "STSong, serif",
                fontSize: { xs: "1rem", md: "1.4rem" },
              }}
            >
              {about.link}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                backgroundImage: `url(/assets/images/section1.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: { xs: "300px", xl: "750px", lg: "500px" },
                height: { xs: "300px", xl: "750px", lg: "500px" },
                borderRadius: "0.5rem",
                alignSelf: "flex-end",
              }}
            />
          </Box>
        </Box>
        {/* About Jet Catering Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            mt: { xs: "2rem", md: "6rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: {
                lg: "center",
                xl: "space-between",
              },
              gap: { lg: "4rem", xl: "auto" },
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "1.4rem", xl: "1.8rem" },
                fontFamily: "STSong, serif",
                color: "#111E64",
              }}
            >
              {subDescription.title}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                sx={{
                  width: { lg: "350px", xl: "500px" },
                  fontFamily: "STSong, serif",
                  fontSize: { lg: "1.1rem", xl: "1.5rem" },
                }}
              >
                {subDescription.description}
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
                    color: "#111E64",
                    textDecoration: "underline",
                  }}
                >
                  To Know More
                </Typography>
                <Box
                  sx={{
                    border: "1px solid #111E64",
                    width: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EastIcon
                    sx={{ color: "#111E64", p: "0.2rem" }}
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
