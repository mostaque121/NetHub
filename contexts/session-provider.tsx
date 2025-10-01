"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ClientSession {
  isAuth: boolean;
  username: string | null;
  isLoading: boolean;
}

interface SessionContextType extends ClientSession {
  refetch: () => Promise<void>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<ClientSession>({
    isAuth: false,
    username: null,
    isLoading: true,
  });

  const fetchSession = useCallback(async () => {
    setSession((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await fetch("/api/auth/session", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setSession({
          isAuth: data.isAuth,
          username: data.username,
          isLoading: false,
        });
      } else {
        setSession({ isAuth: false, username: null, isLoading: false });
      }
    } catch {
      setSession({ isAuth: false, username: null, isLoading: false });
    }
  }, []);

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  return (
    <SessionContext.Provider value={{ ...session, refetch: fetchSession }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used inside SessionProvider");
  return ctx;
}
