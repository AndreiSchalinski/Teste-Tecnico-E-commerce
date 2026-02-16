"use client";

import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCarrinho } from "@/context/carrinho.context";

const storeItems = [
  { name: "Todas as categorias", path: "/produtos" },
  { name: "Roupas", path: "/produtos/roupas" },
  { name: "Eletrônicos", path: "/produtos/eletronicos" },
  { name: "Mobília", path: "/produtos/mobilia" },
  { name: "Calçados", path: "/produtos/calcados" },
  { name: "Variados", path: "/produtos/variados" },
];

function ResponsiveAppBar() {
  const { produtos } = useCarrinho();
  
  const totalItens = produtos?.length || 0;

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

  return (
    <>
      <AppBar position="fixed" elevation={2} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <AdbIcon sx={{ mr: 1 }} /> MINHA LOJA
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                disableScrollLock
              >
                <MenuItem component={Link} href="/" onClick={handleCloseNavMenu}>Home</MenuItem>
                
                <MenuItem onClick={() => setOpenMobileStore(!openMobileStore)}>
                  <ListItemText primary="Categorias" />
                  {openMobileStore ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                
                <Collapse in={openMobileStore} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.04)' }}>
                    {storeItems.map((item) => (
                      <ListItemButton key={item.name} component={Link} href={item.path} onClick={handleCloseNavMenu} sx={{ pl: 4 }}>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>

                <MenuItem component={Link} href="/carrinho" onClick={handleCloseNavMenu}>Carrinho</MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOJA
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}>
              <Button component={Link} href="/" sx={{ my: 2, color: "white", textTransform: 'none' }}>
                Home
              </Button>

              <Button
                sx={{ my: 2, color: "white", textTransform: 'none' }}
                onClick={handleOpenStoreMenu}
                endIcon={<ExpandMore />}
              >
                Store
              </Button>
              
              <Menu
                anchorEl={anchorElStore}
                open={Boolean(anchorElStore)}
                onClose={handleCloseStoreMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                disableScrollLock
              >
                {storeItems.map((item) => (
                  <MenuItem key={item.name} component={Link} href={item.path} onClick={handleCloseStoreMenu}>
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton 
                component={Link} 
                href="/carrinho" 
                color="inherit"
                sx={{ ml: 2 }}
              >
                <Badge 
                  badgeContent={totalItens} 
                  color="secondary"
                  showZero={false}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />
    </>
  );
}

export default ResponsiveAppBar;