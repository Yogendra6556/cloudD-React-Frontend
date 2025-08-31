import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuth = create(
  persist(
    (set) => ({
      isLogin: false,
      setLogin: (value) => set({ isLogin: value }),
    }),
    {
      name: "auth-storage", // name of item in storage
    }
  )
);

export default useAuth;
