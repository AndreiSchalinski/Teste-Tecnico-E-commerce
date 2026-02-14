export interface PageCategoriaProps {
  params: Promise<{
    categoria: string;
  }>;
}

export interface PageDetalheProdutoProps {
  params: Promise<{
    categoria: string;
    id: string;
  }>;
}

export interface PageProdutosCategoriasProps {
  params: Promise<{
    categoria: string;
  }>;
}
