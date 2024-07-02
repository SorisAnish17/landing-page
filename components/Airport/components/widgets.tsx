import { Box } from "@mui/material";
import React from "react";
import { content } from "../components/content";
import AddIcon from "@mui/icons-material/Add";

export const Widgets = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {content.map((card) => {
        return (
          <Box
            key={card.cardNo}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "1rem", md: "0.5rem" },
              alignItems: { xs: "center", md: "auto" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ fontFamily: "Soligant,serif", fontSize: "3.75rem" }}>
                {card.count}
              </Box>
              <Box>
                <AddIcon sx={{ fontSize: "3rem" }} />
              </Box>
            </Box>
            <Box sx={{ fontFamily: "STSong,serif" }}>{card.title}</Box>
            <hr />
            <Box sx={{ fontFamily: "STSong,serif" }}>{card.description}</Box>
          </Box>
        );
      })}
    </Box>
  );
};
