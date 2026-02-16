"use client";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useCarrinho } from "@/context/carrinho.context";
import { useRouter } from "next/navigation";
import CarouselIMG from "@/app/components/CarouselImg";

interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: { name: string; slug: string };
  images?: string[];
}

interface ProdutosGridProps {
  produtos: Produto[];
}

export default function ProdutosGrid({ produtos = [] }: ProdutosGridProps) {
  const { adicionarProduto } = useCarrinho();
  const router = useRouter();

  const handleAddProduto = (product: Produto) => {
    adicionarProduto({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images?.[0] || "",
    });
  };

  const handleNavegacao = (product: Produto) => {
    const slugMap: Record<string, string> = {
      clothes: "roupas",
      electronics: "eletronicos",
      furniture: "mobilia",
      shoes: "calcados",
      miscellaneous: "variados",
    };
    const categoriaTraduzida = slugMap[product.category.slug];
    if (categoriaTraduzida) {
      router.push(`/produtos/${categoriaTraduzida}/${product.id}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, pb: 8 }}>
      <Grid container spacing={3}>
        {produtos?.map((produto) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={produto.id}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{ position: "relative", height: 250, overflow: "hidden" }}
              >
                <CarouselIMG images={produto.images || []} />
                <Chip
                  label={produto.category.name}
                  size="small"
                  color="primary"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 10,
                    fontWeight: "bold",
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {produto.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    minHeight: "3em",
                  }}
                >
                  {produto.description}
                </Typography>

                <Box
                  sx={{
                    mt: "auto",
                    pt: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{ fontWeight: 800 }}
                  >
                    ${produto.price}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      fullWidth
                      onClick={() => handleNavegacao(produto)}
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
                      }}
                      startIcon={
                        <VisibilityIcon sx={{ fontSize: "1rem !important" }} />
                      }
                    >
                      Detalhes
                    </Button>

                    <Button
                      variant="contained"
                      size="small"
                      fullWidth
                      onClick={() => handleAddProduto(produto)}
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
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
                      startIcon={
                        <AddShoppingCartIcon
                          sx={{ fontSize: "1rem !important" }}
                        />
                      }
                    >
                      Add
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
