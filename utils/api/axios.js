import axios from "axios";
import { toast } from "sonner";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(
      error?.response?.data?.message || error?.message || "An error occurred",
      {
        position: "bottom-right",
      }
    );
    return Promise.reject(error);
  }
);

export default api;
