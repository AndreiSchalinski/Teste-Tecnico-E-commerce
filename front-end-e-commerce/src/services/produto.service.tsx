import axios from "axios";

export const ProdutoService = {
  async getAll() {
    const { data } = await axios.get(
      "https://api.escuelajs.co/api/v1/products" //incluir outras urls externas também
    );
    return data;
  },
};
