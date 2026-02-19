"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Grid,
} from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

const categorias = [
  { label: "Todas as categorias", href: "/produtos" },
  { label: "Roupas", href: "/produtos/roupas" },
  { label: "Eletrônicos", href: "/produtos/eletronicos" },
  { label: "Mobília", href: "/produtos/mobilia" },
  { label: "Calçados", href: "/produtos/calcados" },
  { label: "Variados", href: "/produtos/variados" },
];

const conta = [
  { label: "Minhas compras", href: "/historico" },
];

const info = [
  { label: "Sobre nós", href: "#" },
  { label: "Política de privacidade", href: "#" },
  { label: "Termos de uso", href: "#" },
  { label: "Contato", href: "#" },
];

const socials = [
  { icon: <InstagramIcon sx={{ fontSize: 18 }} />, href: "#", label: "Instagram" },
  { icon: <PinterestIcon sx={{ fontSize: 18 }} />, href: "#", label: "Pinterest" },
  { icon: <TwitterIcon sx={{ fontSize: 18 }} />, href: "#", label: "Twitter" },
  { icon: <FacebookIcon sx={{ fontSize: 18 }} />, href: "#", label: "Facebook" },
];

const goldGradient = "linear-gradient(135deg, #c8a96e 0%, #f0d090 50%, #c8a96e 100%)";

const footerLink = {
  display: "block",
  color: "rgba(255,255,255,0.5)",
  textDecoration: "none",
  fontSize: "0.855rem",
  fontWeight: 400,
  letterSpacing: "0.01em",
  lineHeight: 1,
  py: 0.85,
  transition: "color 0.2s ease, letter-spacing 0.2s ease",
  "&:hover": {
    color: "#f0d090",
    letterSpacing: "0.03em",
  },
};

const sectionTitle = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  background: goldGradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  mb: 2.5,
};

export default function FooterPages() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
        color: "rgba(255,255,255,0.75)",
        pt: { xs: 7, md: 10 },
        pb: 0,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: goldGradient,
          opacity: 0.6,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "40%",
          height: "180px",
          background:
            "radial-gradient(ellipse at center, rgba(200,169,110,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 6 }} sx={{ pb: { xs: 6, md: 8 } }}>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Box
                component={Link}
                href="/"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "11px",
                    background: "linear-gradient(135deg, #c8a96e 0%, #f0d090 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 20px rgba(200,169,110,0.3)",
                  }}
                >
                  <DiamondOutlinedIcon
                    sx={{ fontSize: 18, color: "#0a0a0a" }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  LUXE
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.38)",
                  fontSize: "0.82rem",
                  lineHeight: 1.75,
                  maxWidth: 280,
                  fontStyle: "italic",
                  letterSpacing: "0.01em",
                }}
              >
                Curadoria de produtos selecionados para quem valoriza qualidade
                e sofisticação em cada detalhe.
              </Typography>

              <Stack direction="row" spacing={0.5}>
                {socials.map((s) => (
                  <IconButton
                    key={s.label}
                    component="a"
                    href={s.href}
                    aria-label={s.label}
                    size="small"
                    sx={{
                      color: "rgba(255,255,255,0.35)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      width: 34,
                      height: 34,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        color: "#f0d090",
                        borderColor: "rgba(200,169,110,0.4)",
                        bgcolor: "rgba(200,169,110,0.06)",
                      },
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Typography sx={sectionTitle}>Categorias</Typography>
            <Stack spacing={0}>
              {categorias.map((item) => (
                <Box
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={footerLink}
                >
                  {item.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography sx={sectionTitle}>Minha conta</Typography>
            <Stack spacing={0}>
              {conta.map((item) => (
                <Box
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={footerLink}
                >
                  {item.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Typography sx={sectionTitle}>Informações</Typography>
            <Stack spacing={0}>
              {info.map((item) => (
                <Box
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={footerLink}
                >
                  {item.label}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(200,169,110,0.25) 30%, rgba(200,169,110,0.25) 70%, transparent)",
          }}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ py: 3 }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
            }}
          >
            © {year} LUXE. Todos os direitos reservados.
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <DiamondOutlinedIcon
              sx={{ fontSize: 11, color: "rgba(200,169,110,0.4)" }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.15)",
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Qualidade &amp; Sofisticação
            </Typography>
            <DiamondOutlinedIcon
              sx={{ fontSize: 11, color: "rgba(200,169,110,0.4)" }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}