"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function GithubCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { handleGithubCallback } = useAuth();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      handleGithubCallback(code).then(() => {
        router.push("/dashboard");
      });
    }
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">Logging you in with GitHub...</p>
    </div>
  );
}
