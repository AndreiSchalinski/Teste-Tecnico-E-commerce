"use client";

import { useProdutos } from "@/context/produto.context";

export default function ProdutosList() {
  const { produtos } = useProdutos();

  return (
    <div>
      
      <ul>
        {produtos.map((item:any) => (
          <li key={item.id} style={{margin:'40px 0'}}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
