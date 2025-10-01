import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import "server-only";
import type { SessionPayload } from "./types";

const secretKey = process.env.JWT_SECRET;
const encodedKey = secretKey ? new TextEncoder().encode(secretKey) : null;

// Encrypt session data into a JWT token
export async function encrypt(payload: SessionPayload) {
  if (!encodedKey) {
    throw new Error("JWT_SECRET environment variable is not set");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new SignJWT(payload as any)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(encodedKey);
}

// Decrypt and verify JWT token
export async function decrypt(session: string | undefined = "") {
  if (!encodedKey) {
    console.error("JWT_SECRET environment variable is not set");
    return null;
  }

  if (!session) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

// Create a new session (server-side only)
export async function createSession(userId: string, username: string) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, username, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

// Delete session (logout)
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

// Verify session on server-side
export async function verifySession() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    return { isAuth: false, userId: null, username: null };
  }

  return { isAuth: true, userId: session.userId, username: session.username };
}
