"use client";

import {
  Box,
  Typography,
  IconButton,
  Stack,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useCarrinho } from "../context/carrinho.context";
import { useHistorico } from "@/features/historico/context/extrato.context";
import { useRouter } from "next/navigation";

const slugMap: Record<string, string> = {
  clothes: "roupas",
  electronics: "eletronicos",
  furniture: "mobilia",
  shoes: "calcados",
  miscellaneous: "variados",
};

export default function CarrinhoLista() {
  const {
    produtos,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto,
    limparCarrinho,
    total,
  } = useCarrinho();

  const { finalizarCompra } = useHistorico();
  const router = useRouter();

  if (produtos.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <ShoppingBagOutlinedIcon
          sx={{ fontSize: 48, color: "text.disabled", mb: 1 }}
        />
        <Typography variant="body1" color="text.secondary">
          Seu carrinho está vazio.
        </Typography>
      </Box>
    );
  }

  const handleFinalizarCompra = () => {
    finalizarCompra(produtos, limparCarrinho);
  };

  const handleNavegacao = (produto: any) => {
    const categoriaTraduzida = slugMap[produto.category.slug];
    if (categoriaTraduzida) {
      router.push(`/produtos/${categoriaTraduzida}/${produto.id}`);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Stack spacing={2} sx={{ flexGrow: 1, overflowY: "auto", px: 2, py: 1 }}>
        {produtos.map((produto) => (
          <Box key={produto.id}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={produto.image}
                variant="rounded"
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: 2,
                  border: "1px solid #eee",
                }}
              />

              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", lineHeight: 1.2, mb: 0.5 }}
                >
                  {produto.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  ${produto.price.toLocaleString()}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ddd",
                      borderRadius: 1,
                      px: 0.5,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => diminuirQuantidade(produto.id)}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography
                      sx={{
                        mx: 1,
                        fontWeight: "bold",
                        minWidth: 20,
                        textAlign: "center",
                      }}
                    >
                      {produto.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => aumentarQuantidade(produto.id)}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => removerProduto(produto.id)}
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>

                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleNavegacao(produto)}
                    endIcon={
                      <ArrowForwardIcon
                        sx={{ fontSize: "0.85rem !important" }}
                      />
                    }
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                      fontSize: "0.78rem",
                      py: 0.9,
                      px: 1.5,
                      borderColor: "rgba(0,0,0,0.15)",
                      color: "text.primary",
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: "rgba(0,0,0,0.02)",
                      },
                    }}
                  >
                    Ver
                  </Button>
                </Stack>
              </Box>
            </Stack>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </Stack>

      <Box sx={{ p: 3, bgcolor: "#f9f9f9" }}>
        <Stack
          direction="row"
          justifyItems="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Total:
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
            ${total.toLocaleString()}
          </Typography>
        </Stack>
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handleFinalizarCompra}
          sx={{
            borderRadius: 2,
            py: 1.5,
            fontWeight: "bold",
            background: "linear-gradient(45deg, #000000 30%, #434343 90%)",
            color: "white",
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            transition: "0.3s",
            "&:hover": {
              background: "linear-gradient(45deg, #2c3e50 30%, #000000 90%)",
            },
          }}
        >
          Finalizar Compra
        </Button>
      </Box>
    </Box>
  );
}