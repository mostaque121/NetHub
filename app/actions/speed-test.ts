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
