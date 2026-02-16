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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useCarrinho } from "@/context/carrinho.context";
import { useRouter } from "next/navigation";
import CarouselIMG from "@/app/components/CarouselImg";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

interface Props {
  produto: Produto;
}

export default function ProdutoDetalheView({ produto }: Props) {
  const router = useRouter();
  const { adicionarProduto } = useCarrinho();

  const handleAddProduto = () => {
    adicionarProduto({
      id: produto.id,
      name: produto.title,
      price: produto.price,
      image: produto.images[0],
    });
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 } }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        sx={{
          mb: 4,
          textTransform: "none",
          fontWeight: "bold",
          color: "text.secondary",
        }}
      >
        Voltar para a lista
      </Button>

      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              bgcolor: "#f9f9f9",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <CarouselIMG images={produto.images} />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Box>
              <Chip
                label={produto.category.name}
                color="primary"
                variant="outlined"
                sx={{ fontWeight: "bold", mb: 2 }}
              />
              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: 800, mb: 1 }}
              >
                {produto.title}
              </Typography>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                ${produto.price.toLocaleString()}
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Descrição do Produto
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                {produto.description}
              </Typography>
            </Box>

            <Divider />

            {/* Ações */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ pt: 2 }}
            >
              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<AddShoppingCartIcon />}
                onClick={handleAddProduto}
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  background:
                    "linear-gradient(45deg, #000000 30%, #434343 90%)",
                  color: "white",
                  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
                  transition: "0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #2c3e50 30%, #000000 90%)",
                  },
                }}
              >
                Adicionar ao Carrinho
              </Button>

              <Button
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<ShoppingBagIcon />}
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  background:
                    "linear-gradient(45deg, #000000 30%, #434343 90%)",
                  color: "white",
                  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
                  transition: "0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #2c3e50 30%, #000000 90%)",
                  },
                }}
              >
                Comprar Agora
              </Button>
            </Stack>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              * Entrega grátis para compras acima de $100.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
