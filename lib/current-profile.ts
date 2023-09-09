import React from "react";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/client";

export async function currentProfile() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const profile = await prisma.profile.findUnique({
    where: {
      userId,
    },
  });
  return profile;
}
