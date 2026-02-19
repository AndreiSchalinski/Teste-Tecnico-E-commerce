"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Badge,
  Drawer,
  Stack,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

import { useCarrinho } from "@/features/carrinho/context/carrinho.context";
import { useHistorico} from "@/features/historico/context/extrato.context"
import CarrinhoLista from "@/features/carrinho/components/Carrinho";

const storeItems = [
  { name: "Todas as categorias", path: "/produtos" },
  { name: "Roupas", path: "/produtos/roupas" },
  { name: "Eletrônicos", path: "/produtos/eletronicos" },
  { name: "Mobília", path: "/produtos/mobilia" },
  { name: "Calçados", path: "/produtos/calcados" },
  { name: "Variados", path: "/produtos/variados" },
];

function Header() {
  const { produtos } = useCarrinho();
  const { extratos } = useHistorico();
  const totalItens = produtos?.length || 0;
  const totalExtratos = extratos?.length || 0;

  const [scrolled, setScrolled] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElStore, setAnchorElStore] = useState<null | HTMLElement>(null);
  const [openMobileStore, setOpenMobileStore] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setOpenMobileStore(false);
  };
  const handleOpenStoreMenu = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorElStore(e.currentTarget);
  const handleCloseStoreMenu = () => setAnchorElStore(null);

  const navTextColor = scrolled ? "text.primary" : "rgba(255,255,255,0.85)";
  const navTextColorHover = scrolled ? "text.primary" : "white";
  const navBtnHoverBg = scrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (t) => t.zIndex.drawer + 1,
          bgcolor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(10,10,10,0.94)",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 62, md: 70 } }}>
            <Box
              component={Link}
              href="/"
              sx={{
                mr: 4,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: "10px",
                  background: scrolled
                    ? "linear-gradient(135deg, #0a0a0a 0%, #2d2d2d 100%)"
                    : "linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.4s ease",
                  flexShrink: 0,
                }}
              >
                <DiamondOutlinedIcon
                  sx={{
                    fontSize: 17,
                    color: scrolled ? "white" : "#0a0a0a",
                    transition: "color 0.4s ease",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  fontSize: "1.15rem",
                  color: scrolled ? "text.primary" : "white",
                  transition: "color 0.4s ease",
                }}
              >
                LUXE
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                sx={{ color: scrolled ? "text.primary" : "white" }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                disableScrollLock
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 230,
                    borderRadius: 3,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    overflow: "hidden",
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  href="/"
                  onClick={handleCloseNavMenu}
                  sx={{ py: 1.5, fontWeight: 600, fontSize: "0.9rem" }}
                >
                  Home
                </MenuItem>

                <Divider sx={{ my: 0.5 }} />

                <MenuItem
                  onClick={() => setOpenMobileStore(!openMobileStore)}
                  sx={{ py: 1.5, fontWeight: 600, fontSize: "0.9rem" }}
                >
                  <ListItemText
                    primary="Categorias"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  />
                  {openMobileStore ? (
                    <ExpandLess
                      fontSize="small"
                      sx={{ color: "text.secondary" }}
                    />
                  ) : (
                    <ExpandMore
                      fontSize="small"
                      sx={{ color: "text.secondary" }}
                    />
                  )}
                </MenuItem>

                <Collapse in={openMobileStore} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {storeItems.map((item) => (
                      <ListItemButton
                        key={item.name}
                        component={Link}
                        href={item.path}
                        onClick={handleCloseNavMenu}
                        sx={{
                          pl: 4,
                          py: 1.1,
                          "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                        }}
                      >
                        <ListItemText
                          primary={item.name}
                          primaryTypographyProps={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: "text.secondary",
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Menu>
            </Box>

            <Box
              component={Link}
              href="/"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
              }}
            >
              <DiamondOutlinedIcon
                sx={{
                  fontSize: 20,
                  color: scrolled ? "text.primary" : "white",
                  transition: "color 0.4s ease",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: scrolled ? "text.primary" : "white",
                  transition: "color 0.4s ease",
                }}
              >
                LUXE
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Button
                component={Link}
                href="/"
                sx={{
                  color: navTextColor,
                  fontWeight: 500,
                  px: 2,
                  borderRadius: 2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: navTextColorHover,
                    bgcolor: navBtnHoverBg,
                  },
                }}
              >
                Home
              </Button>

              <Button
                onClick={handleOpenStoreMenu}
                endIcon={
                  <ExpandMore
                    sx={{
                      fontSize: "1rem !important",
                      transition: "transform 0.25s ease",
                      transform: Boolean(anchorElStore)
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                }
                sx={{
                  color: navTextColor,
                  fontWeight: 500,
                  px: 2,
                  borderRadius: 2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: navTextColorHover,
                    bgcolor: navBtnHoverBg,
                  },
                }}
              >
                Categorias
              </Button>

              <Button
                component={Link}
                href="/historico"
                sx={{
                  color: navTextColor,
                  fontWeight: 500,
                  px: 2,
                  borderRadius: 2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: navTextColorHover,
                    bgcolor: navBtnHoverBg,
                  },
                }}
              >
                Minhas compras
                <Badge
                  badgeContent={totalExtratos}
                  showZero={false}
                  sx={{
                    "& .MuiBadge-badge": {
                      background:
                        "linear-gradient(135deg, #c8a96e 0%, #f0d090 100%)",
                      color: "#0a0a0a",
                      fontWeight: 800,
                      fontSize: "0.62rem",
                      minWidth: 18,
                      height: 18,
                      border: "2px solid",
                      borderColor: scrolled
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(10,10,10,0.9)",
                    },
                    marginBottom:'25px',
                  }}
                ></Badge>
              </Button>

              <Menu
                anchorEl={anchorElStore}
                open={Boolean(anchorElStore)}
                onClose={handleCloseStoreMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                disableScrollLock
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 230,
                    borderRadius: 3,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    py: 1,
                  },
                }}
              >
                {storeItems.map((item, i) => (
                  <Box key={item.name}>
                    {i === 1 && <Divider sx={{ my: 0.75 }} />}
                    <MenuItem
                      component={Link}
                      href={item.path}
                      onClick={handleCloseStoreMenu}
                      sx={{
                        py: 1.2,
                        px: 2.5,
                        fontWeight: i === 0 ? 700 : 500,
                        fontSize: "0.88rem",
                        color: i === 0 ? "text.primary" : "text.secondary",
                        transition: "all 0.15s ease",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.04)",
                          color: "text.primary",
                          pl: 3,
                        },
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  </Box>
                ))}
              </Menu>
            </Box>

            <IconButton
              onClick={() => setIsCartOpen(true)}
              sx={{
                color: scrolled ? "text.primary" : "white",
                p: 1.2,
                borderRadius: 2,
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: scrolled
                    ? "rgba(0,0,0,0.06)"
                    : "rgba(255,255,255,0.12)",
                },
              }}
            >
              <Badge
                badgeContent={totalItens}
                showZero={false}
                sx={{
                  "& .MuiBadge-badge": {
                    background:
                      "linear-gradient(135deg, #c8a96e 0%, #f0d090 100%)",
                    color: "#0a0a0a",
                    fontWeight: 800,
                    fontSize: "0.62rem",
                    minWidth: 18,
                    height: 18,
                    border: "2px solid",
                    borderColor: scrolled
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(10,10,10,0.9)",
                  },
                }}
              >
                <ShoppingBagOutlinedIcon sx={{ fontSize: 22 }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 420 },
            maxWidth: "100%",
            borderTopLeftRadius: { sm: "20px" },
            borderBottomLeftRadius: { sm: "20px" },
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
                sx={{ color: "rgba(255,255,255,0.9)", fontSize: 22 }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
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
                  }}
                >
                  {totalItens}
                </Box>
              )}
            </Stack>

            <IconButton
              onClick={() => setIsCartOpen(false)}
              size="small"
              sx={{
                color: "rgba(255,255,255,0.8)",
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              bgcolor: "#f7f7f5",
            }}
          >
            <CarrinhoLista />
          </Box>
        </Box>
      </Drawer>

      <Toolbar sx={{ minHeight: { xs: 62, md: 70 } }} />
    </>
  );
}

export default Header;
