"use server";
import prisma from "@/lib/prisma";
import { revalidateTag, unstable_cache } from "next/cache";
import z from "zod";
import { linkType } from "../generated/prisma";
const serverSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(2, "Name must be more than 2 characters"),
  url: z
    .string()
    .nonempty("Url is required")
    .min(2, "Url must be more than 2 characters"),
  description: z.string().optional(),
  type: z.enum(linkType, "Invalid Type"),

  workingIn: z.array(z.string()).optional(),
});

type serverFormValues = z.infer<typeof serverSchema>;

export async function addServer(data: serverFormValues) {
  const parsed = serverSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false };
  }

  const parsedData = parsed.data;

  try {
    await prisma.serverLink.create({
      data: parsedData,
    });
    revalidateTag("all_servers");
    return { success: true };
  } catch (err) {
    console.error("Add Server error:", err);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}

export async function updateServer(id: string, data: serverFormValues) {
  const parsed = serverSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
    };
  }

  const newData = parsed.data;
  try {
    await prisma.serverLink.update({
      where: { id },
      data: newData,
    });
    revalidateTag("all_servers");
    return { success: true };
  } catch (error) {
    console.error("Update server failed:", error);
    return {
      error: "Failed to update server. Please try again.",
    };
  }
}

export async function deleteServer(id: string) {
  try {
    const serverToDelete = await prisma.serverLink.findUnique({
      where: { id },
    });

    if (!serverToDelete) {
      return {
        error: "Server not found.",
      };
    }

    await prisma.serverLink.delete({
      where: { id },
    });
    revalidateTag("all_servers");
    return { success: true };
  } catch (error) {
    console.error("Delete server failed:", error);
    return {
      error: "Failed to delete server. Please try again.",
    };
  }
}

export const getAllServers = unstable_cache(
  async () => {
    return prisma.serverLink.findMany({
      orderBy: {
        name: "asc",
      },
    });
  },
  ["all_servers"],
  {
    tags: ["all_servers"],
  }
);
