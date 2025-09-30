import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Read raw body
    const arrayBuffer = await req.arrayBuffer();
    console.log("Uploaded bytes:", arrayBuffer.byteLength);

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Upload test failed:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
