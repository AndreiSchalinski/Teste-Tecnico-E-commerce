import { api } from "./api";

export const ProdutoService = {
  async getAllProdutos(): Promise<any[]> {
    const { data } = await api.get("/produtos");
    return data;
  },
};
