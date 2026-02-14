export interface PageCategoriaProps {
  params: {
    categoria: string;
  };
}

export interface PageDetalheProdutoProps {
  params: Promise<{
    categoria: string;
    id: string;
  }>;
}