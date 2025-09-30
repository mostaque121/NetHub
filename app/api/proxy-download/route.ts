// app/api/proxy-download/route.ts
import { NextRequest, NextResponse } from "next/server";

const servers: Record<string, string> = {
  local: "http://localhost:3000/test-files/test20MB.bin",
  "hetzner-ash": "https://ash-speed.hetzner.com/100MB.bin",
  "hetzner-fsn": "https://fsn1-speed.hetzner.com/100MB.bin",
  "hetzner-sin": "https://sin-speed.hetzner.com/100MB.bin",
};

export async function GET(req: NextRequest) {
  const server = req.nextUrl.searchParams.get("server") || "local";
  const url = servers[server] || servers.local;

  const res = await fetch(url);
  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch file" },
      { status: 500 }
    );
  }

  return new NextResponse(res.body, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
