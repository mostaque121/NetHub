"use server";

import prisma from "@/lib/prisma";
import { revalidateTag, unstable_cache } from "next/cache";

interface SaveSpeedTestInput {
  isp: string;
  city: string;
  country: string;
  download: number;
}

export async function saveSpeedTest(data: SaveSpeedTestInput) {
  try {
    await prisma.speedTest.create({
      data: {
        isp: data.isp,
        city: data.city,
        country: data.country,
        download: data.download,
      },
    });
    revalidateTag("latest_speed_test");
    return { success: true };
  } catch (error) {
    console.error("Failed to save speed test:", error);
    return { success: false };
  }
}

export const getLatestTest = unstable_cache(
  async () => {
    return prisma.speedTest.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    });
  },
  ["latest_speed_test"],
  {
    tags: ["latest_speed_test"],
  }
);

export async function getNetworkInfo() {
  try {
    // Fetch HTTP API server-side (no mixed content issues)
    const res = await fetch("http://ip-api.com/json");
    const data = await res.json();

    return {
      ip: data.query || "Unknown",
      isp: data.org || "Unknown ISP",
      city: data.city || "Unknown",
      country: data.country || "Unknown",
      timezone: data.timezone || "Unknown",
    };
  } catch (error) {
    console.error("Failed to fetch network info:", error);
    return {
      ip: "Failed to load",
      isp: "Failed to load",
      city: "Failed to load",
      country: "Failed to load",
      timezone: "Failed to load",
    };
  }
}
