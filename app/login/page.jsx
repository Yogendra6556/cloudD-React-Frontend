import { Ripple } from "@/components/magicui/ripple";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
          Cloudie
        </p>
        <Ripple />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
