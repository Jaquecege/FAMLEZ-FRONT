import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

// Registro
export const registrarUsuario = (email, password) => {
  const form = new FormData();
  form.append("username", email);
  form.append("password", password);
  return API.post("/register", form);
};

// Login
export const iniciarSesion = (email, password) => {
  const form = new FormData();
  form.append("username", email);
  form.append("password", password);
  return API.post("/login", form);
};
