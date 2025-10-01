"use server";

import { createSession, deleteSession } from "@/lib/auth/session";
import type { AuthResult, LoginCredentials } from "@/lib/auth/types";

export async function login(
  credentials: LoginCredentials
): Promise<AuthResult> {
  // Validate credentials against environment variables
  const validUsername = process.env.AUTH_USERNAME;
  const validPassword = process.env.AUTH_PASSWORD;

  if (!validUsername || !validPassword) {
    return {
      success: false,
      error: "Authentication not configured properly",
    };
  }

  // Check credentials
  if (credentials.username !== validUsername) {
    return {
      success: false,
      error: "Invalid Username",
    };
  }
  if (credentials.password !== validPassword) {
    return {
      success: false,
      error: "Invalid Password",
    };
  }

  // Create session
  await createSession(credentials.username, credentials.username);

  return { success: true };
}

export async function logout() {
  await deleteSession();
}
