"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Typography, Stack } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const labelMap: Record<string, string> = {
  produtos: "Produtos",
  roupas: "Roupas",
  eletronicos: "Eletrônicos",
  mobilia: "Mobília",
  calcados: "Calçados",
  variados: "Variados",
  historico: "Minhas Compras",
};

function formatarLabel(segmento: string): string {
  return (
    labelMap[segmento] ?? segmento.charAt(0).toUpperCase() + segmento.slice(1)
  );
}

export default function Breadcrumb() {
  const pathname = usePathname();

  const segmentos = pathname.split("/").filter(Boolean);

  const items = segmentos.map((seg, i) => ({
    label: formatarLabel(seg),
    href: "/" + segmentos.slice(0, i + 1).join("/"),
  }));

  const todos = [{ label: "Home", href: "/" }, ...items];

  if (segmentos.length === 0) return null;

  return (
    <Stack direction="row" alignItems="center" spacing={0.5} flexWrap="wrap">
      <DiamondOutlinedIcon
        sx={{ fontSize: 11, color: "rgba(200,169,110,0.5)", mr: 0.5 }}
      />

      {todos.map((item, index) => {
        const isLast = index === todos.length - 1;

        return (
          <Stack key={index} direction="row" alignItems="center" spacing={0.5}>
            {isLast ? (
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  background:
                    "linear-gradient(135deg, #c8a96e 0%, #f0d090 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Box
                component={Link}
                href={item.href}
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#c8a96e" },
                }}
              >
                {item.label}
              </Box>
            )}

            {!isLast && (
              <ChevronRightIcon
                sx={{ fontSize: 13, color: "rgba(255,255,255,0.15)" }}
              />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
}
