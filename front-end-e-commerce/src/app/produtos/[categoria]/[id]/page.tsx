"use client";

import { useProdutos } from "../../../../context/produto.context";
import { useParams, notFound } from "next/navigation";

export default function ProdutoDetalhePage() {
  const { categoria, id } = useParams();
  const { produtos } = useProdutos();

  const produto = produtos.find(
    (p) => p.id === Number(id)
  );

  if (!produto) {
    notFound();
  }

  return (
    <div>
      <h1>{produto.title}</h1>
      <p>{produto.description}</p>
      <strong>R$ {produto.price}</strong>

      <br />
      <a href={`/produtos/${categoria}`}>← Voltar</a>
    </div>
  );
}
