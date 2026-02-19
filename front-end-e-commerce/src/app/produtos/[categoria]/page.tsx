"use client";

import { useProdutos } from "@/features/produtos/context/produto.context";
import { useParams, notFound } from "next/navigation";
import ProdutosGrid from "@/features/produtos/components/ProdutosGrid";
import ContainerContent from "../../../components/layout/ContainerContent";

const categoriaMap: Record<string, string> = {
  roupas: "clothes",
  eletronicos: "electronics",
  mobilia: "furniture",
  calcados: "shoes",
  variados: "miscellaneous",
};

const categoriaTitulo = (key: string): string => {
  const listCategorias: Record<string, string> = {
    roupas: "Roupas",
    eletronicos: "Eletrônicos",
    mobilia: "Mobílias",
    calcados: "Calçados",
    variados: "Variados",
  };

  return listCategorias[key] ?? "Categoria";
};

export default function CategoriaPage() {
  const { categoria } = useParams();
  const { produtos } = useProdutos();

  if (!categoria) notFound();

  const categoriaTraduzida = categoriaMap[categoria as string];

  if (!categoriaTraduzida) notFound();

  const produtosFiltrados = (produtos ?? []).filter(
    (produto) =>
      produto.category.slug === categoriaTraduzida &&
      ![53, 55, 56].includes(produto.id),
  );

  const tituloCategoria = (key: string) => {
    const nome = categoriaTitulo(key);
    return key === "variados" ? `Opções ${nome}` : `Opções de ${nome}`;
  };

  return (
    <ContainerContent
      titulo={tituloCategoria(categoria as string)}
      subtitlo="Catálogo Completo da categoria"
    >
      <section style={{ width: "90%", margin: "auto" }}>
        {produtosFiltrados.length === 0 ? (
          <p style={{ textAlign: "center" }}>Nenhum produto encontrado</p>
        ) : (
          <ProdutosGrid produtos={produtosFiltrados} />
        )}
      </section>
    </ContainerContent>
  );
}
