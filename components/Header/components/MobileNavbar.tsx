import React from "react";
import { Drawer, Typography, Button, Box } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface Props {
  isDrawerOpen: boolean;
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Sidebar: React.FC<Props> = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={{ display: { xs: "block", sm: "none" } }}
    >
      <Box
        sx={{
          width: 300,
          bgcolor: "#111E64",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: "1rem" }}>
          <CloseOutlinedIcon sx={{ color: "white" }} onClick={toggleDrawer} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "25rem",
            justifyContent: "space-around",
            p: "1rem 2rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            <HomeOutlinedIcon sx={{ color: "white" }} />
            <Typography variant="h6" color="white">
              Home
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            <BusinessOutlinedIcon sx={{ color: "white" }} />
            <Typography variant="h6" color="white">
              About Us
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            <AssignmentOutlinedIcon sx={{ color: "white" }} />
            <Typography variant="h6" color="white">
              Terms and Conditions
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            <ShieldOutlinedIcon sx={{ color: "white" }} />
            <Typography variant="h6" color="white">
              Privacy Policy
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            <ContactPageOutlinedIcon sx={{ color: "white" }} />
            <Typography variant="h6" color="white">
              Contact
            </Typography>
          </Box>
          <hr />
        </Box>
        <Box sx={{ p: "0rem 2rem" }}>
          <Button sx={{ bgcolor: "#1A2B81", color: "white" }}>
            Registration
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
