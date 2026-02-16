"use client";

import React, { useState } from "react";
import Link from "next/link"; // Se usar React Router, mude para: import { Link } from "react-router-dom";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// Definição das rotas
const pages = [
  { name: "Home", path: "/" },
  { name: "Carrinho", path: "/carrinho" },
];

const storeItems = [
  { name: "Todas as categorias", path: "/produtos" },
  { name: "Roupas", path: "/produtos/roupas" },
  { name: "Eletrônicos", path: "/produtos/eletronicos" },
  { name: "Mobília", path: "/produtos/mobilia" },
  { name: "Calçados", path: "/produtos/calcados" },
  { name: "Variados", path: "/produtos/variados" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElStore, setAnchorElStore] = useState<null | HTMLElement>(null);
  const [openMobileStore, setOpenMobileStore] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setOpenMobileStore(false);
  };

  const handleOpenStoreMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElStore(event.currentTarget);
  const handleCloseStoreMenu = () => setAnchorElStore(null);

  const menuProps = {
    disableScrollLock: true,
    slotProps: {
      backdrop: { sx: { backgroundColor: "transparent" } },
    },
  };

  return (
    <>
      <AppBar position="fixed" elevation={2} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* LOGO DESKTOP */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <AdbIcon sx={{ mr: 1 }} /> LOGO
            </Typography>

            {/* MENU MOBILE */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                {...menuProps}
              >
                <MenuItem component={Link} href="/" onClick={handleCloseNavMenu}>
                  Home
                </MenuItem>
                
                <MenuItem onClick={() => setOpenMobileStore(!openMobileStore)}>
                  <ListItemText primary="Store" />
                  {openMobileStore ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                
                <Collapse in={openMobileStore} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.04)' }}>
                    {storeItems.map((item) => (
                      <ListItemButton 
                        key={item.name} 
                        component={Link} 
                        href={item.path} 
                        sx={{ pl: 4 }} 
                        onClick={handleCloseNavMenu}
                      >
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>

                <MenuItem component={Link} href="/carrinho" onClick={handleCloseNavMenu}>
                  Carrinho
                </MenuItem>
              </Menu>
            </Box>

            {/* LOGO MOBILE */}
            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <AdbIcon sx={{ mr: 1 }} /> LOGO
            </Typography>

            {/* MENU DESKTOP */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}>
              <Button component={Link} href="/" sx={{ my: 2, color: "white" }}>
                Home
              </Button>

              <Button
                sx={{ my: 2, color: "white" }}
                onClick={handleOpenStoreMenu}
                endIcon={<ExpandMore />}
              >
                Store
              </Button>
              
              <Menu
                anchorEl={anchorElStore}
                open={Boolean(anchorElStore)}
                onClose={handleCloseStoreMenu}
                {...menuProps}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                {storeItems.map((item) => (
                  <MenuItem 
                    key={item.name} 
                    component={Link} 
                    href={item.path} 
                    onClick={handleCloseStoreMenu}
                    sx={{ minWidth: 160 }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>

              <Button component={Link} href="/carrinho" sx={{ my: 2, color: "white" }}>
                Carrinho
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Espaçador para o AppBar Fixed */}
      <Toolbar />
    </>
  );
}

export default ResponsiveAppBar;