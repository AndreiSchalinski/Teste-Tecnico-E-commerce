import axios from "axios";

const url = "/"

export const api = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});
