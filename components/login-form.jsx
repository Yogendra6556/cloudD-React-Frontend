"use client";

import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useAuth } from "@/hooks/useAuth";

export function LoginForm({ className, ...props }) {
  const { loginWithGithub } = useAuth();

  return (
    <form
      className={cn(
        "flex flex-col gap-8 items-center justify-center min-h-[60vh] bg-gradient-to-br from-background via-muted to-background rounded-xl shadow-lg p-8",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center justify-center rounded-full bg-muted p-4 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="56"
            height="56"
            className="text-foreground"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Sign in with GitHub
        </h1>
        <p className="text-muted-foreground text-base max-w-xs mx-auto">
          Use your GitHub account to access the platform and unlock all
          features.
        </p>
      </div>
      <div className="grid gap-6 w-full max-w-sm mx-auto">
        <InteractiveHoverButton
          className="w-full h-12 text-lg font-semibold shadow-md"
          type="button"
          onClick={() => {}}
        >
          <span className="flex items-center justify-center gap-2">
            Sign in with GitHub
          </span>
        </InteractiveHoverButton>
      </div>
    </form>
  );
}
