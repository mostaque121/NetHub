import { verifySession } from "@/lib/auth/session";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await verifySession();

  return NextResponse.json({
    isAuth: session.isAuth,
    username: session.username,
  });
}
