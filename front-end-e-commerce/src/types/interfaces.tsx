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

export interface ProdutosGridProps {
  produtos: Produto[];
}

export interface ProdutoCardProps {
  produto: Produto;
}

export interface DetailProps {
  produto: Produto;
}

export interface Categoria {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

type ProdutoBase = {
  id: number;
  slug: string;
  price: number;
  description: string;
  category: Categoria;
  images?: string[];
  creationAt: string;
  updatedAt: string;
  quantity: number;
};

export type Produto =
  | (ProdutoBase & { name: string; title?: never })
  | (ProdutoBase & { title: string; name?: never });

export interface ProdutoCarrinho {
  id: number;
  title?: string;
  price: number;
  image: string;
  category: Categoria;
  quantity: number;
}

export interface Extrato {
  produtoCarrinho: ProdutoCarrinho[];
  total: number;
  dataCompra: string;
}

export interface HistoricoContextData {
  extratos: Extrato[];
  finalizarCompra: (produtos: ProdutoCarrinho[], onConfirmar: () => void) => void;
  limparHistorico: () => void;
}
