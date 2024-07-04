import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Soligant, sans-serif",
      fontSize: "3rem",
      "@media (min-width: 600px)": {
        fontSize: "6rem",
      },
    },
    h2: {
      fontSize: "3.75rem",
      fontFamily: "Soligant, sans-serif",
    },
    h3: {
      fontFamily: "Miama, sans-serif",
      fontSize: "3rem",
    },
    h4: {
      fontFamily: "Soligant,serif",
      color: "black",
      fontSize: "2.5rem",
      "@media (min-width: 900px)": {
        fontSize: "4.75rem",
      },
    },
    h5: {
      fontFamily: "STSong,Serif",
      color: "#6C6C6C",
      fontSize: "0.9rem",
      "@media(min-width:900px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      fontSize: "2.5rem",
      fontFamily: "Soligant,serif",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Soligant,serif",
    },
    body2: { color: "#6C6C6C", fontSize: "1rem", fontFamily: "STSong,Serif" },
  },
});
