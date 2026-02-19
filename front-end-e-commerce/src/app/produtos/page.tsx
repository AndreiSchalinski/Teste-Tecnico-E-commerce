import ProdutosList from "@/features/produtos/components/ProdutosList";
import ContainerContent from "../../components/layout/ContainerContent";

export default function TodosProdutosPage() {
  return (
    <ContainerContent titulo="Todas as Categorias" subtitlo="Catálogo Completo">
      <ProdutosList />
    </ContainerContent>
  );
}
