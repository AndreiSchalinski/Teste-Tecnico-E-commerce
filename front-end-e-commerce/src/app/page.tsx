"use client";

import Link from "next/link";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DevicesIcon from "@mui/icons-material/Devices";
import ChairIcon from "@mui/icons-material/Chair";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GridViewIcon from "@mui/icons-material/GridView";

const categorias = [
  {
    label: "Roupas",
    sublabel: "Moda & Estilo",
    href: "/produtos/roupas",
    icon: <CheckroomIcon sx={{ fontSize: 28 }} />,
    accent: "linear-gradient(135deg, #1a1a1a 0%, #2d2420 100%)",
    glow: "rgba(200,169,110,0.15)",
  },
  {
    label: "Eletrônicos",
    sublabel: "Tech & Inovação",
    href: "/produtos/eletronicos",
    icon: <DevicesIcon sx={{ fontSize: 28 }} />,
    accent: "linear-gradient(135deg, #0d1a1a 0%, #102020 100%)",
    glow: "rgba(100,200,180,0.1)",
  },
  {
    label: "Mobília",
    sublabel: "Design & Interiores",
    href: "/produtos/mobilia",
    icon: <ChairIcon sx={{ fontSize: 28 }} />,
    accent: "linear-gradient(135deg, #1a1510 0%, #2a2015 100%)",
    glow: "rgba(200,160,80,0.12)",
  },
  {
    label: "Calçados",
    sublabel: "Passos com Classe",
    href: "/produtos/calcados",
    icon: <DirectionsWalkIcon sx={{ fontSize: 28 }} />,
    accent: "linear-gradient(135deg, #100d1a 0%, #1a1525 100%)",
    glow: "rgba(150,120,200,0.12)",
  },
  {
    label: "Variados",
    sublabel: "Descobertas Únicas",
    href: "/produtos/variados",
    icon: <AutoAwesomeIcon sx={{ fontSize: 28 }} />,
    accent: "linear-gradient(135deg, #0d1510 0%, #102018 100%)",
    glow: "rgba(80,180,120,0.1)",
  },
  {
    label: "Tudo",
    sublabel: "Ver Catálogo Completo",
    href: "/produtos",
    icon: <GridViewIcon sx={{ fontSize: 28 }} />,
    accent: "linear-gradient(135deg, #c8a96e 0%, #f0d090 100%)",
    glow: "rgba(200,169,110,0.3)",
    featured: true,
  },
];

const goldGradient =
  "linear-gradient(135deg, #c8a96e 0%, #f0d090 50%, #c8a96e 100%)";

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "#0a0a0a", minHeight: "100vh", color: "white" }}>
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "92vh", md: "88vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background:
            "radial-gradient(ellipse at 20% 50%, #1a1208 0%, #0a0a0a 60%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "-10%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,110,0.09) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            right: { xs: "-80px", md: "5%" },
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.04,
            pointerEvents: "none",
          }}
        >
          <DiamondOutlinedIcon
            sx={{ fontSize: { xs: 320, md: 480 }, color: "#f0d090" }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: { xs: "5%", md: "8%" },
            top: "15%",
            bottom: "15%",
            width: "1px",
            background:
              "linear-gradient(180deg, transparent, rgba(200,169,110,0.4) 30%, rgba(200,169,110,0.4) 70%, transparent)",
            display: { xs: "none", md: "block" },
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ pl: { xs: 0, md: 8 }, maxWidth: 720 }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                mb: 4,
                display: "inline-flex",
                px: 2,
                py: 0.8,
                border: "1px solid rgba(200,169,110,0.25)",
                borderRadius: "100px",
                bgcolor: "rgba(200,169,110,0.05)",
              }}
            >
              <DiamondOutlinedIcon sx={{ fontSize: 13, color: "#c8a96e" }} />
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  background: goldGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Coleção Exclusiva 2026
              </Typography>
            </Stack>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "3rem", sm: "4.2rem", md: "5.5rem" },
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                mb: 3,
                color: "white",
              }}
            >
              Produtos{" "}
              <Box
                component="span"
                sx={{
                  display: "block",
                  background: goldGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                de Alto
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "rgba(255,255,255,0.15)",
                  WebkitTextStroke: "1px rgba(200,169,110,0.3)",
                }}
              >
                Padrão.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.8,
                mb: 5,
                maxWidth: 480,
                fontStyle: "italic",
              }}
            >
              Uma curadoria refinada de produtos selecionados para quem não abre
              mão de qualidade, sofisticação e estilo em cada escolha.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                component={Link}
                href="/produtos"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: goldGradient,
                  color: "#0a0a0a",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  letterSpacing: "0.04em",
                  px: 4,
                  py: 1.8,
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(200,169,110,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #f0d090 0%, #c8a96e 100%)",
                    boxShadow: "0 12px 40px rgba(200,169,110,0.45)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Explorar Catálogo
              </Button>

              <Button
                component={Link}
                href="/historico"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.65)",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  px: 4,
                  py: 1.8,
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(200,169,110,0.4)",
                    color: "#f0d090",
                    bgcolor: "rgba(200,169,110,0.05)",
                  },
                }}
              >
                Minhas Compras
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={4}
              sx={{
                mt: 7,
                pt: 5,
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {[
                { valor: "500+", label: "Produtos" },
                { valor: "6", label: "Categorias" },
                { valor: "100%", label: "Qualidade" },
              ].map((s) => (
                <Box key={s.label}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      background: goldGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    {s.valor}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      mt: 0.5,
                    }}
                  >
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(transparent, #0f0f0f)",
            pointerEvents: "none",
          }}
        />
      </Box>

      <Box sx={{ bgcolor: "#0f0f0f", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            sx={{ mb: 6 }}
            spacing={2}
          >
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 1.5 }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: "1px",
                    background: goldGradient,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#c8a96e",
                  }}
                >
                  Navegue por categoria
                </Typography>
              </Stack>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  color: "white",
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  lineHeight: 1.1,
                }}
              >
                O que você
                <br />
                está buscando?
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/produtos"
              endIcon={
                <ArrowForwardIcon sx={{ fontSize: "0.9rem !important" }} />
              }
              sx={{
                color: "rgba(255,255,255,0.4)",
                fontWeight: 600,
                fontSize: "0.82rem",
                letterSpacing: "0.04em",
                transition: "color 0.2s ease",
                "&:hover": { color: "#f0d090" },
              }}
            >
              Ver todos os produtos
            </Button>
          </Stack>

          <Grid container spacing={2}>
            {categorias.map((cat, i) => (
              <Grid
                key={cat.label}
                size={{
                  xs: 6,
                  sm: 4,
                  md: i < 4 ? 3 : 6,
                }}
              >
                <Box
                  component={Link}
                  href={cat.href}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    height: { xs: 150, md: i < 4 ? 200 : 160 },
                    borderRadius: "16px",
                    background: cat.featured ? cat.accent : `${cat.accent}`,
                    border: cat.featured
                      ? "none"
                      : "1px solid rgba(255,255,255,0.06)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 20px 50px ${cat.glow}`,
                      "& .cat-arrow": {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                      "& .cat-icon": { transform: "scale(1.1)" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-40%",
                      right: "-20%",
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${cat.glow} 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  <Stack
                    justifyContent="space-between"
                    sx={{ height: "100%", p: { xs: 2.5, md: 3 } }}
                  >
                    <Box
                      className="cat-icon"
                      sx={{
                        color: cat.featured
                          ? "#0a0a0a"
                          : "rgba(255,255,255,0.7)",
                        transition: "transform 0.3s ease",
                        display: "inline-flex",
                      }}
                    >
                      {cat.icon}
                    </Box>

                    <Box>
                      <Stack
                        direction="row"
                        alignItems="flex-end"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: { xs: "0.68rem", md: "0.7rem" },
                              fontWeight: 500,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: cat.featured
                                ? "rgba(10,10,10,0.6)"
                                : "rgba(255,255,255,0.35)",
                              mb: 0.4,
                            }}
                          >
                            {cat.sublabel}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { xs: "1.1rem", md: "1.35rem" },
                              fontWeight: 800,
                              letterSpacing: "-0.02em",
                              color: cat.featured ? "#0a0a0a" : "white",
                              lineHeight: 1.1,
                            }}
                          >
                            {cat.label}
                          </Typography>
                        </Box>

                        <Box
                          className="cat-arrow"
                          sx={{
                            opacity: 0,
                            transform: "translateX(-8px)",
                            transition: "all 0.25s ease",
                            color: cat.featured
                              ? "#0a0a0a"
                              : "rgba(255,255,255,0.6)",
                          }}
                        >
                          <ArrowForwardIcon sx={{ fontSize: 20 }} />
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
          bgcolor: "#0a0a0a",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(200,169,110,0.08) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <DiamondOutlinedIcon
            sx={{
              fontSize: 36,
              background: goldGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              mb: 3,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "white",
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              mb: 2,
              lineHeight: 1.05,
            }}
          >
            Pronto para descobrir
            <Box
              component="span"
              sx={{
                display: "block",
                background: goldGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              o melhor do catálogo?
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.95rem",
              mb: 5,
              lineHeight: 1.7,
            }}
          >
            Cada produto foi escolhido com critério. Explore e encontre o que
            combina com você.
          </Typography>

          <Button
            component={Link}
            href="/produtos"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: goldGradient,
              color: "#0a0a0a",
              fontWeight: 800,
              fontSize: "0.9rem",
              letterSpacing: "0.06em",
              px: 5,
              py: 2,
              borderRadius: "14px",
              boxShadow: "0 8px 40px rgba(200,169,110,0.25)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #f0d090 0%, #c8a96e 100%)",
                transform: "translateY(-3px)",
                boxShadow: "0 16px 50px rgba(200,169,110,0.4)",
              },
            }}
          >
            Ver Todos os Produtos
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
