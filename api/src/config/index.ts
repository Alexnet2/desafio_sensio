import axios from "axios";
export const api_receita = axios.create({
  baseURL: "https://www.receitaws.com.br/v1/cnpj/",
});
