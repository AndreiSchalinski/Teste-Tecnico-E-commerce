"use client";

import { Snackbar, Alert, AlertColor, Slide, SlideProps } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface FeedbackToastProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: () => void;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const severityConfig: Record<
  AlertColor,
  { background: string; icon: React.ReactNode }
> = {
  success: {
    background: "linear-gradient(135deg, #0a0a0a 0%, #2d2d2d 100%)",
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 20 }} />,
  },
  error: {
    background: "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
    icon: <ErrorOutlineIcon sx={{ fontSize: 20 }} />,
  },
  warning: {
    background: "linear-gradient(135deg, #c2410c 0%, #ea580c 100%)",
    icon: <WarningAmberIcon sx={{ fontSize: 20 }} />,
  },
  info: {
    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
    icon: <InfoOutlinedIcon sx={{ fontSize: 20 }} />,
  },
};

export default function FeedbackToast({
  open,
  message,
  severity,
  onClose,
}: FeedbackToastProps) {
  const config = severityConfig[severity];

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      TransitionComponent={SlideTransition}
      sx={{
        "& .MuiSnackbar-root": {
          bottom: { xs: 16, sm: 24 },
        },
      }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        icon={config.icon}
        variant="filled"
        sx={{
          minWidth: { xs: "calc(100vw - 32px)", sm: 360 },
          maxWidth: { xs: "calc(100vw - 32px)", sm: 480 },
          borderRadius: 3,
          background: config.background,
          color: "white",
          fontWeight: 600,
          fontSize: "0.88rem",
          letterSpacing: "0.01em",
          lineHeight: 1.5,
          boxShadow: "0 8px 32px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12)",
          alignItems: "center",
          py: 1.25,
          px: 2,

          "& .MuiAlert-icon": {
            color: "rgba(255,255,255,0.85)",
            fontSize: 20,
            mr: 1.25,
            p: 0,
            opacity: 1,
          },

          "& .MuiAlert-message": {
            p: 0,
            display: "flex",
            alignItems: "center",
          },

          "& .MuiAlert-action": {
            p: 0,
            ml: 1.5,
            alignItems: "center",
            "& .MuiIconButton-root": {
              color: "rgba(255,255,255,0.7)",
              p: 0.5,
              borderRadius: 1.5,
              transition: "all 0.15s ease",
              "&:hover": {
                color: "white",
                bgcolor: "rgba(255,255,255,0.15)",
              },
            },
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}