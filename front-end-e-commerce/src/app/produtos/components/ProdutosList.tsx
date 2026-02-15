"use client";

import { useProdutos } from "../../../context/produto.context";
import ProdCarousel from "./ProdutoCarousel";

export default function ProdutosList() {
  const { groupedProdutos } = useProdutos();

  return (
    <div>
      {Object.entries(groupedProdutos).map(([categoria, produtos]) => (
        <section style={{width:'80%', margin:'auto'}} key={categoria}>
          <h2>{categoria}</h2>
 
          <ProdCarousel produtos={produtos}></ProdCarousel>
        </section>
      ))}
    </div>
  );
}
