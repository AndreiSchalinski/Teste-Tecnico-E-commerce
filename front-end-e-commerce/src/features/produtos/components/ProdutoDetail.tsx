"use client";

import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  Divider,
  Paper,
  Stack,
  Rating,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useCarrinho } from "@/features/carrinho/context/carrinho.context";
import { useRouter } from "next/navigation";
import CarouselImgs from "@/components/layout/CarouselImg";
import { DetailProps } from "@/types/interfaces";

const trustBadges = [
  {
    icon: (
      <LocalShippingOutlinedIcon
        sx={{ fontSize: 17, color: "text.secondary" }}
      />
    ),
    label: "Frete grátis acima de $100",
  },
  {
    icon: (
      <VerifiedOutlinedIcon sx={{ fontSize: 17, color: "text.secondary" }} />
    ),
    label: "Produto autêntico garantido",
  },
  {
    icon: <CachedOutlinedIcon sx={{ fontSize: 17, color: "text.secondary" }} />,
    label: "Devolução grátis em 30 dias",
  },
  {
    icon: <LockOutlinedIcon sx={{ fontSize: 17, color: "text.secondary" }} />,
    label: "Pagamento 100% seguro",
  },
];

export default function ProdutoDetailing({ produto }: DetailProps) {
  const router = useRouter();
  const { adicionarProduto } = useCarrinho();

  const handleAddProduto = () => {
    adicionarProduto(produto);
  };

  const precoOriginal = (produto.price * 1.2).toFixed(0);

  return (
    <Box
      sx={{
        maxWidth: 1280,
        mx: "auto",
        px: { xs: 2, md: 5 },
        py: { xs: 3, md: 5 },
      }}
    > 
      <Button
        startIcon={<ArrowBackIcon sx={{ fontSize: "1rem !important" }} />}
        onClick={() => router.back()}
        sx={{
          mb: 4,
          color: "text.secondary",
          fontWeight: 500,
          fontSize: "0.85rem",
          px: 2,
          py: 0.9,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "white",
          "&:hover": {
            bgcolor: "rgba(0,0,0,0.03)",
            borderColor: "rgba(0,0,0,0.18)",
            color: "text.primary",
          },
          transition: "all 0.2s ease",
        }}
      >
        Voltar
      </Button>

      <Grid container spacing={{ xs: 4, md: 7 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              bgcolor: "#f7f7f5",
              border: "1px solid",
              borderColor: "divider",
              height: { xs: 320, sm: 420, md: 500 },
              position: { md: "sticky" },
              top: { md: 88 },
            }}
          >
            <CarouselImgs images={produto.images || []} />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Box>
              <Chip
                label={produto.category.name}
                size="small"
                sx={{
                  mb: 2,
                  bgcolor: "rgba(0,0,0,0.05)",
                  color: "text.secondary",
                  fontWeight: 700,
                  fontSize: "0.68rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  border: "none",
                  height: 24,
                }}
              />

              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  fontSize: { xs: "1.7rem", sm: "2rem", md: "2.3rem" },
                  mb: 2,
                }}
              >
                {produto.name}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <Rating
                  value={4.5}
                  precision={0.5}
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": { color: "#0a0a0a" },
                    "& .MuiRating-iconEmpty": { color: "rgba(0,0,0,0.18)" },
                  }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 500, fontSize: "0.82rem" }}
                >
                  4.5 · 128 avaliações
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(0,0,0,0.03)",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                px: 2.5,
                py: 1.75,
                width: "fit-content",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "2rem",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                ${produto.price.toLocaleString()}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textDecoration: "line-through",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                }}
              >
                ${precoOriginal}
              </Typography>

              <Chip
                label="20% OFF"
                size="small"
                sx={{
                  bgcolor: "#0a0a0a",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.62rem",
                  letterSpacing: "0.04em",
                  height: 22,
                  borderRadius: "5px",
                }}
              />
            </Box>

            <Divider sx={{ borderColor: "rgba(0,0,0,0.06)" }} />

            <Box>
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "text.secondary",
                  fontSize: "0.68rem",
                  mb: 1,
                }}
              >
                Descrição
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.85, fontSize: "0.92rem" }}
              >
                {produto.description}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: "rgba(0,0,0,0.06)" }} />

            <Stack spacing={1.5}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<AddShoppingCartIcon />}
                onClick={handleAddProduto}
                sx={{
                  py: 1.9,
                  borderRadius: 3,
                  fontSize: "0.97rem",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #0a0a0a 0%, #2d2d2d 100%)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
                  letterSpacing: "0.01em",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #1a1a1a 0%, #404040 100%)",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.32)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Adicionar ao Carrinho
              </Button>

            </Stack>

            <Box
              sx={{
                bgcolor: "rgba(0,0,0,0.02)",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                p: 2,
              }}
            >
              <Stack spacing={1.25}>
                {trustBadges.map((badge, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    {badge.icon}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    >
                      {badge.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
