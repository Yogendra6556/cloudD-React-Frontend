"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
  const isLogin = useAuth((state) => state.isLogin);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.replace("/login");
    }
  }, [isLogin, router]);

  if (!isLogin) return null;
  return children;
}
