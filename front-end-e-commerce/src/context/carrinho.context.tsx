"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface Produto {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CarrinhoContextData {
  produtos: Produto[];
  adicionarProduto: (produto: Omit<Produto, "quantity">) => void;
  removerProduto: (id: number) => void;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  total: number;
}

const CarrinhoContext = createContext<CarrinhoContextData>({} as CarrinhoContextData);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success" as AlertColor,
  });

  const showMessage = (msg: string, sev: AlertColor = "success") => {
    setToast({ open: true, message: msg, severity: sev });
  };

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  const adicionarProduto = (novoProduto: Omit<Produto, "quantity">) => {
    setProdutos((prev) => {
      const existe = prev.find((p) => p.id === novoProduto.id);
      if (existe) {
        showMessage(`Quantidade de ${novoProduto.name} atualizada!`, "info");
        return prev.map((p) =>
          p.id === novoProduto.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      showMessage(`${novoProduto.name} adicionado ao carrinho!`, "success");
      return [...prev, { ...novoProduto, quantity: 1 }];
    });
  };

  const removerProduto = (id: number) => {
    const produto = produtos.find(p => p.id === id);
    setProdutos((prev) => prev.filter((p) => p.id !== id));
    showMessage(`${produto?.name || "Produto"} removido.`, "error");
  };

  const aumentarQuantidade = (id: number) => {
    
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );

    const produto = produtos.find((p) => p.id === id)

    showMessage(`Quantidade de ${produto?.name} para (${produto?.quantity})`, "info");
  };

  const diminuirQuantidade = (id: number) => {
    setProdutos((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const novaQtde = Math.max(1, p.quantity - 1);
          if (p.quantity > 1) showMessage("Quantidade diminuída", "info");
          return { ...p, quantity: novaQtde };
        }
        return p;
      })
    );
  };

  const total = produtos.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <CarrinhoContext.Provider
      value={{
        produtos,
        adicionarProduto,
        removerProduto,
        aumentarQuantidade,
        diminuirQuantidade,
        total,
      }}
    >
      {children}

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert 
          onClose={handleCloseToast} 
          severity={toast.severity} 
          variant="filled" 
          sx={{ width: "100%", boxShadow: 3 }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);