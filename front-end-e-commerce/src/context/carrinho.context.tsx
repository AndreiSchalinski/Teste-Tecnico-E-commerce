"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Produto = {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

type CarrinhoContextType = {
  produtos: Produto[];
  adicionarProduto: (produto: Omit<Produto, "quantity">) => void;
  removerProduto: (id: number) => void;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  limparCarrinho: () => void;
  total: number;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
      setProdutos(JSON.parse(carrinhoSalvo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(produtos));
  }, [produtos]);

  function adicionarProduto(produto: Omit<Produto, "quantity">) {
    setProdutos((prev) => {
      const existente = prev.find((p) => p.id === produto.id);

      if (existente) {
        return prev.map((p) =>
          p.id === produto.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...produto, quantity: 1 }];
    });
  }

  function removerProduto(id: number) {
    setProdutos((prev) => prev.filter((p) => p.id !== id));
  }

  function aumentarQuantidade(id: number) {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  function diminuirQuantidade(id: number) {
    setProdutos((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  }

  function limparCarrinho() {
    setProdutos([]);
  }

  const total = useMemo(() => {
    return produtos.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [produtos]);

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
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider");
  }
  return context;
}
