import { Navigation } from "@/components/navbar/navigation";
import { SessionProvider } from "@/contexts/session-provider";
import { ThemeProvider } from "@/contexts/theme-context";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <ThemeProvider>
            <Suspense fallback={null}>
              <div className="bg-background">
                <Navigation />
                {children}
              </div>
              <Toaster />
            </Suspense>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
