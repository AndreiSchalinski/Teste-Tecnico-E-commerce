"use client";

import { createContext, useContext, useState, ReactNode, useCallback, useRef } from "react";
import { AlertColor } from "@mui/material";
import FeedbackToast from "@/components/layout/Snackbar";
import ConfirmModal from "@/components/Modal";
import { Produto, ProdutoCarrinho } from "@/types/interfaces";

interface CarrinhoContextData {
  produtos: ProdutoCarrinho[];
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: number) => void;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  limparCarrinho: () => void;
  total: number;
}

const CarrinhoContext = createContext<CarrinhoContextData>(
  {} as CarrinhoContextData,
);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useState<ProdutoCarrinho[]>([]);
  const [openRemover, setOpenRemover] = useState(false);

  const produtoPendenteId = useRef<number | null>(null);
  const produtoPendenteNome = useRef<string>("");

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

  const adicionarProduto = (produto: Produto) => {
    setProdutos((prev) => {
      const existe = prev.find((p) => p.id === produto.id);

      if (existe) {
        showMessage(
          `Quantidade de "${produto.title ? produto.title : produto.name || "Produto"}" foi atualizada!`,
          "info",
        );
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      showMessage(
        `"${produto.title ? produto.title : produto.name || "Produto"}" adicionado no carrinho.`,
        "success",
      );

      return [
        ...prev,
        {
          id: produto.id,
          title: produto.name ? produto.name : produto.title,
          price: produto.price,
          category: produto.category,
          image: produto.images?.[0] ?? "",
          quantity: 1,
        },
      ];
    });
  };

  const removerProduto = useCallback((id: number) => {
    const produto = produtos.find((p) => p.id === id);
    produtoPendenteId.current = id;
    produtoPendenteNome.current = produto?.title || "Produto";
    setOpenRemover(true);
  }, [produtos]);

  const handleConfirmarRemocao = useCallback(() => {
    const id = produtoPendenteId.current;
    if (id === null) return;
    setProdutos((prev) => prev.filter((p) => p.id !== id));
    showMessage(`"${produtoPendenteNome.current}" removido.`, "error");
    produtoPendenteId.current = null;
    produtoPendenteNome.current = "";
  }, []);

  const handleCancelarRemocao = useCallback(() => {
    produtoPendenteId.current = null;
    produtoPendenteNome.current = "";
    setOpenRemover(false);
  }, []);

  const aumentarQuantidade = (id: number) => {
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)),
    );
    const produto = produtos.find((p) => p.id === id);
    const result = produto?.quantity ? produto?.quantity + 1 : 1;
    showMessage(
      `Quantidade de "${produto?.title}" aumentada para (${result})`,
      "info",
    );
  };

  const diminuirQuantidade = (id: number) => {
    setProdutos((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const novaQtde = Math.max(1, p.quantity - 1);
          if (p.quantity > 1)
            showMessage(
              `Quantidade de ${p.title} diminuída para (${novaQtde})`,
              "info",
            );
          return { ...p, quantity: novaQtde };
        }
        return p;
      }),
    );
  };

  const limparCarrinho = useCallback(() => {
    setProdutos([]);
  }, []);

  const total = produtos.reduce((acc, p) => acc + p.price * p.quantity, 0);

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

      <FeedbackToast
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        onClose={handleCloseToast}
      />

      <ConfirmModal
        open={openRemover}
        onClose={handleCancelarRemocao}
        onConfirm={handleConfirmarRemocao}
        titulo="Remover produto?"
        descricao={`"${produtoPendenteNome.current}" será removido do seu carrinho.`}
        labelConfirmar="Remover"
        labelCancelar="Cancelar"
        perigo
      />
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);