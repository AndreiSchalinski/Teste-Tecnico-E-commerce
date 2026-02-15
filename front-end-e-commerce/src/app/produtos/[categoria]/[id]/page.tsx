import { PageDetalheProdutoProps } from "../../../../types/interfaces";
import { notFound } from "next/navigation";

async function getProdutoById(id: string) {
  const produtosMock = [
    { id: "1", nome: "Produto A", descricao: "Descrição A", preco: 100 },
    { id: "2", nome: "Produto B", descricao: "Descrição B", preco: 200 },
  ];

  const produto = produtosMock.find((p) => p.id === id);

  if (!produto) return null;

  return produto;
}

export default async function ProdutoDetalhePage({ params }: PageDetalheProdutoProps) {
  const { categoria, id } = await params;

  const produto = await getProdutoById(id);

  if (!produto) {
    notFound();
  }

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <strong>R$ {produto.preco}</strong>

      <br />
      <a href={`/produtos/${categoria}`}>← Voltar</a>
    </div>
  );
}
