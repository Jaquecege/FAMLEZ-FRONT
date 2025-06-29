import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

// Registro
export const registrarUsuario = (email, password) =>
  API.post("/register", { email, password });

// Login
export const iniciarSesion = (email, password) =>
  API.post("/login", { email, password });
