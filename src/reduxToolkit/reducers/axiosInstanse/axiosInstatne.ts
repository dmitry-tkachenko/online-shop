import axios from "axios";

export const instanse = axios.create({
  headers: {
    "content-type": "application/json",
  },
});

instanse.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers = {
      ...config.headers,
      "Authorization": `Bearer ${token}`,
    };
  };
  
  return config;
});

