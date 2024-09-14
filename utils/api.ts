import axios from "axios";

const URL = "https://66acf2fdf009b9d5c733eeea.mockapi.io/api/v1";

const api = axios.create({
  baseURL: URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
