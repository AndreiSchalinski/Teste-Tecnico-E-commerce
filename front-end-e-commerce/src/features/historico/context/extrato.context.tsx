"use client";

import {
  Extrato,
  HistoricoContextData,
  ProdutoCarrinho,
} from "@/types/interfaces";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import ConfirmModal from "@/components/Modal";

const HistoricoContext = createContext<HistoricoContextData | undefined>(
  undefined,
);

export function HistoricoProvider({ children }: { children: ReactNode }) {
  const [extratos, setExtratos] = useState<Extrato[]>([]);
  const [carregado, setCarregado] = useState(false);
  const [openLimpar, setOpenLimpar] = useState(false);
  const [openFinalizar, setOpenFinalizar] = useState(false);

  const produtosPendentes = useRef<ProdutoCarrinho[]>([]);
  const onConfirmarCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    const historicoSalvo = localStorage.getItem("@App:historico");
    if (historicoSalvo) {
      try {
        setExtratos(JSON.parse(historicoSalvo));
      } catch (error) {
        console.error("Erro ao parsear histórico do LocalStorage", error);
      }
    }
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (carregado) {
      localStorage.setItem("@App:historico", JSON.stringify(extratos));
    }
  }, [extratos, carregado]);

  const finalizarCompra = useCallback(
    (produtos: ProdutoCarrinho[], onConfirmar: () => void) => {
      if (!produtos || produtos.length === 0) return;
      produtosPendentes.current = produtos;
      onConfirmarCallback.current = onConfirmar;
      setOpenFinalizar(true);
    },
    [],
  );

  const handleConfirmarCompra = useCallback(() => {
    const produtos = produtosPendentes.current;
    if (!produtos.length) return;

    const total = produtos.reduce(
      (acc, produto) => acc + produto.price * produto.quantity,
      0,
    );

    const novoExtrato: Extrato = {
      produtoCarrinho: [...produtos],
      total: parseFloat(total.toFixed(2)),
      dataCompra: new Date().toISOString(),
    };

    setExtratos((prev) => [novoExtrato, ...prev]);
    onConfirmarCallback.current?.();
    produtosPendentes.current = [];
    onConfirmarCallback.current = null;
  }, []);

  const handleCancelarCompra = useCallback(() => {
    produtosPendentes.current = [];
    onConfirmarCallback.current = null;
    setOpenFinalizar(false);
  }, []);

  const limparHistorico = useCallback(() => {
    setOpenLimpar(true);
  }, []);

  const handleConfirmarLimpeza = useCallback(() => {
    setExtratos([]);
  }, []);

  return (
    <HistoricoContext.Provider
      value={{ extratos, finalizarCompra, limparHistorico }}
    >
      {children}

      <ConfirmModal
        open={openFinalizar}
        onClose={handleCancelarCompra}
        onConfirm={handleConfirmarCompra}
        titulo="Confirmar compra?"
        descricao="Seus itens serão registrados no histórico de compras."
        labelConfirmar="Finalizar"
        labelCancelar="Voltar"
      />

      <ConfirmModal
        open={openLimpar}
        onClose={() => setOpenLimpar(false)}
        onConfirm={handleConfirmarLimpeza}
        titulo="Limpar histórico?"
        descricao="Todo o seu histórico de compras será apagado permanentemente. Esta ação não pode ser desfeita."
        labelConfirmar="Apagar tudo"
        labelCancelar="Cancelar"
        perigo
      />
    </HistoricoContext.Provider>
  );
}

export function useHistorico(): HistoricoContextData {
  const context = useContext(HistoricoContext);

  if (!context) {
    throw new Error(
      "useHistorico deve ser usado dentro de <HistoricoProvider>",
    );
  }

  return context;
}