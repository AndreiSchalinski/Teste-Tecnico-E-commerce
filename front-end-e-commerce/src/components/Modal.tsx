"use client";

import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  titulo?: string;
  descricao?: string;
  labelConfirmar?: string;
  labelCancelar?: string;
  perigo?: boolean;
}

const goldGradient = "linear-gradient(135deg, #c8a96e 0%, #f0d090 100%)";

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  titulo = "Tem certeza?",
  descricao = "Esta ação não pode ser desfeita.",
  labelConfirmar = "Confirmar",
  labelCancelar = "Cancelar",
  perigo = false,
}: ConfirmModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableScrollLock
      PaperProps={{
        sx: {
          bgcolor: "#161616",
          border: "1px solid rgba(200,169,110,0.15)",
          borderRadius: "20px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          maxWidth: 420,
          width: "100%",
          m: 2,
          overflow: "visible",
        },
      }}
      sx={{
        backdropFilter: "blur(6px)",
        "& .MuiBackdrop-root": {
          bgcolor: "rgba(0,0,0,0.7)",
        },
      }}
    >
      {/* Ícone flutuante no topo */}
      <Box
        sx={{
          position: "absolute",
          top: -22,
          left: "50%",
          transform: "translateX(-50%)",
          width: 44,
          height: 44,
          borderRadius: "14px",
          background: perigo
            ? "linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)"
            : goldGradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: perigo
            ? "0 8px 24px rgba(220,38,38,0.35)"
            : "0 8px 24px rgba(200,169,110,0.35)",
          border: "2px solid #161616",
        }}
      >
        <DiamondOutlinedIcon
          sx={{ fontSize: 20, color: perigo ? "white" : "#0a0a0a" }}
        />
      </Box>

      {/* Botão fechar */}
      <IconButton
        onClick={onClose}
        size="small"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          color: "rgba(255,255,255,0.3)",
          bgcolor: "rgba(255,255,255,0.04)",
          borderRadius: "8px",
          "&:hover": {
            color: "rgba(255,255,255,0.7)",
            bgcolor: "rgba(255,255,255,0.08)",
          },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogContent sx={{ pt: 5, pb: 3, px: 3.5 }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "1.15rem",
            letterSpacing: "-0.02em",
            color: "white",
            textAlign: "center",
            mb: 1.25,
          }}
        >
          {titulo}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.4)",
            textAlign: "center",
            lineHeight: 1.7,
            mb: 3.5,
          }}
        >
          {descricao}
        </Typography>

        <Box
          sx={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(200,169,110,0.2), transparent)",
            mb: 3,
          }}
        />

        <Stack direction="row" spacing={1.5}>
          <Button
            fullWidth
            onClick={onClose}
            sx={{
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "0.85rem",
              py: 1.3,
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.5)",
              transition: "all 0.2s ease",
              "&:hover": {
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                bgcolor: "rgba(255,255,255,0.04)",
              },
            }}
          >
            {labelCancelar}
          </Button>

          <Button
            fullWidth
            onClick={() => {
              onConfirm();
              onClose();
            }}
            sx={{
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "0.85rem",
              py: 1.3,
              background: perigo
                ? "linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)"
                : goldGradient,
              color: perigo ? "white" : "#0a0a0a",
              boxShadow: perigo
                ? "0 4px 16px rgba(220,38,38,0.3)"
                : "0 4px 16px rgba(200,169,110,0.25)",
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: perigo
                  ? "0 8px 24px rgba(220,38,38,0.45)"
                  : "0 8px 24px rgba(200,169,110,0.4)",
                background: perigo
                  ? "linear-gradient(135deg, #991b1b 0%, #ef4444 100%)"
                  : "linear-gradient(135deg, #f0d090 0%, #c8a96e 100%)",
              },
            }}
          >
            {labelConfirmar}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}