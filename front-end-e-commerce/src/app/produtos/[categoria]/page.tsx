"use client";

import { useProdutos } from "../../../context/produto.context";
import { useParams, notFound } from "next/navigation";

const categoriaMap: Record<string, string> = {
  roupas: "clothes",
  eletronicos: "electronics",
  mobilia: "furniture",
  calcados: "shoes",
  variados: "miscellaneou",
};

export default function CategoriaPage() {
  const { categoria } = useParams();
  const { produtos } = useProdutos();

  if (!categoria) notFound();

  const categoriaTraduzida = categoriaMap[categoria as string];

  if (!categoriaTraduzida) notFound();

  const produtosFiltrados = (produtos ?? []).filter(
    (produto) => produto.category.slug === categoriaTraduzida,
  );

  return (
    <div>
      <h1>Categoria: {categoria}</h1>

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado</p>
      ) : (
        produtosFiltrados.map((produto) => (
          <div style={{ margin: "20px 0" }} key={produto.id}>
            {JSON.stringify(produto)}
          </div>
        ))
      )}
    </div>
  );
}
