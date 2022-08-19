import axios from "axios";

const api = axios.create({
  baseURL: "https://62fe86d641165d66bfc1d59b.mockapi.io/",
});

export default api;
