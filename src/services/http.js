import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://tictactareas-production.up.railway.app/tictactareas/api/v1",
  withCredentials: false,
});

// Inyecta el token en cada request
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Normaliza errores
http.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Error de red";
    return Promise.reject(message);
  }
);

export default http;
