"use client";

import { useProdutos } from "@/features/produtos/context/produto.context";
import { useParams, notFound } from "next/navigation";
import ProdutoDetailing from "@/features/produtos/components/ProdutoDetail";

export default function ProdutoDetalhePage() {
  const { id } = useParams();
  const { produtos } = useProdutos();

  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    notFound();
  }

  return (
    <>
      <ProdutoDetailing produto={produto}></ProdutoDetailing>
    </>
  );
}
