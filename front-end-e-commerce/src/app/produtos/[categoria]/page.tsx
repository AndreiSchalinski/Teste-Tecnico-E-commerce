import { PageCategoriaProps } from "@/types/interfaces";
import { notFound } from "next/navigation";

async function getProdutosByCategoria(categoria: string) {
  const categoriasValidas = ["roupas", "eletronicos", "mobilia", "variados"];

  if (!categoriasValidas.includes(categoria)) {
    return null;
  }

  return [
    { id: "1", nome: "Produto A", preco: 100 },
    { id: "2", nome: "Produto B", preco: 200 },
  ];
}

export default async function CategoriaPage({ params }: PageCategoriaProps) {
  const { categoria } = await params;

  const produtos = await getProdutosByCategoria(categoria);

  if (!produtos) {
    notFound();
  }

  return (
    <div>
      <h1>Categoria: {categoria}</h1>

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <a href={`/produtos/${categoria}/${produto.id}`}>
              {produto.nome} - R$ {produto.preco}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
