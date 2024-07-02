import React from "react";
import { Box, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export const ArticleOne = () => {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        bgcolor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "3rem 3rem", md: "9rem 2rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "5rem",
          width: "100%",
          maxWidth: "1600px",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{ width: { xs: "300px", lg: "700px" }, alignSelf: "flex-end" }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "2rem", md: "3.75rem" },
              fontFamily: "Soligant, serif",
              textAlign: "center",
              my: { xs: "1rem", md: "3rem" },
            }}
          >
            GalleyCloud
          </Typography>
          <Typography
            sx={{
              fontFamily: "STSong, serif",
              fontSize: { xs: "1rem", md: "1.5rem" },
              my: { xs: "1rem", md: "3rem" },
            }}
          >
            Keep in touch with the groups of people that matter the most, like
            your family or coworkers. Keep in touch with the groups of people
            that matter the most, like your family or coworkers. Keep in touch
            with the groups of people that matter the most, like your family or
            coworkers. Keep in touch with the groups of people that matter the
            most, like your family or coworkers.
          </Typography>
          <Typography
            sx={{
              textDecoration: "underline",
              color: "#2F3A77",
              fontFamily: "STSong, serif",
              fontSize: { xs: "1rem", md: "1.4rem" },
            }}
          >
            Learn more
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
          width: "100%",
          maxWidth: "1600px",
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
            width: "800px",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "1.4rem", xl: "1.8rem" },
              fontFamily: "STSong, serif",
              color: "#111E64",
            }}
          >
            About Jet Catering
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography
              sx={{
                width: { lg: "350px", xl: "500px" },
                fontFamily: "STSong, serif",
                fontSize: { lg: "1.1rem", xl: "1.5rem" },
              }}
            >
              Keep in touch with the groups of people that matter the most, like
              your family or coworkers. Keep in touch with the groups of people
              that matter the most, like your family or coworkers.
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
    </Box>
  );
};
