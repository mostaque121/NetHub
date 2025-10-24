"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Gauge, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthNavBtn } from "../navbar/auth-nav";
import { ThemeToggle } from "./theme-toggle";
import UserSection from "./user-section";

const navItems = [
  {
    name: "BDIX Servers",
    href: "/servers",
    icon: Globe,
    description: "Local network resources",
  },

  {
    name: "Speed Test",
    href: "/speedtest",
    icon: Gauge,
    description: "Network diagnostics",
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-cyan">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xl font-bold ">MyNetHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={cn(
                        "flex items-center cursor-pointer space-x-2 px-4 py-2 transition-all duration-200",
                        isActive && "glow-cyan"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Button>
                  </Link>
                );
              })}

              <UserSection />
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="flex container mx-auto gap-4 justify-end px-4 sm:px-6 lg:px-8 py-1.5 bg-muted md:hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <button
                className={cn(
                  "text-sm transition-all cursor-pointer duration-200",
                  isActive && "border-b-[1.5px] border-primary text-primary"
                )}
              >
                <span>{item.name}</span>
              </button>
            </Link>
          );
        })}

        <AuthNavBtn isActive={pathname === "/admin-login"} />
      </div>
    </nav>
  );
}
