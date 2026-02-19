"use client";

import {
  Box,
  Typography,
  Stack,
  Avatar,
  Divider,
  Button,
  Chip,
  Collapse,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useHistorico } from "@/features/historico/context/extrato.context";

// ---- Interfaces ----

export interface Categoria {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

export interface ProdutoCarrinho {
  id: number;
  title?: string;
  price: number;
  image: string;
  category: Categoria;
  quantity: number;
}

export interface Extrato {
  produtoCarrinho: ProdutoCarrinho[];
  total: number;
  dataCompra: string;
}

// ---- Helpers ----

const slugMap: Record<string, string> = {
  clothes: "roupas",
  electronics: "eletronicos",
  furniture: "mobilia",
  shoes: "calcados",
  miscellaneous: "variados",
};

function formatarData(dataISO: string): string {
  const data = new Date(dataISO);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// ---- Sub-componente: linha de produto ----

function ProdutoLinha({ produto }: { produto: ProdutoCarrinho }) {
  const router = useRouter();

  const handleNavegacao = () => {
    const categoriaTraduzida = slugMap[produto.category.slug];
    if (categoriaTraduzida) {
      router.push(`/produtos/${categoriaTraduzida}/${produto.id}`);
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          src={produto.image}
          variant="rounded"
          sx={{
            width: 70,
            height: 70,
            borderRadius: 2,
            border: "1px solid #eee",
            flexShrink: 0,
          }}
        />

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.2,
              mb: 0.5,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {produto.title ?? "Produto sem nome"}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Typography
              variant="body2"
              color="primary"
              sx={{ fontWeight: 700 }}
            >
              $
              {produto.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              × {produto.quantity}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              = $
              {(produto.price * produto.quantity).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Stack>

          <Button
            variant="outlined"
            size="small"
            onClick={handleNavegacao}
            endIcon={
              <ArrowForwardIcon sx={{ fontSize: "0.85rem !important" }} />
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
            Ver produto
          </Button>
        </Box>
      </Stack>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

// ---- Sub-componente: card de um extrato ----

function ExtratoCard({ extrato, index }: { extrato: Extrato; index: number }) {
  const [aberto, setAberto] = useState(false);
  const totalItens = extrato.produtoCarrinho.reduce(
    (acc, p) => acc + p.quantity,
    0,
  );

  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "background.paper",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: 2.5,
          py: 2,
          cursor: "pointer",
          "&:hover": { bgcolor: "rgba(0,0,0,0.02)" },
        }}
        onClick={() => setAberto((prev) => !prev)}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <ShoppingBagOutlinedIcon
            sx={{ color: "text.secondary", fontSize: 20 }}
          />
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              Pedido #{String(index + 1).padStart(3, "0")}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {formatarData(extrato.dataCompra)}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Chip
            label={`${totalItens} ${totalItens === 1 ? "item" : "itens"}`}
            size="small"
            sx={{ fontWeight: 600, fontSize: "0.72rem" }}
          />
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ fontWeight: 800 }}
          >
            $
            {extrato.total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </Typography>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setAberto((prev) => !prev);
            }}
          >
            {aberto ? (
              <ExpandLessIcon fontSize="small" />
            ) : (
              <ExpandMoreIcon fontSize="small" />
            )}
          </IconButton>
        </Stack>
      </Stack>

      <Collapse in={aberto}>
        <Divider />
        <Stack spacing={2} sx={{ px: 2.5, py: 2 }}>
          {extrato.produtoCarrinho.map((produto) => (
            <ProdutoLinha key={produto.id} produto={produto} />
          ))}
        </Stack>

        <Box sx={{ px: 2.5, pb: 2.5, bgcolor: "#f9f9f9" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary">
              Total da compra
            </Typography>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
              $
              {extrato.total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}

// ---- Componente principal ----

export default function HistoricoCompras() {
  const { extratos, limparHistorico } = useHistorico();

  if (!extratos || extratos.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <ShoppingBagOutlinedIcon
          sx={{ fontSize: 48, color: "text.disabled", mb: 1 }}
        />
        <Typography variant="body1" color="text.secondary">
          Você ainda não realizou nenhuma compra.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ px: 2, pt: 2, pb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Histórico de Compras
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption" color="text.secondary">
            {extratos.length}{" "}
            {extratos.length === 1 ? "compra realizada" : "compras realizadas"}
          </Typography>
          <Button
            sx={{ border: "1px solid rgba(0,0,0,0.15)" }}
            onClick={limparHistorico}
          >
            Limpar histórico
          </Button>
        </Stack>
      </Box>

      <Stack spacing={2} sx={{ flexGrow: 1, overflowY: "auto", px: 2, py: 1 }}>
        {extratos.map((extrato, index) => (
          <ExtratoCard key={index} extrato={extrato} index={index} />
        ))}
      </Stack>
    </Box>
  );
}
