import axios from "axios";

const limitProdutos = 50;

export const ProdutoService = {
  async getAll() {
    const { data } = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=0&limit=${limitProdutos}` //incluir outras urls externas também
    );
    return data;
  },
};
