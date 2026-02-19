"use client";

import { Box, Grid, Skeleton } from "@mui/material";

import ProdutoCard from "./ProdutoCard";

import { ProdutosGridProps } from "@/types/interfaces";

export default function ProdutosGrid({ produtos = [] }: ProdutosGridProps) {
  if (!produtos.length) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
            <Skeleton
              variant="rectangular"
              height={380}
              sx={{ borderRadius: 4 }}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, pb: 8, width: "90%", margin: "auto" }}>
      <Grid container spacing={3}>
        {produtos.map((produto) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={produto.id}
            sx={{ display: "flex" }}
          >
            <ProdutoCard produto={produto} key={produto.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
