import { ProdutoProvider } from "@/features/produtos/context/produto.context";
import { ProdutoService } from "../../services/produto.service";

export default async function ProdutosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const produtos = await ProdutoService.getAll();

  return (
    <ProdutoProvider initialProdutos={produtos}>
      {children}
    </ProdutoProvider>
  );
}
