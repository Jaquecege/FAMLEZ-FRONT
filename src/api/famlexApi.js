import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

// Registro con FormData y campos correctos
export const registrarUsuario = (email, password) => {
  const form = new FormData();
  form.append("username", email);  // <-- clave correcta que espera FastAPI
  form.append("password", password);
  return API.post("/register", form, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};

// Login con FormData (usado por OAuth2PasswordRequestForm)
export const iniciarSesion = (email, password) => {
  const form = new FormData();
  form.append("username", email);  // <-- clave correcta
  form.append("password", password);
  return API.post("/login", form, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};
