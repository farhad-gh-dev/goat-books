import { getToken } from "@/utils/storage";
import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      error.config.url !== "/auth/sign-in"
    ) {
      window.location.href = "/auth/sing-in";
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log(token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
