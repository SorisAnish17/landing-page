import React from "react";
import { Box, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export const Layout = () => {
  return (
    <Box sx={{ color: "white", m: "3rem 0rem" }}>
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
          p: { xs: "2rem 4rem", md: "4rem 10rem" },
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
          <Typography sx={{ fontFamily: "STSong,serif", fontSize: "2.125rem" }}>
            19 Nov, 24
          </Typography>
          <Typography sx={{ fontFamily: "STSong,serif", fontSize: "1.6rem" }}>
            Create your page create your page create your <br /> page create
            your page
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
            <Box sx={{ bgcolor: "white", width: "70px", textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "STSong,serif",
                  fontSize: { lg: "0.8rem", xl: "1.5rem" },
                }}
              >
                20
              </Typography>
              <Typography
                sx={{
                  fontFamily: "STSong,serif",
                  fontSize: { lg: "0.8rem", xl: "1.5rem" },
                  fontWeight: "800",
                }}
              >
                Aug,24
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
              Create your page
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF99",
                fontFamily: "STSong,serif",
                fontSize: { xl: "1.5rem", lg: "1rem" },
              }}
            >
              Keep in touch with the groups of people that matter the most, like
              your family or coworkers.Keep in touch with the groups of people
              that matter the most, like your family or coworkers.Keep in touch
              with the groups of people that matter the most, like your family
              or coworkers.
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
                To Know More
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
            <Box sx={{ bgcolor: "white", width: "70px", textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "STSong,serif",
                  fontSize: { lg: "0.8rem", xl: "1.5rem" },
                }}
              >
                20
              </Typography>
              <Typography
                sx={{
                  fontFamily: "STSong,serif",
                  fontSize: { lg: "0.8rem", xl: "1.5rem" },
                }}
              >
                Aug,24
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
              Create your page
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF99",
                fontFamily: "STSong,serif",
                fontSize: { xl: "1.5rem", lg: "1rem" },
              }}
            >
              Keep in touch with the groups of people that matter the most, like
              your family or coworkers.Keep in touch with the groups of people
              that matter the most, like your family or coworkers.Keep in touch
              with the groups of people that matter the most, like your family
              or coworkers.
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
                To Know More
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
    </Box>
  );
};
