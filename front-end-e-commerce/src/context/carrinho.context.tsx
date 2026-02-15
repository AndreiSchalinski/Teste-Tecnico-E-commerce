"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface ProdutoCarrinho {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

type CarrinhoContextType = {
  produtos: ProdutoCarrinho[];
  adicionarProduto: (produto: Omit<ProdutoCarrinho, "quantity">) => void;
  removerProduto: (id: string) => void;
  aumentarQuantidade: (id: string) => void;
  diminuirQuantidade: (id: string) => void;
  limparCarrinho: () => void;
  total: number;
};

const CarrinhoContext = createContext({} as CarrinhoContextType);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [produtos, setProdutos] = useState<ProdutoCarrinho[]>([]);

  const adicionarProduto = (produto: Omit<ProdutoCarrinho, "quantity">) => {
    setProdutos((prev) => {
      const produtoExistente = prev.find((p) => p.id === produto.id);

      if (produtoExistente) {
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prev, { ...produto, quantity: 1 }];
    });
  };

  const removerProduto = (id: string) => {
    setProdutos((prev) => prev.filter((p) => p.id !== id));
  };

  const aumentarQuantidade = (id: string) => {
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)),
    );
  };

  const diminuirQuantidade = (id: string) => {
    setProdutos((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0),
    );
  };

  const limparCarrinho = () => {
    setProdutos([]);
  };

  const total = produtos.reduce(
    (acc, produto) => acc + produto.price * produto.quantity,
    0,
  );

  return (
    <CarrinhoContext.Provider
      value={{
        produtos,
        adicionarProduto,
        removerProduto,
        aumentarQuantidade,
        diminuirQuantidade,
        limparCarrinho,
        total,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
