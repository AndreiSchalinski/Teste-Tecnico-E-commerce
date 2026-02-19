import { Box, Typography } from "@mui/material";
import Breadcrumb from "./Bradcrumb";
import React from "react";

interface IContentPage {
  titulo: string;
  subtitlo: string;
  children: React.ReactNode;
}

export default function ContainerContent({
  titulo,
  subtitlo,
  children,
}: IContentPage) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(200,169,110,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", pt: 6, pb: 4 }}>
          <Typography
            sx={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#c8a96e",
              mb: 1.5,
            }}
          >
            {subtitlo}
          </Typography>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            <Breadcrumb />
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "white",
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            {titulo}
          </Typography>
        </Box>
        <Box sx={{ px: 4, pb: 6 }}>{children}</Box>
      </Box>
    </Box>
  );
}
