import ProdutosList from "./components/ProdutosList";

export default function TodosProdutosPage() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "40px 0" }}>
        Todas as categorias
      </h1>
      <ProdutosList />
    </>
  );
}
