"use client";

import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0a0a0a", light: "#2d2d2d", dark: "#000000" },
    secondary: { main: "#c8a96e" },
    background: { default: "#f7f7f5", paper: "#ffffff" },
    text: { primary: "#0a0a0a", secondary: "#6b6b6b" },
    divider: "rgba(0,0,0,0.06)",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.03em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontWeight: 700, letterSpacing: "-0.01em" },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    button: { fontWeight: 600, letterSpacing: "0.02em" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.2s ease",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #0a0a0a 0%, #2d2d2d 100%)",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          "&:hover": {
            background: "linear-gradient(135deg, #1a1a1a 0%, #404040 100%)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            transform: "translateY(-1px)",
          },
        },
        outlinedPrimary: {
          borderColor: "rgba(0,0,0,0.2)",
          "&:hover": {
            borderColor: "#0a0a0a",
            backgroundColor: "rgba(0,0,0,0.03)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          fontSize: "0.7rem",
          letterSpacing: "0.04em",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
  },
} as any);

export function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}