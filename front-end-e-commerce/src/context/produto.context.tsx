"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ProdutoContextType = {
  produtos: any[]; //montar a interface ainda
};

const ProdutoContext = createContext({} as ProdutoContextType);

export function ProdutoProvider({
  children,
  initialProdutos,
}: {
  children: ReactNode;
  initialProdutos: any[];
}) {
  const [produtos] = useState(initialProdutos);

  return (
    <ProdutoContext.Provider value={{ produtos }}>
      {children}
    </ProdutoContext.Provider>
  );
}

export function useProdutos() {
  return useContext(ProdutoContext);
}
