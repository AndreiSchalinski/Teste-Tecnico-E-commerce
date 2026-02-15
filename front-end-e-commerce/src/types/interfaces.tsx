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

export interface Categoria {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface Produto {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Categoria;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

