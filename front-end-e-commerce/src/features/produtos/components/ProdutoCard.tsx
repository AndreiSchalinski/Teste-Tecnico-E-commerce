"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CarouselImgs from "@/components/layout/CarouselImg";
import { useCarrinho } from "../../carrinho/context/carrinho.context";
import { ProdutoCardProps } from "@/types/interfaces";

const slugMap: Record<string, string> = {
  clothes: "roupas",
  electronics: "eletronicos",
  furniture: "mobilia",
  shoes: "calcados",
  miscellaneous: "variados",
};

const goldGradient = "linear-gradient(135deg, #c8a96e 0%, #f0d090 100%)";

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  const { adicionarProduto } = useCarrinho();
  const router = useRouter();

  const handleNavegacao = () => {
    const categoriaTraduzida = slugMap[produto.category.slug];
    if (categoriaTraduzida) {
      router.push(`/produtos/${categoriaTraduzida}/${produto.id}`);
    }
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "30px",
        overflow: "hidden",
        bgcolor: "#161616",
        border: "1px solid rgba(200,169,110,0.1)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,169,110,0.2)",
          borderColor: "rgba(200,169,110,0.25)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: 240,
          overflow: "hidden",
          bgcolor: "#1e1e1e",
        }}
      >
        <CarouselImgs images={produto.images || []} />

        <Chip
          label={produto.category.name}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 10,
            bgcolor: "rgba(10,10,10,0.75)",
            backdropFilter: "blur(8px)",
            color: "#c8a96e",
            fontWeight: 700,
            fontSize: "0.62rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            border: "1px solid rgba(200,169,110,0.25)",
            height: 24,
          }}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: "20px !important",
          gap: 0.75,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            fontSize: "0.92rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            color: "white",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {produto.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8rem",
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.38)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            minHeight: "2.5em",
          }}
        >
          {produto.description}
        </Typography>

        <Box
          sx={{
            mt: "auto",
            pt: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 1.25,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "1.15rem",
              letterSpacing: "-0.02em",
              background: goldGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ${produto.price.toLocaleString()}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              size="small"
              fullWidth
              onClick={handleNavegacao}
              endIcon={
                <ArrowForwardIcon sx={{ fontSize: "0.85rem !important" }} />
              }
              sx={{
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "0.78rem",
                py: 0.9,
                borderColor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "rgba(200,169,110,0.4)",
                  color: "#f0d090",
                  bgcolor: "rgba(200,169,110,0.05)",
                },
              }}
            >
              Ver
            </Button>

            <Button
              variant="contained"
              size="small"
              fullWidth
              onClick={() => adicionarProduto(produto)}
              startIcon={
                <AddShoppingCartIcon sx={{ fontSize: "0.95rem !important" }} />
              }
              sx={{
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "0.78rem",
                py: 0.9,
                background: goldGradient,
                color: "#0a0a0a",
                boxShadow: "0 4px 16px rgba(200,169,110,0.25)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #f0d090 0%, #c8a96e 100%)",
                  boxShadow: "0 8px 24px rgba(200,169,110,0.4)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
