"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils"; // your cn function
import { Loader2, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface AuthNav {
  isActive: boolean;
}

export function AuthNavBtn({ isActive }: AuthNav) {
  const { data: session, isPending: isLoading } = authClient.useSession();
  const isAuth = Boolean(session?.user);

  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await authClient.signOut();
      setLoggingOut(false);
    } catch (error) {
      console.error("Logout failed:", error);
      setLoggingOut(false);
    }
  }

  if (isLoading) {
    // Loading state
    return (
      <>
        <Button className="hidden md:flex" variant="ghost" disabled>
          Loading...
        </Button>

        <button
          className={cn(
            "text-sm md:hidden transition-all cursor-pointer duration-200"
          )}
        >
          <span>Loading.</span>
        </button>
      </>
    );
  }

  if (isAuth) {
    // If logged in, show Logout button
    return (
      <>
        <Button
          variant="default"
          onClick={handleLogout}
          className="hidden md:flex items-center space-x-2 px-4 py-2 cursor-pointer transition-all duration-200"
        >
          {loggingOut ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logout
            </>
          ) : (
            <>
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </>
          )}
        </Button>

        <button
          className={cn(
            "text-sm md:hidden transition-all cursor-pointer duration-200"
          )}
          onClick={handleLogout}
        >
          <span>{loggingOut ? "loggingOut" : "Log Out"}</span>
        </button>
      </>
    );
  }

  // If not logged in, show normal nav button
  return (
    <>
      <Link className="hidden md:flex" href="/admin-login" prefetch={false}>
        <Button
          variant={isActive ? "default" : "ghost"}
          className={cn(
            "flex items-center cursor-pointer space-x-2 px-4 py-2 transition-all duration-200",
            isActive && "glow-cyan"
          )}
        >
          <LogIn className="w-4 h-4" />
          <span>Admin Login</span>
        </Button>
      </Link>

      <Link href="/admin-login" className="md:hidden" prefetch={false}>
        <button
          className={cn(
            "text-sm transition-all cursor-pointer duration-200",
            isActive && "border-b-[1.5px] border-primary text-primary"
          )}
        >
          <span>Admin Login</span>
        </button>
      </Link>
    </>
  );
}
