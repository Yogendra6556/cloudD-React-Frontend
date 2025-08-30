import axios from "axios";
import { toast } from "sonner";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// Create Axios instance
const api = axios.create({
  baseURL,
});

// Attach access token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for auto-refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Only retry once
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        try {
          // Call your backend refresh endpoint
          const res = await axios.post(`${baseURL}/api/auth/token/refresh/`, {
            refresh: refreshToken,
          });

          const newAccessToken = res.data.access;
          localStorage.setItem("access_token", newAccessToken);

          // Update the Authorization header and retry the original request
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        } catch (refreshError) {
          console.error("Refresh token failed", refreshError);
          // Optional: logout user
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          toast.error("Session expired. Please login again.");
        }
      } else {
        toast.error("Session expired. Please login again.");
      }
    }

    // Handle other errors
    toast.error(
      error?.response?.data?.detail ||
        error?.response?.data?.message ||
        error?.message ||
        "An error occurred",
      {
        position: "bottom-right",
      }
    );

    return Promise.reject(error);
  }
);

export default api;
