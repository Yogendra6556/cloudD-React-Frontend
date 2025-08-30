import api from "@/utils/api/axios";
import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  // Step 1: Start GitHub login
  const loginWithGithub = async () => {
    try {
      const res = await api.get("/auth/github/login/");
      // backend returns GitHub authorize URL
      window.location.href = res.data.auth_url; // redirect browser
    } catch (err) {
      console.error("GitHub login error:", err);
    }
  };

  // Step 2: Handle callback (after GitHub redirects to frontend with ?code=xxx)
  const handleGithubCallback = async (code) => {
    try {
      const res = await api.post("/auth/github/callback/", { code });
      localStorage.setItem("token", res.data.token); // save JWT
      setUser(res.data.user);
    } catch (err) {
      console.error("GitHub callback error:", err);
    }
  };

  return { user, loginWithGithub, handleGithubCallback };
};

export default useAuth;
