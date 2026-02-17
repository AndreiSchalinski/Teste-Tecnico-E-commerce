"use client";

import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#000000" },
    secondary: { main: "#dc004e" },
  },
  
  custom: {
    gradient: "linear-gradient(45deg, #000000 30%, #2c3e50 90%)",
    gold: "linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)", 
  }
} as any);
export function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
