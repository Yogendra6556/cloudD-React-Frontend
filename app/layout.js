"use client";
import { Geist, Geist_Mono } from "next/font/google";
import AppHeader from "@/components/ui/app-header";
import "./globals.css";
import "devicon/devicon.min.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background overflow-hidden`}
        style={{ minHeight: "100vh", height: "100vh" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {!isLoginPage && <AppHeader />}
          {!isLoginPage ? (
            <main
              style={{
                height: "calc(100vh - 4rem)",
                minHeight: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                padding: "2px",
              }}
            >
              {children}
            </main>
          ) : (
            children
          )}
          {!isLoginPage && <Toaster />}
        </ThemeProvider>
      </body>
    </html>
  );
}
