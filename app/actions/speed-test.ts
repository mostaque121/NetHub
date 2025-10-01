"use server";

import { checkAccess } from "@/lib/check-admin";
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

export async function deleteOldSpeedTests() {
  await checkAccess();
  // Step 1: Get the latest 20 entries
  const latestTests = await prisma.speedTest.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
    select: { id: true }, // only need IDs
  });

  const latestIds = latestTests.map((test) => test.id);

  // Step 2: Delete everything not in the latestIds
  const deleted = await prisma.speedTest.deleteMany({
    where: {
      id: { notIn: latestIds },
    },
  });

  return deleted;
}

export async function getNetworkInfo(clientIp: string) {
  try {
    // Fetch info from ip-api using the client IP
    const res = await fetch(`http://ip-api.com/json/${clientIp}`);
    const data = await res.json();

    return {
      ip: data.query || clientIp,
      isp: data.org || "Unknown ISP",
      city: data.city || "Unknown",
      country: data.country || "Unknown",
      timezone: data.timezone || "Unknown",
    };
  } catch (error) {
    console.error(error);
    return {
      ip: "Failed to load",
      isp: "Failed to load",
      city: "Failed to load",
      country: "Failed to load",
      timezone: "Failed to load",
    };
  }
}
