import { Navigation } from "@/components/navbar/navigation";
import { ThemeProvider, useTheme } from "@/contexts/theme-context";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NetHub - Personal Utility Dashboard",
  description:
    "Personal utility dashboard for BDIX links, IPTV streaming, and network testing",
  generator: "v0.app",
};

// ========== Themed Background Component ==========
function ThemedBackground({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  const backgroundStyle =
    theme === "light"
      ? {
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(
              circle at top center,
              rgba(70, 130, 180, 0.4),
              transparent 70%
            )
          `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }
      : {
          background: `
            radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
        };

  return (
    <div className="min-h-screen w-full relative transition-colors duration-500">
      <div
        className="absolute inset-0 z-0 transition-all duration-700"
        style={backgroundStyle}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ========== Root Layout ==========
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Suspense fallback={null}>
            <ThemedBackground>
              <Navigation />
              {children}
            </ThemedBackground>
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
