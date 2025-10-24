"use client";

import { authClient } from "@/lib/auth-client";
import type { Session, User } from "better-auth";
import { useEffect, useState } from "react";

type SessionItem = {
  session: Session;
  user: User;
};

export default function Page() {
  const [sessions, setSessions] = useState<SessionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { data: session } = authClient.useSession();

  // 🧠 Fetch all multi sessions
  const fetchSessions = async () => {
    try {
      setLoading(true);
      const { data, error } =
        await authClient.multiSession.listDeviceSessions();
      if (error) {
        console.error("Error fetching sessions:", error);
      } else if (data) {
        console.log(data);
        setSessions(data);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  // 🔁 Switch active session
  const handleActive = async (token: string) => {
    try {
      const { error } = await authClient.multiSession.setActive({
        sessionToken: token,
      });
      if (error) {
        console.error("Error setting active session:", error);
      } else {
        alert("Switched to selected account ✅");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  // ❌ Remove a session
  const handleRemove = async (token: string) => {
    try {
      const { error } = await authClient.multiSession.revoke({
        sessionToken: token,
      });
      if (error) {
        console.error("Error revoking session:", error);
      } else {
        alert("Account removed successfully 🗑️");
        fetchSessions(); // refresh list
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4">🧩 Session Management</h1>
      <p>Current Session</p>
      <div>
        <p className="font-semibold">{session?.user.name || "Unnamed User"}</p>
        <p className="text-sm text-gray-500">{session?.user.email}</p>
      </div>

      {loading ? (
        <p>Loading sessions...</p>
      ) : sessions.length === 0 ? (
        <p>No active sessions found.</p>
      ) : (
        sessions.map(({ session, user }, idx) => (
          <div
            key={idx}
            className="border rounded-2xl p-4 shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{user.name || "Unnamed User"}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleActive(session.token)}
                className="bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600"
              >
                Switch
              </button>
              <button
                onClick={() => handleRemove(session.token)}
                className="bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
