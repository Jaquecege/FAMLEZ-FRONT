import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

export const registrarUsuario = (email, password) =>
  API.post("/register", { username: email, password });

export const iniciarSesion = (email, password) =>
  API.post("/login", { username: email, password });
