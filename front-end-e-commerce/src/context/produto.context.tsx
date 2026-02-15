"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";

import { Produto } from "../types/interfaces";

type ProdutoContextType = {
  produtos: Produto[];
  groupedProdutos: Record<string, Produto[]>;
};

const ProdutoContext = createContext({} as ProdutoContextType);

export function ProdutoProvider({
  children,
  initialProdutos,
}: {
  children: ReactNode;
  initialProdutos: Produto[];
}) {
  const [produtos] = useState(initialProdutos);

  const groupedProdutos = useMemo(() => {
    return produtos.reduce<Record<string, Produto[]>>((acc, produto) => {
      const categoryName = produto.category.name;

      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }

      acc[categoryName].push(produto);

      return acc;
    }, {});
  }, [produtos]);

  return (
    <ProdutoContext.Provider value={{ produtos, groupedProdutos }}>
      {children}
    </ProdutoContext.Provider>
  );
}

export function useProdutos() {
  return useContext(ProdutoContext);
}
