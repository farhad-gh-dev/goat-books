// import { storage } from "@/utils/storage";
import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

const redirectRoute = "/not-authorized";

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    // const originalConfig = err.config;

    if (err.response) {
      // Access Token is expired
      if (
        err.response.status === 401
        // &&
        // originalConfig.url !== "/users/refresh-token" &&
        // !originalConfig._retry
      ) {
        // originalConfig._retry = true;
        window.location.href = redirectRoute;

        // try {
        //   const res = await axios.post("/users/refresh-token");

        //   const { data: isTokenRefreshed } = res;

        //   if (!isTokenRefreshed) {
        //     storage.clearAuthStatus();
        //     window.location.href = redirectRoute;
        //     return;
        //   }

        //   return axios(originalConfig);
        // } catch (error) {
        //   storage.clearAuthStatus();
        //   // Wrap the redirection in a new promise
        //   return new Promise((resolve, reject) => {
        //     // Reject the promise before redirecting
        //     reject(err);

        //     // Redirect to the login page
        //     window.location.href = redirectRoute;
        //   });
        // }
      }
    }

    return Promise.reject(err);
  }
);

export default axios;
