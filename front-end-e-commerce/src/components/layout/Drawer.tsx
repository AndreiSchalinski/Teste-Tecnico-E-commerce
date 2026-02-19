"use client";

import { Drawer, Box, Typography, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CarrinhoLista from "../../features/carrinho/components/Carrinho";
import { useCarrinho } from "@/features/carrinho/context/carrinho.context";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DrawerCarrinho({ open, onClose }: Props) {
  const { produtos } = useCarrinho();
  const totalItens = produtos?.length || 0;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 420 },
          maxWidth: "100%",
          borderTopLeftRadius: { sm: "20px" },
          borderBottomLeftRadius: { sm: "20px" },
          overflow: "hidden",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 3,
            py: 2.5,
            background: "linear-gradient(135deg, #0a0a0a 0%, #2d2d2d 100%)",
            flexShrink: 0,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <ShoppingBagOutlinedIcon
              sx={{ color: "rgba(255,255,255,0.85)", fontSize: 22 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: "1rem",
              }}
            >
              Meu Carrinho
            </Typography>

            {totalItens > 0 && (
              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.15)",
                  color: "white",
                  borderRadius: "50%",
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {totalItens}
              </Box>
            )}
          </Stack>

          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              color: "rgba(255,255,255,0.8)",
              bgcolor: "rgba(255,255,255,0.1)",
              borderRadius: 2,
              transition: "all 0.15s ease",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
                color: "white",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        {totalItens > 0 && (
          <Box
            sx={{
              px: 3,
              py: 1.25,
              bgcolor: "rgba(0,0,0,0.02)",
              borderBottom: "1px solid",
              borderColor: "divider",
              flexShrink: 0,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                fontSize: "0.78rem",
              }}
            >
              {totalItens} {totalItens === 1 ? "item" : "itens"} no carrinho
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            bgcolor: "#f7f7f5",
            "&::-webkit-scrollbar": { width: "4px" },
            "&::-webkit-scrollbar-track": { background: "transparent" },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(0,0,0,0.12)",
              borderRadius: "2px",
            },
          }}
        >
          <CarrinhoLista />
        </Box>
        {totalItens === 0 && (
          <Box
            sx={{
              p: 3,
              textAlign: "center",
              borderTop: "1px solid",
              borderColor: "divider",
              flexShrink: 0,
            }}
          >
            <ShoppingBagOutlinedIcon
              sx={{ fontSize: 48, color: "text.disabled", mb: 1 }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              Seu carrinho está vazio
            </Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
