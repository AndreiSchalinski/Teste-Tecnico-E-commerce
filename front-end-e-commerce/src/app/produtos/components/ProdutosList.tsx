"use client"

import CarouselSwipper from "@/app/components/Carousel";
import { useProdutos } from "@/context/produto.context";

export default function ProdutosList() {
  const { produtosAgrupados } = useProdutos();

  return (
    <div>
      {Object.entries(produtosAgrupados).map(([categoria, produtos]) => (
        <section style={{ width: "80%", margin: "auto" }} key={categoria}>
          <h2>{categoria}</h2>
          <CarouselSwipper slides={produtos} />
        </section>
      ))}
    </div>
  );
}
