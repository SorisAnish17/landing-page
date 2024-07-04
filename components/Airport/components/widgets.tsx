"use client";
import { Box } from "@mui/material";
import React from "react";
import { content } from "../components/content";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

export const Widgets = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "2rem", md: "0rem" },
      }}
    >
      {content.map((card) => {
        return (
          <motion.div
            key={card.cardNo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            className="container"
          >
            <motion.div
              style={{ display: "flex" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Box sx={{ fontFamily: "Soligant,serif", fontSize: "3.75rem" }}>
                {card.count}
              </Box>
              <Box>
                <AddIcon sx={{ fontSize: "3rem" }} />
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ fontFamily: "STSong,serif" }}
            >
              {card.title}
            </motion.div>
            <hr />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{ fontFamily: "STSong,serif" }}
            >
              {card.description}
            </motion.div>
          </motion.div>
        );
      })}
    </Box>
  );
};
