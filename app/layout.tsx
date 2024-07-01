"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
