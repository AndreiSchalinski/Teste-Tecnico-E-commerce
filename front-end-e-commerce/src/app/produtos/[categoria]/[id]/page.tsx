"use client";

import { useProdutos } from "../../../../context/produto.context";
import { useParams, notFound } from "next/navigation";
import ProdutoDetailing from "../../components/ProdutoDetail";

export default function ProdutoDetalhePage() {
  const { categoria, id } = useParams();
  const { produtos } = useProdutos();

  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    notFound();
  }

  return (
    <ProdutoDetailing produto={produto}></ProdutoDetailing>
  );
}
