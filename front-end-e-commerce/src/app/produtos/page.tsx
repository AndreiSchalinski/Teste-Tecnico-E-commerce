import { ProdutoProvider } from "../../context/produto.context";
import ProdutosList from "./components/ProdutosList";
import { ProdutoService } from "../../services/produto.service";

export default async function TodosProdutosPage() {

  const produtos = await ProdutoService.getAll();

  return (
    <>
      <ProdutoProvider initialProdutos={produtos}>
        <h1 style={{textAlign:'center', margin:"40px 0"}}>Todas as categorias</h1>
        <ProdutosList/>
      </ProdutoProvider>
    </>
  );
}
